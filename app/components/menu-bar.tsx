import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MenuBarProps {
  className?: string;
}

export function MenuBar({ className }: MenuBarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("w-full max-w-6xl mx-auto py-4 px-6 flex items-center justify-between", className)}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Multibox Labs Logo" className="h-8 w-auto" />
        <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Multibox Labs
        </span>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-300 hover:text-white transition-colors"
          activeProps={{ className: "text-white font-medium" }}
        >
          Home
        </Link>
        <Link
          to="/blog"
          className="text-gray-300 hover:text-white transition-colors"
          activeProps={{ className: "text-white font-medium" }}
        >
          Blog
        </Link>
      </div>
    </motion.nav>
  );
}
