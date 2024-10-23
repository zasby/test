import { IssueCustomFieldDto, IssueDto, StaticFileDto, type UserShortDto } from "../api";
import { IssueType } from "../constants/issueTypeKeys";
import { FormInstance } from "antd";
import { blockedFieldsKeys } from "../../components/modules/forms/types/consts";
import React from "react";
import { IIntermediateData } from "../../components/modules/forms/issueCreateEditForms/containers/issueUpdateContainer/IssueUpdateContainer.interface";
import { IssueFields } from "../utils/keys/warningsKeys";

export enum IssueFormKeys {
  create = "CREATE_ISSUE",
  update = "UPDATE_ISSUE",
}

export type issueFormType = IssueFormKeys.update | IssueFormKeys.create;

export interface IAdditionalActionsAfterUpdate {
  planingRestart?: boolean;
}

export interface IIssueFormWrapper {
  issueId?: number;
  issueType: IssueType;
  onCreate?: () => void;
  attachments: StaticFileDto[];
  executorIds?: number[];
  customFields?: IssueCustomFieldDto[];
  onChangeExecutor?: (
    prevExecutorId: number,
    nextExecutorId: number,
    prevExecutorUser?: UserShortDto | null,
    executorUser?: UserShortDto | null
  ) => void;
  setAttachmentsIssueSync: (v: StaticFileDto[]) => void;
  onDeleteAttachmentsByFileId: (fileId: number) => void;
  formType: issueFormType;
  onChangeExecutorIds?: (value: number[]) => void;
  updater: {
    update: () => Promise<void>;
    updatePartially: () => Promise<void>;
    setInitialState: (initialState: IssueDto) => void;
    applyChanges: (changes: any) => void;
    currentState: IssueDto | null;
    beforeState: IssueDto | null;
  };
}

export interface IIssueFormView {
  issueId?: number;
  form: FormInstance<any>;
  onUpdate: () => void;
  onCheckToAvailability: (fieldKey: blockedFieldsKeys) => boolean;
  isUpdateForm: boolean;
  onAsyncUpdate: () => void;
  executorIds?: number[];
  isFileLoaderUploadingCopy: React.MutableRefObject<boolean>;
  uploadFilesInputRef: React.RefObject<unknown>;
  setIsFileLoaderUploadingSync: (v: boolean) => void;
  customFieldsIsChanged: (newFields: IssueCustomFieldDto[]) => boolean;
  onCreate?: () => void;
  attachments: StaticFileDto[];
  customFields?: IssueCustomFieldDto[];
  onChangeExecutor?: (
    prevExecutorId: number,
    nextExecutorId: number,
    prevExecutorUser?: UserShortDto | null,
    nextExecutorUser?: UserShortDto | null,
  ) => void;
  setAttachmentsIssueSync: (v: StaticFileDto[]) => void;
  onPickerChange: (fieldKey: IssueFields, newValue: string | null) => void;
  onDeleteAttachmentsByFileId: (fileId: number) => void;
  setParticipantsWithUpdater?: (arrParticipants: number[]) => void;
  onChangeExecutorIds?: (value: number[]) => void;
  onChangeExecutorDeadline?: (data: IIntermediateData) => void;
  updater: {
    update: () => Promise<void>;
    updatePartially: () => Promise<void>;
    setInitialState: (initialState: IssueDto) => void;
    applyChanges: (changes: any) => void;
    currentState: IssueDto | null;
    beforeState: IssueDto | null;
  };
}
