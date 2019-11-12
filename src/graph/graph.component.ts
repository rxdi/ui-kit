import { Component, html, property, LitElement, async } from '@rxdi/lit-html';
import gql from 'graphql-tag';
import { BaseService } from './base.service';
import { Inject } from '@rxdi/core';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {
  MutationOptions,
  QueryOptions,
  QueryBaseOptions,
  SubscriptionOptions
} from 'apollo-client';
import { GraphOptions } from './types';

/**
 * @customElement rx-graph
 */
@Component({
  selector: 'rx-graph',
  template(this: GraphComponent) {
    console.log(this.options.fetch);
    if (!this.options.fetch) {
      return html``;
    }
    return html`
      ${async(
        this.query().pipe(
          map(res => this.options.template(res)),
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
            ${this.options.loading()}
          `
        : ''}
      ${this.error
        ? html`
            ${this.options.error(this.error)}
          `
        : ''}
    `;
  }
})
export class GraphComponent extends LitElement {
  @property({ type: Object })
  public options: GraphOptions = {
    fetch: '',
    template: () => html``,
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

  private query(): Observable<{ data: any }> {
    let fetch: any = this.options.fetch;
    if (this.options.fetch.loc && this.options.fetch.loc.source) {
      fetch = this.options.fetch.loc.source.body;
    }
    if (typeof fetch === 'string' && fetch.includes('mutation')) {
      this.options.settings.mutation = gql`
        ${fetch}
      `;
      return this.graphql.mutate(this.options.settings as MutationOptions);
    }
    this.options.settings.query = typeof fetch !== 'string' ? fetch : gql`
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
