"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MissionFocusGlowProps {
  children: ReactNode;
  className?: string;
}

export default function MissionFocusGlow({
  children,
  className = "",
}: MissionFocusGlowProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Primary glow — large, slow breathing */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-20 w-72 rounded-full bg-primary/10 blur-[60px] md:h-24 md:w-96"
        animate={
          prefersReduced
            ? { opacity: 0.5 }
            : {
                opacity: [0.4, 0.65, 0.4],
                scale: [1, 1.05, 1],
              }
        }
        transition={
          prefersReduced
            ? undefined
            : {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      {/* Secondary glow — smaller, offset, slightly faster for organic depth */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-12 w-48 translate-y-1 rounded-full bg-primary/8 blur-[40px] md:h-14 md:w-56"
        animate={
          prefersReduced
            ? { opacity: 0.3 }
            : {
                opacity: [0.25, 0.45, 0.25],
                x: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }
        }
        transition={
          prefersReduced
            ? undefined
            : {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
