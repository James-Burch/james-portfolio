"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Refine Barbers Booking Website",
      description:
        "Professional booking website for barber shop with appointment scheduling, user authentication, and responsive design. Built with React and modern web technologies.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
      category: "Full-Stack",
      status: "completed",
      image: "/images/refinebarbers.webp",
      demoUrl: "https://refinebarbers.netlify.app",
      githubUrl: "https://github.com/James-Burch/Refine-Barbers",
      color: "blue",
    },
    {
      id: 2,
      title: "House Price Prediction Model",
      description:
        "Machine learning model using Python and scikit-learn to predict house prices with 85% accuracy. Features comprehensive data preprocessing, feature engineering, model training with multiple algorithms.",
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
    },
    {
      id: 3,
      title: "Noble Mortgages Website",
      description:
        "Professional mortgage broker website with modern design, responsive layout, and lead generation functionality. Built for real client with focus on conversion optimization.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Client Work",
      status: "completed",
      image: "/images/noblemortgages.webp",
      demoUrl: "https://noblemortgages.co.uk/",
      githubUrl: "https://github.com/James-Burch/noble-mortgages",
      color: "green",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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
        bg: "bg-green-600",
        text: "text-green-600",
        border: "border-green-600",
      },
    };
    return colors[color as keyof typeof colors]?.[type] || colors.blue[type];
  };

  return (
    <section
      id="projects"
      className="premium-section bg-white relative overflow-hidden"
      ref={ref}
    >
      <div className="premium-container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p className="text-blue-600 font-medium text-lg tracking-wide uppercase mb-4">
            Portfolio Showcase
          </motion.p>
          <h2 className="text-section-title text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Real-world applications showcasing full-stack development and data
            science skills
          </p>
        </motion.div>

        {/* Interactive Cards with Multiple States - Mobile Responsive */}
        <motion.div
          className="space-y-16 lg:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredProject === project.id;

            return (
              <motion.div
                key={project.id}
                className={`group flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  isEven ? "" : "lg:flex-row-reverse"
                } mx-4 sm:mx-0`}
                variants={projectVariants}
                transition={{ duration: 0.6 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Enhanced Image Section - Clickable */}
                <motion.div
                  className="flex-1 relative w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative">
                    {/* Background glow effect - hidden on mobile */}
                    <motion.div
                      className={`absolute inset-0 ${getColorClasses(
                        project.color,
                        "bg"
                      )} rounded-2xl blur-2xl opacity-0 scale-95 hidden lg:block`}
                      animate={{
                        opacity: isHovered ? 0.15 : 0,
                        scale: isHovered ? 1.05 : 0.95,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Clickable image container */}
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full aspect-[4/3] object-cover object-top transition-all duration-500 group-hover:scale-105"
                      />

                      {/* Click indicator overlay */}
                      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Mobile-visible "View Live" button */}
                      <div className="absolute top-4 left-4 lg:hidden">
                        <span
                          className={`px-3 py-2 ${getColorClasses(
                            project.color,
                            "bg"
                          )} text-white text-sm font-semibold rounded-lg shadow-lg`}
                        >
                          Tap to View Live
                        </span>
                      </div>

                      {/* Status indicator */}
                      <motion.div
                        className="absolute top-4 right-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg" />
                      </motion.div>

                      {/* Desktop hover overlay with buttons */}
                      <motion.div
                        className="absolute inset-0 bg-black/50 items-center justify-center hidden lg:flex"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex gap-4">
                          <motion.span
                            className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold pointer-events-none"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{
                              y: isHovered ? 0 : 20,
                              opacity: isHovered ? 1 : 0,
                            }}
                            transition={{ delay: 0.1 }}
                          >
                            Click to View Live
                          </motion.span>
                        </div>
                      </motion.div>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Enhanced Content Section - Mobile Responsive */}
                <div className="flex-1 space-y-4 lg:space-y-6 w-full">
                  {/* Animated category badge */}
                  <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
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

                  {/* Title with color accent */}
                  <motion.h3
                    className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Interactive technology tags */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className={`px-3 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:${getColorClasses(
                            project.color,
                            "border"
                          )} hover:${getColorClasses(
                            project.color,
                            "text"
                          )} hover:bg-gray-50 transition-all duration-200 cursor-default`}
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

                  {/* Mobile-visible action buttons */}
                  <div className="flex gap-3 lg:hidden pt-2">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 ${getColorClasses(
                        project.color,
                        "bg"
                      )} text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 hover:opacity-90`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl font-semibold text-center border border-gray-200 hover:bg-gray-200 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Code
                    </motion.a>
                  </div>

                  {/* Desktop-visible GitHub link */}
                  <div className="hidden lg:block pt-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Source Code
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.a>
                  </div>

                  {/* Progress indicator - hidden on mobile for space */}
                  <motion.div
                    className="pt-4 hidden lg:block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-600">
                        Project Status
                      </span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${getColorClasses(
                            project.color,
                            "bg"
                          )} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-green-600">
                        Complete
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div className="text-center mt-20">
          <motion.a
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
            whileHover={{ scale: 1.05 }}
          >
            View All Projects
            <svg
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
