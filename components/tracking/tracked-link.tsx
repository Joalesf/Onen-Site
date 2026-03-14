"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import type { AnalyticsEventName } from "@/lib/analytics";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName?: AnalyticsEventName;
  eventPayload?: Record<string, string | number | boolean>;
};

export function TrackedLink({ eventName, eventPayload, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        if (eventName) {
          trackEvent(eventName, eventPayload);
        }
        onClick?.(event);
      }}
    />
  );
}
