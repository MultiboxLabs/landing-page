import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface MenuBarProps {
  className?: string;
}

interface MenuBarItemProps {
  to: string;
  text: string;
}

export function MenuBarItem({ to, text }: MenuBarItemProps) {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-white transition-colors"
      activeProps={{ className: "text-white font-medium" }}
    >
      {text}
    </Link>
  );
}

export function MenuBar({ className }: MenuBarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("w-full max-w-6xl mx-auto py-4 px-6 mt-5 flex items-center justify-between", className)}
    >
      <Link to="/" className="flex items-center gap-2">
        <img src="/logo.png" alt="Multibox Labs Logo" className="h-8 w-auto rounded-sm" />
        <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          Multibox Labs
        </span>
      </Link>

      <div className="flex items-center gap-6">
        <MenuBarItem to="/" text="Home" />
        <MenuBarItem to="/blog" text="Blog" />
        <MenuBarItem to="/team" text="Team" />
      </div>
    </motion.nav>
  );
}
