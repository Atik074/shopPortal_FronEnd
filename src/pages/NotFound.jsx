import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <h1 className="text-9xl font-extrabold text-sky-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold shadow-lg hover:bg-sky-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
