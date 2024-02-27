import { useRef } from "react";
import { useReactiveRef } from "./useReactiveRef";
import { debounce } from "./useScrollContainer/utils";

export function useDebouncedCallback(callback: () => void, delay: number) {
  const invokingFunction = useReactiveRef(callback);
  const invokingDelay = useReactiveRef(delay);
  const debouncedFunction = useRef(
    debounce(
      () => {
        invokingFunction.current?.();
      },
      () => invokingDelay.current
    )
  );

  return debouncedFunction.current;
}
