import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-md mx-auto pt-20">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">
          Cybersecurity Learning Lab
        </h1>

        <div className="mt-12 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">SQL Injection Lab</h2>
            <p className="text-gray-400 mb-4">Try logging in safely and learn how SQL injection works.</p>
            <a href="/sql-injection/sqlinjection" className="text-blue-400 hover:underline">
              Go to SQL Injection Lab →
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Phishing Awareness</h2>
            <p className="text-gray-400 mb-4">Learn how to spot fake websites designed to steal your data.</p>
            <Link to="/sql-injection/email" className="text-blue-400 hover:underline">
              Try Phishing Simulation →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}