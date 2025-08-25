"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  // Optimized parallax effects with reduced range
  const yBg = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  // Throttled mouse tracking for performance
  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Memoized gradient styles to prevent recalculation
  const gradientStyles = useMemo(
    () => ({
      primary: {
        background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, 
        rgba(59, 130, 246, 0.08) 0%, 
        rgba(139, 92, 246, 0.04) 30%, 
        transparent 60%)`,
      },
      secondary: {
        background: `radial-gradient(200px circle at ${mousePosition.x}% ${mousePosition.y}%, 
        rgba(59, 130, 246, 0.06) 0%, 
        transparent 50%)`,
      },
    }),
    [mousePosition.x, mousePosition.y]
  );

  return (
    <section
      ref={ref}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 pt-16 lg:pt-20"
    >
      {/* Optimized mouse-following glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          ...gradientStyles.primary,
          y: yBg,
        }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          ...gradientStyles.secondary,
          y: yBg,
        }}
      />

      {/* Simplified grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Reduced floating elements for better performance */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/6 to-purple-400/8 blur-xl"
        animate={{
          y: [-8, 8, -8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="premium-container relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          staggerChildren: 0.15,
          delayChildren: 0.2,
        }}
      >
        {/* Status indicator */}
        <motion.div
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/20 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
            <div className="absolute inset-0 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <h1 className="hero-text text-display mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            James Burch
          </h1>
          <div className="relative mb-6">
            <h2 className="text-hero text-gray-700 mb-2">
              Your Next Developer{" "}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                🚀
              </motion.span>
            </h2>
            <div className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Passionate about creating innovative solutions and bringing ideas to
          life through code.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600">13+ months</span>
            <span>of intensive learning</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600">8 projects</span>
            <span>built</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-600">Ready</span>
            <span>to make an impact</span>
          </div>
        </motion.div>

        {/* Tech stack */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            "React",
            "Python",
            "JavaScript",
            "Django",
            "MongoDB",
            "PostgreSQL",
          ].map((tech) => (
            <div
              key={tech}
              className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors duration-200"
            >
              {tech}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.95 }}
        >
          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/25 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">🚀 View My Work</span>
          </motion.button>

          <motion.button
            className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="group-hover:scale-110 transition-transform duration-200">
              ☕
            </span>
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
