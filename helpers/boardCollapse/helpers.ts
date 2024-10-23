import { ICollapseShortData, IOrgchartIssues } from "../../types/BoardCollapse.interface";
import { AutocompleteModelPagingModel, BoardInfo, BoardStatusDto, OrgchartDto } from "../../api";
import { baseBoardStatusKeys } from "../../../components/modules/pages/communications/constants/keys";

export const nextStatusesToIds = (nextStatuses?: BoardStatusDto[]): number[] | undefined => {
  return nextStatuses?.map((item) => item?.id!) ?? undefined;
};

export const mapToArrNumbers = (keys: string | string[]): number[] => {
  const convertToNumber = (key: string): number => {
    const number = Number(key);
    if (isNaN(number)) return 0;
    else return number;
  };
  if (typeof keys == "string") return [convertToNumber(keys)];
  else return keys.map((item) => convertToNumber(item));
};

export const convertToOrgchartIssues = (
  orgchartList: OrgchartDto[],
  issues: (AutocompleteModelPagingModel | null)[]
): IOrgchartIssues[] => {
  const orgchartIssues: IOrgchartIssues[] = [];
  for (let i = 0; i < orgchartList.length; i++) {
    const currentItem: IOrgchartIssues = { data: issues[i], orgchartId: orgchartList[i].id };
    orgchartIssues.push(currentItem);
  }
  return orgchartIssues;
};

export const findTotalItemsByStatus =
  (data: ICollapseShortData) =>
  (statusKey: baseBoardStatusKeys, orgchartId?: number): number =>
    data[baseBoardStatusKeys.pending === statusKey ? "pendingIssues" : "inWorkIssues"]?.find(
      (item) => item.orgchartId === orgchartId
    )?.data?.totalItems ?? 0;

export const findCountByOrgchartId = (
  boardInfo: BoardInfo[] | null,
  statusKey: baseBoardStatusKeys,
  orgchartId: number
): number =>
  boardInfo?.find((info) => info.orgchartId === orgchartId)?.items?.find((item) => item.statusKey === statusKey)
    ?.count ?? 0;
