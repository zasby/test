export enum breadcrumbsKeys {
  planning = "planning",
  regulation = "regulation",
  project = "project",
}

export type breadcrumbsNewType = breadcrumbsKeys.regulation | breadcrumbsKeys.planning | breadcrumbsKeys.project;

export type BreadcrumbsType = {
  id: number;
  name: string | JSX.Element;
  path: string;
  width?: number;
};

export interface IBreadcrumbsNew {
  breadcrumbsList: BreadcrumbsType[];
  containerId?: string;
}

export interface IBreadcrumbsNewView {
  // pathNames: string[];
  breadcrumbsList: BreadcrumbsType[];
  onRedirect: (url: string) => void;
  containerId?: string;
}
