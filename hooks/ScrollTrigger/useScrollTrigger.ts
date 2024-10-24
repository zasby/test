import { useEffect, useRef } from "react";
import { IScrollTrigger } from "../../types";

export const useScrollTrigger = (props: IScrollTrigger) => {
  const observableFunction = useRef<Function | null>(null);
  const triggerRef = useRef<Element>();
  const isDisabled = useRef<boolean>(!!props.disabled);
  const observerOptionsInit: IntersectionObserverInit = {
    root: null,
    threshold: 0,
  };

  const observer = new IntersectionObserver((e) => {
    handleIntersect(e[0]);
  }, props.options ?? observerOptionsInit);

  const handleIntersect = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting && !isDisabled.current) {
      if (typeof props.onIntersection === "function") {
        // props.onIntersection();
        observableFunction.current && !props.hidden && observableFunction.current();
      }
    }
  };

  const handleClick = () => {
    if (typeof props.onClick === "function") {
      props.onClick();
    }
  };

  useEffect(() => {
    if (!props.disabled && isDisabled.current) {
      observer.observe(triggerRef.current as Element);
    }
  }, [props.disabled, isDisabled.current]);

  useEffect(() => {
    observer.observe(triggerRef.current as Element);
  }, []);

  useEffect(() => {
    observableFunction.current = props.onIntersection;
  }, [props.onIntersection]);

  useEffect(() => {
    isDisabled.current = !!props.disabled;
  }, [props.disabled]);

  return {
    triggerRef,
    handleClick,
  }
}
