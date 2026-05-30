/**
 * Utility for Google Analytics 4 tracking.
 * Safe to call client-side or server-side.
 * Silently does nothing if GA is not configured or fails to load.
 */
export const trackEvent = (action: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined") {
    const windowWithGtag = window as unknown as {
      gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    };
    if (typeof windowWithGtag.gtag === "function") {
      try {
        windowWithGtag.gtag("event", action, params);
        if (process.env.NODE_ENV === "development") {
          console.log(`[GA4 Event] Action: ${action}`, params);
        }
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.error("Error sending GA4 event:", err);
        }
      }
    }
  }
};
