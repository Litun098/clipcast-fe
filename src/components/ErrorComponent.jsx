import { motion } from "framer-motion";

import { AlertCircle } from "lucide-react";

import { useNavigate } from "react-router";

import PropTypes from "prop-types";

const ErrorComponent = ({ errorMessage }) => {
  const navigate = useNavigate();

  if (!errorMessage) {
    return <div className="text-red-600">An unexpected error occurred.</div>;
  }

  return (
    <div className="h-full w-full">
      <motion.div
        className="flex items-center justify-center min-h-screen bg-transparent place-content-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="bg-red-50 text-red-600 border border-red-300 p-6 rounded-2xl shadow-xl max-w-md text-center">
          <div className="flex justify-center items-center">
            <AlertCircle className="w-12 h-12 text-red-500 animate-pulse" />
          </div>
          <h2 className="text-2xl font-semibold mt-4">
            {errorMessage.status}, {errorMessage.statusText}
          </h2>
          <p className="text-md mt-2">
            {errorMessage.data?.message || errorMessage.statusText || "An unknown error occurred."}
          </p>
          {errorMessage.status === 401 ? (
            <button
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition-all"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          ) : (
            <button
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition-all"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

ErrorComponent.propTypes = {
  errorMessage: PropTypes.shape({
    status: PropTypes.number.isRequired,
    statusText: PropTypes.string.isRequired,
    data: PropTypes.shape({
      message: PropTypes.string,
    }),
  }),
};

ErrorComponent.defaultProps = {
  errorMessage: {
    status: 500,
    statusText: "Unknown Error",
    data: { message: "An unexpected error occurred." },
  },
};

export default ErrorComponent;
