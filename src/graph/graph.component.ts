import {
  Component,
  html,
  property,
  LitElement,
  async
} from '@rxdi/lit-html';
import gql from 'graphql-tag';
import { BaseService } from './base.service';
import { Inject } from '@rxdi/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MutationOptions, QueryOptions, QueryBaseOptions } from 'apollo-client';
import { GraphOptions } from './types';

/**
 * @customElement rx-graph
 */
@Component({
  selector: 'rx-graph',
  template<T>(this: GraphComponent) {
    return html`
      ${this.loading
        ? html`
            ${this.options.loading}
          `
        : ''}
      ${async(
        this.realQuery<T>().pipe(
          map(res => this.options.template(res)),
          tap(() => (this.loading = false))
        )
      )}
    `;
  }
})
export class GraphComponent extends LitElement {
  @Inject(BaseService)
  public graphql: BaseService;

  @property({ type: Object })
  public options: GraphOptions = {
    fetch: '',
    template: () => html``,
    loading: html``,
    settings: {} as QueryBaseOptions
  };

  @property({ type: Boolean })
  public loading = true;

  realQuery<T>(): Observable<{ data: T }> {
    if (this.options.fetch.includes('mutation')) {
      this.options.settings.mutation = gql`
        ${this.options.fetch}
      `;
      return this.graphql.mutate(this.options.settings as MutationOptions);
    }
    this.options.settings.query = gql`
      ${this.options.fetch}
    `;
    return this.graphql.query(this.options.settings as QueryOptions);
  }
}
