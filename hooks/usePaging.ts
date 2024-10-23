import { useCallback, useEffect, useRef, useState } from "react";

import { isEqual } from "lodash";
import { PagingModel } from "../api/types";
import { PagingOptions } from "../api";
import { IApiControllerGet } from "../api/interfaces/iApiControllerGet";
import { api } from "../services";

type PagedRequest<T> = (
  page: number,
  params?: { [key: string]: string | number | boolean | null | number[] }
) => Promise<PagingModel<T>>;

export type PagingInfo = {
  page: number;
  isLoading: boolean;
  isDone: boolean;
  totalItems?: number;
  usersCount?: number;
  timePlanTotal?: string;
};

const initialPagingInfo = (page: number): PagingInfo => ({ page, isLoading: false, isDone: false } as PagingInfo);

export const usePaging = <T, TFilter>(
  request: PagedRequest<T>,
  params?: { [key: string]: string | number | (string | number)[] | boolean | null | undefined | AbortSignal },
  options?: PagingOptions,
  initialData?: Array<T>,
  onError?: () => void,
  onSuccess?: (items: Array<T>) => void,
  controller?: IApiControllerGet<T, TFilter>,
) => {
  if (options == null) options = { page: 1, orderByDate: "desc", pageSize: 10 } as PagingOptions;

  const initialDataCopy = useRef<T[]>(initialData ?? []);

  const [items, setItems] = useState<T[]>(initialDataCopy.current ?? []);
  const itemsCopy = useRef<T[]>(initialDataCopy.current ?? []);

  const [lastResult, setLastResult] = useState<PagingModel<T> | null>(null);
  const lastResultCopy = useRef<PagingModel<T> | null>(null);

  const [info, setInfo] = useState<PagingInfo>(initialPagingInfo(options?.page ?? 1));
  const infoCopy = useRef<PagingInfo>(initialPagingInfo(options?.page ?? 1));

  const setItemsSync = (v: T[], withoutStateReset?: boolean) => {
    // const data = filterArrayOfObjectsById(v);
    const data = v;
    itemsCopy.current = data;
    // setItems(data);
    if (withoutStateReset) {
      setItems((prev) => {
        const list = data.map((item) => {
          // @ts-ignore
          const currentEl = prev.find((el) => el.id && el.id === item.id);
          // console.log("currentEl", currentEl);
          if (currentEl) {
            // console.log("isEqual(currentEl, item)", isEqual(currentEl, item));
            return isEqual(currentEl, item) ? currentEl : item;
          }
          return item;
        });
        return list
      });
    } else {
      setItems(data);
    }
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

  // async function loadNext() {
  //   await load(infoCopy.current.page + 1);
  // }

  const loadNext = useCallback(async () => {
    return await load(infoCopy.current.page + 1);

  }, [infoCopy.current.page, params, options])

  async function load(page: number, withoutStateReset?: boolean, pageSizeParams?: number) {
    if (infoCopy.current.isDone && !withoutStateReset) return;
    if (infoCopy.current.isLoading) return;

    setInfoSync({ ...infoCopy.current, isLoading: true });
    const defaultPageSize = options?.pageSize ?? 10;
    const currentPage = pageSizeParams && pageSizeParams > defaultPageSize
      ? Math.floor(pageSizeParams / defaultPageSize) + 1 : page;

    const pageSize = pageSizeParams && defaultPageSize > 0
      ? currentPage * defaultPageSize
      : defaultPageSize;
    const res = await request(page, { ...params, ...options, page, pageSize });
    if (res === null && onError) onError();
    setLastResultSync(res);
    // TODO: Check
    onSuccess && onSuccess(res?.items != null ? [...res?.items] : []);
    if (withoutStateReset) {
      setItemsSync(res?.items != null ? [...res?.items] : [], withoutStateReset);
    } else {
      setItemsSync(res?.items != null ? [...itemsCopy.current, ...res?.items] : [...itemsCopy.current]);
    }
    setInfoSync({
      isDone: res?.items?.length < (options?.pageSize ?? res?.pagingOptions?.pageSize!),
      isLoading: false,
      page: currentPage,
      totalItems: res?.totalItems,
      timePlanTotal: res?.timePlanTotal,
      usersCount: res?.usersCount || undefined,
    });
  }
  const getOneItem = async (
    params?: { [key: string]: string | number | (string | number)[] | boolean | null | undefined },
  ) => {
    try {
      const data: any = await controller?.getAll({ ...params, page: 1, pageSize: 1 } as any);
      if (!data) {
        return;
      }

      const [currentItem] = data.items;
      const issueIndex: number = itemsCopy.current.findIndex((item: any) => item?.id === currentItem.id);
      if (issueIndex !== -1) {
        itemsCopy.current.splice(issueIndex, 1, currentItem);
        setItemsSync(itemsCopy.current);
      } else {
        setItemsSync([currentItem, ...itemsCopy.current]);
      }      // setItems(list);
    } catch (err) {
      console.log("err", err);
    }
  };

  const getById = async (issueId: number, list?: any, exclude?: string, boardId?: number) => {
    try {
      const data = await api.issue.getById(Number(issueId), {
        includeIndicators: true,
        // includeNextStatuses: true,
        includeActions: true,
      }) as any;
      if (!data?.calculated?.isUnplanned) {
        removeItem(data, list);
        return;
      }
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


  // const getById = async (itemId: number, list?: any, exclude?: string) => {
  //   try {
  //     // // const data = await api.issue.getById(Number(issueId), {
  //     // const { items } = await request(1, {
  //     //   includeIndicators: true,
  //     //   // includeNextStatuses: true,
  //     //   includeActions: true,
  //     //   ids: [itemId],
  //     // }
  //     // ) as any;
  //     const data: any = await controller?.getAll(params as any, `${itemId}`)
  //
  //     if (!data) {
  //       return;
  //     }
  //     if (exclude && !!data[exclude]) {
  //       return;
  //     }
  //     const itemsList = itemsCopy.current;
  //     const itemIndex: number = itemsList.findIndex((item: any) => item?.id === itemId);
  //     console.log("itemIndex", itemIndex);
  //     if (itemIndex !== -1) {
  //       itemsList.splice(itemIndex, 1, data);
  //       setItemsSync(itemsList);
  //     } else {
  //       setItemsSync([data, ...itemsList]);
  //     }      // setItems(list);
  //
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const removeItem = (item: any, list: any) => {
    setItemsSync(list.filter((el: any) => el.id !== item.id));
  }

  async function restart(withoutStateReset?: boolean) {
    const pageSize = items.length || 10;
    !withoutStateReset && reset(); // A trick to avoid loading outdated data
    await load(1, withoutStateReset, pageSize);
  }

  function reset() {
    setItemsSync([]);
    setInfoSync(initialPagingInfo(options?.page ?? 1));
    setLastResultSync(null);
  }

  function setData(data: T[]) {
    setItemsSync(data);
  }

  function updateItem(id: string | number, data: any) {
    const arr = [...items]  ;
    // @ts-ignore
    const itemIndex = arr.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      arr.splice(itemIndex, 1, data);
      setData(arr);
    }
  };

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
    getOneItem,
    updateItem,
  };
};

// We assume NOT EVEN ONE api request will fail, so there's no '?'
export const usePagingWithController = <T, TFilter>(
  controller: IApiControllerGet<T, TFilter>,
  params?: { [key: string]: string | number | (string | number)[] | boolean | null | undefined | AbortSignal },
  options?: PagingOptions,
  initialData?: Array<T>,
  onError?: () => void,
  onSuccess?: (items: Array<T>) => void,
  useAutocompleteRoute?: boolean,
  queryUri?: string,
) => {
  return usePaging(
    async (page, params) => {
      return !!useAutocompleteRoute
        ? // @ts-ignore TODO: FIX
        (await controller.autocomplete(params as any))!
        : (await controller.getAll(params as any, queryUri))!
    },
    params,
    options,
    initialData,
    onError,
    onSuccess,
    controller
  );
};
// => {
//   return usePaging(async (page, params) => (await controller.getAll(params as any))!, params, options, initialData,onError);
// }}
