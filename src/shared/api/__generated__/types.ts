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

export type BatchDeleteResponse = {
  __typename?: 'BatchDeleteResponse';
  failed: Array<Scalars['String']['output']>;
  success: Array<Scalars['String']['output']>;
};

export type CreateTrackInput = {
  album?: InputMaybe<Scalars['String']['input']>;
  artist: Scalars['String']['input'];
  coverImage?: InputMaybe<Scalars['String']['input']>;
  genres: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTrack: Track;
  deleteTrack: Scalars['Boolean']['output'];
  deleteTrackFile: Track;
  deleteTracks: BatchDeleteResponse;
  updateTrack: Track;
};


export type MutationAddTrackArgs = {
  input: CreateTrackInput;
};


export type MutationDeleteTrackArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTrackFileArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTracksArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationUpdateTrackArgs = {
  id: Scalars['ID']['input'];
  input: UpdateTrackInput;
};

export type Query = {
  __typename?: 'Query';
  genres: Array<Scalars['String']['output']>;
  tracks: TracksResponse;
};


export type QueryTracksArgs = {
  params?: InputMaybe<TracksInput>;
};

export type Track = {
  __typename?: 'Track';
  album?: Maybe<Scalars['String']['output']>;
  artist: Scalars['String']['output'];
  audioFile?: Maybe<Scalars['String']['output']>;
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  genres: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type TracksInput = {
  artist?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type TracksMeta = {
  __typename?: 'TracksMeta';
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type TracksResponse = {
  __typename?: 'TracksResponse';
  data: Array<Track>;
  meta: TracksMeta;
};

export type UpdateTrackInput = {
  album?: InputMaybe<Scalars['String']['input']>;
  artist?: InputMaybe<Scalars['String']['input']>;
  audioFile?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', genres: Array<string> };

export type TracksQueryVariables = Exact<{
  params?: InputMaybe<TracksInput>;
}>;


export type TracksQuery = { __typename?: 'Query', tracks: { __typename?: 'TracksResponse', data: Array<{ __typename?: 'Track', id: string, title: string, artist: string, album?: string | null, genres: Array<string>, slug: string, coverImage?: string | null, audioFile?: string | null, createdAt: string, updatedAt: string }>, meta: { __typename?: 'TracksMeta', total: number, page: number, limit: number, totalPages: number } } };
