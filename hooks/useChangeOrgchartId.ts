import { useCallback } from "react";

import { useRootStore } from "./useRootStore";

export const useChangeOrgchartId = () => {
  const { orgchartStore } = useRootStore();

  const handleChangeOrgchartId = useCallback((orgchartId: number) => {
    orgchartStore.setCurrentOrgchartId(orgchartId);
  }, []);
};