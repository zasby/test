import { useCallback } from "react";

import { useRootStore } from "./useRootStore";

export const useChangeOrgchartId = () => {
  const { orgchartStore } = useRootStore();

  const handleChangeOrgchartId = (orgchartId: number) => {
    console.log('handleChangeOrgchartId ', orgchartId);
    orgchartStore.setCurrentOrgchartId(orgchartId);
    console.log('handleChangeOrgchartId getCurrentOrgchartId', orgchartStore.getCurrentOrgchartId);

  };

  return {
    handleChangeOrgchartId,
  }
};