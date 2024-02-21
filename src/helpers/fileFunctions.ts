export const getFileTypeByName = (fileName: string): "image" | null => {
  const fileExtension = getFileExtensionByName(fileName);
  switch (fileExtension) {
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
      return "image";
    default:
      return null;
  }
};

export const getFileExtensionByName = (fileName: string): string | null => {
  return !!fileName ? fileName.split(".").pop()?.toLowerCase() ?? null : null;
};
