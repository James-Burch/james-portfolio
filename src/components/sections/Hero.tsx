export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          James Burch
        </h1>
        <h2 className="text-2xl text-blue-600 mb-8">
          Full-Stack Developer & Data Enthusiast
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          13+ months of intensive learning. 8 projects built from scratch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
           <a href="#projects"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            View My Projects
          </a>
          
           <a href="#contact"
            className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}