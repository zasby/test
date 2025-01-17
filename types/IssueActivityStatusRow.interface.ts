import { BoardStatusDto } from "../api";

export interface IIssueActivityStatusRow {
  boardStatus: BoardStatusDto;
  previousBoardStatus?: BoardStatusDto
}
