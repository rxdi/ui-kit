import { DocumentNode } from 'graphql';
import { ErrorPolicy, FetchPolicy } from 'apollo-client';
import { CSSResult, TemplateResult } from '@rxdi/lit-html';

export interface Settings {
  query?: DocumentNode;
  mutation?: DocumentNode;
  variables?: any;
  fetchPolicy?: string | FetchPolicy;
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
  fetch?: any;
  state?: T;
  settings?: Settings;
  subscribe?: any;
  style?: CSSResult;
  defaultConfig?: boolean;
  render(state: T, setState: (res: T) => void, shadowRoot: ShadowRoot): TemplateResult;
}
