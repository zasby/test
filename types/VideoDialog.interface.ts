export interface IVideoDialog {
  videoId?: string;
  name: string;
  open?: boolean;
  trainingKey: string;
  onClose?: () => void;
  onWatchedClickObject: Object;
  hidden?: boolean;
  autoPlay?: boolean;
  noShowTitle?: boolean;
  refetch?: () => void;
}

export interface IVideoDialogView {
  removeTitle?: boolean;
  isPassed: boolean;
  videoId: string;
  abilityToSave?: boolean;
  onAllowToSaveProgress: () => void;
  onSaveProgress: () => void;
  autoPlay?: boolean;

  handleLaterClick(): void;
}
