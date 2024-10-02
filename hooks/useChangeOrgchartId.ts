import { useCallback } from "react";

import { useRootStore } from "./useRootStore";

export const useChangeOrgchartId = () => {
  const { orgchartStore } = useRootStore();

  const handleChangeOrgchartId = useCallback((orgchartId: number) => {
    console.log('handleChangeOrgchartId', orgchartId);
    orgchartStore.setCurrentOrgchartId(orgchartId);
  }, []);

  return {
    handleChangeOrgchartId,
  }
};