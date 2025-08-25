"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effects
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Throttled mouse tracking for performance - mobile optimized
  useEffect(() => {
    let ticking = false;
    const isMobile = window.innerWidth < 768;

    const handleMouseMove = (e: MouseEvent) => {
      // Reduce mouse tracking frequency on mobile
      if (!ticking && !isMobile) {
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

    // Only add mouse tracking on desktop
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Memoized stats data to prevent recreating array
  const statsData = useMemo(
    () => [
      { number: "18+", label: "Months Learning", icon: "📚" },
      { number: "8", label: "Projects Built", icon: "🚀" },
      { number: "20+", label: "Technologies", icon: "⚡" },
    ],
    []
  );

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/50 pt-16 lg:pt-20"
    >
      {/* Enhanced mouse-following glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(139, 92, 246, 0.08) 20%, 
            rgba(16, 185, 129, 0.05) 40%, 
            transparent 70%)`,
          y: yBg,
        }}
      />
      {/* Secondary glow layer for more depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(300px circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(139, 92, 246, 0.06) 30%, 
            transparent 60%)`,
          y: yBg,
        }}
      />

      {/* Lighter grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_40%,transparent_110%)]" />

      {/* Mobile-optimized floating shapes - reduced on mobile */}
      <motion.div
        className="absolute top-20 left-20 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-xl"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-green-400/20 to-blue-400/20 blur-xl"
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-xl"
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          delay: 1,
        }}
      />

      {/* Main content */}
      <div className="premium-container relative z-10 text-center">
        {/* Status indicator */}
        <motion.div
          className="inline-flex items-center gap-3 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main heading with gradient text */}
        <motion.h1
          className="text-display mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="block">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              James Burch
            </span>
          </span>
          <span className="block text-4xl lg:text-6xl font-normal text-gray-800 mt-2">
            Junior Software Developer <br />
            <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent font-bold">
              Currently Learning AWS Cloud Technologies
            </span>
          </span>
        </motion.h1>

        {/* Enhanced subtitle with typing effect */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed mb-4">
            Transforming ideas into{" "}
            <span className="text-blue-700 font-semibold">
              intelligent solutions
            </span>{" "}
            through modern development practices
          </p>

          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-8">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-4 hover:bg-white/80 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA buttons with improved spacing */}
        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Explore My Work
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="group bg-white/80 backdrop-blur-md border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              Let's Connect
              <motion.div
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.a>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 lg:left-auto lg:right-8 transform -translate-x-1/2 lg:translate-x-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex flex-col items-center space-y-3 text-gray-500">
            <span className="text-sm font-medium">Discover More</span>
            <motion.div
              className="w-6 h-10 border-2 border-gray-300 rounded-full p-1"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mx-auto"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Code snippet floating element - hidden on mobile for performance */}
      <motion.div
        className="absolute top-20 right-10 hidden xl:block"
        animate={{ y: [-5, 5, -5], rotate: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="bg-gray-900/90 backdrop-blur-md text-green-400 p-4 rounded-lg font-mono text-sm border border-gray-700 shadow-2xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <div className="space-y-1">
            <code>const developer = {"{"}</code>
            <div className="ml-4 text-blue-300">name: "James Burch",</div>
            <div className="ml-4 text-purple-300">
              skills: ["React", "Python"],
            </div>
            <div className="ml-4 text-yellow-300">status: "available"</div>
            <div>{"}"};</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
