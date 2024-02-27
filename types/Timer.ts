export interface IUseTimer {
  start: (minutes: number) => void;
  end: () => void;
  isEnd: boolean;
  remainingTime: string;
}