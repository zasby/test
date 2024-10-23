declare module "react-images-viewer" {
  import * as React from "react";

  export type ImgsViewerImageType = {
    src: string;
    srcSet?: string[];
    caption?: string;
    thumbnail?: string;
  };

  export type ImgsViewerProps = {
    backdropCloseable?: boolean;
    currImg?: number;
    customControls?: Array<any>;
    enableKeyboardInput?: boolean;
    imgs?: Array<ImgsViewerImageType>;
    imgCountSeparator?: string;
    isOpen?: boolean;
    onClickPrev?: () => void;
    onClickNext?: () => void;
    onClickImg?: () => void;
    onClickThumbnail?: (value: number) => void;
    onClose?: () => void;
    preloadNextImg?: boolean;
    preventAutoScroll?: boolean;
    showCloseBtn?: boolean;
    showImgCount?: boolean;
    showThumbnails?: boolean;
    theme?: Object<any>;
    width?: number;
  };

  export default class ImgsViewer extends React.Component<ImgsViewerProps> {
    //
  }
}
