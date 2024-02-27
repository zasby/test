import { useRef, useState } from "react";

const pad = (n: number, pad: number = 2) => (String(n) as any).padStart(pad, "0").substring(0, pad);

interface IUseStopWatch {
  useFractionalPart?: boolean;
}

type TStopwatchAction = () => void;
type TStopwatchTime = { time: number; format: string };
interface IUseStopwatch {
  time: TStopwatchTime;
  start: TStopwatchAction;
  stop: TStopwatchAction;
  reset: TStopwatchAction;
  isCounting: boolean;
}

export const useStopwatch = (params?: IUseStopWatch): IUseStopwatch => {
  // const [timerId, setTimerId] = useState<ReturnType<typeof setInterval>>();
  const timerId = useRef<ReturnType<typeof setInterval>>();
  const [time, setTime] = useState({ time: 0, format: params?.useFractionalPart ? "00:00.0" : "00:00" });
  const [isCounting, setIsCounting] = useState<boolean>(false);

  const start: TStopwatchAction = () => {
    // if (timerId.current != null) return;
    setIsCounting(true);
    timerId.current = setInterval(() => {
      setTime((_time: TStopwatchTime) => {
        let remainingTime: number = _time.time + 100;

        let hours: number = 0;
        let minutes: number = 0;
        let seconds: number = 0;
        let milliseconds: number = 0;

        if (remainingTime / 3600000 >= 1) {
          hours = Math.floor(remainingTime / 3600000);
          remainingTime -= hours * 3600000;
        }

        if (remainingTime / 60000 >= 1) {
          minutes = Math.floor(remainingTime / 60000);
          remainingTime -= minutes * 60000;
        }

        if (remainingTime / 1000 >= 1) {
          seconds = Math.floor(remainingTime / 1000);
          remainingTime -= seconds * 1000;
        }

        if (params?.useFractionalPart && remainingTime > 0) {
          milliseconds = remainingTime;
        }

        return {
          time: _time.time + 100,
          // TODO: Add hours
          format: params?.useFractionalPart
            ? `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 1)}`
            : `${pad(minutes)}:${pad(seconds)}`,
        };
      });
    }, 100);
  };

  const stop: TStopwatchAction = () => {
    setIsCounting(false);
    clearInterval(timerId.current);
  };

  const reset: TStopwatchAction = () => {
    setIsCounting(false);
    clearInterval(timerId.current);
    setTime({
      time: 0,
      format: params?.useFractionalPart ? "00:00.0" : "00:00",
    });
  };

  return {
    time,
    isCounting,
    start,
    stop,
    reset,
  };
};
