export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "House Price Prediction Model",
      description: "Machine learning model using Python and scikit-learn to predict house prices with 85% accuracy. Features data preprocessing, model training, and interactive visualization.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      category: "Machine Learning",
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Refine Barbers",
      description: "Full-stack booking website built with TypeScript and modern web technologies. Features appointment scheduling, user authentication, and responsive design.",
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "CSS"],
      category: "Full-Stack",
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Golf Booking Website",
      description: "Comprehensive booking system for golf courses with user management, tee time scheduling, and payment integration.",
      technologies: ["JavaScript", "React", "Express.js", "MongoDB"],
      category: "Full-Stack",
      status: "completed",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development and data science skills
          </p>
        </div>

        {/* Mobile/Tablet: Grid layout */}
        <div className="lg:hidden grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
                
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
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
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    View Demo
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors">
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Alternating layout */}
        <div className="hidden lg:block space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={project.id} className={`flex items-center gap-12 ${isEven ? '' : 'flex-row-reverse'}`}>
                {/* Image */}
                <div className="flex-1">
                  <div className="bg-gray-300 rounded-lg aspect-[4/3] flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Project Screenshot</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-green-600 text-sm font-medium">
                      ✓ {project.status}
                    </span>
                  </div>
                  
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
                    <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors">
                      View Demo
                    </button>
                    <button className="border border-gray-300 text-gray-700 py-3 px-6 rounded hover:bg-gray-50 transition-colors">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}