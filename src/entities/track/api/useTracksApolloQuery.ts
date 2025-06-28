import { useQuery } from "@apollo/client";
import { R } from "@mobily/ts-belt";
import { AppError, gql } from "@/shared/api";
import { safeParseApiResponse } from "@/shared/lib";
import { GetTracksRequest } from "../model/types/getTracksRequest";
import { getTracksResponseSchema } from "../model/schemas/getTracksResponseSchema";
import { TrackErrorType } from "../model/types/trackErrorType";
import { ApolloQueryResult } from "@/shared/model";
import { GetTracksResponse } from "../model/types/getTracksResponse";

export const TRACKS = gql(`
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

export const useTracksApolloQuery = ({
  filters,
  pagination,
  search,
  sorting,
}: GetTracksRequest): ApolloQueryResult<GetTracksResponse> => {
  const { data, loading, error } = useQuery(TRACKS, {
    variables: {
      params: {
        ...(search
          ? { search }
          : {
              ...(pagination?.pageIndex && { page: pagination.pageIndex + 1 }),
              ...(pagination?.pageSize && { limit: pagination.pageSize }),
              ...(sorting?.sortBy && { sort: sorting.sortBy }),
              ...(sorting?.order && { order: sorting.order }),
              ...(filters?.artist && { artist: filters.artist }),
              ...(filters?.genre && { genre: filters.genre }),
            }),
      },
    },
    fetchPolicy: "cache-and-network",
  });

  if (data) {
    const parsed = safeParseApiResponse(data.tracks, getTracksResponseSchema);
    if (!parsed.success) {
      return {
        data: R.Error(
          AppError.wrap(parsed.error, TrackErrorType.TarcksNotFound)
        ),
        loading,
      };
    }
    return {
      data: R.Ok(parsed.data),
      loading,
    };
  }

  if (error) {
    return {
      data: R.Error(AppError.wrap(error, TrackErrorType.TarcksNotFound)),
      loading,
    };
  }

  return { data, loading };
};
