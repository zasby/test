import React from "react";
import { observer } from "mobx-react-lite";
import { useRootStore } from "../hooks/useRootStore"

export const Component1 = observer(() => {
  const {  orgchartStore } = useRootStore();
  console.log('Component getCurrentOrgchartId', orgchartStore.getCurrentOrgchartId);
  return <div>Component</div>;
});