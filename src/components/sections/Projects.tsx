"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Refine Barbers Booking Website",
      description:
        "Professional booking website for barber shop with appointment scheduling, user authentication, and responsive design. Built with React and modern web technologies.",
      longDescription:
        "Full-stack booking platform featuring real-time availability, user profiles, appointment management, and payment integration. Focused on user experience and mobile responsiveness.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Node.js"],
      category: "Full-Stack",
      status: "completed",
      image: "/images/refinebarbers.webp",
      demoUrl: "https://refinebarbers.netlify.app",
      githubUrl: "https://github.com/James-Burch/Refine-Barbers",
      featured: true,
    },
    {
      id: 2,
      title: "House Price Prediction Model",
      description:
        "Machine learning model using Python and scikit-learn to predict house prices with 85% accuracy. Features comprehensive data preprocessing, feature engineering, model training with multiple algorithms, and interactive visualization of results.",
      longDescription:
        "This project demonstrates end-to-end machine learning workflow from data collection to model deployment. Used techniques like regression analysis, feature selection, and model validation to create a robust prediction system.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Jupyter",
      ],
      category: "Machine Learning",
      status: "completed",
      image: "/images/housepriceprediction.webp",
      demoUrl: "https://house-price-prediction-pp5-615997f77e23.herokuapp.com/",
      githubUrl: "https://github.com/James-Burch/PP5-ML-PROJECT",
      featured: true,
    },
    {
      id: 3,
      title: "Noble Mortgages Website",
      description:
        "Professional mortgage broker website with modern design, responsive layout, and lead generation functionality. Built for real client with focus on conversion optimization.",
      longDescription:
        "Client project featuring mortgage calculator, application forms, service pages, and contact system. Optimized for SEO and lead generation with professional design.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Client Work",
      status: "completed",
      image: "/images/noblemortgages.webp",
      demoUrl: "https://mortgageuk.netlify.app/",
      githubUrl: "https://github.com/James-Burch/AK-Site",
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const projectTransition = {
    duration: 0.6,
  };

  const cardHover = {
    y: -10,
    transition: { duration: 0.3 },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Real-world applications showcasing full-stack development and data
            science skills
          </p>
          <a
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg"
          >
            View All Projects →
          </a>
        </motion.div>

        {/* Mobile/Tablet: Grid layout */}
        <motion.div
          className="lg:hidden grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={projectVariants}
              transition={projectTransition}
              whileHover={cardHover}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-green-600 text-sm font-medium">
                    ✓ {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Demo
                  </motion.button>
                  <motion.button
                    className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop: Alternating layout */}
        <motion.div
          className="hidden lg:block space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                className={`flex items-center gap-12 ${
                  isEven ? "" : "flex-row-reverse"
                }`}
                variants={projectVariants}
                transition={projectTransition}
              >
                {/* Image */}
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-lg">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4 inline-block">
                    {project.category}
                  </span>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Demo
                    </motion.button>
                    <motion.button
                      className="border border-gray-300 text-gray-700 py-3 px-6 rounded hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
