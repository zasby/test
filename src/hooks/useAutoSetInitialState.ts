import { useEffect, useState } from "react";

export type IInitialState<T> = undefined | T | T[];

export const useAutoSetInitialState = <T>(
  initialState: IInitialState<T>
): [IInitialState<T>, (newValue: IInitialState<T>) => void] => {
  const [state, setState] = useState<IInitialState<T>>([]);

  const handleSetState = (newValue: IInitialState<T>) => {
    setState(newValue);
  };

  useEffect(() => {
    initialState && handleSetState(initialState);
  }, [initialState]);

  return [state, handleSetState];
};
