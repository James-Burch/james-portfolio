// import Header from "../../components/layout/Header";
// import Footer from "../../components/layout/Footer";

// export default function ProjectsPage() {
//   const allProjects = [
//     {
//       id: 1,
//       title: "House Price Prediction Model",
//       description:
//         "Machine learning model using Python and scikit-learn to predict house prices with 85% accuracy. Features comprehensive data preprocessing, feature engineering, model training with multiple algorithms, and interactive visualization of results.",
//       longDescription:
//         "This project demonstrates end-to-end machine learning workflow from data collection to model deployment. Used techniques like regression analysis, feature selection, and model validation to create a robust prediction system.",
//       technologies: [
//         "Python",
//         "Scikit-learn",
//         "Pandas",
//         "NumPy",
//         "Matplotlib",
//         "Jupyter",
//       ],
//       category: "Machine Learning",
//       status: "completed",
//       image: "/images/housepriceprediction.webp",
//       demoUrl: "https://house-price-prediction-pp5-615997f77e23.herokuapp.com/",
//       githubUrl: "https://github.com/James-Burch/PP5-ML-PROJECT",
//       featured: true,
//     },
//     {
//       id: 2,
//       title: "Refine Barbers Booking Website",
//       description:
//         "Professional booking website for barber shop with appointment scheduling, user authentication, and responsive design. Built with React and modern web technologies.",
//       longDescription:
//         "Full-stack booking platform featuring real-time availability, user profiles, appointment management, and payment integration. Focused on user experience and mobile responsiveness.",
//       technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
//       category: "Full-Stack",
//       status: "completed",
//       image: "/images/refinebarbers.webp",
//       demoUrl: "https://refinebarbers.netlify.app",
//       githubUrl: "https://github.com/James-Burch/Refine-Barbers",
//       featured: true,
//     },
//     {
//       id: 3,
//       title: "Noble Mortgages Website",
//       description:
//         "Professional mortgage broker website with modern design, responsive layout, and lead generation functionality. Built for real client with focus on conversion optimization.",
//       longDescription:
//         "Client project featuring mortgage calculator, application forms, service pages, and contact system. Optimized for SEO and lead generation with professional design.",
//       technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
//       category: "Client Work",
//       status: "completed",
//       image: "/images/noblemortgages.webp",
//       demoUrl: "https://noblemortgages.co.uk/",
//       githubUrl: "https://github.com/James-Burch/noble-mortgages",
//       featured: true,
//     },
//     {
//       id: 4,
//       title: "Golf Booking System",
//       description:
//         "Comprehensive booking system for golf courses built with Django. Features user management, tee time scheduling, course management, and administrative dashboard.",
//       longDescription:
//         "Django-based full-stack application with complex booking logic, user authentication, payment processing, and administrative features. Demonstrates database design and backend development skills.",
//       technologies: [
//         "Django",
//         "Python",
//         "PostgreSQL",
//         "HTML",
//         "CSS",
//         "Bootstrap",
//       ],
//       category: "Full-Stack",
//       status: "completed",
//       image: "/images/golfbookingsite.webp",
//       demoUrl: "https://pp4-django-project-082841c8663e.herokuapp.com/",
//       githubUrl: "https://github.com/James-Burch/PP4-Django-Project",
//       featured: false,
//     },
//     {
//       id: 5,
//       title: "Construction Demo Site",
//       description:
//         "Modern construction company website showcasing TypeScript and Tailwind CSS skills. Features service pages, project gallery, and contact forms.",
//       longDescription:
//         "Demonstration project highlighting modern development practices, component architecture, and responsive design. Built to showcase frontend development capabilities.",
//       technologies: ["TypeScript", "React", "Tailwind CSS", "Next.js"],
//       category: "Demo",
//       status: "completed",
//       image: "/images/constructiondemo.webp",
//       demoUrl: "https://demoforcdadbuild.netlify.app/",
//       githubUrl: "https://github.com/James-Burch/paul-cdad-build-website",
//       featured: false,
//     },
//     {
//       id: 6,
//       title: "Fitness Tracker Backend",
//       description:
//         "Python backend application with terminal interface and Google Sheets API integration. Demonstrates API integration and data management skills.",
//       longDescription:
//         "Command-line application for tracking fitness data with cloud storage integration. Features data validation, API connectivity, and user-friendly terminal interface.",
//       technologies: ["Python", "Google Sheets API", "Terminal Interface"],
//       category: "Backend",
//       status: "completed",
//       image: "/images/pythonterminal.webp",
//       demoUrl: "https://fitness-tracker-pp3-ac30d4f35dab.herokuapp.com/",
//       githubUrl: "https://github.com/James-Burch/Project-3",
//       featured: false,
//     },
//     {
//       id: 7,
//       title: "High Octane Project",
//       description:
//         "Interactive web application combining HTML, CSS, and JavaScript. Demonstrates frontend development skills and interactive user interface design.",
//       longDescription:
//         "Dynamic web application with interactive elements, animations, and responsive design. Showcases JavaScript DOM manipulation and modern CSS techniques.",
//       technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
//       category: "Frontend",
//       status: "completed",
//       image: "/images/highoctane.webp",
//       demoUrl: "https://james-burch.github.io/Project2-CI/",
//       githubUrl: "https://github.com/James-Burch/Project2-CI",
//       featured: false,
//     },
//     {
//       id: 8,
//       title: "React Portfolio (Previous Version)",
//       description:
//         "First React-based portfolio website built after course completion. Demonstrates React fundamentals and component-based architecture.",
//       longDescription:
//         "Initial portfolio built with React to showcase projects and skills. Features component architecture, routing, and responsive design principles.",
//       technologies: ["React", "JavaScript", "CSS", "Component Architecture"],
//       category: "Portfolio",
//       status: "completed",
//       image: "/images/firstportfolio.webp",
//       demoUrl: "https://jamesburch.co.uk/",
//       githubUrl: "https://github.com/James-Burch/Resume-J-Burch",
//       featured: false,
//     },
//   ];

//   const featuredProjects = allProjects.filter((project) => project.featured);
//   const otherProjects = allProjects.filter((project) => !project.featured);

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">
//             All Projects
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A comprehensive look at my development journey - from Code Institute
//             coursework to client projects and personal explorations. Each
//             project demonstrates growth, learning, and practical application of
//             modern web technologies.
//           </p>
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
//             Featured Projects
//           </h2>

//           {/* Mobile/Tablet: Card layout */}
//           <div className="lg:hidden grid md:grid-cols-2 gap-8 mb-16">
//             {featuredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//               >
//                 {/* Card Image */}
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={`${project.title} screenshot`}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <span
//                       className={`px-3 py-1 text-sm font-medium rounded-full ${
//                         project.category === "Machine Learning"
//                           ? "bg-purple-100 text-purple-800"
//                           : project.category === "Full-Stack"
//                           ? "bg-blue-100 text-blue-800"
//                           : project.category === "Client Work"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-gray-100 text-gray-800"
//                       }`}
//                     >
//                       {project.category}
//                     </span>
//                     <span className="text-green-600 text-sm font-medium">
//                       ✓ {project.status}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {project.title}
//                   </h3>

//                   <p className="text-gray-600 mb-4">{project.description}</p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex gap-3">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center"
//                     >
//                       View Live Site
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors text-center"
//                     >
//                       View Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Desktop: Staggered layout */}
//           <div className="hidden lg:block space-y-20">
//             {featuredProjects.map((project, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <div
//                   key={project.id}
//                   className={`flex items-center gap-12 ${
//                     isEven ? "" : "flex-row-reverse"
//                   }`}
//                 >
//                   {/* Image */}
//                   <div className="flex-1">
//                     <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
//                       <img
//                         src={project.image}
//                         alt={`${project.title} screenshot`}
//                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <span
//                       className={`px-3 py-1 text-sm font-medium rounded-full mb-4 inline-block ${
//                         project.category === "Machine Learning"
//                           ? "bg-purple-100 text-purple-800"
//                           : project.category === "Full-Stack"
//                           ? "bg-blue-100 text-blue-800"
//                           : project.category === "Client Work"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-gray-100 text-gray-800"
//                       }`}
//                     >
//                       {project.category}
//                     </span>

//                     <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                       {project.title}
//                     </h3>

//                     <p className="text-lg text-gray-600 mb-4 leading-relaxed">
//                       {project.description}
//                     </p>

//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {project.longDescription}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.technologies.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex gap-4">
//                       <a
//                         href={project.demoUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors"
//                       >
//                         View Live Site
//                       </a>
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="border border-gray-300 text-gray-700 py-3 px-6 rounded hover:bg-gray-50 transition-colors"
//                       >
//                         View Code
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Additional Projects - Responsive Layout */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
//             Additional Projects
//           </h2>

//           {/* Mobile/Tablet: Card layout */}
//           <div className="lg:hidden grid md:grid-cols-2 gap-8">
//             {otherProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//               >
//                 {/* Card Image */}
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={`${project.title} screenshot`}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <span
//                       className={`px-3 py-1 text-sm font-medium rounded-full ${
//                         project.category === "Backend"
//                           ? "bg-red-100 text-red-800"
//                           : project.category === "Frontend"
//                           ? "bg-blue-100 text-blue-800"
//                           : project.category === "Full-Stack"
//                           ? "bg-green-100 text-green-800"
//                           : project.category === "Demo"
//                           ? "bg-orange-100 text-orange-800"
//                           : project.category === "Portfolio"
//                           ? "bg-purple-100 text-purple-800"
//                           : "bg-gray-100 text-gray-800"
//                       }`}
//                     >
//                       {project.category}
//                     </span>
//                     <span className="text-green-600 text-sm font-medium">
//                       ✓ {project.status}
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {project.title}
//                   </h3>

//                   <p className="text-gray-600 mb-4">{project.description}</p>

//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech) => (
//                       <span
//                         key={tech}
//                         className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="flex gap-3">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center"
//                     >
//                       Live Site
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors text-center"
//                     >
//                       Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Desktop: Staggered layout */}
//           <div className="hidden lg:block space-y-20">
//             {otherProjects.map((project, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <div
//                   key={project.id}
//                   className={`flex items-center gap-12 ${
//                     isEven ? "" : "flex-row-reverse"
//                   }`}
//                 >
//                   {/* Image */}
//                   <div className="flex-1">
//                     <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
//                       <img
//                         src={project.image}
//                         alt={`${project.title} screenshot`}
//                         className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <span
//                       className={`px-3 py-1 text-sm font-medium rounded-full mb-4 inline-block ${
//                         project.category === "Backend"
//                           ? "bg-red-100 text-red-800"
//                           : project.category === "Frontend"
//                           ? "bg-blue-100 text-blue-800"
//                           : project.category === "Full-Stack"
//                           ? "bg-green-100 text-green-800"
//                           : project.category === "Demo"
//                           ? "bg-orange-100 text-orange-800"
//                           : project.category === "Portfolio"
//                           ? "bg-purple-100 text-purple-800"
//                           : "bg-gray-100 text-gray-800"
//                       }`}
//                     >
//                       {project.category}
//                     </span>

//                     <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                       {project.title}
//                     </h3>

//                     <p className="text-lg text-gray-600 mb-4 leading-relaxed">
//                       {project.description}
//                     </p>

//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {project.longDescription}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.technologies.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex gap-4">
//                       <a
//                         href={project.demoUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors"
//                       >
//                         View Live Site
//                       </a>
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="border border-gray-300 text-gray-700 py-3 px-6 rounded hover:bg-gray-50 transition-colors"
//                       >
//                         View Code
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Image from "next/image";

export default function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: "House Price Prediction Model",
      description:
        "Machine learning model using Python and scikit-learn to predict house prices with 85% accuracy. Features comprehensive data preprocessing, feature engineering, model training with multiple algorithms, and interactive visualization of results.",
      longDescription:
        "This project demonstrates end-to-end machine learning workflow from data collection to model deployment. Used techniques like regression analysis, feature selection, and model validation to create a robust prediction system.",
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
    },
    {
      id: 2,
      title: "Refine Barbers Booking Website",
      description:
        "Professional booking website for barber shop with appointment scheduling, user authentication, and responsive design. Built with React and modern web technologies.",
      longDescription:
        "Full-stack booking platform featuring real-time availability, user profiles, appointment management, and payment integration. Focused on user experience and mobile responsiveness.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
      category: "Full-Stack",
      status: "completed",
      image: "/images/refinebarbers.webp",
      demoUrl: "https://refinebarbers.netlify.app",
      githubUrl: "https://github.com/James-Burch/Refine-Barbers",
      featured: true,
    },
    {
      id: 3,
      title: "Noble Mortgages Website",
      description:
        "Professional mortgage broker website with modern design, responsive layout, and lead generation functionality. Built for real client with focus on conversion optimization.",
      longDescription:
        "Client project featuring mortgage calculator, application forms, service pages, and contact system. Optimized for SEO and lead generation with professional design.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Client Work",
      status: "completed",
      image: "/images/noblemortgages.webp",
      demoUrl: "https://noblemortgages.co.uk/",
      githubUrl: "https://github.com/James-Burch/noble-mortgages",
      featured: true,
    },
    {
      id: 4,
      title: "Golf Booking System",
      description:
        "Comprehensive booking system for golf courses built with Django. Features user registration, tee time booking, course management, and administrative dashboard.",
      longDescription:
        "Full-stack Django application with PostgreSQL database, user authentication, booking validation, email notifications, and responsive design. Includes admin panel for course management.",
      technologies: ["Django", "Python", "PostgreSQL", "Bootstrap", "HTML/CSS"],
      category: "Full-Stack",
      status: "completed",
      image: "/images/golfbooking.webp",
      demoUrl: "https://golf-booking-pp4-4b1234567890.herokuapp.com/",
      githubUrl: "https://github.com/James-Burch/Project-4",
      featured: false,
    },
    {
      id: 5,
      title: "Construction Demo Site",
      description:
        "Professional construction company website demonstrating modern web development with TypeScript and Tailwind CSS. Features responsive design and modern UI patterns.",
      longDescription:
        "Demo website showcasing construction services with modern design patterns, responsive layout, service showcases, and contact forms. Built with latest web technologies.",
      technologies: ["TypeScript", "Tailwind CSS", "HTML", "Responsive Design"],
      category: "Demo",
      status: "completed",
      image: "/images/construction.webp",
      demoUrl: "https://construction-demo-site.netlify.app",
      githubUrl: "https://github.com/James-Burch/construction-demo",
      featured: false,
    },
    {
      id: 6,
      title: "Python Fitness Tracker",
      description:
        "Backend fitness tracking application built with Python for terminal interaction. Features data validation, API connectivity, and user-friendly terminal interface.",
      longDescription:
        "Command-line fitness tracker with Google Sheets integration for data persistence. Demonstrates Python programming, API integration, and data validation techniques.",
      technologies: ["Python", "Google Sheets API", "Terminal Interface"],
      category: "Backend",
      status: "completed",
      image: "/images/pythonterminal.webp",
      demoUrl: "https://fitness-tracker-pp3-ac30d4f35dab.herokuapp.com/",
      githubUrl: "https://github.com/James-Burch/Project-3",
      featured: false,
    },
    {
      id: 7,
      title: "High Octane Project",
      description:
        "Interactive web application combining HTML, CSS, and JavaScript. Demonstrates frontend development skills and interactive user interface design.",
      longDescription:
        "Dynamic web application with interactive elements, animations, and responsive design. Showcases JavaScript DOM manipulation and modern CSS techniques.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Frontend",
      status: "completed",
      image: "/images/highoctane.webp",
      demoUrl: "https://james-burch.github.io/Project2-CI/",
      githubUrl: "https://github.com/James-Burch/Project2-CI",
      featured: false,
    },
    {
      id: 8,
      title: "React Portfolio (Previous Version)",
      description:
        "First React-based portfolio website built after course completion. Demonstrates React fundamentals and component-based architecture.",
      longDescription:
        "Initial portfolio built with React to showcase projects and skills. Features component architecture, routing, and responsive design principles.",
      technologies: ["React", "JavaScript", "CSS", "Component Architecture"],
      category: "Portfolio",
      status: "completed",
      image: "/images/firstportfolio.webp",
      demoUrl: "https://jamesburch.co.uk/",
      githubUrl: "https://github.com/James-Burch/Resume-J-Burch",
      featured: false,
    },
  ];

  const featuredProjects = allProjects.filter((project) => project.featured);
  const otherProjects = allProjects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            All Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive look at my development journey - from Code Institute
            coursework to client projects and personal explorations. Each
            project demonstrates growth, learning, and practical application of
            modern web technologies.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>

          {/* Mobile/Tablet: Card layout */}
          <div className="lg:hidden grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Optimized Card Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={project.id <= 2} // Priority load for first 2 featured projects
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        project.category === "Machine Learning"
                          ? "bg-purple-100 text-purple-800"
                          : project.category === "Full-Stack"
                          ? "bg-blue-100 text-blue-800"
                          : project.category === "Client Work"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.category}
                    </span>
                    <span className="text-green-600 text-sm font-medium">
                      ✓ {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors text-center"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Staggered layout */}
          <div className="hidden lg:block space-y-20">
            {featuredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={project.id}
                  className={`flex items-center gap-12 ${
                    isEven ? "" : "flex-row-reverse"
                  }`}
                >
                  {/* Optimized Image */}
                  <div className="flex-1">
                    <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-lg relative">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        priority={index === 0} // Priority load for first project
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full mb-4 inline-block ${
                        project.category === "Machine Learning"
                          ? "bg-purple-100 text-purple-800"
                          : project.category === "Full-Stack"
                          ? "bg-blue-100 text-blue-800"
                          : project.category === "Client Work"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.category}
                    </span>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors"
                      >
                        View Live Site
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 text-gray-700 py-3 px-6 rounded hover:bg-gray-50 transition-colors"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Projects - Responsive Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Additional Projects
          </h2>

          {/* Mobile/Tablet: Card layout */}
          <div className="lg:hidden grid md:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Optimized Card Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        project.category === "Backend"
                          ? "bg-red-100 text-red-800"
                          : project.category === "Frontend"
                          ? "bg-blue-100 text-blue-800"
                          : project.category === "Full-Stack"
                          ? "bg-green-100 text-green-800"
                          : project.category === "Demo"
                          ? "bg-orange-100 text-orange-800"
                          : project.category === "Portfolio"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.category}
                    </span>
                    <span className="text-green-600 text-sm font-medium">
                      ✓ {project.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors text-center"
                    >
                      Live Site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors text-center"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Staggered layout */}
          <div className="hidden lg:block space-y-20">
            {otherProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={project.id}
                  className={`flex items-center gap-12 ${
                    isEven ? "" : "flex-row-reverse"
                  }`}
                >
                  {/* Optimized Image */}
                  <div className="flex-1">
                    <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-lg relative">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full mb-4 inline-block ${
                        project.category === "Backend"
                          ? "bg-red-100 text-red-800"
                          : project.category === "Frontend"
                          ? "bg-blue-100 text-blue-800"
                          : project.category === "Full-Stack"
                          ? "bg-green-100 text-green-800"
                          : project.category === "Demo"
                          ? "bg-orange-100 text-orange-800"
                          : project.category === "Portfolio"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {project.category}
                    </span>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>

                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors"
                      >
                        View Live Site
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-300 text-gray-700 py-3 px-6 rounded hover:bg-gray-50 transition-colors"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
