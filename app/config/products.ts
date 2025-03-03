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
    short_description: "get answers to any questions quickly & easily with AI",
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
    gradientTo: "blue",
    slug: "conversio"
  },
  quickfinder: {
    title: "QuickFinder",
    short_description: "a cross-platform keystroke launcher that boosts your productivity",
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
    openSource: true,
    slug: "quickfinder"
  },
  deploynest: {
    title: "DeployNest",
    short_description: "deploy a wide range of applications easily and efficiently",
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
    isComingSoon: true,
    slug: "deploynest"
  }
};
