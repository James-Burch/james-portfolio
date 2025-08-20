// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// // Log page views to Google Analytics
// export const pageview = (url: string) => {
//   if (typeof window !== 'undefined' && window.gtag) {
//     window.gtag('config', GA_TRACKING_ID, {
//       page_location: url,
//     });
//   }
// };

// // Log specific events
// export const event = ({
//   action,
//   category,
//   label,
//   value,
// }: {
//   action: string;
//   category: string;
//   label?: string;
//   value?: number;
// }) => {
//   if (typeof window !== 'undefined' && window.gtag) {
//     window.gtag('event', action, {
//       event_category: category,
//       event_label: label,
//       value: value,
//     });
//   }
// };

// export const trackPortfolioEvents = {
//   // Project interactions
//   viewProject: (projectName: string) => {
//     event({
//       action: 'view_project',
//       category: 'engagement',
//       label: projectName,
//     });
//   },

//   clickLiveDemo: (projectName: string) => {
//     event({
//       action: 'click_live_demo',
//       category: 'project_interaction',
//       label: projectName,
//     });
//   },

//   clickGithub: (projectName: string) => {
//     event({
//       action: 'click_github',
//       category: 'project_interaction',
//       label: projectName,
//     });
//   },

//   // Contact form tracking
//   startContactForm: () => {
//     event({
//       action: 'start_contact_form',
//       category: 'conversion',
//       label: 'contact_engagement',
//     });
//   },

//   submitContactForm: (inquiryType: string) => {
//     event({
//       action: 'submit_contact_form',
//       category: 'conversion',
//       label: inquiryType,
//       value: 1,
//     });
//   },

//   // Section engagement
//   viewSection: (sectionName: string) => {
//     event({
//       action: 'view_section',
//       category: 'engagement',
//       label: sectionName,
//     });
//   },

//   // External links
//   clickLinkedIn: () => {
//     event({
//       action: 'click_linkedin',
//       category: 'external_link',
//       label: 'linkedin_profile',
//     });
//   },

//   clickEmail: () => {
//     event({
//       action: 'click_email',
//       category: 'external_link',
//       label: 'direct_email',
//     });
//   },

//   // Navigation patterns
//   viewAllProjects: () => {
//     event({
//       action: 'view_all_projects',
//       category: 'navigation',
//       label: 'projects_page',
//     });
//   },

//   // Time on page milestones (for engagement depth)
//   timeOnPage: (seconds: number) => {
//     if (seconds === 30 || seconds === 60 || seconds === 180) {
//       event({
//         action: 'time_on_page',
//         category: 'engagement',
//         label: `${seconds}_seconds`,
//         value: seconds,
//       });
//     }
//   },
// };

// // Declare gtag for TypeScript
// declare global {
//   interface Window {
//     gtag: (...args: any[]) => void;
//   }
// }

// src/lib/analytics.ts

// Type definitions for analytics events
interface AnalyticsEvent {
  name: string;
  id: string;
  value: number;
  [key: string]: string | number;
}

interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Web Vitals tracking
export const trackWebVitals = (metric: AnalyticsEvent) => {
  // Log metrics in development
  if (process.env.NODE_ENV === "development") {
    console.log("Web Vital:", metric);
  }

  // Send to Google Analytics in production (if configured)
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    process.env.NODE_ENV === "production"
  ) {
    window.gtag("event", metric.name, {
      custom_map: { metric_id: "custom_id" },
      custom_id: metric.id,
      value: Math.round(metric.value),
      event_category: "Web Vitals",
      event_label: metric.id,
      non_interaction: true,
    });
  }
};

// Portfolio-specific event tracking
export const trackPortfolioEvent = (event: GAEvent) => {
  if (
    typeof window !== "undefined" &&
    window.gtag &&
    process.env.NODE_ENV === "production"
  ) {
    window.gtag("event", event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log("Portfolio Event:", event);
  }
};

// Specific tracking functions for portfolio interactions
export const trackProjectView = (projectName: string) => {
  trackPortfolioEvent({
    action: "view_project",
    category: "Portfolio",
    label: projectName,
  });
};

export const trackContactFormSubmit = () => {
  trackPortfolioEvent({
    action: "submit_contact_form",
    category: "Contact",
    label: "Contact Form",
  });
};

export const trackResumeDownload = () => {
  trackPortfolioEvent({
    action: "download_resume",
    category: "Resume",
    label: "PDF Download",
  });
};

export const trackExternalLink = (
  url: string,
  linkType: "demo" | "github" | "social"
) => {
  trackPortfolioEvent({
    action: "click_external_link",
    category: "External Links",
    label: `${linkType}: ${url}`,
  });
};

// Performance monitoring
export const trackPageLoad = (pageName: string, loadTime: number) => {
  trackPortfolioEvent({
    action: "page_load",
    category: "Performance",
    label: pageName,
    value: Math.round(loadTime),
  });
};

// Type augmentation for gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

export default {
  trackWebVitals,
  trackPortfolioEvent,
  trackProjectView,
  trackContactFormSubmit,
  trackResumeDownload,
  trackExternalLink,
  trackPageLoad,
};
