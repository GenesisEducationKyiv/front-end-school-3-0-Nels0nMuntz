import { api } from "@/shared/api";
import { parseApiResponse } from "@/shared/lib";
import { GetTracksRequest } from "../model/types/getTracksRequest";
import { GetTracksResponse } from "../model/types/getTracksResponse";
import { getTracksResponseSchema } from "../model/schemas/getTracksResponseSchema";

export const getTracks = async ({
  pagination,
  sorting,
  filters,
  search,
}: GetTracksRequest): Promise<GetTracksResponse> => {
  const response = await api.get("tracks", {
    query: {
      ...(pagination?.pageIndex && { page: pagination.pageIndex + 1 }),
      ...(pagination?.pageSize && { limit: pagination.pageSize }),
      ...(sorting?.sortBy && { sort: sorting.sortBy }),
      ...(sorting?.order && { order: sorting.order }),
      ...(filters?.artist && { artist: filters.artist }),
      ...(filters?.genre && { genre: filters.genre }),
      ...(search && { search }),
    },
  });
  return parseApiResponse(response, getTracksResponseSchema);
};
