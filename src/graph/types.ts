import { DocumentNode } from 'graphql';
import { ErrorPolicy, FetchPolicy } from 'apollo-client';
import { TemplateResult } from '@rxdi/lit-html';
import { Observable } from 'apollo-link';

export interface Settings {
  query?: DocumentNode;
  mutation?: DocumentNode;
  variables?: any;
  fetchPolicy?: FetchPolicy;
  errorPolicy?: ErrorPolicy;
  fetchResults?: boolean;
  metadata?: any;
  context?: any;
}

export interface OptionalProperties {
  error?: (e) => TemplateResult;
  loading?: () => TemplateResult;
}
export interface GraphOptions<T = any> extends OptionalProperties {
  fetch: any;
  state?: any;
  settings?: Settings;
  subscribe?: any;
  render(res: { data: T }): TemplateResult;
}
