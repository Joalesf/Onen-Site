"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const thresholds = [25, 50, 75, 100];

export function AnalyticsTracker() {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    const onScroll = () => {
      const body = document.documentElement;
      const scrollTop = body.scrollTop || document.body.scrollTop;
      const scrollHeight = body.scrollHeight - body.clientHeight;
      const progress = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;

      thresholds.forEach((threshold) => {
        if (progress >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          trackEvent("scroll_depth", { percent: threshold });
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
