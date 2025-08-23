"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function ProjectsPage() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const additionalRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturedInView = useInView(featuredRef, {
    once: true,
    margin: "-100px",
  });
  const isAdditionalInView = useInView(additionalRef, {
    once: true,
    margin: "-100px",
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const allProjects = [
    {
      id: 1,
      title: "House Price Prediction Model",
      description:
        "Machine learning model using Python and scikit-learn to predict house prices with 85% accuracy. Features comprehensive data preprocessing, feature engineering, model training with multiple algorithms.",
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
      color: "purple",
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
      color: "blue",
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
      image: "/images/noblemortgagesimage.webp",
      demoUrl: "https://noblemortgages.co.uk/",
      githubUrl: "https://github.com/James-Burch/noble-mortgages",
      color: "green",
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
      image: "/images/golfbookingsite.webp",
      demoUrl: "https://pp4-django-project-082841c8663e.herokuapp.com/",
      githubUrl: "https://github.com/James-Burch/PP4-Django-Project",
      color: "blue",
      featured: false,
    },
    {
      id: 5,
      title: "Construction Demo Site",
      description:
        "Professional construction company website demonstrating modern web development with TypeScript and Tailwind CSS. Features responsive design and modern UI patterns.",
      longDescription:
        "Demo website showcasing construction services with modern design patterns, responsive layout, service showcases, and contact forms. Built with latest web technologies.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "Next.js"],
      category: "Demo",
      status: "completed",
      image: "/images/constructiondemo.webp",
      demoUrl: "https://demoforcdadbuild.netlify.app/",
      githubUrl: "https://github.com/James-Burch/paul-cdad-build-website",
      color: "orange",
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
      color: "red",
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
      color: "blue",
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
      color: "purple",
      featured: false,
    },
  ];

  const featuredProjects = allProjects.filter((project) => project.featured);
  const otherProjects = allProjects.filter((project) => !project.featured);

  const getColorClasses = (color: string, type: "bg" | "text" | "border") => {
    const colors = {
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-600",
      },
      purple: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-600",
      },
      green: {
        bg: "bg-emerald-600",
        text: "text-emerald-600",
        border: "border-emerald-600",
      },
      red: { bg: "bg-red-600", text: "text-red-600", border: "border-red-600" },
      orange: {
        bg: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-600",
      },
    };
    return colors[color as keyof typeof colors]?.[type] || colors.blue[type];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/50 relative overflow-hidden">
      <Header />

      {/* Background elements matching the enhanced sections */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_20%,transparent_110%)]" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/8 to-purple-400/10 blur-xl"
        animate={{
          y: [-10, 10, -10],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/8 blur-xl"
        animate={{
          y: [-8, 8, -8],
          transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          },
        }}
      />

      {/* Enhanced Hero Section */}
      <section className="py-20 relative z-10" ref={heroRef}>
        <div className="premium-container text-center">
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeroInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Complete Portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-display mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              All Projects
            </span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive look at my development journey - from{" "}
            <span className="text-blue-700 font-semibold">
              machine learning models
            </span>{" "}
            to client projects and personal explorations
          </motion.p>
        </div>
      </section>

      {/* Enhanced Featured Projects */}
      <section className="py-20 relative z-10" ref={featuredRef}>
        <div className="premium-container">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-section-title text-gray-900 mb-6">
              Featured Projects
            </h2>
          </motion.div>

          <motion.div
            className="space-y-16 lg:space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturedInView ? "visible" : "hidden"}
          >
            {featuredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredProject === project.id;

              return (
                <motion.div
                  key={project.id}
                  className={`group flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                  variants={projectVariants}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Enhanced Image Section */}
                  <motion.div
                    className="flex-1 relative w-full"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="relative">
                      {/* Enhanced glow effect */}
                      <motion.div
                        className={`absolute -inset-2 ${getColorClasses(
                          project.color,
                          "bg"
                        )} rounded-2xl blur-2xl opacity-0 scale-95 hidden lg:block`}
                        animate={{
                          opacity: isHovered ? 0.2 : 0,
                          scale: isHovered ? 1.08 : 0.95,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />

                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-white group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={project.image}
                            alt={`${project.title} screenshot`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-top transition-all duration-700 group-hover:scale-110"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Desktop hover overlay */}
                        <motion.div
                          className="absolute inset-0 bg-black/60 backdrop-blur-[2px] items-center justify-center hidden lg:flex"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isHovered ? 1 : 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <motion.div
                            className="text-center space-y-4"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{
                              y: isHovered ? 0 : 30,
                              opacity: isHovered ? 1 : 0,
                            }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                          >
                            <div className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl">
                              View Live Demo
                            </div>
                            <p className="text-white/90 text-sm font-medium">
                              Click to explore the project
                            </p>
                          </motion.div>
                        </motion.div>

                        {/* Status indicator */}
                        <motion.div
                          className="absolute top-4 right-4"
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: index * 0.2 + 0.5,
                            duration: 0.6,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.2 }}
                        >
                          <div className="relative">
                            <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg" />
                            <motion.div
                              className="absolute inset-0 bg-green-400 rounded-full"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.8, 0, 0.8],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </motion.div>
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Enhanced Content Section */}
                  <div className="flex-1 space-y-6 w-full">
                    <motion.div
                      className="inline-block"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span
                        className={`px-4 py-2 ${getColorClasses(
                          project.color,
                          "bg"
                        )} text-white text-sm font-semibold rounded-xl shadow-lg`}
                      >
                        {project.category}
                      </span>
                    </motion.div>

                    <motion.h3
                      className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-2 bg-white/60 backdrop-blur-md border border-white/30 rounded-lg text-gray-700 text-sm font-medium hover:bg-white/80 transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: techIndex * 0.1 + 0.3 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative overflow-hidden ${getColorClasses(
                          project.color,
                          "bg"
                        )} text-white px-6 py-3 rounded-xl font-semibold shadow-2xl transition-all duration-300`}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                        <span className="relative flex items-center justify-center gap-2">
                          View Live Demo
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </motion.div>
                        </span>
                      </motion.a>

                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white/90 backdrop-blur-md border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg overflow-hidden"
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          borderColor: "#3B82F6",
                          color: "#3B82F6",
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-blue-50"
                          initial={{ y: "100%" }}
                          whileHover={{ y: "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative flex items-center justify-center gap-2">
                          <motion.svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </motion.svg>
                          View Code
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Additional Projects */}
      <section
        className="py-20 bg-white/30 backdrop-blur-sm relative z-10"
        ref={additionalRef}
      >
        <div className="premium-container">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isAdditionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-section-title text-gray-900 mb-6">
              Additional Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring diverse technologies and solving various challenges
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isAdditionalInView ? "visible" : "hidden"}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20"
                variants={projectVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Floating category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-2 ${getColorClasses(
                        project.color,
                        "bg"
                      )} text-white text-sm font-semibold rounded-xl shadow-lg backdrop-blur-sm`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Status indicator */}
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse" />
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg border border-blue-200">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 ${getColorClasses(
                        project.color,
                        "bg"
                      )} text-white py-2 px-4 rounded-xl font-semibold text-center transition-all duration-300 text-sm`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-gray-200 text-gray-700 py-2 px-4 rounded-xl font-semibold text-center hover:border-blue-300 hover:text-blue-600 transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Back to Home CTA exactly matching Hero "Explore My Work" button */}
      <section className="py-20 relative z-10">
        <div className="premium-container text-center">
          <motion.a
            href="/"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-500/25 inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              className="relative"
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ←
            </motion.div>
            <span className="relative">Back to Home</span>
          </motion.a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
