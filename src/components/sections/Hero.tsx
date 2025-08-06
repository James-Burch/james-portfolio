'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <motion.div 
        className="max-w-4xl mx-auto px-4 text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1 
          className="text-5xl font-bold text-gray-900 mb-6"
          variants={fadeInUp}
        >
          James Burch
        </motion.h1>
        
        <motion.h2 
          className="text-2xl text-blue-600 mb-8"
          variants={fadeInUp}
        >
          Full-Stack Developer & Data Enthusiast
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-600 mb-12"
          variants={fadeInUp}
        >
          18+ months of intensive learning. 10+ projects built from scratch.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
        >
          <motion.a
            href="#projects"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            whileHover={buttonHover}
            whileTap={{ scale: 0.98 }}
          >
            View My Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
            whileHover={buttonHover}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}