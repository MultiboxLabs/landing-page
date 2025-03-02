import { motion } from "motion/react";

export function NotFound({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center backdrop-blur-sm bg-white/5 p-12 rounded-2xl border border-white/10 max-w-2xl w-full"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg shadow-purple-900/30"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl"
          >
            404
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-4 mb-8"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-indigo-400">
            Page Not Found
          </h1>
          <div className="text-gray-300">
            {children || <p className="text-lg font-light">The page you are looking for does not exist.</p>}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.history.back()}
            className="px-8 py-2.5 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-full text-sm hover:from-purple-600/30 hover:to-indigo-600/30 transition-all duration-300 flex items-center"
          >
            <span className="mr-1">←</span> Go Back
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/"
            className="px-8 py-2.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 flex items-center"
          >
            <span className="mr-1">→</span> Home
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
