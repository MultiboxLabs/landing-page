import { motion } from "motion/react";
import { ReactNode } from "react";

interface ProductLayoutProps {
  children: ReactNode;
}

export function ProductLayout({ children }: ProductLayoutProps) {
  return <>{children}</>;
}
