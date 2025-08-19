"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const timelineEvents = [
    {
      id: 1,
      date: "Feb 2024",
      title: "Started Code Institute Full-Stack Development",
      description:
        "Began intensive program with HTML and CSS fundamentals, learning responsive design and modern web development principles.",
      type: "education",
      status: "completed",
      color: "purple",
    },
    {
      id: 2,
      date: "Apr 2024",
      title: "Realign Project - HTML/CSS",
      description:
        "Completed comprehensive HTML/CSS project demonstrating responsive design, semantic markup, and modern styling techniques.",
      type: "project",
      status: "completed",
      color: "blue",
    },
    {
      id: 3,
      date: "Apr - Jun 2024",
      title: "JavaScript Development & High Octane Project",
      description:
        "Mastered JavaScript fundamentals, DOM manipulation, and interactive web development. Built High Octane Project combining HTML, CSS, and JavaScript.",
      type: "project",
      status: "completed",
      color: "blue",
    },
    {
      id: 4,
      date: "Jun - Jul 2024",
      title: "Python Backend Development",
      description:
        "Developed Fitness Tracker Backend using Python with terminal interface and Google Sheets API integration for data management.",
      type: "project",
      status: "completed",
      color: "blue",
    },
    {
      id: 5,
      date: "Jul - Nov 2024",
      title: "Django Full Stack - Golf Booking System",
      description:
        "Built comprehensive Golf Booking System using Django framework with full CRUD functionality, user authentication, and database integration.",
      type: "project",
      status: "completed",
      color: "blue",
    },
    {
      id: 6,
      date: "Nov 2024 - Feb 2025",
      title: "Specialization: Predictive Analytics & ML",
      description:
        "Completed House Price Prediction project using Python, scikit-learn, and machine learning techniques for predictive analytics specialization.",
      type: "project",
      status: "completed",
      color: "blue",
    },
    {
      id: 7,
      date: "Feb 2025",
      title: "Code Institute Program Completion",
      description:
        "Successfully completed 12-month intensive program with 5+ major projects spanning full-stack development and machine learning.",
      type: "education",
      status: "completed",
      color: "purple",
      certificateUrl:
        "https://www.credential.net/04c4c0dd-dfc3-42c7-beae-f39ef089ef1e#acc.CR6MD7FZ",
    },
    {
      id: 8,
      date: "Feb - Jun 2025",
      title: "React Portfolio Development",
      description:
        "Built first React-based portfolio website, learning component-based architecture and modern JavaScript frameworks.",
      type: "project",
      status: "completed",
      color: "blue",
    },
    {
      id: 9,
      date: "Jun 2025",
      title: "Refine Barbers Booking Website",
      description:
        "Built professional booking website for barber shop with appointment scheduling, responsive design, and modern user interface using React.",
      type: "project",
      status: "completed",
      color: "blue",
    },
    {
      id: 10,
      date: "Jul - Aug 2025",
      title: "Noble Mortgages Website",
      description:
        "Developed professional mortgage broker website with modern design, responsive layout, and lead generation functionality.",
      type: "project",
      status: "completed",
      color: "green",
    },
    {
      id: 11,
      date: "Aug 2025",
      title: "Construction Demo Site",
      description:
        "Created demonstration construction company website showcasing modern web development skills with TypeScript and Tailwind CSS.",
      type: "project",
      status: "completed",
      color: "blue",
    },
    {
      id: 12,
      date: "Aug 2025",
      title: "AWS Developer – Associate",
      description:
        "Pursuing AWS Developer – Associate certification to expand cloud computing skills and enhance backend development capabilities.",
      type: "certification",
      status: "in-progress",
      color: "orange",
    },
    {
      id: 13,
      date: "Q4 2025",
      title: "AWS Solutions Architect Associate",
      description:
        "Planning to achieve AWS Solutions Architect Associate certification for advanced cloud architecture skills.",
      type: "certification",
      status: "planned",
      color: "orange",
    },
    {
      id: 14,
      date: "Q4 2025",
      title: "AWS Security – Specialty",
      description:
        "Pursuing AWS Security – Specialty certification to enhance cloud security expertise.",
      type: "certification",
      status: "planned",
      color: "orange",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg"></div>
        );
      case "in-progress":
        return (
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
        );
      case "planned":
        return (
          <div className="w-3 h-3 bg-orange-400 rounded-full shadow-lg"></div>
        );
      default:
        return <div className="w-3 h-3 bg-gray-300 rounded-full"></div>;
    }
  };

  const getColorClasses = (
    color: string,
    type: "bg" | "text" | "border" | "shadow"
  ) => {
    const colors = {
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-600",
        shadow: "shadow-blue-500/25",
      },
      purple: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-600",
        shadow: "shadow-purple-500/25",
      },
      green: {
        bg: "bg-emerald-600",
        text: "text-emerald-600",
        border: "border-emerald-600",
        shadow: "shadow-emerald-500/25",
      },
      orange: {
        bg: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-600",
        shadow: "shadow-orange-500/25",
      },
    };
    return colors[color as keyof typeof colors]?.[type] || colors.blue[type];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="experience"
      className="premium-section bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden"
      ref={ref}
    >
      {/* Enhanced background pattern */}
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
        {/* Header matching other sections */}
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
              Professional Journey
            </span>
          </motion.div>

          <h2 className="text-display mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Development Timeline
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto">
            18+ months of continuous learning, building, and{" "}
            <span className="text-blue-400 font-semibold">
              growing as a developer
            </span>
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced animated timeline line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full shadow-lg"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />

          {/* Timeline events */}
          <motion.div
            className="space-y-8 lg:space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative flex items-start"
                variants={itemVariants}
                onHoverStart={() => setHoveredEvent(event.id)}
                onHoverEnd={() => setHoveredEvent(null)}
              >
                {/* Enhanced timeline dot */}
                <motion.div
                  className="absolute left-6 flex items-center justify-center z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={
                    isInView
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -180 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.8,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-600 flex items-center justify-center shadow-xl">
                    {getStatusIcon(event.status)}
                  </div>
                </motion.div>

                {/* Enhanced content card */}
                <motion.div
                  className="ml-16 w-full"
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl hover:bg-white/10 transition-all duration-500">
                    {/* Glow effect on hover */}
                    <motion.div
                      className={`absolute -inset-1 ${getColorClasses(
                        event.color,
                        "bg"
                      )} rounded-2xl blur-xl opacity-0`}
                      animate={{
                        opacity: hoveredEvent === event.id ? 0.15 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                        <span className="text-sm font-medium text-gray-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                          {event.date}
                        </span>
                        <div className="flex items-center gap-3">
                          <motion.span
                            className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${getColorClasses(
                              event.color,
                              "bg"
                            )} ${getColorClasses(
                              event.color,
                              "shadow"
                            )} shadow-lg`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {event.type}
                          </motion.span>
                          {event.status === "in-progress" && (
                            <span className="text-sm text-blue-400 font-medium flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                              In Progress
                            </span>
                          )}
                          {event.status === "planned" && (
                            <span className="text-sm text-orange-400 font-medium flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                              Planned
                            </span>
                          )}
                        </div>
                      </div>

                      <motion.h3
                        className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {event.title}
                      </motion.h3>

                      <p className="text-gray-300 leading-relaxed text-base lg:text-lg mb-4">
                        {event.description}
                      </p>

                      {/* Certificate link for Code Institute completion */}
                      {event.certificateUrl && (
                        <motion.a
                          href={event.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl font-semibold text-sm hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
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
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          View Diploma Certificate
                          <svg
                            className="w-3 h-3"
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
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Summary stats for dark theme */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: "14", label: "Milestones", color: "blue" },
            { number: "8", label: "Projects", color: "purple" },
            { number: "3", label: "Certifications", color: "orange" },
            { number: "18+", label: "Months", color: "green" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 + 1.2 }}
            >
              <motion.div
                className={`text-3xl font-bold ${getColorClasses(
                  stat.color,
                  "text"
                )} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: index * 0.1 + 1.4,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300 font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
