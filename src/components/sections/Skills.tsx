"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "blue",
      skills: [
        { name: "React", level: 85, category: "framework" },
        { name: "JavaScript", level: 80, category: "language" },
        { name: "TypeScript", level: 75, category: "language" },
        { name: "HTML/CSS", level: 90, category: "markup" },
        { name: "Tailwind CSS", level: 60, category: "styling" },
      ],
    },
    {
      title: "Backend & Data",
      color: "purple",
      skills: [
        { name: "Python", level: 70, category: "language" },
        { name: "Django", level: 75, category: "framework" },
        { name: "Node.js", level: 70, category: "runtime" },
        { name: "PostgreSQL", level: 75, category: "database" },
        { name: "MongoDB", level: 65, category: "database" },
      ],
    },
    {
      title: "Data Science & ML",
      color: "green",
      skills: [
        { name: "NumPy", level: 80, category: "library" },
        { name: "Pandas", level: 85, category: "library" },
        { name: "Scikit-learn", level: 75, category: "library" },
        { name: "Matplotlib", level: 70, category: "visualization" },
        { name: "Data Analysis", level: 80, category: "skill" },
      ],
    },
    {
      title: "Tools & DevOps",
      color: "orange",
      skills: [
        { name: "Git", level: 85, category: "vcs" },
        { name: "VS Code", level: 90, category: "editor" },
        { name: "Heroku", level: 70, category: "deployment" },
        { name: "Netlify", level: 70, category: "deployment" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { width: "var(--target-width)" },
  };

  const progressTransition = {
    duration: 1.2,
    delay: 0.3,
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

  return (
    <section
      id="skills"
      className="premium-section bg-white relative overflow-hidden"
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
            Technical Expertise
          </motion.p>

          <h2 className="text-section-title text-gray-900 mb-6">
            Skills & Technologies
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            18+ months of intensive learning across full-stack development and
            data science
          </p>
        </motion.div>

        {/* Premium skill cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-500"
              variants={categoryVariants}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <div
                  className={`w-3 h-3 ${getColorClasses(
                    category.color,
                    "bg"
                  )} rounded-full`}
                />
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-3"
                    variants={skillVariants}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900 text-lg">
                        {skill.name}
                      </span>
                      <span
                        className={`font-bold text-lg ${getColorClasses(
                          category.color,
                          "text"
                        )}`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative">
                      <div className="w-full bg-gray-200/70 rounded-full h-3 shadow-inner">
                        <motion.div
                          className={`h-3 rounded-full ${getColorClasses(
                            category.color,
                            "bg"
                          )} shadow-lg relative overflow-hidden`}
                          style={
                            {
                              boxShadow: `0 4px 12px ${
                                category.color === "blue"
                                  ? "rgba(59, 130, 246, 0.25)"
                                  : category.color === "purple"
                                  ? "rgba(147, 51, 234, 0.25)"
                                  : category.color === "green"
                                  ? "rgba(34, 197, 94, 0.25)"
                                  : "rgba(249, 115, 22, 0.25)"
                              }`,
                              "--target-width": `${skill.level}%`,
                            } as any
                          }
                          variants={progressVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          transition={progressTransition}
                        >
                          {/* Animated shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 2,
                              delay: skillIndex * 0.2 + 0.8,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Summary Stats - Consistent with Projects */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { number: "18+", label: "Months Learning", color: "blue" },
            { number: "8", label: "Projects Built", color: "purple" },
            { number: "20+", label: "Technologies", color: "green" },
            { number: "100%", label: "Commitment", color: "orange" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 shadow-lg shadow-gray-900/5 hover:shadow-xl hover:shadow-gray-900/10 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`text-3xl lg:text-4xl font-bold ${getColorClasses(
                  stat.color,
                  "text"
                )} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: index * 0.1 + 0.8,
                  duration: 0.5,
                  type: "spring",
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium text-sm lg:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
