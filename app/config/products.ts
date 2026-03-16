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
  flow: {
    title: "Flow",
    short_description: "A Modern, Fast, and Secure Web Browser",
    description:
      "Flow is a next-generation web browser built for speed, security, and productivity. Featuring Spaces for organized browsing, split views, and a sleek interface, it redefines how you navigate the web.",
    image: "/projects/flow.png",
    buttons: [
      {
        text: "Download",
        href: "https://flow-browser.com/download"
      },
      {
        text: "Learn More",
        href: "https://flow-browser.com"
      }
    ],
    gradientFrom: "sky",
    gradientTo: "cyan",
    openSource: true,
    slug: "flow"
  },
  rotracker: {
    title: "RoTracker",
    short_description: "Track Your Roblox Game and Avatar History",
    description:
      "RoTracker is a tracking tool for Roblox that lets you monitor your game activity and avatar history. Keep a detailed record of your Roblox sessions, track screen time, and review your avatar changes over time.",
    image: "/projects/rotracker.png",
    buttons: [
      {
        text: "Visit RoTracker",
        href: "https://rotracker.app"
      }
    ],
    gradientFrom: "blue",
    gradientTo: "indigo",
    slug: "rotracker"
  },
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
  }
};
