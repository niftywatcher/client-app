import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
  examples__JSON: any;
};

export type Collection = {
  __typename?: 'Collection';
  address: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  discordUrl?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export enum CollectionOrder {
  CeilingPrice = 'CEILING_PRICE',
  FloorPrice = 'FLOOR_PRICE',
  Name = 'NAME',
  PriceDelta = 'PRICE_DELTA',
  TradingVolume = 'TRADING_VOLUME'
}

export type GetCollectionsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Order>;
  orderBy?: InputMaybe<CollectionOrder>;
};

export type GetSalesInput = {
  collectionId: Scalars['ID'];
  endTime?: InputMaybe<Scalars['Time']>;
  startTime?: InputMaybe<Scalars['Time']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CreateWatchList: WatchList;
  GenerateNonce: Scalars['String'];
  VerifySignature: Scalars['String'];
};


export type MutationCreateWatchListArgs = {
  name: Scalars['String'];
  slug: Scalars['String'];
};


export type MutationGenerateNonceArgs = {
  address: Scalars['String'];
};


export type MutationVerifySignatureArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};

export enum Order {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export type PricePoint = {
  __typename?: 'PricePoint';
  time: Scalars['Time'];
  value: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  GetAddress: Scalars['String'];
  GetCollections: Array<Collection>;
  GetMockToken: Scalars['String'];
  GetSales: Sales;
  Ready: Scalars['Boolean'];
  user?: Maybe<User>;
};


export type QueryGetCollectionsArgs = {
  input: GetCollectionsInput;
};


export type QueryGetMockTokenArgs = {
  address: Scalars['String'];
};


export type QueryGetSalesArgs = {
  input: GetSalesInput;
};

export type Sales = {
  __typename?: 'Sales';
  delta: Scalars['Float'];
  max: Scalars['Float'];
  mean: Scalars['Float'];
  median: Scalars['Float'];
  min: Scalars['Float'];
  percentageDelta: Scalars['Float'];
  prices: Array<PricePoint>;
};

export type User = {
  __typename?: 'User';
  watchLists?: Maybe<Array<Maybe<WatchList>>>;
};

export type WatchList = {
  __typename?: 'WatchList';
  id: Scalars['String'];
  name: Scalars['String'];
  order: Scalars['Int'];
  slug: Scalars['String'];
};

export enum Fake__Locale {
  Az = 'az',
  Cz = 'cz',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  En = 'en',
  EnAu = 'en_AU',
  EnBork = 'en_BORK',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnIe = 'en_IE',
  EnInd = 'en_IND',
  EnUs = 'en_US',
  EnAuOcker = 'en_au_ocker',
  Es = 'es',
  EsMx = 'es_MX',
  Fa = 'fa',
  Fr = 'fr',
  FrCa = 'fr_CA',
  Ge = 'ge',
  IdId = 'id_ID',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  NbNo = 'nb_NO',
  Nep = 'nep',
  Nl = 'nl',
  Pl = 'pl',
  PtBr = 'pt_BR',
  Ru = 'ru',
  Sk = 'sk',
  Sv = 'sv',
  Tr = 'tr',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_CN',
  ZhTw = 'zh_TW'
}

export enum Fake__Types {
  /** An URL for an avatar */
  AvatarUrl = 'avatarUrl',
  BankIdentifierCode = 'bankIdentifierCode',
  BitcoinAddress = 'bitcoinAddress',
  City = 'city',
  /** Configure color with option: `baseColor` */
  ColorHex = 'colorHex',
  ColorName = 'colorName',
  CompanyBs = 'companyBS',
  CompanyCatchPhrase = 'companyCatchPhrase',
  CompanyName = 'companyName',
  Country = 'country',
  CountryCode = 'countryCode',
  County = 'county',
  CurrencyCode = 'currencyCode',
  CurrencyName = 'currencyName',
  CurrencySymbol = 'currencySymbol',
  /**
   * By default returns dates beetween 2000-01-01 and 2030-01-01.
   * Configure date format with options `dateFormat` `dateFrom` `dateTo`.
   */
  Date = 'date',
  DbCollation = 'dbCollation',
  DbColumn = 'dbColumn',
  DbEngine = 'dbEngine',
  DbType = 'dbType',
  DomainName = 'domainName',
  /** Configure email provider with option: `emailProvider` */
  Email = 'email',
  FileExtension = 'fileExtension',
  Filename = 'filename',
  FinanceAccountName = 'financeAccountName',
  FinanceTransactionType = 'financeTransactionType',
  FirstName = 'firstName',
  FullName = 'fullName',
  /** Configure date format with option `dateFormat` */
  FutureDate = 'futureDate',
  HackerAbbreviation = 'hackerAbbreviation',
  HackerPhrase = 'hackerPhrase',
  /** An image url. Configure image with options: `imageCategory`, `imageWidth`, `imageHeight` and `randomizeImageUrl` */
  ImageUrl = 'imageUrl',
  InternationalBankAccountNumber = 'internationalBankAccountNumber',
  Ipv4Address = 'ipv4Address',
  Ipv6Address = 'ipv6Address',
  JobTitle = 'jobTitle',
  LastName = 'lastName',
  Latitude = 'latitude',
  Locale = 'locale',
  Longitude = 'longitude',
  /** Lorem Ipsum text. Configure size with option `loremSize` */
  Lorem = 'lorem',
  MacAddress = 'macAddress',
  MimeType = 'mimeType',
  /** Sum of money. Configure with options `minMoney`/`maxMoney` and 'decimalPlaces'. */
  Money = 'money',
  Number = 'number',
  /** Configure password with option `passwordLength` */
  Password = 'password',
  /** Configure date format with option `dateFormat` */
  PastDate = 'pastDate',
  PhoneNumber = 'phoneNumber',
  Product = 'product',
  ProductCategory = 'productCategory',
  ProductMaterial = 'productMaterial',
  ProductName = 'productName',
  /** Configure date format with option `dateFormat` */
  RecentDate = 'recentDate',
  SecondaryAddress = 'secondaryAddress',
  Semver = 'semver',
  State = 'state',
  StateAbbr = 'stateAbbr',
  /** Configure address with option `useFullAddress` */
  StreetAddress = 'streetAddress',
  StreetName = 'streetName',
  Url = 'url',
  UserAgent = 'userAgent',
  Uuid = 'uuid',
  Word = 'word',
  Words = 'words',
  ZipCode = 'zipCode'
}

export type Fake__Color = {
  blue255?: InputMaybe<Scalars['Int']>;
  green255?: InputMaybe<Scalars['Int']>;
  red255?: InputMaybe<Scalars['Int']>;
};

export type Fake__ImageSize = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export enum Fake__LoremSize {
  Paragraph = 'paragraph',
  Paragraphs = 'paragraphs',
  Sentence = 'sentence',
  Sentences = 'sentences',
  Word = 'word',
  Words = 'words'
}

export type Fake__Options = {
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: InputMaybe<Fake__Color>;
  /** Only for types `*Date`. Example value: `YYYY MM DD`. [Full Specification](http://momentjs.com/docs/#/displaying/format/) */
  dateFormat?: InputMaybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `1986-11-02`. */
  dateFrom?: InputMaybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `2038-01-19`. */
  dateTo?: InputMaybe<Scalars['String']>;
  /** Only for type `money` */
  decimalPlaces?: InputMaybe<Scalars['Int']>;
  /** Only for type `email` */
  emailProvider?: InputMaybe<Scalars['String']>;
  /** Only for type `imageUrl`. Example value: `["nature", "water"]`. */
  imageKeywords?: InputMaybe<Array<Scalars['String']>>;
  /** Only for type `imageUrl` */
  imageSize?: InputMaybe<Fake__ImageSize>;
  /** Only for type `lorem` */
  loremSize?: InputMaybe<Fake__LoremSize>;
  /** Only for type `money` */
  maxMoney?: InputMaybe<Scalars['Float']>;
  /** Only for type `number` */
  maxNumber?: InputMaybe<Scalars['Float']>;
  /** Only for type `money` */
  minMoney?: InputMaybe<Scalars['Float']>;
  /** Only for type `number` */
  minNumber?: InputMaybe<Scalars['Float']>;
  /** Only for type `password` */
  passwordLength?: InputMaybe<Scalars['Int']>;
  /** Only for type `number` */
  precisionNumber?: InputMaybe<Scalars['Float']>;
  /** Only for type `imageUrl` */
  randomizeImageUrl?: InputMaybe<Scalars['Boolean']>;
  /** Only for type `streetAddress` */
  useFullAddress?: InputMaybe<Scalars['Boolean']>;
};

export type AppStartupQueryVariables = Exact<{ [key: string]: never; }>;


export type AppStartupQuery = { __typename?: 'Query', user?: { __typename?: 'User', watchLists?: Array<{ __typename?: 'WatchList', id: string, order: number, name: string, slug: string } | null | undefined> | null | undefined } | null | undefined };

export type GenerateNonceMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type GenerateNonceMutation = { __typename?: 'Mutation', GenerateNonce: string };

export type VerifySignatureMutationVariables = Exact<{
  address: Scalars['String'];
  signature: Scalars['String'];
}>;


export type VerifySignatureMutation = { __typename?: 'Mutation', VerifySignature: string };

export type CreateWatchListMutationVariables = Exact<{
  name: Scalars['String'];
  slug: Scalars['String'];
}>;


export type CreateWatchListMutation = { __typename?: 'Mutation', CreateWatchList: { __typename?: 'WatchList', id: string, order: number, name: string, slug: string } };

export type CollectionQueryVariables = Exact<{
  orderBy: CollectionOrder;
  order: Order;
  limit: Scalars['Int'];
}>;


export type CollectionQuery = { __typename?: 'Query', GetCollections: Array<{ __typename?: 'Collection', id: string, name: string, address: string }> };


export const AppStartupDocument = `
    query appStartup {
  user {
    watchLists {
      id
      order
      name
      slug
    }
  }
}
    `;
export const useAppStartupQuery = <
      TData = AppStartupQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: AppStartupQueryVariables,
      options?: UseQueryOptions<AppStartupQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<AppStartupQuery, TError, TData>(
      variables === undefined ? ['appStartup'] : ['appStartup', variables],
      fetcher<AppStartupQuery, AppStartupQueryVariables>(client, AppStartupDocument, variables, headers),
      options
    );
export const GenerateNonceDocument = `
    mutation generateNonce($address: String!) {
  GenerateNonce(address: $address)
}
    `;
export const useGenerateNonceMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<GenerateNonceMutation, TError, GenerateNonceMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<GenerateNonceMutation, TError, GenerateNonceMutationVariables, TContext>(
      'generateNonce',
      (variables?: GenerateNonceMutationVariables) => fetcher<GenerateNonceMutation, GenerateNonceMutationVariables>(client, GenerateNonceDocument, variables, headers)(),
      options
    );
export const VerifySignatureDocument = `
    mutation verifySignature($address: String!, $signature: String!) {
  VerifySignature(address: $address, signature: $signature)
}
    `;
export const useVerifySignatureMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<VerifySignatureMutation, TError, VerifySignatureMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<VerifySignatureMutation, TError, VerifySignatureMutationVariables, TContext>(
      'verifySignature',
      (variables?: VerifySignatureMutationVariables) => fetcher<VerifySignatureMutation, VerifySignatureMutationVariables>(client, VerifySignatureDocument, variables, headers)(),
      options
    );
export const CreateWatchListDocument = `
    mutation createWatchList($name: String!, $slug: String!) {
  CreateWatchList(name: $name, slug: $slug) {
    id
    order
    name
    slug
  }
}
    `;
export const useCreateWatchListMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateWatchListMutation, TError, CreateWatchListMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateWatchListMutation, TError, CreateWatchListMutationVariables, TContext>(
      'createWatchList',
      (variables?: CreateWatchListMutationVariables) => fetcher<CreateWatchListMutation, CreateWatchListMutationVariables>(client, CreateWatchListDocument, variables, headers)(),
      options
    );
export const CollectionDocument = `
    query Collection($orderBy: CollectionOrder!, $order: Order!, $limit: Int!) {
  GetCollections(input: {orderBy: $orderBy, order: $order, limit: $limit}) {
    id
    name
    address
  }
}
    `;
export const useCollectionQuery = <
      TData = CollectionQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: CollectionQueryVariables,
      options?: UseQueryOptions<CollectionQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<CollectionQuery, TError, TData>(
      ['Collection', variables],
      fetcher<CollectionQuery, CollectionQueryVariables>(client, CollectionDocument, variables, headers),
      options
    );