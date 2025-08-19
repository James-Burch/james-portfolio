"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  X,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  status: string;
  image: string;
  demoUrl?: string;
  githubUrl: string;
  featured: boolean;
  // Enhanced modal data
  problem: string;
  solution: string;
  keyFeatures: string[];
  results: string[];
  challenges: string[];
  learnings: string[];
  timeline: string;
  teamSize?: string;
  gallery?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-blue-100 text-blue-800 border-blue-200",
      TypeScript: "bg-blue-100 text-blue-800 border-blue-200",
      JavaScript: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Python: "bg-green-100 text-green-800 border-green-200",
      Django: "bg-green-100 text-green-800 border-green-200",
      "Node.js": "bg-green-100 text-green-800 border-green-200",
      PostgreSQL: "bg-blue-100 text-blue-800 border-blue-200",
      MongoDB: "bg-green-100 text-green-800 border-green-200",
      HTML: "bg-orange-100 text-orange-800 border-orange-200",
      CSS: "bg-blue-100 text-blue-800 border-blue-200",
      Tailwind: "bg-cyan-100 text-cyan-800 border-cyan-200",
      Bootstrap: "bg-purple-100 text-purple-800 border-purple-200",
      "Scikit-learn": "bg-orange-100 text-orange-800 border-orange-200",
      Pandas: "bg-blue-100 text-blue-800 border-blue-200",
      NumPy: "bg-blue-100 text-blue-800 border-blue-200",
      Matplotlib: "bg-red-100 text-red-800 border-red-200",
      Jupyter: "bg-orange-100 text-orange-800 border-orange-200",
      Heroku: "bg-purple-100 text-purple-800 border-purple-200",
      Netlify: "bg-teal-100 text-teal-800 border-teal-200",
      Git: "bg-red-100 text-red-800 border-red-200",
    };
    return colors[tech] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Machine Learning": "bg-purple-500",
      "Full-Stack": "bg-blue-500",
      Frontend: "bg-cyan-500",
      Backend: "bg-green-500",
      "Client Work": "bg-orange-500",
      Demo: "bg-pink-500",
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${getCategoryColor(
                      project.category
                    )}`}
                  />
                  <span className="text-sm font-medium text-gray-600">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </motion.a>
                  )}

                  <motion.button
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-50 to-indigo-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Title & Description */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {project.title}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.longDescription}
                  </p>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-sm font-medium text-gray-600">
                      Timeline
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {project.timeline}
                    </div>
                  </div>

                  {project.teamSize && (
                    <div className="text-center p-4 bg-gray-50 rounded-xl">
                      <Users className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <div className="text-sm font-medium text-gray-600">
                        Team Size
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {project.teamSize}
                      </div>
                    </div>
                  )}

                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Target className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <div className="text-sm font-medium text-gray-600">
                      Status
                    </div>
                    <div className="text-lg font-bold text-gray-900 capitalize">
                      {project.status}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                    <div className="text-sm font-medium text-gray-600">
                      Type
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      {project.category}
                    </div>
                  </div>
                </motion.div>

                {/* Problem Statement */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-red-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Problem Solved
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed pl-11">
                    {project.problem}
                  </p>
                </motion.div>

                {/* Technical Solution */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Technical Solution
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed pl-11">
                    {project.solution}
                  </p>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900">
                    Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-800 font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900">
                    Technology Stack
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border ${getTechColor(
                          tech
                        )}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Results & Impact */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Results & Impact
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 pl-11">
                    {project.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-800 font-medium">
                          {result}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Challenges & Learnings */}
                <motion.div
                  className="grid md:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  {/* Challenges */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Challenges Overcome
                    </h3>
                    <div className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <motion.div
                          key={index}
                          className="p-3 bg-orange-50 rounded-lg border border-orange-200"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                        >
                          <span className="text-gray-800">{challenge}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Learnings */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Key Learnings
                    </h3>
                    <div className="space-y-3">
                      {project.learnings.map((learning, index) => (
                        <motion.div
                          key={index}
                          className="p-3 bg-blue-50 rounded-lg border border-blue-200"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.3 + index * 0.1 }}
                        >
                          <span className="text-gray-800">{learning}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Action Links */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      View Live Demo
                    </motion.a>
                  )}

                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
