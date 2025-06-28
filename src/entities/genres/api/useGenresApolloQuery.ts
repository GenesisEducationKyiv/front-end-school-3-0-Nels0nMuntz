import { useQuery } from "@apollo/client";
import { R } from "@mobily/ts-belt";
import { AppError, gql } from "@/shared/api";
import { ApolloQueryResult } from "@/shared/model";
import { safeParseApiResponse } from "@/shared/lib";
import { getGenresSchema } from "../model/schemas/getGenresSchema";
import { GenreErrorType } from "../model/types/genreErrorType";

const GENRES = gql(`
query Query {
  genres
}
`);

export const useGenresApolloQuery = (): ApolloQueryResult<string[]> => {
  const { data, loading, error } = useQuery(GENRES, {
    fetchPolicy: "cache-and-network",
  });

  if (data) {
    const parsed = safeParseApiResponse(data.genres, getGenresSchema);
    if (!parsed.success) {
      return {
        data: R.Error(
          AppError.wrap(parsed.error, GenreErrorType.NotFound)
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
      data: R.Error(AppError.wrap(error, GenreErrorType.NotFound)),
      loading,
    };
  }

  return { data, loading };
};
