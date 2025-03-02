import { createFileRoute } from "@tanstack/react-router";
import { ProductHero } from "@/components/product/product-hero";
import { ProductLayout } from "@/components/product/product-layout";
import { motion } from "motion/react";

export const Route = createFileRoute("/product/deploynest")({
  component: DeployNestPage
});

export default function DeployNestPage() {
  const productData = {
    title: "DeployNest",
    description:
      "DeployNest is a platform designed to simplify application deployment. With an intuitive interface and powerful automation features, it makes deploying applications of any size or complexity a breeze.",
    image: "/projects/deploy-nest.png",
    buttons: [
      {
        text: "soon...",
        href: "#",
        disabled: true
      }
    ],
    gradientFrom: "amber",
    gradientTo: "red",
    isComingSoon: true
  };

  return (
    <ProductLayout>
      <ProductHero
        title={productData.title}
        description={productData.description}
        image={productData.image}
        buttons={productData.buttons}
        gradientFrom={productData.gradientFrom}
        gradientTo={productData.gradientTo}
        isComingSoon={productData.isComingSoon}
      />

      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">Coming Soon</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              DeployNest is currently in active development. We're building a platform that will simplify the deployment
              process for applications of all sizes, from small personal projects to large enterprise applications.
            </p>
          </div>
        </motion.div>
      </div>
    </ProductLayout>
  );
}
