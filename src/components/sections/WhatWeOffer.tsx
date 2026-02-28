"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const offerings = [
  {
    title: "Performing Arts Training",
    description:
      "Drama, dance, and music sessions designed for all abilities — building skills, expression, and stage confidence.",
  },
  {
    title: "Mentoring & Development",
    description:
      "One-to-one and group mentoring programmes that nurture personal growth, resilience, and self-belief.",
  },
  {
    title: "Workshops & Events",
    description:
      "Creative workshops and live showcases that bring young people together to collaborate and perform.",
  },
  {
    title: "Casting Opportunities",
    description:
      "Access to real industry casting calls, giving young talent a platform to be seen and represented.",
  },
];

export default function WhatWeOffer() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
          variants={fadeUp}
          className="mb-12 font-heading text-4xl font-black uppercase tracking-tight text-foreground md:mb-16 md:text-5xl lg:text-6xl"
        >
          WHAT WE OFFER
        </motion.h2>

        {/* Two-column: Text + Image (reversed from WhoWeAre) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20"
        >
          {/* Offerings List */}
          <motion.div custom={0} variants={fadeUp}>
            <ul className="space-y-6 md:space-y-8">
              {offerings.map((item) => (
                <li key={item.title}>
                  <h3 className="font-heading text-lg font-bold text-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded bg-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                EXPLORE OUR SERVICES
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div custom={0.15} variants={fadeUp}>
            <Image
              src="/images/what-we-offer.png"
              alt="Young performer celebrating on stage"
              width={600}
              height={800}
              className="img-hover h-auto w-full rounded-lg object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
