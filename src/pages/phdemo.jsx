import React, { useState } from 'react';

export default function PhishingDemo() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission behavior without capturing real data
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      {/* Demo Banner */}
      <div className="absolute top-0 left-0 w-full bg-red-600 text-white py-2 text-center font-bold text-lg">
        🚨 Educational Demo Only – This is not a real Facebook login page
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto gap-8">
        {/* Left Section: Facebook Branding */}
        <div className="md:w-1/2 p-4">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg "
            alt="Facebook Logo"
            className="text-2xl font-semibold text-gray-700"
          />
          <p className="text-2xl font-semibold text-gray-700">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>

        {/* Right Section: Login Form */}
        <div className="md:w-1/2 bg-white shadow-xl rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email or Phone
              </label>
              <input
                id="email"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email or phone number"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Log In
            </button>
          </form>

          {/* Additional Links */}
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Forgot password?
            </a>
          </div>

          {/* Create New Account Button */}
          <div className="mt-6">
            <button
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200 font-semibold"
            >
              Create new account
            </button>
          </div>

          {/* Footer Note */}
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>Create a Page for a celebrity, brand, or business.</p>
          </div>
        </div>
      </div>

      {/* Submission Confirmation Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full transform transition-all hover:shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Submission Captured</h2>
            <p className="text-gray-600 mb-4">
              This demonstrates how a phishing page could capture user input.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}