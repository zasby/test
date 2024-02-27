import { useState } from "react";

export const useScrollWithShadow = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const [clientWidth, setClientWidth] = useState<number>(0);

  const onScrollHandler = (event: UIEvent) => {
    if (event.target == null) return;
    const target = event.target as HTMLDivElement;
    setScrollTop(target.scrollTop);
    setScrollLeft(target.scrollLeft);
    setScrollHeight(target.scrollHeight);
    setScrollWidth(target.scrollWidth);
    setClientHeight(target.clientHeight);
    setClientWidth(target.clientWidth);
  };

  function getBoxShadow() {
    const isBottom = clientHeight === scrollHeight - scrollTop;
    const isTop = scrollTop === 0;
    const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;

    const hasHorizontalScroll = scrollWidth > clientWidth;
    const hasVerticalScroll = scrollHeight > clientHeight;

    let boxShadow = "none";
    const top = "inset 0 8px 5px -5px rgb(200 200 200 / 1)";
    const bottom = "inset 0 -8px 5px -5px rgb(200 200 200 / 1)";

    if (isTop) {
      boxShadow = bottom;
    } else if (isBetween) {
      boxShadow = `${top}, ${bottom}`;
    } else if (isBottom) {
      boxShadow = top;
    }
    return boxShadow;
  }

  return { boxShadow: getBoxShadow(), onScrollHandler };
};
