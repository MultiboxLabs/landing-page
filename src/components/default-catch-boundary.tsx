import { ErrorComponent, rootRouteId, useMatch, useRouter } from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { ArrowLeftIcon, RefreshCcwIcon } from "lucide-react";
import { HomeIcon } from "lucide-react";
import { motion } from "motion/react";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId
  });

  console.error("DefaultCatchBoundary Error:", error);

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
            ⚠️
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-4 mb-8"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-indigo-400">
            Something Went Wrong
          </h1>
          <div className="text-gray-300">
            <div className="text-lg font-light mb-6">An unexpected error occurred while processing your request.</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="backdrop-blur-sm bg-black/20 p-4 rounded-xl text-sm font-mono overflow-auto max-h-48"
            >
              <ErrorComponent error={error} />
            </motion.div>
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
            onClick={() => {
              router.invalidate();
            }}
            className="px-8 py-2.5 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-full text-sm hover:from-purple-600/30 hover:to-indigo-600/30 transition-all duration-300 flex items-center"
          >
            <RefreshCcwIcon className="w-4 h-4 mr-1" /> Try Again
          </motion.button>
          {isRoot ? (
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/"
              className="px-8 py-2.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 flex items-center"
            >
              <HomeIcon className="w-4 h-4 mr-1" /> Home
            </motion.a>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.history.back()}
              className="px-8 py-2.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300 flex items-center"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-1" /> Go Back
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
