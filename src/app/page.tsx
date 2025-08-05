import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            James Burch Portfolio
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Portfolio setup successful! 🎉
          </p>
        </div>
      </div>
    </div>
  );
}