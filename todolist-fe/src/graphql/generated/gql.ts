/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation createItem($item: String!) {\n  createItem(item: $item) {\n    isDone\n    item\n    uuid\n  }\n}": types.CreateItemDocument,
    "mutation deleteItem($uuid: String!) {\n  deleteItem(uuid: $uuid) {\n    uuid\n  }\n}": types.DeleteItemDocument,
    "query getItem {\n  getItem {\n    item\n    isDone\n    uuid\n  }\n}": types.GetItemDocument,
    "mutation putItem($isDone: Boolean!, $uuid: String!) {\n  putIsDone(isDone: $isDone, uuid: $uuid) {\n    isDone\n    uuid\n  }\n}": types.PutItemDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createItem($item: String!) {\n  createItem(item: $item) {\n    isDone\n    item\n    uuid\n  }\n}"): (typeof documents)["mutation createItem($item: String!) {\n  createItem(item: $item) {\n    isDone\n    item\n    uuid\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation deleteItem($uuid: String!) {\n  deleteItem(uuid: $uuid) {\n    uuid\n  }\n}"): (typeof documents)["mutation deleteItem($uuid: String!) {\n  deleteItem(uuid: $uuid) {\n    uuid\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getItem {\n  getItem {\n    item\n    isDone\n    uuid\n  }\n}"): (typeof documents)["query getItem {\n  getItem {\n    item\n    isDone\n    uuid\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation putItem($isDone: Boolean!, $uuid: String!) {\n  putIsDone(isDone: $isDone, uuid: $uuid) {\n    isDone\n    uuid\n  }\n}"): (typeof documents)["mutation putItem($isDone: Boolean!, $uuid: String!) {\n  putIsDone(isDone: $isDone, uuid: $uuid) {\n    isDone\n    uuid\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;