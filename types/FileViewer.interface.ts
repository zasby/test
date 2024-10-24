
export interface IFileViewer {
  files?: FilesViewerFileType[];

  onClose?: () => void;
}

export type FilesViewerFileType = {
  src: string;
  name?: string;
};

export interface IFileViewerView {
  files: FilesViewerFileType[];
  currentFileIndex: number;

  onClickPrev: () => void;
  onClickNext: () => void;
  onClickThumbnail: (value: number) => void;
  onClose: () => void;
}
