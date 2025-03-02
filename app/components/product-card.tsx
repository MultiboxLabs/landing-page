import type { LucideIcon } from "lucide-react";
import colors from "tailwindcss/colors";
import { motion } from "motion/react";

interface ProductCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  buttons: Array<{
    text: string;
    href: string;
    isComingSoon?: boolean;
    disabled?: boolean;
  }>;
  gradientFrom: string;
  gradientTo: string;
  isComingSoon?: boolean;
  openSource?: boolean;
}

export function ProductCard({
  title,
  description,
  icon: Icon,
  image,
  buttons,
  gradientFrom,
  gradientTo,
  isComingSoon = false,
  openSource = false
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
      className="group flex flex-col items-center backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-opacity-30 transition-all duration-300 hover:shadow-lg"
      style={{
        backgroundImage: `linear-gradient(130deg, ${fromColor[950]}, ${toColor[950]})`
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-24 h-24 rounded-2xl mb-6 flex items-center justify-center shadow-lg"
        style={{
          background: `linear-gradient(to bottom right, ${fromColor[500]}, ${toColor[600]})`,
          boxShadow: `0 10px 15px -3px ${fromColor[500]}33`
        }}
      >
        {image ? (
          <img src={image || "/placeholder.svg"} alt={title} className="size-full object-contain rounded-2xl" />
        ) : (
          Icon && <Icon className="w-12 h-12 text-white" />
        )}
      </motion.div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl mb-3 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${fromColor[400]}, ${toColor[400]})`
        }}
      >
        {title}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-gray-300 text-sm max-w-xs mb-6 space-y-1"
      >
        <p>{description}</p>
        {openSource && (
          <p className="text-green-400 mt-3 font-medium">
            <b>(OPEN SOURCE)</b>
          </p>
        )}
      </motion.div>
      <div className="mt-auto flex flex-col flex-wrap gap-3 justify-center items-center">
        {buttons.map((button, index) =>
          button.isComingSoon ? (
            <motion.button
              key={index}
              whileHover={{ opacity: 0.7 }}
              className="px-8 py-2.5 rounded-full text-sm cursor-not-allowed opacity-70 transition-all duration-300 border"
              style={{
                background: `linear-gradient(to right, ${fromColor[600]}1a, ${toColor[600]}1a)`,
                borderColor: `${fromColor[500]}33`
              }}
              disabled
            >
              {button.text}
            </motion.button>
          ) : (
            <motion.a
              key={index}
              href={button.href}
              target="_blank"
              whileHover={{ scale: 1.02 }}
              className={`px-8 py-2.5 rounded-full text-sm transition-all duration-300 flex items-center border hover:opacity-80 ${button.disabled ? "opacity-50 pointer-events-none" : ""}`}
              style={{
                background: `linear-gradient(to right, ${fromColor[600]}33, ${toColor[600]}33)`,
                borderColor: `${fromColor[500]}4d`
              }}
              aria-disabled={button.disabled}
              onClick={button.disabled ? (e) => e.preventDefault() : undefined}
            >
              <span className="mr-1">→</span> {button.text}
            </motion.a>
          )
        )}
      </div>
    </motion.div>
  );
}
