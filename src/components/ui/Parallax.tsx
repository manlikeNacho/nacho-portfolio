"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Max px of vertical drift in either direction. */
  strength?: number;
}

export function Parallax({ children, className = "", strength = 40 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <div ref={ref}>
      <motion.div className={className} style={{ y: reduceMotion ? 0 : y }}>
        {children}
      </motion.div>
    </div>
  );
}
