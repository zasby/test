import { IBoardColumnsState } from "./Board";
import { RelationsKeys } from "./keys";

export type RelationsTypes =
  | RelationsKeys.My
  | RelationsKeys.Controlled
  | RelationsKeys.Participated
  | RelationsKeys.Any;

export interface IBoardRelationSwitch {
  onChangeUserRelation: (relation: RelationsTypes) => void;
  boardColumnsState: IBoardColumnsState[];
}
