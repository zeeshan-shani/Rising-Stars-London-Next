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

export default function WhoWeAre() {
  return (
    <section id="talents" className="scroll-mt-20 bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
          variants={fadeUp}
          className="mb-12 font-heading text-4xl font-black uppercase tracking-tight text-primary-foreground md:mb-16 md:text-5xl lg:text-6xl"
        >
          WHO WE ARE
        </motion.h2>

        {/* Two-column: Image + Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid items-start gap-10 md:grid-cols-2 md:gap-14 lg:gap-20"
        >
          {/* Image */}
          <motion.div custom={0} variants={fadeUp}>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/who-we-are.png"
                alt="Young people drawing and creating art together"
                width={600}
                height={750}
                className="img-hover h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            custom={0.15}
            variants={fadeUp}
            className="flex flex-col justify-center"
          >
            <p className="text-base leading-relaxed text-primary-foreground/90 md:text-lg">
              Rising Stars London is an inclusive performing arts academy
              empowering children and young people with SEND to discover their
              strengths, build confidence, and shine. Through performing arts,
              mentoring, workshops, and casting opportunities, we celebrate
              talent, creativity, and individuality — giving every young person a
              space where they are seen, valued, and supported.
            </p>

            <p className="mt-6 text-base font-semibold leading-relaxed text-primary-foreground md:mt-8 md:text-lg">
              We build confidence. We create belonging. We open doors.
            </p>

            <div className="mt-8 md:mt-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded border border-primary-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                LEARN MORE ABOUT US
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
