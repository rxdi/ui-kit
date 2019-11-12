// tslint:disable
// graphql typescript definitions

export interface IGraphQLResponseRoot {
  data?: IQuery;
  errors?: Array<IGraphQLResponseError>;
}

export interface IGraphQLResponseError {
  message: string; // Required for all errors
  locations?: Array<IGraphQLResponseErrorLocation>;
  [propName: string]: any; // 7.2.2 says 'GraphQL servers may provide additional entries to error'
}

export interface IGraphQLResponseErrorLocation {
  line: number;
  column: number;
}

export interface IQuery {
  __typename?: 'Query';
  continents?: Array<IContinent> | null;
  continent?: IContinent | null;
  countries?: Array<ICountry> | null;
  country?: ICountry | null;
  languages?: Array<ILanguage> | null;
  language?: ILanguage | null;
}

export interface IContinent {
  __typename?: 'Continent';
  code?: string | null;
  name?: string | null;
  countries?: Array<ICountry> | null;
}

export interface ICountry {
  __typename?: 'Country';
  code?: string | null;
  name?: string | null;
  native?: string | null;
  phone?: string | null;
  continent?: IContinent | null;
  currency?: string | null;
  languages?: Array<ILanguage> | null;
  emoji?: string | null;
  emojiU?: string | null;
}

export interface ILanguage {
  __typename?: 'Language';
  code?: string | null;
  name?: string | null;
  native?: string | null;
  rtl?: number | null;
}

export type ICacheControlScopeEnum = 'PUBLIC' | 'PRIVATE';

// tslint:enable
