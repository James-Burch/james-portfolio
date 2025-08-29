"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import ProjectModal from "../../components/sections/ProjectModal";
import { useProjectModal } from "../../components/sections/useProjectModal";
import { projectsData } from "../../components/sections/projectsData";

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

  // Modal management
  const { selectedProject, isModalOpen, openModal, closeModal } =
    useProjectModal();

  // Separate featured and additional projects
  const featuredProjects = projectsData.filter((project) => project.featured);
  const additionalProjects = projectsData.filter(
    (project) => !project.featured
  );

  const getColorClasses = (category: string) => {
    const colors = {
      "Machine Learning": {
        bg: "bg-purple-600",
        text: "text-purple-600",
        light: "bg-purple-50",
        border: "border-purple-200",
        gradient: "from-purple-600 to-purple-700",
      },
      "Full-Stack": {
        bg: "bg-blue-600",
        text: "text-blue-600",
        light: "bg-blue-50",
        border: "border-blue-200",
        gradient: "from-blue-600 to-blue-700",
      },
      Frontend: {
        bg: "bg-cyan-600",
        text: "text-cyan-600",
        light: "bg-cyan-50",
        border: "border-cyan-200",
        gradient: "from-cyan-600 to-cyan-700",
      },
      Backend: {
        bg: "bg-green-600",
        text: "text-green-600",
        light: "bg-green-50",
        border: "border-green-200",
        gradient: "from-green-600 to-green-700",
      },
      "Client Work": {
        bg: "bg-orange-600",
        text: "text-orange-600",
        light: "bg-orange-50",
        border: "border-orange-200",
        gradient: "from-orange-600 to-orange-700",
      },
      Demo: {
        bg: "bg-pink-600",
        text: "text-pink-600",
        light: "bg-pink-50",
        border: "border-pink-200",
        gradient: "from-pink-600 to-pink-700",
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
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean, Simple Background */}
      <div className="fixed inset-0 -z-10">
        {/* Solid light background */}
        <div className="absolute inset-0 bg-gray-50" />

        {/* Minimal decorative elements */}
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blue-100 opacity-30 blur-2xl"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-purple-100 opacity-20 blur-2xl"
          animate={{
            y: [-8, 8, -8],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 relative z-10 bg-white">
        <div className="premium-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
          >
            {/* Status indicator */}
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-green-50 border border-green-200 rounded-full shadow-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isHeroInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-green-800">
                10 Projects Complete
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Complete Project <span className="text-blue-600">Portfolio</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              From machine learning models to full-stack applications, explore
              my journey through modern web development, data science, and
              real-world client solutions.
            </motion.p>

            {/* Project stats */}
            <motion.div
              className="flex justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {[
                { label: "Projects", value: "10+" },
                { label: "Technologies", value: "20+" },
                { label: "Live Demos", value: "10" },
              ].map((stat, statIndex) => (
                <div key={statIndex} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={featuredRef} className="py-20 relative z-10 bg-white">
        <div className="premium-container">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isFeaturedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Showcasing key projects that demonstrate full-stack development,
              machine learning, and client collaboration skills.
            </p>
          </motion.div>

          <motion.div
            className="space-y-20"
            variants={containerVariants}
            initial="hidden"
            animate={isFeaturedInView ? "visible" : "hidden"}
          >
            {featuredProjects.map((project, index) => {
              const colorClasses = getColorClasses(project.category);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  variants={projectVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openModal(project)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Project Image */}
                    <motion.div
                      className={`relative ${!isEven ? "lg:col-start-2" : ""}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg overflow-hidden">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading={index === 0 ? "eager" : "lazy"}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Project Content */}
                    <motion.div
                      className={`space-y-6 ${
                        !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      animate={
                        isFeaturedInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: isEven ? -30 : 30 }
                      }
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {/* Project meta */}
                      <div className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">
                            {project.timeline}
                          </span>
                        </div>
                        {project.teamSize && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span className="font-medium">
                              {project.teamSize}
                            </span>
                          </div>
                        )}
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClasses.light} ${colorClasses.text} border ${colorClasses.border}`}
                        >
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Technology stack */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                delay: techIndex * 0.1 + index * 0.2,
                              }}
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-4 pt-4">
                        <motion.button
                          onClick={() => openModal(project)}
                          className={`bg-gradient-to-r ${colorClasses.gradient} text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details
                        </motion.button>

                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </span>
                        </motion.a>

                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            Code
                          </span>
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section ref={additionalRef} className="py-20 relative z-10 bg-gray-50">
        <div className="premium-container">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isAdditionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Additional Projects
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Exploring diverse technologies and solving various challenges
              across different domains and tech stacks.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isAdditionalInView ? "visible" : "hidden"}
          >
            {additionalProjects.map((project, projectIndex) => {
              const colorClasses = getColorClasses(project.category);

              return (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  variants={projectVariants}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openModal(project)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg h-full">
                    <div className="space-y-4">
                      {/* Project image */}
                      <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                          }}
                        />
                      </div>

                      {/* Project meta */}
                      <div className="flex items-center justify-between">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClasses.light} ${colorClasses.text} border ${colorClasses.border}`}
                        >
                          {project.category}
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          {project.timeline}
                        </span>
                      </div>

                      {/* Title and description */}
                      <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3 pt-2">
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 text-center bg-gradient-to-r ${colorClasses.gradient} text-white px-4 py-2 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="flex items-center justify-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </span>
                        </motion.a>

                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-gray-100 border border-gray-300 text-gray-800 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-200 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="flex items-center justify-center gap-1">
                            <Github className="w-3 h-3" />
                            Code
                          </span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isAdditionalInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg mx-auto max-w-4xl">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss your next project and explore how we can
                bring your ideas to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/#contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Let&apos;s Connect
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </span>
                </motion.a>

                <motion.a
                  href="/#skills"
                  className="bg-gray-100 border border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Skills
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
