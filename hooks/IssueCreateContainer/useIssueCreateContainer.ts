import { useEffect, useState } from "react";
import { StaticFileDto } from "../../api";
import {
  IIssueCreateContainer
} from "../../../components/modules/forms/issueCreateEditForms/containers/issueCreateContainer/IssueCreateContainer.interface";

export const useIssueCreateContainer = (props: IIssueCreateContainer) => {
  const [attachmentsIssue, setAttachmentsIssue] = useState<StaticFileDto[]>([]);

  const [executorIds, setExecutorIds] = useState<number[]>(
    props.updater?.currentState?.executorUserId ? [props.updater?.currentState?.executorUserId] : []
  );

  const handleDeleteAttachmentsByFileId = (fileId: number) =>
    props.updater.applyChanges({
      attachments: props.updater?.currentState?.attachments?.filter((item) => item.fileId != fileId) ?? [],
    });

  const setAttachmentsIssueSync = (files: StaticFileDto[]) => {
    const newAttachments = [
      ...(props.updater?.currentState?.attachments ?? []),
      ...files
        .filter((f) => !props.updater?.currentState?.attachments?.some((f2) => f2.fileId == f.id))
        .map((f, i) => ({
          id: 0,
          issueId: props.updater?.currentState?.id,
          fileId: f.id,
          file: f,
        })),
    ];
    props.updater.applyChanges({ attachments: [...newAttachments] });
  };

  const handleChangeExecutorIds = (value: number[]) => {
    setExecutorIds(value);
  }

  useEffect(() => {
    if (props.updater?.currentState?.attachments != null) {
      setAttachmentsIssue(props.updater?.currentState?.attachments.map((item) => item.file) as StaticFileDto[]);
    }
  }, [props.updater?.currentState?.attachments]);

  return {
    attachmentsIssue,
    executorIds,
    handleChangeExecutorIds,
    setAttachmentsIssueSync,
    handleDeleteAttachmentsByFileId,
  }
}
