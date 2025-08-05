import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
    </div>
  );
}