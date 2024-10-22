import { AxiosError, AxiosInstance } from "axios";
import { PagingOptions } from "../types/pagingOptions";
import { ApiControllerBase } from "./apiControllerBase";
import { IApiControllerGet } from "../interfaces/iApiControllerGet";
import { PagingModel } from "../types";
import { AutocompleteModelPagingModel } from "../models/AutocompleteModelPagingModel";

export abstract class ApiControllerGet<T, TFilter> extends ApiControllerBase implements IApiControllerGet<T, TFilter> {
  protected constructor(cl: AxiosInstance, v: string, controllerName: string) {
    super(cl, v, controllerName);
  }

  async getById(id: number, opts?: any, signal?: AbortSignal, onError?: (e: AxiosError) => void): Promise<T | null> {
    return await this.process<T>(
      this.get(id.toString(), { params: opts, signal }),
      undefined,
      onError
    );
  }

  async getAll(opts?: PagingOptions & TFilter & { [key: string]: any }, queryUri?: string): Promise<PagingModel<T> | null> {
    return await this.process<PagingModel<T>>(this.get(queryUri ?? "", {
      params: {
        ...opts,
        signal: undefined,
      },
      signal: opts?.signal
    }));
  }

  async autocomplete(
    opts?: PagingOptions & TFilter & { [key: string]: any }
  ): Promise<AutocompleteModelPagingModel | null> {
    return await this.process<AutocompleteModelPagingModel>(this.get("autocomplete", { params: opts }));
  }
}
