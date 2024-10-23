import { guideContentType } from "./Guide";

export interface IOpeningGuideIcon {
  contentKey: guideContentType;
  anchorId?: number | string;
  ml?: number;
  mr?: number;
  mt?: number;
}

export interface IOpeningGuideIconView extends Omit<IOpeningGuideIcon, "contentKey" | "anchorId"> {
  onClick: () => void;
}
