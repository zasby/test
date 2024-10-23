export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function getBlobDuration(blob: Blob): Promise<number> {
  const tempVideoEl = document.createElement("video");

  const durationP = new Promise((resolve, reject) => {
    tempVideoEl.addEventListener("loadedmetadata", () => {
      // Chrome bug: https://bugs.chromium.org/p/chromium/issues/detail?id=642012
      if (tempVideoEl.duration === Infinity) {
        tempVideoEl.currentTime = Number.MAX_SAFE_INTEGER;
        tempVideoEl.ontimeupdate = () => {
          tempVideoEl.ontimeupdate = null;
          resolve(tempVideoEl.duration);
          tempVideoEl.currentTime = 0;
        };
      }
      // Normal behavior
      else resolve(tempVideoEl.duration);
    });
    // @ts-ignore
    tempVideoEl.onerror = (event) => reject(event.target.error);
  });

  // @ts-ignore
  tempVideoEl.src = typeof blob === "string" || blob instanceof String ? blob : window.URL.createObjectURL(blob);

  // @ts-ignore
  return durationP;
}
