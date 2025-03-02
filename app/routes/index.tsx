import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/product-card";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  component: Home
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start py-16 px-4 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center mb-20">
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          src="/logo.png"
          alt="Multibox Labs"
          className="w-24 h-24 rounded-2xl mb-6 flex items-center justify-center shadow-lg shadow-purple-900/30 transform hover:scale-105 transition-all duration-300"
        />

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 mb-4"
        >
          Multibox Labs
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center text-gray-300 max-w-md"
        >
          <p className="text-lg">welcome! explore innovative tools and applications,</p>
          <p className="text-lg font-light">here's where creativity meets functionality</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mb-16 relative z-10"
      >
        <h2 className="text-yellow-300 text-2xl mb-1 text-center font-light tracking-wider">products</h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl relative z-10 [&>*:last-child:nth-child(2n+1)]:md:col-span-2 [&>*:last-child:nth-child(2n+1)]:md:mx-auto [&>*:last-child:nth-child(2n+1)]:md:max-w-md">
        <ProductCard
          title="Conversio"
          description="get answers to any questions quickly & easily"
          image="/projects/conversio.png"
          buttons={[
            {
              text: "try it now",
              href: "https://chat.iamevan.dev"
            }
          ]}
          gradientFrom="teal"
          gradientTo="blue"
        />

        <ProductCard
          title="QuickFinder"
          description="a cross-platform keystroke launcher that boosts your productivity"
          image="/projects/quick-finder.png"
          buttons={[
            {
              text: "releases (download)",
              href: "https://github.com/QuickFinderApp/app/releases"
            },
            {
              text: "view on github",
              href: "https://github.com/QuickFinderApp/app"
            }
          ]}
          gradientFrom="blue"
          gradientTo="purple"
          openSource={true}
        />

        <ProductCard
          title="DeployNest"
          description="deploy a wide range of applications easily and efficiently"
          image="/projects/deploy-nest.png"
          buttons={[
            {
              text: "soon...",
              href: "#",
              disabled: true
            }
          ]}
          gradientFrom="amber"
          gradientTo="red"
          isComingSoon={true}
        />
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-32 text-gray-400 text-sm relative z-10 flex flex-col items-center"
      >
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500/30 to-transparent mb-6"></div>
        <p>© {new Date().getFullYear()} multibox labs. all rights reserved.</p>
      </motion.footer>
    </div>
  );
}
