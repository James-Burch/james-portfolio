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
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1.2, delay: 0.3 },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            18+ months of intensive learning across full-stack development and
            data science
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-6"
              variants={categoryVariants}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="space-y-2"
                    variants={skillVariants}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        variants={progressVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl font-bold text-blue-600">18+</div>
            <div className="text-gray-600">Months Learning</div>
          </motion.div>
          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl font-bold text-blue-600">8</div>
            <div className="text-gray-600">Projects Built</div>
          </motion.div>
          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl font-bold text-blue-600">20+</div>
            <div className="text-gray-600">Technologies</div>
          </motion.div>
          <motion.div
            className="space-y-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Commitment</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
