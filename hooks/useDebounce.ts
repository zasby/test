import { useEffect, useState } from "react";

export const useDebounce = (value: any, timeout: undefined | number = 400) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setState(value), timeout);

    return () => clearTimeout(handler);
  }, [value, timeout]);

  return state;
};
