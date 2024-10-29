import { useTranslation } from "react-i18next";
import { useNotifier } from "../useNotifier";
import { useRootStore } from "../useRootStore";
import { useEffect, useRef, useState } from "react";
import {
  ICustomUpdateNoteContent
} from "../../../components/modules/dialogs/showUpdateNoteDialog/ShowUpdateNoteDialog.interface";
import { LocalesKeys } from "../../constants/localesKeys";
import { usePagingWithController } from "../usePaging";
import { api } from "../../services";
import { convertNotesToNoCheckedContents } from "../../helpers/showUpdateNoteDialog/helpers";

export const useShowUpdateNoteDialog = () => {
  const { t } = useTranslation();
  const notifier = useNotifier();
  const { authStore, appStore } = useRootStore();
  const editorRef = useRef<{ resetEditor: () => void }>();

  const [isLoadingCheckNext, setIsLoadingCheckNext] = useState<boolean>(false);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [noCheckedNotes, setNoCheckedNotes] = useState<ICustomUpdateNoteContent[]>([]);
  const [currentIndexNote, setCurrentIndexNote] = useState<number>(0);

  const currentLocale: LocalesKeys = (appStore.getAppLocale as LocalesKeys) ?? LocalesKeys.en;
  const lastCheckedVersion = authStore.getInitialInfo?.identity?.updateNoteLastSeenVersion;

  const updateNotes = usePagingWithController(api.updateNote, {
    isPublished: true,
    versionGreaterThan: authStore.getInitialInfo?.identity?.updateNoteLastSeenVersion ?? 0,
  });

  const handleApiError = () => notifier.show({ message: t("notifier:error.something_wrong"), theme: "error" });

  const handleCloseDialog = () => setIsOpenDialog(false);

  const handleFindMaxCheckedVersion = () => {
    const checkedNotes: ICustomUpdateNoteContent[] = noCheckedNotes.slice(0, currentIndexNote + 1);
    let maxVersion = 0;
    for (let i = 0; i < checkedNotes.length; i++) {
      if (checkedNotes[i] && (checkedNotes[i].version ?? 0) > maxVersion) maxVersion = checkedNotes[i].version ?? 0;
    }
    return maxVersion;
  };

  const handleUpdateLastSeenNote = async () => {
    setIsLoadingCheckNext(true);
    const user = authStore.getInitialInfo?.identity;
    const r = await api.user.edit(user?.id!, {
      ...user,
      updateNoteLastSeenVersion: handleFindMaxCheckedVersion(),
    });
    setIsLoadingCheckNext(false);
    if (r == null) handleApiError();
  };

  const handleIncrementCurrentNote = async () => {
    await handleUpdateLastSeenNote();
    if (currentIndexNote + 1 > noCheckedNotes.length) return handleCloseDialog();
    setCurrentIndexNote((prev) => prev + 1);
  };

  useEffect(() => {
    if (typeof lastCheckedVersion === "number" && updateNotes?.items.length && !noCheckedNotes.length) {
      const noCheckedNotes = convertNotesToNoCheckedContents(updateNotes.items, currentLocale, lastCheckedVersion);
      setNoCheckedNotes(noCheckedNotes);
      !!noCheckedNotes?.length && setIsOpenDialog(true);
    }
  }, [updateNotes.items.length, lastCheckedVersion]);

  useEffect(() => {
    !!noCheckedNotes.length && setCurrentIndexNote(0);
  }, [noCheckedNotes]);

  useEffect(() => {
    editorRef.current?.resetEditor && editorRef.current?.resetEditor();
    currentIndexNote + 1 > noCheckedNotes.length && handleCloseDialog();
  }, [currentIndexNote]);

  useEffect(() => {
    authStore.isAuthorized && updateNotes.restart();
  }, [authStore.isAuthorized]);

  return {
    editorRef,
    isLoadingCheckNext,
    noCheckedNotes,
    currentIndexNote,
    isOpenDialog,
    handleCloseDialog,
    handleIncrementCurrentNote,
  }
}
