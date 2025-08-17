export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Log page views to Google Analytics
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPortfolioEvents = {
  // Project interactions
  viewProject: (projectName: string) => {
    event({
      action: 'view_project',
      category: 'engagement',
      label: projectName,
    });
  },

  clickLiveDemo: (projectName: string) => {
    event({
      action: 'click_live_demo',
      category: 'project_interaction',
      label: projectName,
    });
  },

  clickGithub: (projectName: string) => {
    event({
      action: 'click_github',
      category: 'project_interaction',
      label: projectName,
    });
  },

  // Contact form tracking
  startContactForm: () => {
    event({
      action: 'start_contact_form',
      category: 'conversion',
      label: 'contact_engagement',
    });
  },

  submitContactForm: (inquiryType: string) => {
    event({
      action: 'submit_contact_form',
      category: 'conversion',
      label: inquiryType,
      value: 1,
    });
  },

  // Section engagement
  viewSection: (sectionName: string) => {
    event({
      action: 'view_section',
      category: 'engagement',
      label: sectionName,
    });
  },

  // External links
  clickLinkedIn: () => {
    event({
      action: 'click_linkedin',
      category: 'external_link',
      label: 'linkedin_profile',
    });
  },

  clickEmail: () => {
    event({
      action: 'click_email',
      category: 'external_link',
      label: 'direct_email',
    });
  },

  // Navigation patterns
  viewAllProjects: () => {
    event({
      action: 'view_all_projects',
      category: 'navigation',
      label: 'projects_page',
    });
  },

  // Time on page milestones (for engagement depth)
  timeOnPage: (seconds: number) => {
    if (seconds === 30 || seconds === 60 || seconds === 180) {
      event({
        action: 'time_on_page',
        category: 'engagement',
        label: `${seconds}_seconds`,
        value: seconds,
      });
    }
  },
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}