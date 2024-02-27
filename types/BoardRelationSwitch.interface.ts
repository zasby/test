import { IBoardColumnsState, RelationsKeys, RelationsKeys } from "./index";

export type RelationsTypes =
  | RelationsKeys.My
  | RelationsKeys.Controlled
  | RelationsKeys.Participated
  | RelationsKeys.Any;

export interface IBoardRelationSwitch {
  onChangeUserRelation: (relation: RelationsTypes) => void;
  boardColumnsState: IBoardColumnsState[];
}
