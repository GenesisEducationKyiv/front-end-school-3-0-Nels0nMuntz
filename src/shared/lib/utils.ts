import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { ApiError } from "../model";
import { RequestParams } from "../model/types/requestParams";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isError = (response: unknown): response is ApiError => {
  return (response as ApiError).error !== undefined;
};

export const isFormData = (data: unknown): data is FormData => {
  return data instanceof FormData;
};

export const objectToQueryParams = (obj: RequestParams) => {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (value === undefined || value === null) {
        return "";
      }

      if (Array.isArray(value)) {
        return value
          .map(
            (item) => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
          )
          .join("&");
      }

      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(Boolean)
    .join("&");
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const parseApiResponse = <T>(
  response: unknown,
  schema: z.ZodSchema<T>
): T => {
  try {
    return schema.parse(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Response validation error:", error.errors);
      throw new Error("Invalid data format received from the API.");
    }
    throw error;
  }
}
