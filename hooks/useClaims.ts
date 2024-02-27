import { useRootStore } from "./useRootStore";

export const useClaims = () => {
  const { authStore } = useRootStore();

  const has = (key: string): boolean => {
    return authStore.getInitialInfo?.permissions?.some((p: string) => p.toLowerCase() == key.toLowerCase()) ?? false;
  };

  const hasOneOf = (keys: string[]) => {
    return keys.some((s: string) => authStore.getInitialInfo?.permissions?.includes(s.toLowerCase())) ?? false;
  };

  const hasEveryOf = (keys: string[]) => {
    return keys.every((s: string) => authStore.getInitialInfo?.permissions?.includes(s.toLowerCase())) ?? false;
  };

  return {
    has,
    hasOneOf,
    hasEveryOf,
  };
};
