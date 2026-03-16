export interface ProductButton {
  text: string;
  href: string;
  isComingSoon?: boolean;
  disabled?: boolean;
}

export interface ProductConfig {
  title: string;
  short_description: string;
  description: string;
  image: string;
  buttons: ProductButton[];
  gradientFrom: string;
  gradientTo: string;
  isComingSoon?: boolean;
  openSource?: boolean;
  slug: string;
  features?: string[];
}

export const products: Record<string, ProductConfig> = {
  conversio: {
    title: "Conversio",
    short_description: "Get Answers to Any Question Quickly & Easily With AI",
    description:
      "Conversio is an AI-powered chat application that delivers instant answers to your questions. Built with a clean interface and advanced language models, it is designed to make information access simple and intuitive.",
    image: "/projects/conversio.png",
    buttons: [
      {
        text: "Try It Now",
        href: "https://chat.iamevan.dev"
      }
    ],
    gradientFrom: "teal",
    gradientTo: "blue",
    slug: "conversio"
  },
  quickfinder: {
    title: "QuickFinder",
    short_description: "A Cross-Platform Keystroke Launcher That Boosts Your Productivity",
    description:
      "QuickFinder is a cross-platform keystroke launcher featuring commands, applications, and a wide range of useful actions. Available for macOS, Linux, and Windows, it enables you to access your favorite apps and workflows with just a few keystrokes.",
    image: "/projects/quick-finder.png",
    buttons: [
      {
        text: "Releases (Download)",
        href: "https://github.com/QuickFinderApp/app/releases"
      },
      {
        text: "View on GitHub",
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
    openSource: true,
    slug: "quickfinder"
  },
  deploynest: {
    title: "DeployNest",
    short_description: "Deploy a Wide Range of Applications Easily and Efficiently",
    description:
      "DeployNest is a platform designed to simplify application deployment. With an intuitive interface and powerful automation features, it streamlines the process of deploying applications of any size or complexity.",
    image: "/projects/deploy-nest.png",
    buttons: [
      {
        text: "Coming Soon",
        href: "#",
        disabled: true
      }
    ],
    gradientFrom: "amber",
    gradientTo: "red",
    isComingSoon: true,
    slug: "deploynest"
  }
};
