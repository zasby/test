import React from "react";
import { useRootStore } from "../hooks/useRootStore"

export const Component = () => {
  const {  orgchartStore } = useRootStore();
  console.log('Component getCurrentOrgchartId', orgchartStore.getCurrentOrgchartId);
  return <div>Component</div>;
}