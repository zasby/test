import { useRootStore } from "../useRootStore";
import { useCallback, useEffect, useState } from "react";
import { useNotifier } from "../useNotifier";
import { useTranslation } from "react-i18next";
import { LocalStorageHelpers } from "../localStorageHelpers";
import { api } from "../../services";
import { IVideoDialog } from "../../types";

export const useVideoDialog = (props: IVideoDialog) => {
  const { appStore, authStore } = useRootStore();

  const [abilityToSave, setAbilityToSave] = useState<boolean>(false);
  const [videoId, setVideoId] = useState<string | undefined>(undefined);
  const isPassed = !!authStore?.getInitialInfo?.identity?.educationHistory?.find(
    (item) => item.key === props.trainingKey
  );
  const notifier = useNotifier();
  const { t } = useTranslation();

  const onSaveProgress = () => {
    LocalStorageHelpers.set("videoDialog." + props.name, true);
    appStore.setVideosState(props.onWatchedClickObject);
    try {
      props.trainingKey &&
      api.education
        .saveEducationProgress(props.trainingKey)
        .then((res) => {
          if (res.message) {
            notifier.show({ message: t("notifier:error.something_wrong"), theme: "error", timeout: 7 });
            return;
          }
          notifier.show({ message: t("notifier:success.success_training"), theme: "success", timeout: 10 });
          props.refetch?.();
          authStore.refreshInitialInfo();
        })
        .catch(() => notifier.show({ message: t("notifier:error.something_wrong"), theme: "error", timeout: 7 }))
        .finally(() => props.onClose && props.onClose());
    } catch (error) {
      notifier.show({ message: t("notifier:error.something_wrong"), theme: "error", timeout: 7 });
    }
  };

  const handleClickClose = useCallback(() => {
    props.onClose?.();
  }, []);

  const handleGetVideoId = async () => {
    if (props.videoId != null && props.videoId.trim().length > 0) {
      setVideoId(props.videoId);
      return;
    }
    // const r = await api.education.getEducationItems({ key: props.trainingKey });
    // if (r == null) return notifier.show({ message: t("notifier:error.something_wrong"), theme: "error" });
    // const mbVideoId = r.find((item) => item.key == props.trainingKey)?.videoId;
    // console.log(mbVideoId);
    // mbVideoId && setVideoId(mbVideoId);
  };

  const handleLaterClick = () => {
    LocalStorageHelpers.set("videoDialog." + props.name, true);
    appStore.setVideosState(props.onWatchedClickObject);
    props.onClose && props.onClose();
  };

  const onAllowToSaveProgress = () => {
    setAbilityToSave(true);
    // let iFrame = document.getElementById("yt-video-component");
    // iFrame.parentNode.replaceChild(iFrame.cloneNode(), iFrame);
    // let iframe = document.getElementById("yt-video-component");
    // @ts-ignore
    // iframe.src = iframe.src;
  };

  useEffect(() => {
    (props.open ? true : !isPassed) && props.trainingKey && authStore.isAuthorized && handleGetVideoId();
  }, [props.trainingKey, isPassed]);

  // @ts-ignore
  const isVideosState = appStore?.getVideosState[props.name];

  return {
    videoId,
    onAllowToSaveProgress,
    onSaveProgress,
    abilityToSave,
    handleClickClose,
    isPassed,
    isVideosState,
  }
}
