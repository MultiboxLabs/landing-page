import { createFileRoute } from "@tanstack/react-router";
import { ProductHero } from "@/components/product/product-hero";
import { ProductLayout } from "@/components/product/product-layout";
import { motion } from "motion/react";
import { products } from "@/config/products";

export const Route = createFileRoute("/product/deploynest")({
  component: DeployNestPage
});

export default function DeployNestPage() {
  const productData = products.deploynest;

  return (
    <ProductLayout>
      <ProductHero {...productData} />

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
