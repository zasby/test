export type MetricFilter = {
  roleId?: number;
  fillerUserId?: number;
  dashboardId?: number;
  withContextForUserId?: number;
  isFromDirectSubordinates?: boolean;
  createdByUserId?: number;
  responsibleUserId?: number;
  isCreatedByCurrentUser?: boolean;
  strictByUserId?: number;
};
