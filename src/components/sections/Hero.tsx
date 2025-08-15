"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:60px_60px]" />

      <motion.div
        className="premium-container text-center relative z-10"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div className="space-y-8" variants={fadeInUp}>
          {/* Premium greeting */}
          <motion.p
            className="text-blue-600 font-medium text-lg tracking-wide uppercase"
            variants={fadeInUp}
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            className="text-hero text-gray-900 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            James Burch
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Transforming ideas into{" "}
            <span className="text-blue-600 font-semibold">
              intelligent solutions
            </span>{" "}
            through code and data
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed"
            variants={fadeInUp}
          >
            18+ months of intensive learning • 8 projects built from scratch •
            Ready to contribute from day one
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
          variants={fadeInUp}
        >
          <motion.a
            href="#projects"
            className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40"
            whileHover={buttonHover}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              Explore My Work
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

          <motion.a
            href="#contact"
            className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            whileHover={buttonHover}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              Get In Touch
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.697-.413L5 21l1.413-5.303A8.955 8.955 0 013 12a8 8 0 018-8 8 8 0 018 8z"
                />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-500">
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
