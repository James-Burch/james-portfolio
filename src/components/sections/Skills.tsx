export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85, category: "framework" },
        { name: "JavaScript", level: 80, category: "language" },
        { name: "TypeScript", level: 75, category: "language" },
        { name: "HTML/CSS", level: 90, category: "markup" },
        { name: "Tailwind CSS", level: 60, category: "styling" },
      ],
    },
    {
      title: "Backend & Data",
      skills: [
        { name: "Python", level: 85, category: "language" },
        { name: "Django", level: 75, category: "framework" },
        { name: "Node.js", level: 70, category: "runtime" },
        { name: "PostgreSQL", level: 75, category: "database" },
        { name: "MongoDB", level: 65, category: "database" },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "NumPy", level: 80, category: "library" },
        { name: "Pandas", level: 85, category: "library" },
        { name: "Scikit-learn", level: 75, category: "library" },
        { name: "Matplotlib", level: 70, category: "visualization" },
        { name: "Data Analysis", level: 80, category: "skill" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 85, category: "vcs" },
        { name: "VS Code", level: 90, category: "editor" },
        { name: "Heroku", level: 70, category: "deployment" },
        { name: "Netlify", level: 70, category: "deployment" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            13+ months of intensive learning across full-stack development and
            data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">18+</div>
            <div className="text-gray-600">Months Learning</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">8</div>
            <div className="text-gray-600">Projects Built</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">20+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Commitment</div>
          </div>
        </div>
      </div>
    </section>
  );
}
