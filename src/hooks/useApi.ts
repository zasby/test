import { useEffect, useRef, useState } from "react";

export interface IUseApiReturn<T> {
  value: T | undefined | null;
  fetch: () => Promise<T | null>;
  set: (data: T) => void;

  isLoading: boolean;
}

export const useApi = <T>(
  request: () => Promise<T>,
  handleErrorFunction?: ((error: any) => void) | null,
  onRequestComplete?: (x: T | null) => void,
  params?: any,
  fetchOnFirstRender: boolean = true
): IUseApiReturn<T> => {
  // Response state
  const [data, setData] = useState<T | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dataCopy = useRef<T | null | undefined>(undefined);

  const setDataSync = (v: T | null | undefined) => {
    dataCopy.current = v;
    setData(v);
  };

  const fetchApi = async (): Promise<T | null> => {
    try {
      setIsLoading(true);
      const response = await request();
      setDataSync(response);
      setIsLoading(false);
      if (response == null) throw new Error();
      if (!!onRequestComplete) onRequestComplete(response);
      return response;
    } catch (e) {
      setIsLoading(false);
      if (!!handleErrorFunction) handleErrorFunction(e);
      if (!!onRequestComplete) onRequestComplete(null);
      return null;
    }
  };

  useEffect(() => {
    if (fetchOnFirstRender) fetchApi();
  }, []);

  return {
    fetch: fetchApi,
    value: data,
    set: setData,
    isLoading,
  };
};
