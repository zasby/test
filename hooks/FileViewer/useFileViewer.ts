import { useRootStore } from "../useRootStore";
import { useEffect, useState } from "react";
import { toJS } from "mobx";
import { IFileViewer } from "../../types";

export const useFileViewer = (props: IFileViewer) => {
  const { appStore } = useRootStore();
  const [currentFileIndex, setCurrentFileIndex] = useState<number>(0);

  const handleClose = () => {
    setCurrentFileIndex(0);
    if (props.onClose) {
      props.onClose();
      return;
    }
    appStore.setFilesToViewLinks([]);
  };

  const handlePrevCLick = () => {
    if (currentFileIndex > 0) {
      setCurrentFileIndex(currentFileIndex - 1);
    }
  };

  const handleNextCLick = () => {
    const filesArrayLength = (props.files ?? toJS(appStore.getFilesToViewLinks)).length;
    if (currentFileIndex < filesArrayLength - 1) {
      setCurrentFileIndex(currentFileIndex + 1);
    }
  };

  const handleThumbnailCLick = (value: number) => {
    if (currentFileIndex != value) {
      setCurrentFileIndex(value);
    }
  };

  useEffect(() => {
    if (
      (props.files && props.files.length > 0) ||
      (toJS(appStore.getFilesToViewLinks) && toJS(appStore.getFilesToViewLinks).length > 0)
    ) {
      document.addEventListener("keydown", (event: any) => handleArrows(event), true);
    } else {
      document.removeEventListener("keydown", (event: any) => handleArrows(event), true);
    }
  }, [toJS(appStore.getFilesToViewLinks), props.files]);

  const handleArrows = (event: any) => {
    if (
      !(props.files && props.files.length > 0) &&
      !(toJS(appStore.getFilesToViewLinks) && toJS(appStore.getFilesToViewLinks).length > 0)
    )
      return;
    switch (event.key) {
      case "ArrowLeft":
        handlePrevCLick();
        break;
      case "ArrowRight":
        handleNextCLick();
        break;
      case "Escape":
        event.stopPropagation();
        event.stopImmediatePropagation();
        handleClose();
        break;
    }
  };

  const files = props.files ?? toJS(appStore.getFilesToViewLinks);

  return {
    files,
    currentFileIndex,
    handlePrevCLick,
    handleNextCLick,
    handleThumbnailCLick,
    handleClose,
  }
}
