import { useRootStore } from "../useRootStore";
import { useMemo, useState } from "react";
import { toJS } from "mobx";
import { IImageViewer } from "../../types";

export const useImageViewer = (props: IImageViewer) => {
  const { appStore } = useRootStore();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handleClose = () => {
    setCurrentImageIndex(0);
    if (props.onClose) {
      props.onClose();
      return;
    }
    appStore.setImagesToViewLinks([]);
  };

  const handlePrevCLick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextCLick = () => {
    const imagesArrayLength = (props.images ?? toJS(appStore.getImagesToViewLinks)).length;
    if (currentImageIndex < imagesArrayLength - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleThumbnailCLick = (value: number) => {
    if (currentImageIndex != value) {
      setCurrentImageIndex(value);
    }
  };

  const images = useMemo(() => {
    return props.images ?? toJS(appStore.getImagesToViewLinks)
  }, [props.images, appStore.getImagesToViewLinks]);

  return {
    images,
    currentImageIndex,
    handlePrevCLick,
    handleNextCLick,
    handleThumbnailCLick,
    handleClose,
  }
}
