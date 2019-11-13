import { Component, html, property, LitElement, async } from '@rxdi/lit-html';
import gql from 'graphql-tag';
import { BaseService } from './base.service';
import { Inject, Container } from '@rxdi/core';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of, Subscription, ReplaySubject, BehaviorSubject, isObservable } from 'rxjs';
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
          map(res => this.options.render(res)),
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
export class GraphComponent extends LitElement {
  @property({ type: Object })
  public options: GraphOptions = {
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
  private result: ReplaySubject<any> = new ReplaySubject();

  OnUpdateFirst() {

    if (this.options.state && isObservable(this.options.state)) {
      this.subscription = this.options.state.subscribe(
        detail => {
          this.result.next(detail);
          this.dispatchEvent(new CustomEvent('onSuccess', { detail }));
        },
        detail => {
          this.result.error(detail);
          this.dispatchEvent(new CustomEvent('onError', { detail }));
        }
      );
    } else if (typeof this.options.state === 'object') {
      this.result.next(this.options.state);
    } else {
      this.subscription = this.query().subscribe(
        detail => {
          this.result.next(detail);
          this.dispatchEvent(new CustomEvent('onSuccess', { detail }));
        },
        detail => {
          this.result.error(detail);
          this.dispatchEvent(new CustomEvent('onError', { detail }));
        }
      );
    }

  }

  OnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.result.complete();
    }
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
