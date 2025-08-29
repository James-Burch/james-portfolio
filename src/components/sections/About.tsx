"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, FileText } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const values = [
    {
      icon: "🚀",
      title: "Growth Mindset",
      description:
        "Embracing challenges as opportunities to learn and improve continuously through every project and obstacle.",
      color: "blue",
    },
    {
      icon: "🔍",
      title: "Problem Solver",
      description:
        "Breaking down complex problems into manageable, logical solutions using analytical thinking and creativity.",
      color: "purple",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "Working effectively in teams and communicating technical concepts clearly to both technical and non-technical stakeholders.",
      color: "green",
    },
    {
      icon: "📊",
      title: "Data-Driven",
      description:
        "Making informed decisions based on analysis and measurable outcomes rather than assumptions.",
      color: "orange",
    },
  ];

  const interests = [
    "React & Next.js Development",
    "Cloud Architecture (AWS)",
    "Web Performance Optimization",
    "Animation & UX Design",
    "API Integration",
    "Firebase & Authentication",
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-600",
        text: "text-blue-400",
        glow: "from-blue-600/20 to-blue-600/5",
      },
      purple: {
        bg: "bg-purple-600",
        text: "text-purple-400",
        glow: "from-purple-600/20 to-purple-600/5",
      },
      green: {
        bg: "bg-emerald-600",
        text: "text-emerald-400",
        glow: "from-emerald-600/20 to-emerald-600/5",
      },
      orange: {
        bg: "bg-orange-600",
        text: "text-orange-400",
        glow: "from-orange-600/20 to-orange-600/5",
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  // Simple PDF download function
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/James-Burch-CV.pdf";
    link.download = "James-Burch-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    hidden: { opacity: 0, y: 30 },
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
      id="about"
      className="premium-section bg-gradient-to-br from-blue-50/50 via-white to-gray-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_20%,transparent_110%)]" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/8 to-purple-400/10 blur-xl"
        animate={{ y: [-10, 10, -10], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/8 blur-xl"
        animate={{ y: [-8, 8, -8], scale: [1.1, 1, 1.1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400/8 to-blue-400/5 blur-xl"
        animate={{ y: [-6, 6, -6], x: [-3, 3, -3] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
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
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Get to Know Me
            </span>
          </motion.div>

          <h2 className="text-display mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              About James
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-4xl mx-auto">
            Passionate developer with a background in{" "}
            <span className="text-blue-700 font-semibold">
              continuous learning
            </span>{" "}
            and problem-solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
          {/* Personal Story - Wider column */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  After{" "}
                  <strong className="text-gray-900">
                    12 months of intensive learning - 6+ months freelance/personal development
                  </strong>{" "}
                  through Code Institute's Full-Stack Development program, I've
                  discovered my passion for building solutions that make a real
                  impact. What started as curiosity about technology has evolved
                  into a comprehensive skill set spanning{" "}
                  <strong className="text-gray-900">
                    full-stack development and modern web technologies
                  </strong>
                  .
                </p>

                <p>
                  My journey into development wasn't traditional, but it's been
                  incredibly rewarding. I thrive on the challenge of{" "}
                  <strong className="text-gray-900">
                    learning new technologies quickly
                  </strong>{" "}
                  and applying them to solve real-world problems. From building
                  React applications with Firebase authentication to creating
                  full-stack solutions for real clients, I've consistently
                  pushed myself to grow.
                </p>

                <p>
                  What drives me most is the intersection of{" "}
                  <strong className="text-gray-900">
                    technology and impact
                  </strong>
                  . Whether it's creating intuitive user experiences with Framer
                  Motion, integrating APIs, or optimizing web performance, I'm
                  motivated by building things that genuinely help people and
                  businesses succeed.
                </p>
              </div>
            </div>

            {/* CV Download Section */}
            <motion.div
              className="relative bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Traditional CV Download
                  </h3>
                  <p className="text-gray-600">
                    Download a traditional CV format for easy sharing and ATS
                    compatibility.
                  </p>
                </div>
                <div className="flex gap-3">
                  <motion.button
                    onClick={downloadCV}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </motion.button>

                  <motion.a
                    href="/James-Burch-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FileText className="w-4 h-4" />
                    View CV
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              className="relative bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Current Focus & Learning
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm font-medium border border-blue-200 hover:bg-blue-200 hover:border-blue-300 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Values & Approach - Narrower column */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                My Approach
              </h3>
            </motion.div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl hover:bg-white/80 transition-all duration-500"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onHoverStart={() => setHoveredValue(index)}
                  onHoverEnd={() => setHoveredValue(null)}
                >
                  {/* Enhanced glow effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${
                      getColorClasses(value.color).glow
                    } rounded-2xl blur-xl opacity-0`}
                    animate={{
                      opacity: hoveredValue === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-3">
                      <motion.div
                        className={`w-10 h-10 ${
                          getColorClasses(value.color).bg
                        } rounded-xl flex items-center justify-center text-lg shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {value.icon}
                      </motion.div>
                      <h4
                        className={`text-lg font-semibold text-gray-900 group-hover:${
                          getColorClasses(value.color).text
                        } transition-colors duration-300`}
                      >
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="relative bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="relative">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.6 }}
              >
                Ready to Contribute from Day One
              </motion.h3>
              <motion.p
                className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 1.8 }}
              >
                I'm actively seeking opportunities where I can apply my skills,
                continue learning, and make a meaningful impact. Let's build
                something great together.
              </motion.p>
              <motion.a
                href="#contact"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-500/25 inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 2.0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Get In Touch</span>
                <motion.svg
                  className="relative w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 4, 0] }}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
