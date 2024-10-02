import { useState } from "react";

import { useRootStore } from "./useRootStore";

export const useChangeOrgchartId = () => {
  const { orgchartStore } = useRootStore();
  const [orgchartId, setOrgchartId] = useState<number | null>(null);

  const handleChangeOrgchartId = (orgchartId: number) => {
    console.log('handleChangeOrgchartId ', orgchartId);
    orgchartStore.setCurrentOrgchartId(orgchartId);
    setOrgchartId(orgchartId);
    console.log('handleChangeOrgchartId getCurrentOrgchartId', orgchartStore.getCurrentOrgchartId);

  };

  return {
    handleChangeOrgchartId,
  }
};