import { useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:8000/graphql", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  GenerateNonce: Scalars['String'];
  NoOp?: Maybe<Scalars['Boolean']>;
  VerifySignature: Scalars['Boolean'];
};


export type MutationGenerateNonceArgs = {
  address: Scalars['String'];
};


export type MutationVerifySignatureArgs = {
  address: Scalars['String'];
  signature: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  NoOp?: Maybe<Scalars['Boolean']>;
};

export type GenerateNonceMutationVariables = Exact<{
  address: Scalars['String'];
}>;


export type GenerateNonceMutation = { __typename?: 'Mutation', GenerateNonce: string };

export type VerifySignatureMutationVariables = Exact<{
  address: Scalars['String'];
  signature: Scalars['String'];
}>;


export type VerifySignatureMutation = { __typename?: 'Mutation', VerifySignature: boolean };


export const GenerateNonceDocument = `
    mutation generateNonce($address: String!) {
  GenerateNonce(address: $address)
}
    `;
export const useGenerateNonceMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<GenerateNonceMutation, TError, GenerateNonceMutationVariables, TContext>) =>
    useMutation<GenerateNonceMutation, TError, GenerateNonceMutationVariables, TContext>(
      'generateNonce',
      (variables?: GenerateNonceMutationVariables) => fetcher<GenerateNonceMutation, GenerateNonceMutationVariables>(GenerateNonceDocument, variables)(),
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
    >(options?: UseMutationOptions<VerifySignatureMutation, TError, VerifySignatureMutationVariables, TContext>) =>
    useMutation<VerifySignatureMutation, TError, VerifySignatureMutationVariables, TContext>(
      'verifySignature',
      (variables?: VerifySignatureMutationVariables) => fetcher<VerifySignatureMutation, VerifySignatureMutationVariables>(VerifySignatureDocument, variables)(),
      options
    );