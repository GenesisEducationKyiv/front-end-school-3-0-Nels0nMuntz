import { Result } from "@mobily/ts-belt";
import { QueryObserverOptions, useQuery } from "@tanstack/react-query";
import { AppError, QUERY_KEYS } from "@/shared/api";
import { GetTracksRequest } from "../model/types/getTracksRequest";
import { GetTracksResponse } from "../model/types/getTracksResponse";
import { TrackErrorType } from "../model/types/trackErrorType";
import { getTracks } from "./getTracks";

interface Options extends GetTracksRequest {
  queryOptions?: Partial<
    QueryObserverOptions<
      Result<GetTracksResponse, AppError<TrackErrorType>> | undefined
    >
  >;
}

export const useTracksQuery = (options: Options) => {
  const { data: tracksResult, isLoading: isLoadingTracks } = useQuery({
    queryKey: [QUERY_KEYS.tracks, options],
    queryFn: () => {
      let params: GetTracksRequest = {};
      if (options.search) {
        params.search = options.search;
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
