import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}
