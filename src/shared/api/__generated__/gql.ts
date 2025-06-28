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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\nquery Query {\n  genres\n}\n": typeof types.QueryDocument,
    "\nquery Tracks($params: TracksInput) {\n  tracks(params: $params) {\n    data {\n      id\n      title\n      artist\n      album\n      genres\n      slug\n      coverImage\n      audioFile\n      createdAt\n      updatedAt\n    }\n    meta {\n      total\n      page\n      limit\n      totalPages\n    }\n  }\n}\n": typeof types.TracksDocument,
    "\nmutation AddTrack($input: CreateTrackInput!) {\n  addTrack(input: $input) {\n    updatedAt\n    title\n    slug\n    id\n    genres\n    createdAt\n    coverImage\n    audioFile\n    artist\n    album\n  }\n}\n": typeof types.AddTrackDocument,
    "\nmutation DeleteTracks($ids: [String!]!) {\n  deleteTracks(ids: $ids) {\n    success\n    failed\n  }\n}\n": typeof types.DeleteTracksDocument,
    "\nmutation DeleteTrack($deleteTrackId: String!) {\n  deleteTrack(id: $deleteTrackId)\n}\n": typeof types.DeleteTrackDocument,
    "\nmutation UpdateTrack($input: UpdateTrackInput!) {\n  updateTrack(input: $input) {\n    id\n    title\n    artist\n    album\n    genres\n    slug\n    coverImage\n    audioFile\n    createdAt\n    updatedAt\n  }\n}\n": typeof types.UpdateTrackDocument,
};
const documents: Documents = {
    "\nquery Query {\n  genres\n}\n": types.QueryDocument,
    "\nquery Tracks($params: TracksInput) {\n  tracks(params: $params) {\n    data {\n      id\n      title\n      artist\n      album\n      genres\n      slug\n      coverImage\n      audioFile\n      createdAt\n      updatedAt\n    }\n    meta {\n      total\n      page\n      limit\n      totalPages\n    }\n  }\n}\n": types.TracksDocument,
    "\nmutation AddTrack($input: CreateTrackInput!) {\n  addTrack(input: $input) {\n    updatedAt\n    title\n    slug\n    id\n    genres\n    createdAt\n    coverImage\n    audioFile\n    artist\n    album\n  }\n}\n": types.AddTrackDocument,
    "\nmutation DeleteTracks($ids: [String!]!) {\n  deleteTracks(ids: $ids) {\n    success\n    failed\n  }\n}\n": types.DeleteTracksDocument,
    "\nmutation DeleteTrack($deleteTrackId: String!) {\n  deleteTrack(id: $deleteTrackId)\n}\n": types.DeleteTrackDocument,
    "\nmutation UpdateTrack($input: UpdateTrackInput!) {\n  updateTrack(input: $input) {\n    id\n    title\n    artist\n    album\n    genres\n    slug\n    coverImage\n    audioFile\n    createdAt\n    updatedAt\n  }\n}\n": types.UpdateTrackDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Query {\n  genres\n}\n"): (typeof documents)["\nquery Query {\n  genres\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Tracks($params: TracksInput) {\n  tracks(params: $params) {\n    data {\n      id\n      title\n      artist\n      album\n      genres\n      slug\n      coverImage\n      audioFile\n      createdAt\n      updatedAt\n    }\n    meta {\n      total\n      page\n      limit\n      totalPages\n    }\n  }\n}\n"): (typeof documents)["\nquery Tracks($params: TracksInput) {\n  tracks(params: $params) {\n    data {\n      id\n      title\n      artist\n      album\n      genres\n      slug\n      coverImage\n      audioFile\n      createdAt\n      updatedAt\n    }\n    meta {\n      total\n      page\n      limit\n      totalPages\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AddTrack($input: CreateTrackInput!) {\n  addTrack(input: $input) {\n    updatedAt\n    title\n    slug\n    id\n    genres\n    createdAt\n    coverImage\n    audioFile\n    artist\n    album\n  }\n}\n"): (typeof documents)["\nmutation AddTrack($input: CreateTrackInput!) {\n  addTrack(input: $input) {\n    updatedAt\n    title\n    slug\n    id\n    genres\n    createdAt\n    coverImage\n    audioFile\n    artist\n    album\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteTracks($ids: [String!]!) {\n  deleteTracks(ids: $ids) {\n    success\n    failed\n  }\n}\n"): (typeof documents)["\nmutation DeleteTracks($ids: [String!]!) {\n  deleteTracks(ids: $ids) {\n    success\n    failed\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation DeleteTrack($deleteTrackId: String!) {\n  deleteTrack(id: $deleteTrackId)\n}\n"): (typeof documents)["\nmutation DeleteTrack($deleteTrackId: String!) {\n  deleteTrack(id: $deleteTrackId)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UpdateTrack($input: UpdateTrackInput!) {\n  updateTrack(input: $input) {\n    id\n    title\n    artist\n    album\n    genres\n    slug\n    coverImage\n    audioFile\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\nmutation UpdateTrack($input: UpdateTrackInput!) {\n  updateTrack(input: $input) {\n    id\n    title\n    artist\n    album\n    genres\n    slug\n    coverImage\n    audioFile\n    createdAt\n    updatedAt\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;