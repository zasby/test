import { createContext } from "react";

export interface IOrgchartFilter {
  employeeFilter: boolean;
  resultFilter: boolean;
  descriptionFilter: boolean;
  withMetrics: boolean;
}

export interface IOrgchartFilterContext {
  orgchartFilters: IOrgchartFilter;
}


const defaultFilterState: IOrgchartFilterContext = {
  orgchartFilters: {
    employeeFilter: true,
    resultFilter: true,
    descriptionFilter: false,
    withMetrics: false,
  }
};

export const OrgchartFilterContext = createContext<IOrgchartFilterContext>(defaultFilterState);
