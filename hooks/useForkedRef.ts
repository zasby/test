import { MutableRefObject, useMemo } from "react";
import { AssignableRef } from "../helpers/types/AssignableRef";

export function useForkedRef<RefValueType = any>(...refs: (AssignableRef<RefValueType> | null | undefined)[]) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (node: any) => {
      refs.forEach((ref) => {
        assignRef(ref, node);
      });
    };
  }, refs);
}

export function assignRef<RefValueType = any>(ref: AssignableRef<RefValueType> | null | undefined, value: any) {
  if (ref == null) return;
  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch {
      throw new Error(`Cannot assign value "${value}" to ref "${ref}"`);
    }
  }
}

export function isFunction(value: any): value is Function {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
