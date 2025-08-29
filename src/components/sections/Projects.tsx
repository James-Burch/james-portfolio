"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { useProjectModal, type Project } from "./useProjectModal";
import { projectsData } from "./projectsData";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Modal management
  const { selectedProject, isModalOpen, openModal, closeModal } =
    useProjectModal();

  // Show only featured projects on homepage (3 projects)
  const featuredProjects = projectsData.filter((project) => project.featured);
  const projectsToShow = featuredProjects;

  const getColorClasses = (category: string) => {
    const colors = {
      "Machine Learning": {
        bg: "bg-purple-600",
        text: "text-purple-600",
        light: "bg-purple-50",
        border: "border-purple-200",
      },
      "Full-Stack": {
        bg: "bg-blue-600",
        text: "text-blue-600",
        light: "bg-blue-50",
        border: "border-blue-200",
      },
      Frontend: {
        bg: "bg-cyan-600",
        text: "text-cyan-600",
        light: "bg-cyan-50",
        border: "border-cyan-200",
      },
      Backend: {
        bg: "bg-green-600",
        text: "text-green-600",
        light: "bg-green-50",
        border: "border-green-200",
      },
      "Client Work": {
        bg: "bg-orange-600",
        text: "text-orange-600",
        light: "bg-orange-50",
        border: "border-orange-200",
      },
      Demo: {
        bg: "bg-pink-600",
        text: "text-pink-600",
        light: "bg-pink-50",
        border: "border-pink-200",
      },
    };
    return colors[category as keyof typeof colors] || colors["Full-Stack"];
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <section
        id="projects"
        className="premium-section bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden"
        ref={ref}
      >
        {/* Enhanced background pattern for dark theme */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_110%)]" />

        {/* Floating shapes for dark theme */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/10 to-purple-600/15 blur-xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-600/15 to-pink-600/10 blur-xl"
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="premium-container relative z-10">
          {/* Header matching dark theme */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
              </div>
              <span className="text-sm font-medium text-white">
                Featured Work
              </span>
            </motion.div>

            <h2 className="text-display mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Selected Projects
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              From machine learning models to full-stack applications,{" "}
              <span className="text-blue-400 font-semibold">
                showcasing technical expertise and problem-solving skills
              </span>
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projectsToShow.map((project, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredProject === project.id;
              const colorClasses = getColorClasses(project.category);

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
                    className="flex-1 relative w-full cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => openModal(project)}
                  >
                    <div className="relative">
                      {/* Background glow effect */}
                      <motion.div
                        className={`absolute inset-0 ${colorClasses.bg} rounded-2xl blur-2xl opacity-0 scale-95`}
                        animate={{
                          opacity: isHovered ? 0.15 : 0,
                          scale: isHovered ? 1.05 : 0.95,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Project image container */}
                      <div className="relative bg-gray-800/90 rounded-2xl p-4 shadow-lg shadow-black/20 border border-gray-700/50 group-hover:shadow-xl group-hover:shadow-black/30 transition-all duration-500">
                        <div className="relative overflow-hidden rounded-xl bg-gray-700">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Overlay with "View Details" */}
                          <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <motion.div
                              className="text-center text-white"
                              initial={{ y: 20, opacity: 0 }}
                              whileHover={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              <div className="text-lg font-semibold mb-2">
                                View Details
                              </div>
                              <div className="text-sm opacity-90">
                                Click to explore this project
                              </div>
                            </motion.div>
                          </motion.div>

                          {/* Project category badge */}
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClasses.light} ${colorClasses.text} ${colorClasses.border} border`}
                            >
                              {project.category}
                            </span>
                          </div>

                          {/* Featured badge */}
                          {project.featured && (
                            <div className="absolute top-4 right-4">
                              <motion.div
                                className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-lg"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                ⭐ Featured
                              </motion.div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Content Section */}
                  <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isEven ? 30 : -30 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {/* Title and Quick Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.timeline}</span>
                        </div>
                        {project.teamSize && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{project.teamSize}</span>
                          </div>
                        )}
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${colorClasses.light} ${colorClasses.text}`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 text-sm font-medium bg-gray-800/90 text-gray-200 rounded-full border border-gray-600 hover:bg-gray-700 transition-colors duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + techIndex * 0.05 + 0.8,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.button
                        onClick={() => openModal(project)}
                        className={`flex-1 inline-flex items-center justify-center px-6 py-3 ${colorClasses.bg} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Details
                      </motion.button>

                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-3 bg-gray-800 border border-gray-600 text-gray-300 font-medium rounded-xl hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 shadow-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}

                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-3 bg-gray-100 text-gray-800 font-medium rounded-xl hover:bg-white transition-all duration-300 shadow-sm"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="inline-flex flex-col items-center space-y-4 p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white">
                Want to see more projects?
              </h3>
              <p className="text-gray-300 max-w-md text-center">
                These are just a few highlights. Explore my complete portfolio
                to see all projects and case studies.
              </p>
              <motion.a
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
