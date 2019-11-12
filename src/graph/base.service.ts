import { Injector, Injectable } from '@rxdi/core';
import {
  ApolloClient,
  QueryOptions,
  MutationOptions,
  SubscriptionOptions
} from '@rxdi/graphql-client';
import { from, Observable } from 'rxjs';

@Injectable()
export class BaseService {
  @Injector(ApolloClient)
  public graphql: ApolloClient;

  query<T>(options: QueryOptions) {
    return from(
      this.graphql.query.bind(
        this.graphql
      )(options) as any
    ) as Observable<{ data: T }>;
  }

  mutate<T>(options: MutationOptions) {
    return from(
      this.graphql.mutate.bind(
        this.graphql
      )(options) as any
    ) as Observable<{ data: T }>;
  }

  subscribe<T>(
    options: SubscriptionOptions
  ) {
    return from(
      this.graphql.subscribe.bind(
        this.graphql
      )(options) as any
    ) as Observable<{ data: T }>;
  }
}
