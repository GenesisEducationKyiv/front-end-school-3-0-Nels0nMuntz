import { QueryObserverOptions, useQuery } from "@tanstack/react-query";
import * as Belt from "@mobily/ts-belt";
import { AppError, QUERY_KEYS } from "@/shared/api";
import {
  getTracks,
  GetTracksRequest,
  GetTracksResponse,
} from "@/entities/track";
import { TrackErrorType } from "@/entities/track/model/types/trackErrorType";

interface Options extends GetTracksRequest {
  queryOptions?: Partial<
    QueryObserverOptions<
      Belt.Result<GetTracksResponse, AppError<TrackErrorType>> | undefined
    >
  >;
}

export const useTracksQuery = (options: Options) => {
  const {
    data: tracksResult,
    isLoading: isLoadingTracks,
  } = useQuery({
    queryKey: [QUERY_KEYS.tracks, options],
    queryFn: () => {
      let params: GetTracksRequest = {};
      if (options.search) {
        params.search = options.search;
      } else if (options?.filters?.artist || options?.filters?.genre) {
        params.filters = options.filters;
      } else {
        params = options;
      }
      return getTracks(params);
    },
    ...options?.queryOptions,
  });
  return {
    tracksResult,
    isLoadingTracks,
  };
};
