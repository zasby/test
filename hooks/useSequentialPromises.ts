export interface IUseSequentialPromises {
  reset: () => void;
  add(x: () => Promise<void>): void;
  run(): Promise<void>;
}

export function useSequentialPromises(): IUseSequentialPromises {
  let promises: (() => Promise<void>)[] = [];

  function add(x: () => Promise<void>) {
    promises = [...promises, x];
  }

  async function run() {
    for (const x of promises) await x();
  }

  function reset() {
    promises = [];
  }

  return {
    reset,
    add,
    run,
  };
}
