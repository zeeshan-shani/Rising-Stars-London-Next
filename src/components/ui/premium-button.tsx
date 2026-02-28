"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface PremiumButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "outline-light" | "inverse";
  className?: string;
}

const baseClasses =
  "relative inline-flex items-center justify-center rounded px-8 py-3.5 text-sm font-semibold uppercase tracking-wide overflow-hidden";

const variantClasses = {
  primary:
    "bg-primary text-primary-foreground shadow-md shadow-primary/20",
  outline:
    "border border-foreground text-foreground hover:bg-foreground/5",
  "outline-light":
    "border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10",
  inverse:
    "bg-background text-primary shadow-md shadow-background/20",
};

export default function PremiumButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: PremiumButtonProps) {
  const combined = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`${combined} transition-shadow duration-300 hover:shadow-lg`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
