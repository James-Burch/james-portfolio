"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "blue",
      description: "Modern web and mobile interfaces with React ecosystem",
      skills: [
        {
          name: "React",
          level: 80,
          description: "Component architecture, hooks, state management",
        },
        {
          name: "Next.js",
          level: 40,
          description: "SSR, routing, API routes, optimization",
        },
        {
          name: "React Native",
          level: 30,
          description: "Cross-platform mobile app development",
        },
        {
          name: "JavaScript",
          level: 85,
          description: "ES6+, async/await, modern syntax",
        },
        {
          name: "TypeScript",
          level: 70,
          description: "Type safety, interfaces, component typing",
        },
        {
          name: "Tailwind CSS",
          level: 60,
          description: "Utility-first styling, responsive design",
        },
      ],
    },
    {
      title: "Backend & Cloud",
      color: "purple",
      description: "Server-side development and cloud infrastructure",
      skills: [
        {
          name: "Node.js",
          level: 50,
          description: "Server-side JavaScript, API development",
        },
        {
          name: "Python",
          level: 80,
          description: "Django, data processing, automation",
        },
        {
          name: "Firebase",
          level: 60,
          description: "Authentication, Firestore, real-time data",
        },
        {
          name: "AWS Cloud",
          level: 10,
          description: "Learning cloud services and deployment",
        },
        {
          name: "API Integration",
          level: 80,
          description: "REST APIs, third-party services",
        },
      ],
    },
    {
      title: "Development Tools",
      color: "green",
      description: "Modern development workflow and analytics",
      skills: [
        {
          name: "Git",
          level: 80,
          description: "Version control, branching, collaboration",
        },
        {
          name: "Framer Motion",
          level: 70,
          description: "Advanced animations and interactions",
        },
        {
          name: "Google Analytics",
          level: 70,
          description: "Web analytics and user tracking",
        },
        {
          name: "Custom Domains",
          level: 75,
          description: "Domain management and DNS",
        },
        {
          name: "VS Code",
          level: 90,
          description: "Development environment and extensions",
        },
      ],
    },
  ];

  const tools = [
    { name: "Git", level: 80, color: "orange" },
    { name: "VS Code", level: 90, color: "blue" },
    { name: "Heroku", level: 70, color: "purple" },
    { name: "Netlify", level: 75, color: "green" },
    { name: "Firebase", level: 60, color: "orange" },
    { name: "Framer Motion", level: 70, color: "blue" },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-600",
        light: "bg-blue-50",
        shadow: "shadow-blue-500/25",
      },
      purple: {
        bg: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-600",
        light: "bg-purple-50",
        shadow: "shadow-purple-500/25",
      },
      green: {
        bg: "bg-emerald-600",
        text: "text-emerald-600",
        border: "border-emerald-600",
        light: "bg-emerald-50",
        shadow: "shadow-emerald-500/25",
      },
      orange: {
        bg: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-600",
        light: "bg-orange-50",
        shadow: "shadow-orange-500/25",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="skills"
      className="premium-section bg-gradient-to-br from-blue-50/50 via-white to-gray-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_20%,transparent_110%)]" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/8 to-purple-400/10 blur-xl"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/8 blur-xl"
        animate={{ y: [-8, 8, -8] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="premium-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Technical Expertise
            </span>
          </motion.div>

          <h2 className="text-display mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl mx-auto">
            Full-stack web development with{" "}
            <span className="text-blue-700 font-semibold">React ecosystem</span>{" "}
            and expanding into cloud technologies
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `${
                      getColorClasses(category.color).bg
                    } text-white shadow-lg ${
                      getColorClasses(category.color).shadow
                    }`
                  : "bg-white/60 backdrop-blur-md border border-white/30 text-gray-700 hover:bg-white/80"
              }`}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active category skills */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <h3
                className={`text-2xl font-bold ${
                  getColorClasses(skillCategories[activeCategory].color).text
                } mb-2`}
              >
                {skillCategories[activeCategory].title}
              </h3>
              <p className="text-gray-600">
                {skillCategories[activeCategory].description}
              </p>
            </div>

            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {skill.description}
                      </p>
                    </div>
                    <span
                      className={`font-bold text-xl ${
                        getColorClasses(skillCategories[activeCategory].color)
                          .text
                      }`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          getColorClasses(skillCategories[activeCategory].color)
                            .bg
                        } relative`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: index * 0.1 + 0.5,
                          ease: "easeOut",
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1 + 1,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-xl p-4 text-center hover:bg-white/80 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  {tool.name}
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-full rounded-full ${
                      getColorClasses(tool.color).bg
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${tool.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 1 }}
                  />
                </div>
                <span
                  className={`text-sm font-medium ${
                    getColorClasses(tool.color).text
                  }`}
                >
                  {tool.level}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { number: "18+", label: "Months Learning", color: "blue" },
            { number: "8", label: "Projects Built", color: "purple" },
            { number: "20+", label: "Technologies", color: "green" },
            { number: "100%", label: "Commitment", color: "orange" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:bg-white/80 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`text-3xl font-bold ${
                  getColorClasses(stat.color).text
                } mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: index * 0.1 + 1.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
