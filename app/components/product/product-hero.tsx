import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";
import { motion } from "motion/react";
import colors from "tailwindcss/colors";

interface ProductHeroProps {
  title: string;
  description: string;
  image: string;
  gradientFrom: string;
  gradientTo: string;
  isComingSoon?: boolean;
  openSource?: boolean;
  buttons: Array<{
    text: string;
    href: string;
    disabled?: boolean;
  }>;
}

export function ProductHero({
  title,
  description,
  image,
  gradientFrom,
  gradientTo,
  isComingSoon = false,
  openSource = false,
  buttons
}: ProductHeroProps) {
  // @ts-ignore - colors typing issue
  const fromColor = colors[gradientFrom];
  // @ts-ignore - colors typing issue
  const toColor = colors[gradientTo];

  return (
    <div className="w-full max-w-4xl">
      {/* Back button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="self-start mb-12">
        <Link to="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Home
        </Link>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden"
          style={{
            background: `linear-gradient(to bottom right, ${fromColor[500]}, ${toColor[600]})`,
            boxShadow: `0 10px 15px -3px ${fromColor[500]}33`
          }}
        >
          <img src={image} alt={title} className="size-full object-contain" />
        </motion.div>

        {/* Product Info */}
        <div className="flex-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, ${fromColor[400]}, ${toColor[400]})`
              }}
            >
              {title}
            </h1>

            {isComingSoon && (
              <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-yellow-600/20 text-yellow-400 mb-4">
                Coming Soon
              </div>
            )}

            {openSource && (
              <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-600/20 text-green-400 mb-4">
                Open Source
              </div>
            )}

            <p className="text-lg text-gray-300 mb-8">{description}</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2.5 rounded-full text-sm transition-all duration-300 flex items-center border hover:shadow-lg ${button.disabled ? "opacity-50 pointer-events-none" : ""}`}
                  style={{
                    background: `linear-gradient(to right, ${fromColor[600]}40, ${toColor[600]}40)`,
                    borderColor: `${fromColor[500]}4d`
                  }}
                  aria-disabled={button.disabled}
                  onClick={button.disabled ? (e) => e.preventDefault() : undefined}
                >
                  <span className="mr-1">→</span> {button.text}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
