import { motion } from "motion/react";

interface FeaturesSectionProps {
  features: string[];
  title?: string;
}

export function FeaturesSection({ features, title = "Features" }: FeaturesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-12 w-full"
    >
      <h2 className="text-2xl font-semibold mb-4 text-purple-300">{title}</h2>
      <ul className="list-disc pl-5 mb-8 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300">
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
