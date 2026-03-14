export type AnalyticsEventName =
  | "form_submit"
  | "whatsapp_click"
  | "phone_click"
  | "cta_click"
  | "scroll_depth"
  | "book_demo_click";

type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(event: AnalyticsEventName, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = { event, ...payload };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(eventPayload);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}
