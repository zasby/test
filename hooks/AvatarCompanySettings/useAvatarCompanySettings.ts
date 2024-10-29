import { useState } from "react";
import { IAvatarCompanySettings } from "../../types";

export const useAvatarCompanySettings = (props: IAvatarCompanySettings) => {
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
