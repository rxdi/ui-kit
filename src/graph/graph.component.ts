import { Component, html, property, LitElement, async } from '@rxdi/lit-html';
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
  isObservable
} from 'rxjs';
import {
  MutationOptions,
  QueryOptions,
  QueryBaseOptions,
  SubscriptionOptions
} from 'apollo-client';
import { GraphOptions } from './types';
import { DEFAULTS } from './tokens';

/**
 * @customElement rx-graph
 */
@Component({
  selector: 'rx-graph',
  template(this: GraphComponent) {
    return html`
      ${async(
        this.result.pipe(
          map(res => this.options.render(res, Container)),
          tap(() => (this.loading = false)),
          catchError(e => {
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
    `;
  }
})
export class GraphComponent<T = any> extends LitElement {
  @property({ type: Object })
  public options: GraphOptions<T> = {
    fetch: '',
    state: new BehaviorSubject({}),
    render: () => html``,
    loading: () => html``,
    error: () => html``,
    settings: {} as QueryBaseOptions
  };

  @Inject(BaseService)
  private graphql: BaseService;

  @property({ type: Boolean })
  private loading = true;

  @property({ type: String })
  private error = '';

  private subscription: Subscription;
  private pubsubSubscription: Subscription;
  private result: ReplaySubject<any> = new ReplaySubject();

  OnUpdateFirst() {
    let task: Observable<any>;
    if (this.options.state) {
      if (isObservable(this.options.state)) {
        task = this.options.state;
      } else if (typeof this.options.state === 'object') {
        this.result.next(this.options.state);
      } else {
        this.result.error('State is incopatible');
        this.result.complete();
      }
    } else {
      task = this.query();
    }
    this.subscription = task.subscribe(
      detail => {
        this.result.next(detail);
        this.dispatchEvent(new CustomEvent('onData', { detail }));
      },
      detail => {
        this.result.error(detail);
        this.dispatchEvent(new CustomEvent('onError', { detail }));
      }
    );
    if (this.options.subscribe) {
      this.pubsubSubscription = this.graphql
        .subscribe({
          query: gql`
            ${this.options.subscribe}
          `
        })
        .subscribe(
          data => this.result.next(data),
          e => this.result.error(e)
        );
    }
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
}
