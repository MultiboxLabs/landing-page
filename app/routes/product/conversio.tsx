import { createFileRoute } from "@tanstack/react-router";
import { ProductHero } from "@/components/product/product-hero";
import { ProductLayout } from "@/components/product/product-layout";
import { motion } from "motion/react";
import { products } from "@/config/products";

export const Route = createFileRoute("/product/conversio")({
  component: ConversioPage
});

export default function ConversioPage() {
  const productData = products.conversio;

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
          <h2 className="text-2xl font-semibold mb-4 text-purple-300">About Conversio</h2>
          <div className="prose prose-invert max-w-none">
            <p>
              Conversio is designed to provide quick and accurate answers to your questions, powered by advanced
              language models. Whether you're looking for information, seeking clarification, or exploring complex
              topics, Conversio is here to help.
            </p>
            <p className="mt-4">
              With its intuitive interface and powerful capabilities, Conversio makes accessing information as simple as
              having a conversation. Just type your question and get clear, helpful responses instantly.
            </p>
          </div>
        </motion.div>
      </div>
    </ProductLayout>
  );
}
