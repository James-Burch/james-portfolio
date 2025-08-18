"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: "🚀",
      title: "Growth Mindset",
      description:
        "Embracing challenges as opportunities to learn and improve continuously.",
    },
    {
      icon: "🔍",
      title: "Problem Solver",
      description:
        "Breaking down complex problems into manageable, logical solutions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "Working effectively in teams and communicating technical concepts clearly.",
    },
    {
      icon: "📊",
      title: "Data-Driven",
      description:
        "Making informed decisions based on analysis and measurable outcomes.",
    },
  ];

  const interests = [
    "Machine Learning & AI",
    "Data Visualization",
    "Web Performance",
    "Cloud Architecture",
    "Automation & DevOps",
    "Open Source Contributing",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="about"
      className="premium-section bg-gray-50 relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.01] bg-[size:80px_80px]" />

      <div className="premium-container relative z-10">
        {/* Section Header */}
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
            Get to Know Me
          </motion.p>

          <h2 className="text-section-title text-gray-900 mb-6">About James</h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with a background in continuous learning and
            problem-solving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                After{" "}
                <strong className="text-gray-900">
                  18+ months of intensive learning
                </strong>{" "}
                through Code Institute's Full-Stack Development program, I've
                discovered my passion for building solutions that make a real
                impact. What started as curiosity about technology has evolved
                into a comprehensive skill set spanning{" "}
                <strong className="text-gray-900">
                  full-stack development and data science
                </strong>
                .
              </p>

              <p>
                My journey into development wasn't traditional, but it's been
                incredibly rewarding. I thrive on the challenge of{" "}
                <strong className="text-gray-900">
                  learning new technologies quickly
                </strong>
                {" "}and applying them to solve real-world problems. From building
                machine learning models that predict house prices to creating
                full-stack applications for real clients, I've consistently
                pushed myself to grow.
              </p>

              <p>
                What drives me most is the intersection of{" "}
                <strong className="text-gray-900">technology and impact</strong>
                . Whether it's automating repetitive tasks, creating intuitive
                user experiences, or extracting insights from data, I'm
                motivated by building things that genuinely help people and
                businesses succeed.
              </p>
            </div>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Current Focus
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#dbeafe" }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Values & Approach */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                My Approach
              </h3>
            </motion.div>

            <div className="grid gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl">{value.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8 md:p-12 border border-blue-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Contribute from Day One
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm actively seeking opportunities where I can apply my skills,
              continue learning, and make a meaningful impact. Let's build
              something great together.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
