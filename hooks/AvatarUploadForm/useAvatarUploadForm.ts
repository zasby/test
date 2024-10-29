import { createRef, useState } from "react";
import { useNotifier } from "../useNotifier";
import { useTranslation } from "react-i18next";
import { api } from "../../services";
import { IAvatarUploadForm } from "../../types";

export const useAvatarUploadForm = (props: IAvatarUploadForm) => {
  const uploadInputRef = createRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const notifier = useNotifier();
  const { t } = useTranslation();

  const handleClose = () => {
    setSelectedFile(null);
    props.onClose();
  };

  const handleUpload = async () => {
    if (selectedFile == null) {
      return;
    }

    let formData = new FormData();
    formData.append("files", selectedFile);
    const r = await api.staticFile.upload(formData, "image");
    notifier.showSuccessError(t("notifier:success.file_upload"), t("notifier:error.file_upload"), r != null);
    if (r == null) {
      return;
    } else {
      setSelectedFile(null);
      props.onUpload(r[0].id as number, r[0].url as string);
    }
  };

  const handleChangeClick = () => {
    // @ts-ignore
    uploadInputRef.current?.click();
  };

  const handleInputChanged = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  return {
    uploadInputRef,
    selectedFile,
    setSelectedFile,
    handleUpload,
    handleChangeClick,
    handleInputChanged,
    handleClose,
  }
}
