"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log("Web Vital:", metric.name, metric.value, metric.rating);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === "production") {
      // Example: Send to Google Analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", metric.name, {
          custom_parameter_1: metric.value,
          custom_parameter_2: metric.rating,
          custom_parameter_3: metric.id,
        });
      }

      // Example: Send to other analytics services
      if (typeof window !== "undefined") {
        // Send to your preferred analytics service
        fetch("/api/web-vitals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: metric.name,
            value: metric.value,
            rating: metric.rating,
            id: metric.id,
            navigationType: metric.navigationType,
            entries: metric.entries,
            url: window.location.href,
            timestamp: Date.now(),
          }),
        }).catch((error) => {
          console.error("Failed to send web vital:", error);
        });
      }
    }

    // Performance monitoring thresholds
    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      FCP: { good: 1800, poor: 3000 },
      FID: { good: 100, poor: 300 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 },
      INP: { good: 200, poor: 500 },
    };

    // Alert for poor performance in development
    if (process.env.NODE_ENV === "development") {
      const threshold = thresholds[metric.name as keyof typeof thresholds];
      if (threshold && metric.value > threshold.poor) {
        console.warn(
          `⚠️ Poor ${metric.name}: ${metric.value} (threshold: ${threshold.poor})`
        );
      }
    }
  });

  return null;
}

// Performance monitoring utility
export function performanceMonitor() {
  if (typeof window === "undefined") return;

  // Monitor long tasks
  if ("PerformanceObserver" in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration}ms`);
          }
        });
      });
      longTaskObserver.observe({ entryTypes: ["longtask"] });

      // Monitor layout shifts
      const clsObserver = new PerformanceObserver((list) => {
        let cumulativeScore = 0;
        list.getEntries().forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            cumulativeScore += (entry as any).value;
          }
        });
        if (cumulativeScore > 0.1) {
          console.warn(`Cumulative Layout Shift: ${cumulativeScore}`);
        }
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    } catch (error) {
      console.error("Performance observer setup failed:", error);
    }
  }

  // Monitor memory usage (Chrome only)
  if ("memory" in performance) {
    setInterval(() => {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.9) {
        console.warn("High memory usage detected");
      }
    }, 30000); // Check every 30 seconds
  }
}

// Call this in your main app component
export function initPerformanceMonitoring() {
  if (typeof window !== "undefined") {
    performanceMonitor();
  }
}
