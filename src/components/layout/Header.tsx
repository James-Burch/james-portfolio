"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";

  const navItems = [
    { href: "/", label: "Home" },
    { href: isProjectsPage ? "/projects" : "#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#experience", label: "Experience" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only track sections on the home page
      if (pathname === "/") {
        const sections = [
          "projects",
          "skills",
          "experience",
          "about",
          "contact",
        ];
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (currentSection) {
          setActiveSection(`#${currentSection}`);
        } else if (window.scrollY < 100) {
          setActiveSection("/");
        }
      } else {
        // Set active section based on current page
        if (pathname === "/projects") {
          setActiveSection("/projects");
        } else {
          setActiveSection("");
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Handle navigation to sections from any page
  const handleSectionNavigation = (href: string, e: React.MouseEvent) => {
    // If we're on projects page and trying to go to a homepage section
    if (isProjectsPage && href.startsWith("/#")) {
      e.preventDefault();
      window.location.href = href; // Force full page navigation with hash
      return;
    }

    setIsMobileMenuOpen(false);
  };

  const headerVariants = {
    top: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
    open: {
      opacity: 1,
      height: "auto" as const,
      transition: { duration: 0.3, ease: "easeInOut" as const },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial="top"
      animate={isScrolled ? "scrolled" : "top"}
      variants={headerVariants}
    >
      <nav className="premium-container" role="navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">JB</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
              </div>
            </Link>
            <div className="hidden sm:block">
              <span className="font-bold text-lg bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                James Burch
              </span>
              <div className="text-sm text-gray-600">Full-Stack Developer</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive =
                (item.href === "/" &&
                  pathname === "/" &&
                  activeSection === "/") ||
                (item.href === "/projects" && pathname === "/projects") ||
                (pathname === "/" && activeSection === item.href);

              return (
                <motion.div key={item.href} className="relative">
                  {item.href.startsWith("/#") ? (
                    <a
                      href={item.href}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                      onClick={(e) => handleSectionNavigation(item.href, e)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-blue-50 rounded-xl -z-10"
                      layoutId="activeBackground"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="/projects"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                All Projects
              </Link>
            </motion.div>
            <motion.a
              href="/#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                if (isProjectsPage) {
                  e.preventDefault();
                  window.location.href = "/#contact";
                }
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-gray-600 rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-600 rounded-full"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-full h-0.5 bg-gray-600 rounded-full"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="py-6 space-y-1">
                {navItems.map((item, index) => {
                  const isActive =
                    (item.href === "/" &&
                      pathname === "/" &&
                      activeSection === "/") ||
                    (item.href === "/projects" && pathname === "/projects") ||
                    (pathname === "/" && activeSection === item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.href.startsWith("/#") ? (
                        <a
                          href={item.href}
                          className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            isActive
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                          onClick={(e) => handleSectionNavigation(item.href, e)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            isActive
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}

                {/* Mobile CTA buttons */}
                <div className="pt-4 space-y-3 px-4">
                  <Link
                    href="/projects"
                    className="block text-center py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    All Projects
                  </Link>
                  <a
                    href="/#contact"
                    className="block text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (isProjectsPage) {
                        e.preventDefault();
                        window.location.href = "/#contact";
                      }
                    }}
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
