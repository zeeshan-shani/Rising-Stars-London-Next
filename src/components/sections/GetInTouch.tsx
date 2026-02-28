"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  Phone,
  Instagram,
  Music2,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Title animation: fade + blur reveal per line ── */

const blurReveal = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 15 },
  visible: (delay: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.7, ease, delay },
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

const cardHover = {
  scale: 1.02,
  transition: { duration: 0.25, ease: "easeOut" as const },
};

/* ── Contact channels data ── */

interface ContactChannel {
  icon: LucideIcon;
  label: string;
  detail: string;
  href: string;
}

const channels: ContactChannel[] = [
  {
    icon: Mail,
    label: "Email",
    detail: "info@risingstarslondon.co.uk",
    href: "mailto:info@risingstarslondon.co.uk",
  },
  {
    icon: Phone,
    label: "Phone/WhatsApp",
    detail: "+44 ___ ___ ___",
    href: "tel:+44",
  },
  {
    icon: Instagram,
    label: "Instagram",
    detail: "@risingstarslondon",
    href: "https://instagram.com/risingstarslondon",
  },
  {
    icon: Music2,
    label: "TikTok",
    detail: "@risingstarslondon",
    href: "https://tiktok.com/@risingstarslondon",
  },
  {
    icon: MapPin,
    label: "Location",
    detail: "London, UK",
    href: "https://maps.google.com/?q=London,UK",
  },
];

export default function GetInTouch() {
  const prefersReduced = useReducedMotion();

  const resolvedBlur = prefersReduced
    ? {
        hidden: { opacity: 1, filter: "blur(0px)", y: 0 },
        visible: () => ({ opacity: 1, filter: "blur(0px)", y: 0 }),
      }
    : blurReveal;

  return (
    <section id="news" className="scroll-mt-20 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* ── Section Heading: fade + blur reveal ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <motion.span
              custom={0}
              variants={resolvedBlur}
              className="inline-block text-foreground"
            >
              GET IN&nbsp;
            </motion.span>
            <motion.span
              custom={0.15}
              variants={resolvedBlur}
              className="inline-block text-primary"
            >
              TOUCH
            </motion.span>
          </h2>
        </motion.div>

        {/* ── Contact Channel Cards ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            const isLast = i === channels.length - 1;
            return (
              <motion.div
                key={channel.label}
                custom={i * 0.08}
                variants={fadeUp}
                className={isLast ? "col-span-2 sm:col-span-1" : undefined}
              >
                <motion.a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={prefersReduced ? undefined : cardHover}
                  className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <Icon size={22} className="text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-sm font-bold text-foreground">
                    {channel.label}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {channel.detail}
                  </p>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Visit Our Studio Banner ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0.3}
          variants={fadeUp}
          className="mx-auto mt-12 max-w-2xl rounded-2xl bg-primary-soft p-8 text-center md:mt-16 md:p-12"
        >
          <h3 className="font-heading text-xl font-bold text-foreground md:text-2xl">
            Visit Our Studio
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            Come visit us in person to see our facilities and meet our team. We
            offer tours and trial sessions for new families.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Schedule a Visit
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
