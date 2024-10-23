import { IssueCustomFieldDto, IssueDto } from "../api";
import React from "react";
import { IssueTypeKeys } from "../constants/issueTypeKeys";

export enum IssueFormKeys {
  create = "CREATE_ISSUE",
  update = "UPDATE_ISSUE",
}

export type IssueFormType = IssueFormKeys.update | IssueFormKeys.create;

export interface IIssueCommonDialog {
  open: boolean;
  isLoading?: boolean;
  issueType: IssueTypeKeys;
  issueId?: number;
  onClose: () => void;
  customFields?: IssueCustomFieldDto[];
  onRedirectToOtherIssue?: (id: number) => void;
  updater?: {
    update: () => Promise<void>;
    updatePartially: () => Promise<void>;
    setInitialState: (initialState: IssueDto) => void;
    applyChanges: (changes: any) => void;
    currentState: IssueDto | null;
    beforeState: IssueDto | null;
  };
  formType: IssueFormType;
}

export interface IIssueCommonViewDialog {
  open: boolean;
  isLoading: boolean;
  createBtnIsLoading: boolean;
  issueId?: number;
  issueType: IssueTypeKeys;
  onCreate: () => void;
  onClickCreate: () => void;
  onReopen?: (id: number) => void;
  onClose: () => void;
  customFields: IssueCustomFieldDto[];
  createFormRef: React.MutableRefObject<any>;
  onRedirectToOtherIssue?: (id: number) => void;
  updater: {
    update: () => Promise<void>;
    updatePartially: () => Promise<void>;
    setInitialState: (initialState: IssueDto) => void;
    applyChanges: (changes: any) => void;
    currentState: IssueDto | null;
    beforeState: IssueDto | null;
  };
  formType: IssueFormType;
}
