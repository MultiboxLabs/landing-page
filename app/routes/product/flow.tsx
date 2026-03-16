import { createFileRoute } from "@tanstack/react-router";
import { ProductHero } from "@/components/product/product-hero";
import { ProductLayout } from "@/components/product/product-layout";
import { motion } from "motion/react";
import { products } from "@/config/products";

export const Route = createFileRoute("/product/flow")({
  component: FlowPage
});

export default function FlowPage() {
  const productData = products.flow;

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
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">About Flow</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              Flow is a modern web browser designed from the ground up for speed, security, and a streamlined browsing
              experience. It introduces Spaces to help you organize your tabs by context, split views for multitasking,
              and a clean interface that keeps you focused on what matters.
            </p>
            <p className="mt-4">
              Currently available in Beta, Flow is built for users who demand more from their browser. Whether you are
              researching, working, or browsing casually, Flow adapts to your workflow and keeps everything organized.
            </p>
          </div>
        </motion.div>
      </div>
    </ProductLayout>
  );
}
