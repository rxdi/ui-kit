import {
  Component,
  html,
  property,
  LitElement,
  async,
  css,
} from '@rxdi/lit-html';
import gql from 'graphql-tag';
import { BaseService } from './base.service';
import { Inject, Container } from '@rxdi/core';
import { map, tap, catchError } from 'rxjs/operators';
import {
  Observable,
  of,
  Subscription,
  ReplaySubject,
  BehaviorSubject,
  isObservable,
} from 'rxjs';
import {
  MutationOptions,
  QueryOptions,
  QueryBaseOptions,
  SubscriptionOptions,
} from 'apollo-client';
import { GraphOptions } from './types';
import { DEFAULTS } from './tokens';

import './fetch.component';
import './render.component';
import './monad.component';
import './lens.component';
import './options.component';
import './state.component';
import './style.component';

/**
 * @customElement rx-graph
 */
@Component({
  selector: 'rx-graph',
  template(this: GraphComponent) {
    return html`
      <style>
        ${this.options?.style}
      </style>
      ${async(
        this.result.pipe(
          map((state) => {
            return this.options.render
              ? this.options.render(
                  state,
                  (data) => this.result.next(data),
                  this.shadowRoot
                )
              : state;
          }),
          tap(() => (this.loading = false)),
          catchError((e) => {
            this.error = e;
            this.loading = false;
            return of('');
          })
        )
      )}
      ${this.loading
        ? html`
            ${typeof this.options.loading === 'function'
              ? this.options.loading()
              : Container.get(DEFAULTS).loading()}
          `
        : ''}
      ${this.error
        ? html`
            ${typeof this.options.error === 'function'
              ? this.options.error(this.error)
              : Container.get(DEFAULTS).error(this.error)}
          `
        : ''}
      <slot></slot>
    `;
  },
})
export class GraphComponent<T extends any = any> extends LitElement {
  @property({ type: Object })
  public options: GraphOptions<T> = {
    fetch: '',
    state: new BehaviorSubject({}) as any,
    render: (res) => html` ${res} `,
    loading: () => html``,
    error: () => html``,
    style: css``,
    settings: {} as QueryBaseOptions,
    defaultConfig: true,
  };

  @Inject(BaseService)
  private graphql: BaseService;

  @property({ type: Boolean })
  private loading = true;

  @property({ type: String })
  private error = '';

  private subscription: Subscription;
  private pubsubSubscription: Subscription;
  private result: ReplaySubject<any>;

  OnInit() {
    this.result = new ReplaySubject();
  }

  OnUpdateFirst() {
    let task: Observable<any>;
    if (this.options.state) {
      if (isObservable(this.options.state)) {
        task = this.options.state;
      } else {
        this.result.next(this.options.state);
      }
    } else {
      try {
        task = this.query();
      } catch (e) {
        this.result.error(e);
        this.result.complete();
      }
    }
    if (this.options.subscribe) {
      this.pubsubSubscription = this.graphql
        .subscribe({
          query: gql`
            ${this.options.subscribe}
          `,
        })
        .subscribe(
          (data) => this.result.next(data),
          (e) => this.result.error(e)
        );
    }
    if (!task) {
      return;
    }
    this.subscription = task.subscribe(
      (detail) => {
        this.result.next(detail);
        this.dispatchEvent(new CustomEvent('onData', { detail }));
      },
      (error) => {
        if (error.networkError) {
          error.message = `${JSON.stringify(
            error.networkError.result.errors
          )} ${error.message}`;
        }

        this.result.error(error);
        this.dispatchEvent(new CustomEvent('onError', { detail: error }));
      }
    );
    // const monad = this.getRootNode().host.getRootNode();
    // monad.append(this.shadowRoot)
    // const monad = this.getRootNode().host;

    // if (monad.parentElement) {
    //     monad.parentElement.prepend(this.shadowRoot)
    // }
  }

  OnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.pubsubSubscription) {
      this.pubsubSubscription.unsubscribe();
    }
    this.result.complete();
  }

  private query(): Observable<{ data: any }> {
    let fetch: any = this.options.fetch;
    this.options.settings = this.options.settings || {};
    this.options.fetch = this.options.fetch || '';
    if (this.options.fetch.loc && this.options.fetch.loc.source) {
      fetch = this.options.fetch.loc.source.body;
    }
    if (typeof fetch === 'string' && fetch.includes('mutation')) {
      this.options.settings.mutation = gql`
        ${fetch}
      `;
      return this.graphql.mutate(this.options.settings as MutationOptions);
    }
    this.options.settings.query =
      typeof fetch !== 'string'
        ? fetch
        : gql`
            ${fetch}
          `;

    if (typeof fetch === 'string' && fetch.includes('subscription')) {
      return this.graphql.subscribe(
        this.options.settings as SubscriptionOptions
      );
    }
    return this.graphql.query(this.options.settings as QueryOptions);
  }

  isPrimitive(test: any) {
    return test !== Object(test);
  }
}
