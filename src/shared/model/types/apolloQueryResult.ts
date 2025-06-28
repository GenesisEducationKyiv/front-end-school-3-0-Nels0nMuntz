import { Result } from "@mobily/ts-belt";
import { AppError } from "../../api";
import { AppErrorType } from "./appErrorType";

export type ApolloQueryResult<TData> = {
  data?: Result<TData, AppError<AppErrorType>>;
  loading: boolean;
};
