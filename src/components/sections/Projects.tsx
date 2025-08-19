// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import Image from "next/image";

// export default function Projects() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const [hoveredProject, setHoveredProject] = useState<number | null>(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Refine Barbers Booking Website",
//       description:
//         "Professional booking website for barber shop with appointment scheduling, user authentication, and responsive design. Built with React and modern web technologies.",
//       technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
//       category: "Full-Stack",
//       status: "completed",
//       image: "/images/refinebarbers.webp",
//       demoUrl: "https://refinebarbers.netlify.app",
//       githubUrl: "https://github.com/James-Burch/Refine-Barbers",
//       color: "blue",
//     },
//     {
//       id: 2,
//       title: "House Price Prediction Model",
//       description:
//         "Machine learning model using Python and scikit-learn to predict house prices with 85% accuracy. Features comprehensive data preprocessing, feature engineering, model training with multiple algorithms.",
//       technologies: [
//         "Python",
//         "Scikit-learn",
//         "Pandas",
//         "NumPy",
//         "Matplotlib",
//         "Jupyter",
//       ],
//       category: "Machine Learning",
//       status: "completed",
//       image: "/images/housepriceprediction.webp",
//       demoUrl: "https://house-price-prediction-pp5-615997f77e23.herokuapp.com/",
//       githubUrl: "https://github.com/James-Burch/PP5-ML-PROJECT",
//       color: "purple",
//     },
//     {
//       id: 3,
//       title: "Noble Mortgages Website",
//       description:
//         "Professional mortgage broker website with modern design, responsive layout, and lead generation functionality. Built for real client with focus on conversion optimization.",
//       technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
//       category: "Client Work",
//       status: "completed",
//       image: "/images/noblemortgages.webp",
//       demoUrl: "https://noblemortgages.co.uk/",
//       githubUrl: "https://github.com/James-Burch/noble-mortgages",
//       color: "green",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const projectVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut" as const,
//       },
//     },
//   };

//   const getColorClasses = (color: string, type: "bg" | "text" | "border") => {
//     const colors = {
//       blue: {
//         bg: "bg-blue-600",
//         text: "text-blue-600",
//         border: "border-blue-600",
//       },
//       purple: {
//         bg: "bg-purple-600",
//         text: "text-purple-600",
//         border: "border-purple-600",
//       },
//       green: {
//         bg: "bg-emerald-600",
//         text: "text-emerald-600",
//         border: "border-emerald-600",
//       },
//     };
//     return colors[color as keyof typeof colors]?.[type] || colors.blue[type];
//   };

//   return (
//     <section
//       id="projects"
//       className="premium-section bg-gradient-to-br from-gray-50 via-white to-blue-50/50 relative overflow-hidden"
//       ref={ref}
//     >
//       {/* Subtle background pattern matching Hero */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_20%,transparent_110%)]" />

//       {/* Floating shapes matching Hero aesthetic */}
//       <motion.div
//         className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/8 to-purple-400/10 blur-xl"
//         animate={{
//           y: [-10, 10, -10],
//           transition: {
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           },
//         }}
//       />
//       <motion.div
//         className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/10 to-pink-400/8 blur-xl"
//         animate={{
//           y: [-8, 8, -8],
//           transition: {
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: 2,
//           },
//         }}
//       />

//       <div className="premium-container relative z-10">
//         {/* Header matching Hero style */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           {/* Status indicator matching Hero */}
//           <motion.div
//             className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={
//               isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
//             }
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="relative">
//               <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
//               <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
//             </div>
//             <span className="text-sm font-medium text-gray-700">
//               Portfolio Showcase
//             </span>
//           </motion.div>

//           <h2 className="text-display mb-6">
//             <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
//               Featured Projects
//             </span>
//           </h2>
//           <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
//             Real-world applications demonstrating{" "}
//             <span className="text-blue-700 font-semibold">
//               technical expertise
//             </span>{" "}
//             and business impact
//           </p>
//         </motion.div>

//         {/* Projects grid */}
//         <motion.div
//           className="space-y-16 lg:space-y-24"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {projects.map((project, index) => {
//             const isEven = index % 2 === 0;
//             const isHovered = hoveredProject === project.id;

//             return (
//               <motion.div
//                 key={project.id}
//                 className={`group flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
//                   isEven ? "" : "lg:flex-row-reverse"
//                 }`}
//                 variants={projectVariants}
//                 onHoverStart={() => setHoveredProject(project.id)}
//                 onHoverEnd={() => setHoveredProject(null)}
//               >
//                 {/* Image Section */}
//                 <motion.div
//                   className="flex-1 relative w-full"
//                   whileHover={{ y: -5 }}
//                   transition={{ duration: 0.4, ease: "easeOut" }}
//                 >
//                   <div className="relative">
//                     {/* Enhanced glow effect */}
//                     <motion.div
//                       className={`absolute -inset-2 ${getColorClasses(
//                         project.color,
//                         "bg"
//                       )} rounded-2xl blur-2xl opacity-0 scale-95 hidden lg:block`}
//                       animate={{
//                         opacity: isHovered ? 0.2 : 0,
//                         scale: isHovered ? 1.08 : 0.95,
//                       }}
//                       transition={{ duration: 0.4, ease: "easeOut" }}
//                     />

//                     <motion.a
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="block relative rounded-2xl overflow-hidden shadow-xl cursor-pointer bg-white group"
//                       whileHover={{ scale: 1.02 }}
//                       whileTap={{ scale: 0.98 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <div className="relative aspect-[4/3] overflow-hidden">
//                         <Image
//                           src={project.image}
//                           alt={`${project.title} screenshot`}
//                           fill
//                           sizes="(max-width: 1024px) 100vw, 50vw"
//                           className="object-cover object-top transition-all duration-700 group-hover:scale-110"
//                           priority={index === 0}
//                         />

//                         {/* Gradient overlay for depth */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                       </div>

//                       {/* Enhanced mobile CTA with better animation */}
//                       <motion.div
//                         className="absolute bottom-4 left-4 right-4 lg:hidden"
//                         initial={{ y: 20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: index * 0.2 + 0.5 }}
//                       >
//                         <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between shadow-lg">
//                           <span className="text-gray-900 font-semibold text-sm">
//                             Tap to view live demo
//                           </span>
//                           <motion.div
//                             className={`w-8 h-8 ${getColorClasses(
//                               project.color,
//                               "bg"
//                             )} rounded-lg flex items-center justify-center`}
//                             whileHover={{ scale: 1.1, rotate: 5 }}
//                             whileTap={{ scale: 0.9 }}
//                           >
//                             <svg
//                               className="w-4 h-4 text-white"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                               />
//                             </svg>
//                           </motion.div>
//                         </div>
//                       </motion.div>

//                       {/* Enhanced desktop hover overlay */}
//                       <motion.div
//                         className="absolute inset-0 bg-black/60 backdrop-blur-[2px] items-center justify-center hidden lg:flex"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: isHovered ? 1 : 0 }}
//                         transition={{ duration: 0.4 }}
//                       >
//                         <motion.div
//                           className="text-center space-y-4"
//                           initial={{ y: 30, opacity: 0 }}
//                           animate={{
//                             y: isHovered ? 0 : 30,
//                             opacity: isHovered ? 1 : 0,
//                           }}
//                           transition={{ delay: 0.1, duration: 0.3 }}
//                         >
//                           <div className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl">
//                             View Live Demo
//                           </div>
//                           <p className="text-white/90 text-sm font-medium">
//                             Click to explore the project
//                           </p>
//                         </motion.div>
//                       </motion.div>

//                       {/* Enhanced status indicator */}
//                       <motion.div
//                         className="absolute top-4 right-4"
//                         initial={{ scale: 0, rotate: -90 }}
//                         animate={{ scale: 1, rotate: 0 }}
//                         transition={{
//                           delay: index * 0.2 + 0.5,
//                           duration: 0.6,
//                           type: "spring",
//                           stiffness: 200,
//                         }}
//                         whileHover={{ scale: 1.2 }}
//                       >
//                         <div className="relative">
//                           <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg" />
//                           <motion.div
//                             className="absolute inset-0 bg-green-400 rounded-full"
//                             animate={{
//                               scale: [1, 1.5, 1],
//                               opacity: [0.8, 0, 0.8],
//                             }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           />
//                         </div>
//                       </motion.div>
//                     </motion.a>
//                   </div>
//                 </motion.div>

//                 {/* Content Section */}
//                 <div className="flex-1 space-y-6 w-full">
//                   {/* Category badge */}
//                   <motion.div
//                     className="inline-block"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     <span
//                       className={`px-4 py-2 ${getColorClasses(
//                         project.color,
//                         "bg"
//                       )} text-white text-sm font-semibold rounded-xl shadow-lg`}
//                     >
//                       {project.category}
//                     </span>
//                   </motion.div>

//                   {/* Title */}
//                   <motion.h3
//                     className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight"
//                     whileHover={{ x: 5 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     {project.title}
//                   </motion.h3>

//                   {/* Description */}
//                   <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
//                     {project.description}
//                   </p>

//                   {/* Technologies */}
//                   <div className="space-y-3">
//                     <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
//                       Technologies
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.map((tech, techIndex) => (
//                         <motion.span
//                           key={tech}
//                           className="px-3 py-2 bg-white/60 backdrop-blur-md border border-white/30 rounded-lg text-gray-700 text-sm font-medium hover:bg-white/80 transition-all duration-300 cursor-default"
//                           whileHover={{ scale: 1.05, y: -2 }}
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: techIndex * 0.1 + 0.3 }}
//                         >
//                           {tech}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Enhanced CTA Buttons with better interactions */}
//                   <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                     <motion.a
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`group relative overflow-hidden ${getColorClasses(
//                         project.color,
//                         "bg"
//                       )} text-white px-6 py-3 rounded-xl font-semibold shadow-2xl transition-all duration-300`}
//                       whileHover={{
//                         scale: 1.05,
//                         y: -2,
//                         boxShadow:
//                           "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {/* Animated background overlay */}
//                       <motion.div
//                         className="absolute inset-0 bg-white/20"
//                         initial={{ x: "-100%" }}
//                         whileHover={{ x: "100%" }}
//                         transition={{ duration: 0.6 }}
//                       />
//                       <span className="relative flex items-center justify-center gap-2">
//                         View Live Demo
//                         <motion.div
//                           animate={{ x: [0, 3, 0] }}
//                           transition={{ duration: 1.5, repeat: Infinity }}
//                         >
//                           <svg
//                             className="w-4 h-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                             />
//                           </svg>
//                         </motion.div>
//                       </span>
//                     </motion.a>

//                     <motion.a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group relative bg-white/90 backdrop-blur-md border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg overflow-hidden"
//                       whileHover={{
//                         scale: 1.05,
//                         y: -2,
//                         borderColor: "#3B82F6",
//                         color: "#3B82F6",
//                       }}
//                       whileTap={{ scale: 0.95 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {/* Sliding background effect */}
//                       <motion.div
//                         className="absolute inset-0 bg-blue-50"
//                         initial={{ y: "100%" }}
//                         whileHover={{ y: "0%" }}
//                         transition={{ duration: 0.3 }}
//                       />
//                       <span className="relative flex items-center justify-center gap-2">
//                         <motion.svg
//                           className="w-4 h-4"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                           whileHover={{ rotate: 360 }}
//                           transition={{ duration: 0.8 }}
//                         >
//                           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                         </motion.svg>
//                         View Code
//                       </span>
//                     </motion.a>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Enhanced final CTA with better visibility and swoosh effect */}
//         <motion.div
//           className="text-center mt-24"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8, delay: 1 }}
//         >
//           <motion.a
//             href="/projects"
//             className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-blue-500/25 overflow-hidden"
//             whileHover={{
//               scale: 1.05,
//               y: -2,
//               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//             }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {/* Left-to-right highlight sweep */}
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10"
//               initial={{ x: "-100%" }}
//               whileHover={{ x: "100%" }}
//               transition={{ duration: 0.6, ease: "easeInOut" }}
//             />

//             {/* Content */}
//             <span className="relative z-10">View All Projects</span>
//             <motion.svg
//               className="relative z-10 w-5 h-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               animate={{ x: [0, 3, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </motion.svg>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// Updated Projects.tsx - Integrated with modal system
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { useProjectModal, type Project } from "./useProjectModal";
import { projectsData } from "./projectsData";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Modal management
  const { selectedProject, isModalOpen, openModal, closeModal } =
    useProjectModal();

  // Show only featured projects on homepage (3 projects)
  const featuredProjects = projectsData.filter((project) => project.featured);
  const projectsToShow = featuredProjects;

  const getColorClasses = (category: string) => {
    const colors = {
      "Machine Learning": {
        bg: "bg-purple-600",
        text: "text-purple-600",
        light: "bg-purple-50",
        border: "border-purple-200",
      },
      "Full-Stack": {
        bg: "bg-blue-600",
        text: "text-blue-600",
        light: "bg-blue-50",
        border: "border-blue-200",
      },
      Frontend: {
        bg: "bg-cyan-600",
        text: "text-cyan-600",
        light: "bg-cyan-50",
        border: "border-cyan-200",
      },
      Backend: {
        bg: "bg-green-600",
        text: "text-green-600",
        light: "bg-green-50",
        border: "border-green-200",
      },
      "Client Work": {
        bg: "bg-orange-600",
        text: "text-orange-600",
        light: "bg-orange-50",
        border: "border-orange-200",
      },
      Demo: {
        bg: "bg-pink-600",
        text: "text-pink-600",
        light: "bg-pink-50",
        border: "border-pink-200",
      },
    };
    return colors[category as keyof typeof colors] || colors["Full-Stack"];
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <section
        id="projects"
        className="premium-section bg-gradient-to-br from-white via-gray-50 to-blue-50/30 relative overflow-hidden"
        ref={ref}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/8 to-purple-400/10 blur-xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/8 to-pink-400/10 blur-xl"
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
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Featured Work
              </span>
            </motion.div>

            <h2 className="text-display mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Selected Projects
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
              From machine learning models to full-stack applications,{" "}
              <span className="text-blue-700 font-semibold">
                showcasing technical expertise and problem-solving skills
              </span>
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projectsToShow.map((project, index) => {
              const isEven = index % 2 === 0;
              const isHovered = hoveredProject === project.id;
              const colorClasses = getColorClasses(project.category);

              return (
                <motion.div
                  key={project.id}
                  className={`group flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  } mx-4 sm:mx-0`}
                  variants={projectVariants}
                  transition={{ duration: 0.6 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Enhanced Image Section - Clickable */}
                  <motion.div
                    className="flex-1 relative w-full cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => openModal(project)}
                  >
                    <div className="relative">
                      {/* Background glow effect */}
                      <motion.div
                        className={`absolute inset-0 ${colorClasses.bg} rounded-2xl blur-2xl opacity-0 scale-95`}
                        animate={{
                          opacity: isHovered ? 0.15 : 0,
                          scale: isHovered ? 1.05 : 0.95,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Project image container */}
                      <div className="relative bg-white rounded-2xl p-4 shadow-lg shadow-gray-900/10 border border-gray-200/50 group-hover:shadow-xl group-hover:shadow-gray-900/20 transition-all duration-500">
                        <div className="relative overflow-hidden rounded-xl bg-gray-100">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Overlay with "View Details" */}
                          <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <motion.div
                              className="text-center text-white"
                              initial={{ y: 20, opacity: 0 }}
                              whileHover={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                            >
                              <div className="text-lg font-semibold mb-2">
                                View Details
                              </div>
                              <div className="text-sm opacity-90">
                                Click to explore this project
                              </div>
                            </motion.div>
                          </motion.div>

                          {/* Project category badge */}
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClasses.light} ${colorClasses.text} ${colorClasses.border} border`}
                            >
                              {project.category}
                            </span>
                          </div>

                          {/* Featured badge */}
                          {project.featured && (
                            <div className="absolute top-4 right-4">
                              <motion.div
                                className="px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full shadow-lg"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                ⭐ Featured
                              </motion.div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Enhanced Content Section */}
                  <motion.div
                    className="flex-1 space-y-6"
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: isEven ? 30 : -30 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {/* Title and Quick Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.timeline}</span>
                        </div>
                        {project.teamSize && (
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>{project.teamSize}</span>
                          </div>
                        )}
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${colorClasses.light} ${colorClasses.text}`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + techIndex * 0.05 + 0.8,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.button
                        onClick={() => openModal(project)}
                        className={`flex-1 inline-flex items-center justify-center px-6 py-3 ${colorClasses.bg} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Details
                      </motion.button>

                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}

                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-sm"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="inline-flex flex-col items-center space-y-4 p-8 bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900">
                Want to see more projects?
              </h3>
              <p className="text-gray-600 max-w-md text-center">
                These are just a few highlights. Explore my complete portfolio
                to see all projects and case studies.
              </p>
              <motion.a
                href="/projects"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: [0, 3, 0] }}
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
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
