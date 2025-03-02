import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import * as React from "react";
import { DefaultCatchBoundary } from "@/components/default-catch-boundary";
import { NotFound } from "@/components/not-found";
import appCss from "@/styles/app.css?url";
import { seo } from "@/utils/seo";
import { TanStackRouterDevtools } from "@/components/tanstack-router-dev-tools";
import { motion } from "motion/react";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      ...seo({
        title: "Multibox Labs",
        description: "Interesting applications and services can be found here."
      })
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" }
    ]
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-[#0f0c1d] via-[#1a1625] to-[#231a35] text-gray-200">
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[40%] bg-purple-600/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-600/50 rounded-full blur-[100px]" />
        </div>
        <div className="relative">
          <div className="flex flex-col items-center justify-start py-16 px-4 overflow-hidden relative">
            <div className="relative z-10 w-full flex flex-col items-center">
              {children}

              <motion.footer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-gray-400 text-sm relative z-10 flex flex-col items-center"
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-500/30 to-transparent mb-6"></div>
                <p>© {new Date().getFullYear()} multibox labs. all rights reserved.</p>
              </motion.footer>
            </div>
          </div>
        </div>
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
