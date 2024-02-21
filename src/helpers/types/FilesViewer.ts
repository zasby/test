interface IFileViewer {
  files?: FilesViewerFileType[];

  onClose?: () => void;
}

export type FilesViewerFileType = {
  src: string;
  name?: string;
};