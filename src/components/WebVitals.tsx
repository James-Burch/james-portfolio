"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Only log in development mode, and only significant metrics
    if (process.env.NODE_ENV === "development") {
      // Only log poor performance to avoid console noise
      const thresholds = {
        CLS: { poor: 0.25 },
        FCP: { poor: 3000 },
        FID: { poor: 300 },
        LCP: { poor: 4000 },
        TTFB: { poor: 1800 },
        INP: { poor: 500 },
      };

      const threshold = thresholds[metric.name as keyof typeof thresholds];
      if (threshold && metric.value > threshold.poor) {
        console.warn(
          `⚠️ Poor ${metric.name}: ${Math.round(metric.value)} (threshold: ${
            threshold.poor
          })`
        );
      } else if (metric.rating === "good") {
        console.log(`✅ Good ${metric.name}: ${Math.round(metric.value)}`);
      }
    }

    // Send to analytics in production only
    if (process.env.NODE_ENV === "production") {
      // Example: Send to Google Analytics (only if gtag exists)
      if (typeof window !== "undefined" && "gtag" in window) {
        (window as any).gtag("event", metric.name, {
          value: Math.round(
            metric.name === "CLS" ? metric.value * 1000 : metric.value
          ),
          metric_id: metric.id,
          metric_rating: metric.rating,
          custom_map: {
            metric_name: metric.name,
          },
        });
      }

      // Send to your analytics endpoint (optional)
      if (typeof window !== "undefined") {
        fetch("/api/web-vitals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: metric.name,
            value: Math.round(metric.value),
            rating: metric.rating,
            id: metric.id,
            url: window.location.href,
            timestamp: Date.now(),
          }),
        }).catch(() => {
          // Silently fail to avoid console errors
        });
      }
    }
  });

  return null;
}

// Optional: Performance monitoring for development
export function performanceMonitor() {
  if (typeof window === "undefined" || process.env.NODE_ENV !== "development") {
    return;
  }

  // Monitor long tasks (only in development)
  if ("PerformanceObserver" in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${Math.round(entry.duration)}ms`);
          }
        });
      });
      longTaskObserver.observe({ entryTypes: ["longtask"] });
    } catch (error) {
      // Silently fail if observer not supported
    }
  }
}

// Initialize performance monitoring (call once in your app)
export function initPerformanceMonitoring() {
  if (typeof window !== "undefined") {
    performanceMonitor();
  }
}
