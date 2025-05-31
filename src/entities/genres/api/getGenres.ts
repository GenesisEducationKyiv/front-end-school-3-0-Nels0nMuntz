import { api } from "@/shared/api";
import { parseApiResponse } from "@/shared/lib";
import { getGenresSchema } from "../model/schemas/getGenresSchema";
import { Genre } from "../model/types/genre";

export const getGenres = async (): Promise<Genre[]> => {
  const response = await api.get("genres");
  return parseApiResponse(response, getGenresSchema);
};
