import { sectionKeys } from "../constants/sectionKeys";
import { useRootStore } from "./useRootStore";

export const useGetCommunicationsAccess = () => {
  const { authStore } = useRootStore();

  const getCommunicationsAccess = () => {
    return !!authStore.getInitialInfo?.menuItems?.find((menuItem) => menuItem.key === sectionKeys.communications);
  }

  return {
    getCommunicationsAccess,
  }
}