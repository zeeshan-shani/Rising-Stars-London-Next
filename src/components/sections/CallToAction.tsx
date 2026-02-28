"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PremiumButton from "@/components/ui/premium-button";

const ease = [0.22, 1, 0.36, 1] as const;

const words = [
  "A",
  "PLACE",
  "WHERE",
  "TALENT,",
  "DIVERSITY,",
  "AND",
  "CONFIDENCE",
  "SHINE.",
];

const wordVariant = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, ease, delay: i * 0.06 },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const ctaLinks = [
  {
    label: "REGISTER FOR CLASSES",
    href: "/register",
    filled: true,
  },
  {
    label: "APPLY FOR CASTING",
    href: "/casting",
    filled: false,
  },
  {
    label: "BOOK A CALL",
    href: "/contact",
    filled: false,
  },
];

export default function CallToAction() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-primary py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        {/* Word-by-word masked reveal title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center font-heading text-4xl font-black italic uppercase leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {words.map((word, i) => (
            <Fragment key={i}>
              <span className="inline-block overflow-hidden align-top py-[0.05em] px-[0.08em]">
                <motion.span
                  className="inline-block"
                  variants={prefersReduced ? undefined : wordVariant}
                  custom={i}
                  {...(prefersReduced && {
                    initial: { y: "0%" },
                    animate: { y: "0%" },
                  })}
                >
                  {word}
                </motion.span>
              </span>
              {i < words.length - 1 && " "}
            </Fragment>
          ))}
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 md:mt-16"
        >
          {ctaLinks.map((cta, i) => (
            <motion.div key={cta.label} custom={0.6 + i * 0.1} variants={fadeUp}>
              <PremiumButton
                href={cta.href}
                variant={cta.filled ? "inverse" : "outline-light"}
              >
                {cta.label}
              </PremiumButton>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
