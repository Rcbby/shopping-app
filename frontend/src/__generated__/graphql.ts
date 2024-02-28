/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem?: Maybe<TodoItem>;
  deleteItem?: Maybe<TodoItem>;
  putIsDone?: Maybe<TodoItem>;
};


export type MutationCreateItemArgs = {
  item: Scalars['String']['input'];
};


export type MutationDeleteItemArgs = {
  uuid: Scalars['String']['input'];
};


export type MutationPutIsDoneArgs = {
  isDone: Scalars['Boolean']['input'];
  uuid: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getItem?: Maybe<Array<Maybe<TodoItem>>>;
};

export type TodoItem = {
  __typename?: 'TodoItem';
  isDone: Scalars['Boolean']['output'];
  item: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  todoItems?: Maybe<Array<Maybe<TodoItem>>>;
};

export type GetQueryVariables = Exact<{ [key: string]: never; }>;


export type GetQuery = { __typename?: 'Query', getItem?: Array<{ __typename?: 'TodoItem', uuid: string, item: string, isDone: boolean } | null> | null };


export const GetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"get"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"item"}},{"kind":"Field","name":{"kind":"Name","value":"isDone"}}]}}]}}]} as unknown as DocumentNode<GetQuery, GetQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */








