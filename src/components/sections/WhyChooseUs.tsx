"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Sparkles,
  Award,
  Target,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Heart,
    title: "Inclusive by Design",
    description:
      "SEN- and neurodiversity-friendly programmes tailored to all abilities and learning styles.",
  },
  {
    icon: Users,
    title: "Representation Matters",
    description:
      "Championing ethnic minority communities and celebrating diversity in every form.",
  },
  {
    icon: Sparkles,
    title: "Creative Confidence",
    description:
      "Building self-esteem through performing arts, storytelling, and expressive play.",
  },
  {
    icon: Award,
    title: "Experienced Leadership",
    description:
      "Led by educators and industry professionals dedicated to inclusion and creative growth.",
  },
  {
    icon: Target,
    title: "Real Opportunities",
    description:
      "Access to casting calls, modelling work, and genuine performance experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Supportive Environment",
    description:
      "A nurturing space where every child is valued, understood, and celebrated.",
  },
];

export default function WhyChooseUs() {
  return (
    <div id="our-work" className="dark scroll-mt-20">
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-14 md:mb-20"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            >
              WHY FAMILIES
            </motion.h2>
            <motion.span
              custom={0.1}
              variants={fadeUp}
              className="mt-1 block font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl"
            >
              CHOOSE US
            </motion.span>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16"
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  custom={i * 0.08}
                  variants={fadeUp}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                    <Icon size={26} className="text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground md:text-xl">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
