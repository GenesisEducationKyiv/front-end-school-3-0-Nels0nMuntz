import * as Belt from '@mobily/ts-belt';
import { api } from "@/shared/api";
import { parseApiResponse } from "@/shared/lib";
import { AppError } from '@/shared/api';
import { getGenresSchema } from "../model/schemas/getGenresSchema";
import { GenreErrorType } from '../model/types/genreErrorType';

export const getGenres = async () => {
  try {
    const response = await api.get("genres");
    const parsed = parseApiResponse(response, getGenresSchema);
    return Belt.R.Ok(parsed)
  } catch (error) {
    return Belt.R.Error(AppError.wrap(error, GenreErrorType.NotFound))
  } 
};
