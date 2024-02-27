import { useRef, useState } from "react";
import { IApiControllerCrud } from "../api/interfaces/iApiControllerCrud";

const combineObjects = (a: any, b: any): any => ({ ...a, ...b });

// TODO: перенести в отдельные файлы
export const useUpdate = <T>(
  onUpdate: (newState: T) => Promise<T | null>,
  onPartialUpdate: (newState: T, beforeState: T) => Promise<T | null>,
  onRequestEnd?: (r: T | null) => void
) => {
  // use when either update fails and it's needed to recover previous state
  const [beforeState, setBeforeState] = useState<T | null>(null);
  const [currentState, setCurrentState] = useState<T | null>(null);

  const stateRef = useRef<T | null>(null);

  function handleResult(r: T | null) {
    if (onRequestEnd) onRequestEnd(r);

    if (r == null) {
      setCurrentState(beforeState);
      // maybe show error snack bar
      return;
    }
    // setCurrentState(r);
    // setBeforeState(r);
  }

  async function update(): Promise<void> {
    // handleResult(await onUpdate(currentState!));
    handleResult(await onUpdate(stateRef.current!));
  }

  async function updatePartially(): Promise<void> {
    handleResult(await onPartialUpdate(currentState!, beforeState!));
  }

  function reset() {
    setBeforeState(null);
    setCurrentState(null);
  }

  return {
    update,
    updatePartially,
    setInitialState: (initialState: T) => {
      setCurrentState(initialState);
      setBeforeState(initialState);
    },
    // applyChanges: (changes: any): void => setCurrentState(combineObjects(currentState, changes)),
    applyChanges: (changes: any): void => {
      stateRef.current = combineObjects(currentState, changes);
      setCurrentState(combineObjects(currentState, changes));
    },
    currentState,
    beforeState,
    reset,
  };
};

export const useUpdateWithController = <T>(
  controller: IApiControllerCrud<T>,
  onRequestEnd?: (r: T | null) => void,
  params?: any
) => {
  const getId = (x: T) => (x as any).id;

  return useUpdate<T>(
    async (x) => await controller.edit(getId(x), x, params),
    async (x, y) => await controller.editPartially(getId(x), x, y, params),
    onRequestEnd
  );
};
