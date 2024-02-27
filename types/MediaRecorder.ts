export interface IUseMediaRecorder {
  recordingTime: number;
  recordingBlob: Blob | null;
  recordingAudioURL: string | null;
  // recordingState?: RecordingState;
  recorderStatus: TMediaRecorderStatus;
  recordingStream?: MediaStream;
  recordingTrack?: MediaStreamTrack | null;
  recorderStart: () => void;
  recorderPause: () => void;
  recorderResume: () => void;
  recorderStop: () => void;
}

export enum TMediaRecorderErrorType {
  "NOT_SUPPORTED",
  "NO_PERMISSION",
}

export type TMediaRecorderStatus =
  | "idle"
  | "loading"
  | "acquiring_media"
  | "ready"
  | "recording"
  | "paused"
  | "stopping"
  | "stopped"
  | "failed";