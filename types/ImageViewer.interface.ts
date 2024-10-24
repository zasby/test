import { ImgsViewerImageType, ImgsViewerProps } from "react-images-viewer";

export interface IImageViewer {
  images?: ImgsViewerImageType[];
  viewerProps?: ImgsViewerProps;

  onClose?: () => void;
}
