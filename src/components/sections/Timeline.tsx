export default function Timeline() {
  const timelineEvents = [
    {
      id: 1,
      date: "Feb 2024",
      title: "Started Code Institute Full-Stack Development",
      description: "Began intensive program with HTML and CSS fundamentals, learning responsive design and modern web development principles.",
      type: "education",
      status: "completed"
    },
    {
      id: 2,
      date: "Apr 2024",
      title: "Realign Project - HTML/CSS",
      description: "Completed comprehensive HTML/CSS project demonstrating responsive design, semantic markup, and modern styling techniques.",
      type: "project",
      status: "completed"
    },
    {
      id: 3,
      date: "Apr - Jun 2024",
      title: "JavaScript Development & High Octane Project",
      description: "Mastered JavaScript fundamentals, DOM manipulation, and interactive web development. Built High Octane Project combining HTML, CSS, and JavaScript.",
      type: "project",
      status: "completed"
    },
    {
      id: 4,
      date: "Jun 2024",
      title: "Refine Barbers Booking Website",
      description: "Built professional booking website for barber shop with appointment scheduling, responsive design, and modern user interface.",
      type: "project",
      status: "completed"
    },
    {
      id: 5,
      date: "Jun - Jul 2024",
      title: "Python Backend Development",
      description: "Developed Fitness Tracker Backend using Python with terminal interface and Google Sheets API integration for data management.",
      type: "project",
      status: "completed"
    },
    {
      id: 6,
      date: "Jul - Dec 2024",
      title: "Django Full Stack - Golf Booking System",
      description: "Built comprehensive Golf Booking System using Django framework with full CRUD functionality, user authentication, and database integration.",
      type: "project",
      status: "completed"
    },
    {
      id: 7,
      date: "Nov 2024 - Feb 2025",
      title: "Specialization: Predictive Analytics & ML",
      description: "Completed House Price Prediction project using Python, scikit-learn, and machine learning techniques for predictive analytics specialization.",
      type: "project",
      status: "completed"
    },
    {
      id: 8,
      date: "Feb 2025",
      title: "Code Institute Program Completion",
      description: "Successfully completed 12-month intensive program with 5+ major projects spanning full-stack development and machine learning.",
      type: "education",
      status: "completed"
    },
    {
      id: 9,
      date: "Feb - Jul 2025",
      title: "React Portfolio Development",
      description: "Built first React-based portfolio website, learning component-based architecture and modern JavaScript frameworks.",
      type: "project",
      status: "completed"
    },
    {
      id: 10,
      date: "Jul 2025",
      title: "Noble Mortgages Website",
      description: "Developed professional mortgage broker website with modern design, responsive layout, and lead generation functionality.",
      type: "project",
      status: "completed"
    },
    {
      id: 11,
      date: "Aug 2025",
      title: "Construction Demo Site",
      description: "Created demonstration construction company website showcasing modern web development skills with TypeScript and Tailwind CSS.",
      type: "project",
      status: "completed"
    },
    {
      id: 12,
      date: "Aug 2025",
      title: "AWS Developer Associate Certification",
      description: "Pursuing AWS Developer Associate certification to expand cloud computing and DevOps capabilities.",
      type: "certification",
      status: "in-progress"
    },
    {
      id: 13,
      date: "Q4 2025",
      title: "AWS Solutions Architect Associate",
      description: "Planning to achieve AWS Solutions Architect Associate certification for advanced cloud architecture skills.",
      type: "certification",
      status: "planned"
    },
    {
      id: 14,
      date: "Q4 2025",
      title: "AWS Security Specialty",
      description: "Planning to achieve AWS Security Specialty for advanced cloud security expertise.",
      type: "certification",
      status: "planned"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            18+ months of continuous learning, building, and growing as a developer
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-8">
            {timelineEvents.map((event) => (
              <div key={event.id} className="relative flex items-start">
                <div className="absolute left-6 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${
                    event.status === 'completed' ? 'bg-green-500' :
                    event.status === 'in-progress' ? 'bg-blue-500' :
                    'bg-gray-400'
                  }`}></div>
                </div>

                <div className="ml-16">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-600">
                        {event.date}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        event.type === 'education' ? 'bg-purple-100 text-purple-800' :
                        event.type === 'project' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'milestone' ? 'bg-green-100 text-green-800' :
                        event.type === 'certification' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>

                    {event.status === 'in-progress' && (
                      <div className="mt-3">
                        <span className="text-sm text-blue-600 font-medium">
                          🔄 Currently working on this
                        </span>
                      </div>
                    )}

                    {event.status === 'planned' && (
                      <div className="mt-3">
                        <span className="text-sm text-gray-500 font-medium">
                          📅 Planned for future
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}