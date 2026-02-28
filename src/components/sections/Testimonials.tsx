"use client";

import { motion, useReducedMotion } from "framer-motion";

interface Testimonial {
  quote: string;
  attribution: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "\u201CMy son found his confidence for the first time at Rising Stars. He finally feels seen and valued.\u201D",
    attribution: "\u2014 PARENT OF ALEX, AGE 9",
  },
  {
    quote:
      "\u201CThe inclusive approach and warm environment gave my daughter the courage to perform on stage. We\u2019re so grateful.\u201D",
    attribution: "\u2014 PARENT OF MAYA, AGE 12",
  },
  {
    quote:
      "\u201CRising Stars doesn\u2019t just teach performing arts\u2014they celebrate every child\u2019s unique abilities. It\u2019s truly life-changing.\u201D",
    attribution: "\u2014 PARENT OF JORDAN, AGE 11",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const headingVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease },
  },
};

const borderVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.1 },
  },
};

const attributionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.3 },
  },
};

export default function Testimonials() {
  const prefersReduced = useReducedMotion();

  const resolvedHeading = prefersReduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : headingVariants;
  const resolvedContainer = prefersReduced
    ? { hidden: {}, visible: {} }
    : containerVariants;
  const resolvedCard = prefersReduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : cardVariants;
  const resolvedBorder = prefersReduced
    ? { hidden: { scaleY: 1 }, visible: { scaleY: 1 } }
    : borderVariants;
  const resolvedAttribution = prefersReduced
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : attributionVariants;

  return (
    <div id="about" className="dark scroll-mt-20">
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Heading */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={resolvedHeading}
            className="mb-14 text-center font-heading text-5xl font-black uppercase tracking-tight text-primary sm:text-6xl md:mb-20 md:text-7xl lg:text-8xl"
          >
            TESTIMONIALS
          </motion.h2>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={resolvedContainer}
            className="grid gap-8 md:grid-cols-3 md:gap-10 lg:gap-14"
          >
            {testimonials.map((item) => (
              <motion.blockquote
                key={item.attribution}
                variants={resolvedCard}
                className="relative pl-6"
              >
                {/* Animated left border accent */}
                <motion.div
                  variants={resolvedBorder}
                  className="absolute bottom-0 left-0 top-0 w-1 origin-top rounded-full bg-primary"
                />

                <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
                  {item.quote}
                </p>

                <motion.footer
                  variants={resolvedAttribution}
                  className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  {item.attribution}
                </motion.footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
