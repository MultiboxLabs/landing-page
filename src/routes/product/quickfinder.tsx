import { createFileRoute } from "@tanstack/react-router";
import { ProductHero } from "@/components/product/product-hero";
import { ProductLayout } from "@/components/product/product-layout";
import { FeaturesSection } from "@/components/product/features-section";
import { products } from "@/config/products";

export const Route = createFileRoute("/product/quickfinder")({
  component: QuickFinderPage
});

export default function QuickFinderPage() {
  const productData = products.quickfinder;

  return (
    <ProductLayout>
      <ProductHero {...productData} />

      <div className="max-w-4xl w-full mx-auto">
        {productData.features && <FeaturesSection features={productData.features} />}
      </div>
    </ProductLayout>
  );
}
