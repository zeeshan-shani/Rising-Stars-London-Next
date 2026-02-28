"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import PremiumButton from "@/components/ui/premium-button";
import MissionFocusGlow from "@/components/ui/mission-focus-glow";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

function MagneticCTA({
  children,
  variant,
  onClick,
}: {
  children: React.ReactNode;
  variant: "primary" | "outline";
  onClick?: () => void;
}) {
  const { ref, style, onMouseMove, onMouseLeave } = useMagnetic(0.25);
  return (
    <motion.div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <PremiumButton variant={variant} onClick={onClick}>
        {children}
      </PremiumButton>
    </motion.div>
  );
}

const taglineWords = ["Talents,", "Not", "Labels."];

const wordReveal = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 + i * 0.12 },
  }),
};

export default function HeroContent() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-background pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Brand Display — centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12 text-center md:mb-16"
        >
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="font-heading text-6xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
          >
            RISING STARS
          </motion.h1>
          <motion.span
            custom={0.1}
            variants={fadeUp}
            className="mt-1 block font-heading text-6xl font-black uppercase leading-[0.95] tracking-tight text-primary sm:text-7xl md:text-8xl lg:text-9xl"
          >
            LONDON
          </motion.span>

          {/* Tagline — "Talents, Not Labels." with mission focus glow */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            className="mt-8 md:mt-10"
          >
            <MissionFocusGlow>
              <motion.span className="inline-flex gap-[0.3em] rounded border border-foreground/80 px-6 py-2.5 text-lg italic text-foreground md:text-xl">
                {taglineWords.map((word, i) => (
                  <motion.span
                    key={word}
                    custom={i}
                    variants={prefersReduced ? undefined : wordReveal}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </MissionFocusGlow>
          </motion.div>
        </motion.div>

        {/* Mission Statement — left-aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl"
        >
          <motion.h2
            custom={0}
            variants={fadeUp}
            className="font-heading text-xl font-extrabold uppercase leading-snug tracking-tight text-foreground md:text-2xl lg:text-3xl"
          >
            EMPOWERING YOUNG PEOPLE WITH SEND TO SHINE BEYOND LABELS.
          </motion.h2>

          <motion.p
            custom={0.1}
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Inclusive performing arts, mentoring and talent development
            programmes designed to celebrate ability, build confidence and
            unlock potential.
          </motion.p>

          {/* Magnetic CTAs */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticCTA variant="primary">
              JOIN RISING STARS TALENT
            </MagneticCTA>
            <MagneticCTA variant="outline">
              APPLY FOR CASTING
            </MagneticCTA>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
