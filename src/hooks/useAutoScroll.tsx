import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 *
 */
export function useAutoScroll() {
  const { pathname } = useLocation();

  //
  const ref = useRef<HTMLDivElement | null>(null);

  //
  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  //
  return ref;
}