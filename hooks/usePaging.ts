import { useEffect, useRef, useState } from "react";
import { IssueDto, PagingOptions } from "../api";
import { PagingModel } from "../api/types";
import { IApiControllerGet } from "../api/interfaces/iApiControllerGet";
import { api } from "../services";
import { PagingInfo } from "../types";

type PagedRequest<T> = (
  page: number,
  params?: { [key: string]: string | number | boolean | null }
) => Promise<PagingModel<T>>;


const initialPagingInfo = (page: number): PagingInfo => ({ page, isLoading: false, isDone: false } as PagingInfo);

export const usePaging = <T>(
  request: PagedRequest<T>,
  params?: { [key: string]: string | number | (string | number)[] | boolean | null | undefined },
  options?: PagingOptions,
  initialData?: Array<T>,
  onError?: () => void,
  onSuccess?: (items: Array<T>) => void
) => {
  if (options == null) options = { page: 1, orderByDate: "desc", pageSize: 10 } as PagingOptions;

  const initialDataCopy = useRef<T[]>(initialData ?? []);

  const [items, setItems] = useState<T[]>(initialDataCopy.current ?? []);
  const itemsCopy = useRef<T[]>(initialDataCopy.current ?? []);

  const [lastResult, setLastResult] = useState<PagingModel<T> | null>(null);
  const lastResultCopy = useRef<PagingModel<T> | null>(null);

  const [info, setInfo] = useState<PagingInfo>(initialPagingInfo(options?.page ?? 1));
  const infoCopy = useRef<PagingInfo>(initialPagingInfo(options?.page ?? 1));

  const setItemsSync = (v: T[]) => {
    const data = filterArrayOfObjectsById(v);
    itemsCopy.current = data;
    setItems(data);
  };

  function arraysEqual(a: any, b: any) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  useEffect(() => {
    // @ts-ignore
    if (arraysEqual(initialData?.map((i) => i.id).sort() ?? [], initialDataCopy.current?.map((i) => i.id).sort())) {
      return;
    }

    initialDataCopy.current = initialData ?? [];
    setItemsSync(filterArrayOfObjectsById([...(initialDataCopy.current ?? []), ...itemsCopy.current]));
  }, [initialData]);

  function filterArrayOfObjectsById(array: any[]) {
    return array.filter((value, index, self) => {
      return self.findIndex((v) => v.id === value.id) === index;
    });
  }

  const setLastResultSync = (v: PagingModel<T> | null) => {
    setLastResult(v);
    lastResultCopy.current = v;
  };

  const setInfoSync = (v: PagingInfo) => {
    setInfo(v);
    infoCopy.current = v;
  };

  async function loadNext() {
    await load(infoCopy.current.page + 1);
  }

  async function load(page: number, withoutStateReset?: boolean) {
    if (infoCopy.current.isDone && !withoutStateReset) return;
    if (infoCopy.current.isLoading) return;

    setInfoSync({ ...infoCopy.current, isLoading: true });
    const res = await request(page, { ...params, ...options, page });
    if (res === null && onError) onError();
    setLastResultSync(res);
    // TODO: Check
    onSuccess && onSuccess(res?.items != null ? [...res?.items] : []);
    if (withoutStateReset) {
      setItemsSync(res?.items != null ? [...res?.items] : []);
    } else {
      setItemsSync(res?.items != null ? [...itemsCopy.current, ...res?.items] : [...itemsCopy.current]);
    }
    setInfoSync({
      isDone: res?.items?.length < (options?.pageSize ?? res?.pagingOptions?.pageSize!),
      isLoading: false,
      page,
      totalItems: res?.totalItems,
    });
  }

  const getById = async (issueId: number, list?: any, exclude?: string) => {
    try {
      const data = await api.issue.getById(Number(issueId), {
        includeIndicators: true,
        // includeNextStatuses: true,
        includeActions: true,
      }) as any;
      if (exclude && !!data[exclude]) {
        return;
      }
      const issueIndex: number = list.findIndex((item: any) => item?.id === issueId);
      if (issueIndex !== -1) {
        list.splice(issueIndex, 1, data);
        setItemsSync(list);
      } else {
        setItemsSync([data, ...list]);
      }      // setItems(list);

    } catch (e) {
      console.error(e);
    }
  };

  const removeItem = (item: any, list: any) => {
    setItemsSync(list.filter((el: any) => el.id !== item.id));
  }

  async function restart(withoutStateReset?: boolean) {
    !withoutStateReset && reset(); // A trick to avoid loading outdated data
    await load(1, withoutStateReset);
  }

  function reset() {
    setItemsSync([]);
    setInfoSync(initialPagingInfo(options?.page ?? 1));
    setLastResultSync(null);
  }

  function setData(data: T[]) {
    setItemsSync(data);
  }

  return {
    items,
    info,
    lastResult,
    setData,
    loadNext,
    reset,
    restart,
    getById,
    removeItem,
  };
};

// We assume NOT EVEN ONE api request will fail, so there's no '?'
export const usePagingWithController = <T, TFilter>(
  controller: IApiControllerGet<T, TFilter>,
  params?: { [key: string]: string | number | (string | number)[] | boolean | null | undefined },
  options?: PagingOptions,
  initialData?: Array<T>,
  onError?: () => void,
  onSuccess?: (items: Array<T>) => void,
  useAutocompleteRoute?: boolean,
  queryUri?: string,
) => {
  return usePaging(
    async (page, params) =>
      !!useAutocompleteRoute
        ? // @ts-ignore TODO: FIX
          (await controller.autocomplete(params as any))!
        : (await controller.getAll(params as any, queryUri))!,
    params,
    options,
    initialData,
    onError,
    onSuccess
  );
};
// => {
//   return usePaging(async (page, params) => (await controller.getAll(params as any))!, params, options, initialData,onError);
// }}
