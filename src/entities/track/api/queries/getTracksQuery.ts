import { gql } from "@/shared/api";

export const GET_TRACKS = gql(`
query Tracks($params: TracksInput) {
  tracks(params: $params) {
    data {
      id
      title
      artist
      album
      genres
      slug
      coverImage
      audioFile
      createdAt
      updatedAt
    }
    meta {
      total
      page
      limit
      totalPages
    }
  }
}
`);
