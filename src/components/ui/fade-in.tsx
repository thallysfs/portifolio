"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "li" | "section" | "article";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  as = "div",
}: FadeInProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={cn(className)}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      variants={variants}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </MotionTag>
  );
}
