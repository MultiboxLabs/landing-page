import { createFileRoute } from "@tanstack/react-router";
import { ProductHero } from "@/components/product/product-hero";
import { ProductLayout } from "@/components/product/product-layout";
import { motion } from "motion/react";
import { products } from "@/config/products";

export const Route = createFileRoute("/product/rotracker")({
  component: RoTrackerPage
});

export default function RoTrackerPage() {
  const productData = products.rotracker;

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
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">About RoTracker</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              RoTracker provides comprehensive tracking for your Roblox activity. Monitor your game history, keep tabs
              on screen time, and maintain a complete record of your avatar changes — all in one place.
            </p>
            <p className="mt-4">
              Whether you want to review which games you have played, analyze your activity patterns, or simply keep a
              visual history of your avatar evolution, RoTracker makes it effortless.
            </p>
          </div>
        </motion.div>
      </div>
    </ProductLayout>
  );
}
