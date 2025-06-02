import { API_ENDPOINTS } from "./apiEndpoints";
import { RequestParams } from "../model/types/requestParams";
import { isApiError, isFormData, objectToQueryParams } from "../lib/utils";
import { API_BASE_URL } from "../configs";

type RequestUrl = keyof typeof API_ENDPOINTS;
type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  params?: string;
  query?: RequestParams;
};
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

const httpClient = (method: HTTPMethod) => {
  return async (url: RequestUrl, options?: RequestOptions) => {
    try {
      const params = options?.params ? `/${options?.params}` : "";
      const query = options?.query
        ? `?${objectToQueryParams(options.query)}`
        : "";
      const body = options?.body 
        ? isFormData(options.body)
          ? options.body
          : JSON.stringify(options.body)
        : undefined;
      const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS[url]}${params}${query}`,
        {
          ...options,
          method,
          headers: {
            ...(!isFormData(options?.body) && {
              ["Content-Type"]: "application/json",
            }),
            ...options?.headers,
          },
          body,
        }
      );
      if (response.ok && response.statusText === "No Content") return;

      const json = await response.json();

      if (isApiError(json)) {
        throw new Error(json.message || json.error);
      }
      return json;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  };
};

const get = httpClient("GET");
const post = (url: RequestUrl, options?: RequestOptions) => {
  return httpClient("POST")(url, options);
};
const put = (url: RequestUrl, options?: RequestOptions) => {
  return httpClient("PUT")(url, options);
};
const remove = (url: RequestUrl, options?: RequestOptions) => {
  return httpClient("DELETE")(url, {
    ...options,
    body: options?.body || {},
  });
};

export const api = {
  get,
  post,
  put,
  remove,
};
