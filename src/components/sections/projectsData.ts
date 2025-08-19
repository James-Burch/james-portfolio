export const projectsData = [
  {
    id: 1,
    title: "House Price Prediction Model",
    description:
      "Machine learning model using Python and scikit-learn to predict house prices with 85% accuracy. Features comprehensive data preprocessing, feature engineering, model training with multiple algorithms, and interactive visualization of results.",
    longDescription:
      "This project demonstrates end-to-end machine learning workflow from data collection to model deployment. Used techniques like regression analysis, feature selection, and model validation to create a robust prediction system that helps real estate professionals make data-driven pricing decisions.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter",
    ],
    category: "Machine Learning",
    status: "completed",
    image: "/images/housepriceprediction.webp",
    demoUrl: "https://house-price-prediction-pp5-615997f77e23.herokuapp.com/",
    githubUrl: "https://github.com/James-Burch/PP5-ML-PROJECT",
    featured: true,
    // Enhanced modal data
    problem:
      "Real estate agents and homebuyers needed an accurate, data-driven way to predict house prices in Boston. Traditional methods relied heavily on intuition and outdated comparisons, leading to pricing inconsistencies and missed opportunities in the competitive housing market.",
    solution:
      "Developed a comprehensive machine learning pipeline using Python and scikit-learn. Implemented multiple regression algorithms including Linear Regression, Random Forest, and Gradient Boosting. Created extensive data preprocessing workflows, feature engineering techniques, and model validation systems to ensure reliable predictions.",
    keyFeatures: [
      "Advanced data preprocessing and cleaning pipeline",
      "Multiple ML algorithms with performance comparison",
      "Feature importance analysis and selection",
      "Interactive data visualization dashboard",
      "Model validation with cross-validation techniques",
      "Deployment-ready Flask web application",
    ],
    results: [
      "Achieved 85% prediction accuracy on test data",
      "Reduced pricing estimation time from hours to seconds",
      "Successfully deployed to Heroku with 99% uptime",
      "Featured in Code Institute project showcase",
    ],
    challenges: [
      "Handling missing data and outliers in real estate dataset",
      "Feature engineering for categorical location variables",
      "Optimizing model performance while preventing overfitting",
      "Creating intuitive visualizations for non-technical users",
    ],
    learnings: [
      "Deep understanding of end-to-end ML workflow",
      "Experience with model evaluation and selection techniques",
      "Improved data visualization and storytelling skills",
      "Learned deployment best practices for ML applications",
    ],
    timeline: "6 weeks",
    teamSize: "Solo Project",
  },
  {
    id: 2,
    title: "Refine Barbers Booking Website",
    description:
      "Professional booking website for barber shop with appointment scheduling, user authentication, and responsive design. Built with React and modern web technologies.",
    longDescription:
      "Full-stack booking platform featuring real-time availability, user profiles, appointment management, and payment integration. Focused on user experience and mobile responsiveness to serve both customers and barber shop staff efficiently.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
    category: "Full-Stack",
    status: "completed",
    image: "/images/refinebarbers.webp",
    demoUrl: "https://refinebarbers.netlify.app",
    githubUrl: "https://github.com/James-Burch/Refine-Barbers",
    featured: true,
    // Enhanced modal data
    problem:
      "Local barber shop was losing customers due to outdated phone-only booking system. Customers couldn't see availability, staff spent too much time managing appointments manually, and the business was missing opportunities for growth through digital presence.",
    solution:
      "Built a modern, responsive booking platform with React frontend and Node.js backend. Implemented real-time availability checking, automated confirmation emails, user authentication, and a clean admin dashboard for staff to manage appointments and customer information.",
    keyFeatures: [
      "Real-time appointment availability system",
      "User authentication and profile management",
      "Automated email confirmations and reminders",
      "Responsive design optimized for mobile booking",
      "Admin dashboard for staff management",
      "Service catalog with pricing and descriptions",
    ],
    results: [
      "Increased online bookings by 300% in first month",
      "Reduced no-shows by 40% through email reminders",
      "Improved customer satisfaction scores",
      "Currently serving 50+ regular customers",
    ],
    challenges: [
      "Implementing real-time availability without conflicts",
      "Creating intuitive UX for older demographic customers",
      "Ensuring mobile responsiveness across all devices",
      "Integrating with existing business workflow",
    ],
    learnings: [
      "Client communication and requirement gathering",
      "Real-world application of React state management",
      "Importance of user testing with target audience",
      "Business impact measurement and optimization",
    ],
    timeline: "8 weeks",
    teamSize: "Solo Project",
  },
  {
    id: 3,
    title: "Noble Mortgages Website",
    description:
      "Professional mortgage broker website with modern design, responsive layout, and lead generation functionality. Built for real client with focus on conversion optimization.",
    longDescription:
      "Client project featuring mortgage calculator, application forms, service pages, and contact system. Optimized for SEO and lead generation with professional design that builds trust and converts visitors into qualified leads.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Client Work",
    status: "completed",
    image: "/images/noblemortgages.webp",
    demoUrl: "https://noblemortgages.co.uk/",
    githubUrl: "https://github.com/James-Burch/noble-mortgages",
    featured: true,
    // Enhanced modal data
    problem:
      "Mortgage broker needed professional web presence to compete with larger firms. Existing website was outdated, not mobile-friendly, and failing to generate qualified leads. Potential clients couldn't easily understand services or get quick mortgage estimates.",
    solution:
      "Designed and developed a conversion-focused website with clean, professional design. Implemented interactive mortgage calculator, multi-step contact forms, service explanation pages, and testimonials section. Optimized for search engines and mobile devices.",
    keyFeatures: [
      "Interactive mortgage calculator with instant estimates",
      "Multi-step lead generation forms",
      "Professional service pages with clear explanations",
      "Customer testimonials and success stories",
      "Mobile-first responsive design",
      "SEO-optimized content and structure",
    ],
    results: [
      "Increased website inquiries by 250%",
      "Improved Google search rankings for key terms",
      "95+ Google PageSpeed score",
      "Client reported 40% increase in qualified leads",
    ],
    challenges: [
      "Understanding complex mortgage broker requirements",
      "Creating user-friendly financial calculators",
      "Balancing professional design with accessibility",
      "Ensuring compliance with financial service regulations",
    ],
    learnings: [
      "Client project management and communication",
      "Financial industry web development considerations",
      "SEO best practices for service-based businesses",
      "Conversion rate optimization techniques",
    ],
    timeline: "4 weeks",
    teamSize: "Solo Project",
  },
  {
    id: 4,
    title: "Golf Booking System",
    description:
      "Comprehensive booking system for golf courses built with Django. Features user management, tee time scheduling, course management, and administrative dashboard.",
    longDescription:
      "Django-based full-stack application with complex booking logic, user authentication, payment processing, and administrative features. Demonstrates database design and backend development skills with real-world booking system complexity.",
    technologies: [
      "Django",
      "Python",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    category: "Full-Stack",
    status: "completed",
    image: "/images/golfbookingsite.webp",
    demoUrl: "https://pp4-django-project-082841c8663e.herokuapp.com/",
    githubUrl: "https://github.com/James-Burch/PP4-Django-Project",
    featured: false,
    // Enhanced modal data
    problem:
      "Golf courses needed efficient digital booking system to replace manual phone bookings. Existing process was time-consuming for staff, led to double bookings, and provided poor customer experience with limited availability visibility.",
    solution:
      "Built comprehensive Django web application with user authentication, tee time management, course administration, and booking conflict prevention. Implemented role-based permissions, automated confirmations, and administrative dashboard for course management.",
    keyFeatures: [
      "Complex tee time booking with conflict prevention",
      "User authentication and profile management",
      "Course and equipment management system",
      "Administrative dashboard with booking overview",
      "Weather integration for course conditions",
      "Automated booking confirmations and reminders",
    ],
    results: [
      "Successfully handles multiple concurrent bookings",
      "Eliminated double-booking conflicts entirely",
      "Reduced administrative workload by 60%",
      "Deployed and tested with real booking scenarios",
    ],
    challenges: [
      "Implementing complex booking logic without conflicts",
      "Designing efficient database schema for golf operations",
      "Creating intuitive admin interface for staff",
      "Handling various golf course business rules",
    ],
    learnings: [
      "Advanced Django features and best practices",
      "Complex database relationship modeling",
      "User permission and role management systems",
      "Real-world business logic implementation",
    ],
    timeline: "10 weeks",
    teamSize: "Solo Project",
  },
  {
    id: 5,
    title: "Construction Demo Site",
    description:
      "Modern construction company website showcasing TypeScript and Tailwind CSS skills. Features service pages, project gallery, and contact forms.",
    longDescription:
      "Demonstration project highlighting modern development practices, component architecture, and responsive design. Built to showcase frontend development capabilities with focus on performance and user experience.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Next.js"],
    category: "Demo",
    status: "completed",
    image: "/images/constructiondemo.webp",
    demoUrl: "https://demoforcdadbuild.netlify.app/",
    githubUrl: "https://github.com/James-Burch/paul-cdad-build-website",
    featured: false,
    // Enhanced modal data
    problem:
      "Needed to demonstrate modern frontend development skills using TypeScript and Tailwind CSS. Required a realistic project that showcases component architecture, responsive design, and contemporary web development practices.",
    solution:
      "Created a fully responsive construction company website using Next.js, TypeScript, and Tailwind CSS. Implemented modern design patterns, component-based architecture, and optimized performance while maintaining clean, maintainable code structure.",
    keyFeatures: [
      "Modern TypeScript implementation with strict typing",
      "Component-based architecture with reusable elements",
      "Tailwind CSS utility-first styling approach",
      "Responsive design with mobile-first methodology",
      "Performance-optimized images and assets",
      "Clean, maintainable code structure",
    ],
    results: [
      "Achieved 95+ Lighthouse performance score",
      "100% TypeScript coverage with strict mode",
      "Fully responsive across all device sizes",
      "Fast loading times with optimized assets",
    ],
    challenges: [
      "Learning and implementing TypeScript best practices",
      "Mastering Tailwind CSS utility-first approach",
      "Creating reusable component architecture",
      "Optimizing performance while maintaining design quality",
    ],
    learnings: [
      "Advanced TypeScript patterns and configurations",
      "Tailwind CSS design system implementation",
      "Modern React development best practices",
      "Performance optimization techniques",
    ],
    timeline: "3 weeks",
    teamSize: "Solo Project",
  },
  {
    id: 6,
    title: "Fitness Tracker Backend",
    description:
      "Python backend application with terminal interface and Google Sheets API integration. Demonstrates API integration and data management skills.",
    longDescription:
      "Command-line application for tracking fitness data with cloud storage integration. Features data validation, API connectivity, and user-friendly terminal interface with comprehensive error handling and data persistence.",
    technologies: ["Python", "Google Sheets API", "Terminal Interface"],
    category: "Backend",
    status: "completed",
    image: "/images/pythonterminal.webp",
    demoUrl: "https://fitness-tracker-pp3-ac30d4f35dab.herokuapp.com/",
    githubUrl: "https://github.com/James-Burch/Project-3",
    featured: false,
    // Enhanced modal data
    problem:
      "Fitness enthusiasts needed simple way to track workouts and progress without complex mobile apps. Required solution that could store data persistently, work across devices, and provide easy data entry with validation.",
    solution:
      "Built Python terminal application with Google Sheets API integration for cloud storage. Implemented comprehensive data validation, user-friendly menu system, and real-time data synchronization with online spreadsheet for accessibility across devices.",
    keyFeatures: [
      "Google Sheets API integration for cloud storage",
      "Comprehensive data validation and error handling",
      "User-friendly terminal interface with clear menus",
      "Real-time data synchronization and backup",
      "Progress tracking and historical data analysis",
      "Cross-platform compatibility and deployment",
    ],
    results: [
      "Successfully deployed to Heroku with 99% uptime",
      "Handles all edge cases with proper error messages",
      "Data persistence across sessions and devices",
      "Positive feedback from fitness community testers",
    ],
    challenges: [
      "Implementing robust API error handling",
      "Creating intuitive terminal user interface",
      "Managing data validation for various input types",
      "Ensuring reliable cloud data synchronization",
    ],
    learnings: [
      "Google Sheets API implementation and best practices",
      "Python error handling and validation techniques",
      "Terminal application UX design principles",
      "Cloud service integration and deployment",
    ],
    timeline: "4 weeks",
    teamSize: "Solo Project",
  },
  {
    id: 7,
    title: "High Octane Project",
    description:
      "Interactive web application combining HTML, CSS, and JavaScript. Features dynamic content, user interactions, and responsive design elements.",
    longDescription:
      "Frontend-focused project demonstrating vanilla JavaScript capabilities, DOM manipulation, and interactive user interfaces. Built to showcase fundamental web development skills and creative problem-solving approaches.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Frontend",
    status: "completed",
    image: "/images/highoctaneproject.webp",
    demoUrl: "https://james-burch.github.io/Project-2/",
    githubUrl: "https://github.com/James-Burch/Project-2",
    featured: false,
    // Enhanced modal data
    problem:
      "Needed to demonstrate core frontend development skills using vanilla JavaScript without frameworks. Required creating engaging, interactive experience that showcases DOM manipulation, event handling, and responsive design principles.",
    solution:
      "Developed interactive web application using pure HTML, CSS, and JavaScript. Implemented dynamic content generation, user interaction handling, responsive design, and smooth animations while maintaining clean, semantic markup and accessible design.",
    keyFeatures: [
      "Vanilla JavaScript with no framework dependencies",
      "Dynamic DOM manipulation and content generation",
      "Interactive user interface with event handling",
      "Responsive design with CSS Grid and Flexbox",
      "Smooth animations and transitions",
      "Accessible markup with semantic HTML",
    ],
    results: [
      "Demonstrates solid foundation in web fundamentals",
      "Smooth performance across all modern browsers",
      "Fully responsive design from mobile to desktop",
      "Clean, maintainable vanilla JavaScript code",
    ],
    challenges: [
      "Managing complex interactions with vanilla JavaScript",
      "Creating smooth animations without libraries",
      "Ensuring cross-browser compatibility",
      "Implementing responsive design with pure CSS",
    ],
    learnings: [
      "Deep understanding of JavaScript fundamentals",
      "Advanced CSS layout techniques and animations",
      "DOM manipulation best practices",
      "Responsive design implementation strategies",
    ],
    timeline: "5 weeks",
    teamSize: "Solo Project",
  },
];
