"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GalleryModal from "@/components/sections/GalleryModal";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const galleryImages = [
  {
    src: "/images/Container.png",
    alt: "Dance studio group performance",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/what-we-offer.png",
    alt: "Young performer celebrating on stage",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/images/past-project-gall-1.png",
    alt: "Costumed characters performing on stage",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/past-project-gall-2.png",
    alt: "Creative play space and venue",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/past-project-gall-3.png",
    alt: "Children drawing and creating art together",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/past-project-gall-4.png",
    alt: "Performer in red jacket on stage",
    className: "col-span-1 row-span-1",
  },
];

export default function PastProjects() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Section Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="mb-12 md:mb-16"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
            >
              PAST PROJECTS
            </motion.h2>
            <motion.span
              custom={0.1}
              variants={fadeUp}
              className="mt-1 block font-heading text-5xl font-black uppercase leading-[0.95] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl"
            >
              GALLERY
            </motion.span>
          </motion.div>

          {/* Gallery Mosaic Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          >
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                custom={i * 0.08}
                variants={fadeUp}
                className={`group relative overflow-hidden ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/5" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={0}
            variants={fadeUp}
            className="mt-14 text-center md:mt-20"
          >
            <motion.button
              onClick={() => setGalleryOpen(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="inline-flex items-center justify-center rounded border border-foreground px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-all duration-300 hover:bg-foreground hover:text-background hover:shadow-lg"
            >
              VIEW FULL GALLERY
            </motion.button>
          </motion.div>
        </div>
      </section>

      <GalleryModal open={galleryOpen} onOpenChange={setGalleryOpen} />
    </>
  );
}
