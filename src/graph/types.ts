import { DocumentNode } from 'graphql';
import { ErrorPolicy, FetchPolicy } from 'apollo-client';
import { TemplateResult } from '@rxdi/lit-html';

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
export interface GraphOptions extends OptionalProperties {
  fetch: any;
  template: <T>(res: { data: T }) => TemplateResult;
  settings?: Settings;
}
