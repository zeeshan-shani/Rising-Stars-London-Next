"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-20 bg-background py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6 md:px-10"
      >
        <div className="overflow-hidden rounded-lg">
          <Image
            src="/images/Container.png"
            alt="Rising Stars London — young performers in a dance studio"
            width={1200}
            height={700}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
