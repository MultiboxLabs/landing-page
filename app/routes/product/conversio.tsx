import { createFileRoute } from "@tanstack/react-router";
import { ProductHero } from "@/components/product/product-hero";
import { ProductLayout } from "@/components/product/product-layout";
import { motion } from "motion/react";

export const Route = createFileRoute("/product/conversio")({
  component: ConversioPage
});

export default function ConversioPage() {
  const productData = {
    title: "Conversio",
    description:
      "Conversio is an AI-powered chat application that helps you find answers to your questions instantly. With a clean interface and powerful language models, it's designed to make information access simple and intuitive.",
    image: "/projects/conversio.png",
    buttons: [
      {
        text: "try it now",
        href: "https://chat.iamevan.dev"
      }
    ],
    gradientFrom: "teal",
    gradientTo: "blue"
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
      />

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
