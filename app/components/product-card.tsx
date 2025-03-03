import { ArrowRightIcon, type LucideIcon } from "lucide-react";
import colors from "tailwindcss/colors";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ProductConfig } from "@/config/products";

interface ProductCardProps {
  icon?: LucideIcon;
  product: ProductConfig;
}

export function ProductCard({
  icon: Icon,
  product: {
    title,
    short_description,
    image,
    buttons,
    gradientFrom,
    gradientTo,
    isComingSoon = false,
    openSource = false,
    slug
  }
}: ProductCardProps) {
  // @ts-ignore - colors typing issue
  const fromColor = colors[gradientFrom];
  // @ts-ignore - colors typing issue
  const toColor = colors[gradientTo];

  if (!fromColor || !toColor) {
    console.warn(`Colors not found for ${gradientFrom} or ${gradientTo}`);
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col items-center backdrop-blur-sm p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl"
      style={{
        background: `linear-gradient(130deg, ${fromColor[950]}, ${toColor[950]})`,
        border: `1px solid rgba(255, 255, 255, 0.05)`
      }}
    >
      {/* Card background glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at center, ${fromColor[400]}50, transparent 70%)`
        }}
      />

      {/* Subtle border glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 20px ${fromColor[500]}30, 0 0 30px ${fromColor[500]}20`
        }}
      />

      {/* Status badges */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        {isComingSoon && (
          <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs font-medium rounded-full">
            Coming Soon
          </span>
        )}
        {openSource && (
          <span className="px-2 py-1 bg-green-600/20 text-green-400 text-xs font-medium rounded-full">Open Source</span>
        )}
      </div>

      <Link to={`/product/${slug}` as any}>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative w-24 h-24 rounded-2xl mb-6 flex items-center justify-center shadow-lg cursor-pointer z-10"
          style={{
            background: `linear-gradient(135deg, ${fromColor[500]}, ${toColor[600]})`,
            boxShadow: `0 10px 25px -5px ${fromColor[500]}40`
          }}
        >
          {/* Icon shine effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="w-full h-full absolute top-0 left-[-100%] group-hover:left-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ease-in-out pointer-events-none" />
          </div>

          {image ? (
            <img src={image || "/placeholder.svg"} alt={title} className="size-full object-contain rounded-2xl" />
          ) : (
            Icon && <Icon className="w-12 h-12 text-white" />
          )}
        </motion.div>
      </Link>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl mb-3 bg-clip-text text-transparent cursor-pointer relative z-10"
        style={{
          backgroundImage: `linear-gradient(to right, ${fromColor[300]}, ${toColor[300]})`
        }}
        onClick={() => {
          if (slug) {
            window.location.href = `/product/${slug}`;
          }
        }}
      >
        {title}
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-gray-300 text-sm max-w-xs mb-6 space-y-1 relative z-10"
      >
        <p>{short_description}</p>
      </motion.div>

      {/* Regular buttons */}
      <div className="mt-auto flex flex-col flex-wrap gap-3 justify-center items-center w-full relative z-10">
        {buttons.map((button, index) =>
          button.isComingSoon ? (
            <motion.button
              key={index}
              whileHover={{ opacity: 0.7 }}
              className="w-full px-8 py-2.5 rounded-full text-sm cursor-not-allowed opacity-70 transition-all duration-300 border"
              style={{
                background: `linear-gradient(to right, ${fromColor[600]}1a, ${toColor[600]}1a)`,
                borderColor: `${fromColor[500]}33`
              }}
              disabled
            >
              <ArrowRightIcon className="w-4 h-4 mr-1" /> {button.text}
            </motion.button>
          ) : (
            <motion.a
              key={index}
              href={button.href}
              target="_blank"
              whileHover={{ scale: 1.02, y: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-full px-8 py-2.5 rounded-full text-sm transition-all duration-300 flex items-center justify-center border hover:opacity-90 ${button.disabled ? "opacity-50 pointer-events-none" : ""}`}
              style={{
                background: `linear-gradient(to right, ${fromColor[600]}33, ${toColor[600]}33)`,
                borderColor: `${fromColor[500]}4d`
              }}
              aria-disabled={button.disabled}
              onClick={button.disabled ? (e) => e.preventDefault() : undefined}
            >
              <ArrowRightIcon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />{" "}
              {button.text}
            </motion.a>
          )
        )}
      </div>

      {/* View Details Button - Completely at the bottom with margin-top */}
      {slug && (
        <motion.a
          href={`/product/${slug}`}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            delay: 0.1
          }}
          className="w-full px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center border-2 mt-4 hover:shadow-lg relative z-10 overflow-hidden group"
          style={{
            background: fromColor[500],
            backgroundImage: `linear-gradient(to right, ${fromColor[500]}, ${toColor[500]})`,
            borderColor: `${fromColor[400]}`,
            color: "white",
            textShadow: "0 1px 2px rgba(0,0,0,0.2)"
          }}
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="w-full h-full absolute top-0 left-[-100%] group-hover:left-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 ease-in-out" />
          </div>
          <ArrowRightIcon className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" /> View
          Details
        </motion.a>
      )}
    </motion.div>
  );
}
