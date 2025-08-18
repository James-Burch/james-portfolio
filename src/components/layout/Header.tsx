// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from 'next/navigation';

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   const navigation = [
//     {
//       name: "Home",
//       href: pathname === "/" ? "#" : "/",
//       isSection: pathname === "/",
//     },
//     {
//       name: "Projects",
//       href: pathname === "/" ? "#projects" : "/#projects",
//       isSection: true,
//     },
//     {
//       name: "Skills",
//       href: pathname === "/" ? "#skills" : "/#skills",
//       isSection: true,
//     },
//     {
//       name: "Experience",
//       href: pathname === "/" ? "#experience" : "/#experience",
//       isSection: true,
//     },
//     {
//       name: "Contact",
//       href: pathname === "/" ? "#contact" : "/#contact",
//       isSection: true,
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       setScrolled(isScrolled);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const headerVariants = {
//     scrolled: {
//       backgroundColor: "rgba(255, 255, 255, 0.95)",
//       boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.3 },
//     },
//     top: {
//       backgroundColor: "rgba(255, 255, 255, 0.8)",
//       boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
//       transition: { duration: 0.3 },
//     },
//   };

//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.3,
//         when: "afterChildren",
//       },
//     },
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         duration: 0.3,
//         when: "beforeChildren",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const menuItemVariants = {
//     closed: { opacity: 0, x: -20 },
//     open: { opacity: 1, x: 0 },
//   };

//   const hamburgerLine1 = {
//     closed: { rotate: 0, y: 0 },
//     open: { rotate: 45, y: 6 },
//   };

//   const hamburgerLine2 = {
//     closed: { opacity: 1 },
//     open: { opacity: 0 },
//   };

//   const hamburgerLine3 = {
//     closed: { rotate: 0, y: 0 },
//     open: { rotate: -45, y: -6 },
//   };

//   return (
//     <motion.header
//       className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200"
//       variants={headerVariants}
//       animate={scrolled ? "scrolled" : "top"}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <motion.div
//             className="flex-shrink-0"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           >
//             <h1 className="text-xl font-bold text-gray-900">James Burch</h1>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-1">
//             {navigation.map((item) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {item.name}
//               </motion.a>
//             ))}
//           </nav>

//           {/* CTA Button - Desktop */}
//           <div className="hidden md:block">
//             <motion.a
//               href="/projects"
//               className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View Projects
//             </motion.a>
//           </div>

//           {/* Mobile menu button */}
//           <motion.button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="sr-only">Open menu</span>
//             <div className="w-6 h-6 flex flex-col justify-center space-y-1">
//               <motion.span
//                 className="h-0.5 w-6 bg-gray-600 origin-center"
//                 variants={hamburgerLine1}
//                 animate={isMenuOpen ? "open" : "closed"}
//                 transition={{ duration: 0.3 }}
//               />
//               <motion.span
//                 className="h-0.5 w-6 bg-gray-600"
//                 variants={hamburgerLine2}
//                 animate={isMenuOpen ? "open" : "closed"}
//                 transition={{ duration: 0.3 }}
//               />
//               <motion.span
//                 className="h-0.5 w-6 bg-gray-600 origin-center"
//                 variants={hamburgerLine3}
//                 animate={isMenuOpen ? "open" : "closed"}
//                 transition={{ duration: 0.3 }}
//               />
//             </div>
//           </motion.button>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               className="md:hidden overflow-hidden"
//               variants={menuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//             >
//               <nav className="py-4 space-y-2">
//                 {navigation.map((item) => (
//                   <motion.a
//                     key={item.name}
//                     href={item.href}
//                     className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
//                     variants={menuItemVariants}
//                     onClick={() => setIsMenuOpen(false)}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {item.name}
//                   </motion.a>
//                 ))}
//                 <motion.a
//                   href="/projects"
//                   className="block mx-4 mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
//                   variants={menuItemVariants}
//                   onClick={() => setIsMenuOpen(false)}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   View Projects
//                 </motion.a>
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only track sections on the home page
      if (window.location.pathname === "/") {
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
          setActiveSection("/"); // Top of home page
        }
      } else {
        setActiveSection(""); // Clear active section on other pages
      }
    };

    handleScroll(); // Run on mount to set initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
    open: {
      opacity: 1,
      height: "auto" as const,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial="top"
      animate={isScrolled ? "scrolled" : "top"}
      variants={headerVariants}
    >
      <nav className="premium-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand */}
          <motion.a
            href="/"
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-lg">JB</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
                James Burch
              </span>
              <div className="text-sm text-gray-600">Full-Stack Developer</div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.href && (
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
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="/projects"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              All Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
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
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
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
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Mobile CTA buttons */}
                <div className="pt-4 space-y-3 px-4">
                  <motion.a
                    href="/projects"
                    className="block text-center py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    All Projects
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="block text-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (navItems.length + 1) * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    Hire Me
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
