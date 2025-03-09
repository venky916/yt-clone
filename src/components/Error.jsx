import { FaExclamationCircle } from 'react-icons/fa';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div className="p-8 mt-10 mx-auto flex flex-col w-2/4 justify-center items-center bg-red-50 border border-red-200 rounded-lg shadow-lg">
      {/* Icon */}
      <FaExclamationCircle className="text-red-600 text-6xl mb-4" />

      {/* Heading */}
      <h1 className="text-3xl font-bold text-red-800 mb-2">
        OOPS!!!!!!!!!!!!!
      </h1>

      {/* Subheading */}
      <h2 className="text-xl text-red-700 mb-4">Something Went Wrong</h2>

      {/* Status and Status Text */}
      <div className="bg-red-100 p-3 rounded-md">
        <p className="text-red-800 font-mono">{status + ' : ' + statusText}</p>
      </div>

      {/* Optional: Add a button to retry or go back */}
      <button
        className="mt-6 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        onClick={() => window.location.reload()} // Example: Reload the page
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
