import { Link } from 'react-router-dom';

export default function PhishingEmail() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      {/* Demo Banner */}
      <div className="absolute top-0 left-0 w-full bg-red-600 text-white py-2 text-center font-bold text-lg">
        🚨 Educational Demo Only – This is not a real email
      </div>

      {/* Email Card */}
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-3xl w-full mt-12">
        <div className="border border-gray-300 rounded-md overflow-hidden">
          {/* Email Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800">Urgent Action Required</h2>
            <p className="text-sm text-gray-600">From: security@facebook-mail.com</p>
            <p className="text-xs text-gray-500 mt-1">Date: Today</p>
          </div>

          {/* Email Body */}
          <div className="p-6 space-y-4">
            <p className="text-gray-700">
              Hello valued user,
            </p>
            <p className="text-gray-700">
              We've detected unusual activity on your Facebook account. For your safety, please verify your identity within the next 24 hours.
            </p>
            <p className="text-gray-700">
              If you do not complete verification, your account may be temporarily suspended.
            </p>

            {/* Warning Box */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4">
              <p className="font-medium">⚠️ Important:</p>
              <p>This is a simulated phishing email for educational purposes only. Do not enter real credentials.</p>
            </div>

            {/* Call-to-action Button */}
            <div className="flex justify-center mt-6">
              <Link
                to="/sql-injection/phishing"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 text-center"
              >
                Verify My Account Now
              </Link>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500">
              <p>© 2025 Meta Platforms, Inc. | This is a simulation for cybersecurity education.</p>
              <p className="mt-1">
                ⚠️ Never click suspicious links or enter personal information unless you're certain about the source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}