import { useEffect, useRef, useState } from "react";

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

interface IUseMediaRecorderProps {
  onStart?: () => void;
  onStop?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onError?: (errorType?: TMediaRecorderErrorType) => void;
}

export const useMediaRecorder = (props?: IUseMediaRecorderProps): IUseMediaRecorder => {
  const [recorderStatus, setRecorderStatus] = useState<TMediaRecorderStatus>("idle");
  const [recorderBlob, setRecorderBlob] = useState<Blob | null>(null);
  const [recordingStream, setRecordingStream] = useState<MediaStream>();
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const mediaStream = useRef<MediaStream | null>(null);
  const recordingBlobChunks = useRef<BlobPart[] | null>(null);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const [recordingAudio, setRecordingAudio] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timer>();

  const initRecorder = async (): Promise<boolean> => {
    setRecorderStatus("acquiring_media");
    // @ts-ignore
    navigator.getUserMedia =
      // @ts-ignore
      navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (navigator.mediaDevices) {
      try {
        let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setRecorderStatus("ready");
        mediaRecorder.current = new MediaRecorder(stream);
        mediaStream.current = stream;
        return true;
      } catch (error: any) {
        setRecorderStatus("failed");
        props?.onError?.(TMediaRecorderErrorType.NOT_SUPPORTED);
        console.error("Error while recording #AR-01", error?.name, error?.message);
        return false;
      }
    } else {
      setRecorderStatus("failed");
      props?.onError?.(TMediaRecorderErrorType.NOT_SUPPORTED);
      console.error("Error while recording #AR-04");
      return false;
    }
  };

  const _countTimer = () => {
    setRecordingTime((t) => (t += 1));
  };

  const _startTimer = (): void => {
    timerRef.current = setInterval(_countTimer, 1000);
  };

  const _stopTimer = (): void => {
    clearInterval(timerRef.current);
    timerRef.current = undefined;
  };

  const recordingStart = async () => {
    if (recorderStatus == "recording") return;
    if (!mediaRecorder.current) await initRecorder();
    if (mediaRecorder.current == null) return;
    mediaRecorder.current.ondataavailable = function (event) {
      if (event.data && event.data.size > 0) {
        recordingBlobChunks.current = [...(recordingBlobChunks.current ?? []), event.data];
      }
      saveAudio();
    };
    mediaRecorder.current.onstop = function (event) {
      mediaStream.current?.getTracks().forEach(function (track) {
        if (track.readyState === "live") {
          track.stop();
        }
        // mediaStream.current = null;
        setRecorderStatus("idle");
      });
    };
    mediaRecorder.current.onpause = function (event) {
      _stopTimer();
      mediaRecorder.current?.requestData();
      setRecorderStatus("paused");
    };
    mediaRecorder.current.onresume = function (event) {
      _startTimer();
      setRecorderStatus("recording");
    };
    mediaRecorder.current.start();
    setRecorderStatus("recording");
    _startTimer();
  };

  const recordingStop = () => {
    // if (recorderStatus == "recording") {
    _stopTimer();
    setRecordingTime(0);
    setRecorderBlob(null);
    recordingBlobChunks.current = null;
    mediaRecorder.current?.stop();
    mediaRecorder.current = null;
    // }
  };

  const recordingPause = () => {
    mediaRecorder.current?.pause();
  };

  const recordingResume = async () => {
    // if (mediaRecorder.current?.state == "inactive") return void initRecorder();
    mediaRecorder.current?.resume();
  };

  const saveAudio = () => {
    // setRecorderStatus("loading");
    const blob = new Blob(recordingBlobChunks.current ?? [], { type: "audio/*" });
    const audio = window.URL.createObjectURL(blob);
    setRecordingAudio(audio);
    setRecorderBlob(blob);
    // setRecorderStatus("ready");
  };

  useEffect(() => {
    return () => {
      mediaStream.current?.getTracks().forEach(function (track) {
        if (track.readyState === "live") {
          track.stop();
        }
        // mediaStream.current = null;
        setRecorderStatus("idle");
      });
    };
  }, []);

  return {
    recorderStart: recordingStart,
    recorderStop: recordingStop,
    recorderPause: recordingPause,
    recorderResume: recordingResume,
    recorderStatus: recorderStatus,
    // recordingState: mediaRecorder.current?.state,
    recordingBlob: recorderBlob,
    recordingAudioURL: recordingAudio,
    recordingTime: recordingTime,
    recordingStream: mediaStream.current ?? undefined,
    recordingTrack:
      mediaStream.current == null || mediaStream.current?.getAudioTracks()?.length == 0
        ? null
        : mediaStream.current?.getAudioTracks()[0],
  };
};
