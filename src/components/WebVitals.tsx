"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Only send in production
    if (process.env.NODE_ENV === "production") {
      // Send to Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", metric.name, {
          event_category: "Web Vitals",
          value: Math.round(
            metric.name === "CLS" ? metric.value * 1000 : metric.value
          ),
          event_label: metric.id,
          non_interaction: true,
        });
      }

      // Log critical metrics to console in development
      const thresholds = {
        FCP: { good: 1800, poor: 3000 },
        LCP: { good: 2500, poor: 4000 },
        FID: { good: 100, poor: 300 },
        CLS: { good: 0.1, poor: 0.25 },
        TTFB: { good: 800, poor: 1800 },
        INP: { good: 200, poor: 500 },
      };

      const threshold = thresholds[metric.name as keyof typeof thresholds];
      if (threshold) {
        const rating =
          metric.value <= threshold.good
            ? "good"
            : metric.value <= threshold.poor
            ? "needs-improvement"
            : "poor";

        console.log(`📊 ${metric.name}: ${metric.value} (${rating})`, {
          metric: metric.name,
          value: metric.value,
          rating,
          target: `<${threshold.good}`,
        });
      }
    }
  });

  return null;
}
