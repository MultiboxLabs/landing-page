import { createFileRoute } from "@tanstack/react-router";
import { ProductHero } from "@/components/product/product-hero";
import { ProductLayout } from "@/components/product/product-layout";
import { FeaturesSection } from "@/components/product/features-section";

export const Route = createFileRoute("/product/quickfinder")({
  component: QuickFinderPage
});

export default function QuickFinderPage() {
  const productData = {
    title: "QuickFinder",
    description:
      "QuickFinder is a cross-platform keystroke launcher, featuring commands, applications and tons of useful actions. Available for MacOS, Linux, and Windows, it helps you access your favorite apps and actions with just a few keystrokes.",
    image: "/projects/quick-finder.png",
    buttons: [
      {
        text: "releases (download)",
        href: "https://github.com/QuickFinderApp/app/releases"
      },
      {
        text: "view on github",
        href: "https://github.com/QuickFinderApp/app"
      }
    ],
    features: [
      "Cross-platform support (MacOS, Linux, Windows)",
      "App Launcher (macOS, Linux & Windows)",
      "System Commands (Shut Down, Reboot, etc)",
      "Settings (Run on Boot, Spotter Hotkey, etc)",
      "Confetti",
      "Theming",
      "[Coming Soon] External Plugins (Compatible with Raycast Extensions)"
    ],
    gradientFrom: "blue",
    gradientTo: "purple",
    openSource: true
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
        openSource={productData.openSource}
      />

      <div className="max-w-4xl w-full mx-auto">
        <FeaturesSection features={productData.features} />
      </div>
    </ProductLayout>
  );
}
