import React from "react";
import { IssueHistoryDto, StaticFileDto } from "../api";
import { IAudioRecorderRef } from "../../components/uiKit/audioRecorder/AudioRecorder";
import { TMediaRecorderStatus } from "./index";

interface ISendPopupItem {
  id: number;
  text: string;
  action: () => void;
}

export interface IIssueHistorySenderBlock {
  allowedCommentsTypes?: string[] | null;
  isAllowAceptButton: boolean;
  // commentIssue: Value;
  // onChangeComment: (comment: Value) => void;
  commentIssue: string;
  onChangeComment: (comment: string) => void;
  // editorRef: React.MutableRefObject<{ clear: () => void } | undefined>;
  isLoadingSend?: boolean;
  onSendComment: (type: string, text?: string) => void;
  attachments: StaticFileDto[];
  setAttachments: (data: StaticFileDto[]) => void;
  onAcceptIssueHistory: () => Promise<IssueHistoryDto | void>;
  onDeleteAttachmentById: (fileId: number) => void;
  issueId?: number;
}

export interface IIssueHistorySenderBlockView extends IIssueHistorySenderBlock {
  uploadFilesInputRef: React.RefObject<any>;
  audioRecorderRef: React.RefObject<IAudioRecorderRef>;
  isLoadingSend?: boolean;
  setIsFileLoaderUploadingSync: (v: boolean) => void;
  sendPopupItems: ISendPopupItem[];
  getIsDisabled: () => boolean;
  loadingAcceptButton: boolean;
  onAudioRecorderStatusChange: (status: TMediaRecorderStatus) => void;
  onAcceptComments: () => void;
  onSaveAudioMessage: (blob: Blob | null) => void;
}
