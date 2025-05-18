import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
      <div className="w-full max-w-xs p-6 space-y-6">
        {/* Logo with pulse animation */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-8 h-8"
            >
              <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
              <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.83.157l1.008-.003a4.48 4.48 0 002.252-.875 48.6 48.6 0 003.58-3.062V6.748c-.001-1.506-1.125-2.813-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
            </svg>
          </div>
        </div>

        {/* Loading text with animation */}
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-white animate-pulse">
            Messenger
          </h3>
          <p className="text-gray-300">Loading your messages...</p>
        </div>

        {/* Animated progress bar */}
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2.5 rounded-full animate-progress"></div>
        </div>

        {/* Custom animation keyframes (add to your Tailwind config) */}
        <style jsx>{`
          @keyframes progress {
            0% {
              width: 0%;
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              width: 100%;
              background-position: 0% 50%;
            }
          }
          .animate-progress {
            animation: progress 2s ease-in-out infinite;
            background-size: 200% 200%;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Loading;