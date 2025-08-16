"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
      date: "Aug 2025",
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
        return <div className="w-3 h-3 bg-green-500 rounded-full"></div>;
      case "in-progress":
        return (
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        );
      case "planned":
        return <div className="w-3 h-3 bg-gray-400 rounded-full"></div>;
      default:
        return <div className="w-3 h-3 bg-gray-300 rounded-full"></div>;
    }
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
      orange: {
        bg: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-600",
      },
    };
    return colors[color as keyof typeof colors]?.[type] || colors.blue[type];
  };

  const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const timelineTransition = {
    duration: 0.6,
  };

  return (
    <section
      id="experience"
      className="premium-section relative overflow-hidden"
      ref={ref}
    >
      {/* Minimal background pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.01] bg-[size:80px_80px]" />

      <div className="premium-container relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-blue-600 font-medium text-lg tracking-wide uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Professional Journey
          </motion.p>

          <h2 className="text-section-title text-gray-900 mb-6">
            Development Timeline
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            18+ months of continuous learning, building, and growing as a
            developer
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <div className="space-y-8 lg:space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative flex items-start"
                variants={timelineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  ...timelineTransition,
                  delay: index * 1.2 + 0.8, // 1.2s delay between each item
                }}
              >
                {/* Enhanced timeline dot */}
                <motion.div
                  className="absolute left-6 flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 1.2 + 1.2, // Dot appears slightly after the card
                  }}
                >
                  <div className="w-6 h-6 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center shadow-lg">
                    {getStatusIcon(event.status)}
                  </div>
                </motion.div>

                {/* Enhanced content card */}
                <motion.div
                  className="ml-16 w-full"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="group bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                      <span className="text-sm font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${getColorClasses(
                            event.color,
                            "bg"
                          )}`}
                        >
                          {event.type}
                        </span>
                        {event.status === "in-progress" && (
                          <span className="text-sm text-blue-600 font-medium flex items-center gap-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            Currently working on this
                          </span>
                        )}
                        {event.status === "planned" && (
                          <span className="text-sm text-gray-500 font-medium flex items-center gap-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            Planned for future
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
