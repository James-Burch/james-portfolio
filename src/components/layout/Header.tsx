"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    {
      name: "Home",
      href: pathname === "/" ? "#" : "/",
      isSection: pathname === "/",
    },
    {
      name: "Projects",
      href: pathname === "/" ? "#projects" : "/#projects",
      isSection: true,
    },
    {
      name: "Skills",
      href: pathname === "/" ? "#skills" : "/#skills",
      isSection: true,
    },
    {
      name: "Experience",
      href: pathname === "/" ? "#experience" : "/#experience",
      isSection: true,
    },
    {
      name: "Contact",
      href: pathname === "/" ? "#contact" : "/#contact",
      isSection: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
    top: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const hamburgerLine1 = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  const hamburgerLine2 = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const hamburgerLine3 = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200"
      variants={headerVariants}
      animate={scrolled ? "scrolled" : "top"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-xl font-bold text-gray-900">James Burch</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <motion.a
              href="/projects"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.span
                className="h-0.5 w-6 bg-gray-600 origin-center"
                variants={hamburgerLine1}
                animate={isMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-0.5 w-6 bg-gray-600"
                variants={hamburgerLine2}
                animate={isMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="h-0.5 w-6 bg-gray-600 origin-center"
                variants={hamburgerLine3}
                animate={isMenuOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    variants={menuItemVariants}
                    onClick={() => setIsMenuOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.a
                  href="/projects"
                  className="block mx-4 mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                  variants={menuItemVariants}
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
