import { useState } from "react";
import { IAvatarUserSettings } from "../../types";

export const useAvatarUserSettings = (props: IAvatarUserSettings) => {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState<boolean>(false);

  const handleUploadDialogClose = () => {
    setIsUploadDialogOpen(false);
  };

  const handleUploadDialogOpen = () => {
    setIsUploadDialogOpen(true);
  };

  const handleUploadDialogSuccess = (id: number) => {
    setIsUploadDialogOpen(false);
    props.onUploadSuccess(id);
  };

  const handleDeleteClick = () => {
    props.onDeleteClick();
  };

  return {
    isUploadDialogOpen,
    handleUploadDialogOpen,
    handleUploadDialogClose,
    handleUploadDialogSuccess,
    handleDeleteClick,
  }
}
