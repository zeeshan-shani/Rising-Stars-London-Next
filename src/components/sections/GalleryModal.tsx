"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const galleryImages = [
  { src: "/images/Container.png", alt: "Dance studio group performance" },
  { src: "/images/what-we-offer.png", alt: "Young performer celebrating on stage" },
  { src: "/images/who-we-are.png", alt: "Children drawing and creating art" },
  { src: "/images/past-project-gall-1.png", alt: "Costumed characters on stage" },
  { src: "/images/past-project-gall-2.png", alt: "Creative play space and venue" },
  { src: "/images/past-project-gall-3.png", alt: "Art workshop with crayons" },
  { src: "/images/past-project-gall-4.png", alt: "Performer in red jacket on stage" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease, delay: i * 0.06 },
  }),
};

interface GalleryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GalleryModal({ open, onOpenChange }: GalleryModalProps) {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const openViewer = useCallback((i: number) => setViewerIndex(i), []);
  const closeViewer = useCallback(() => setViewerIndex(null), []);

  const goNext = useCallback(() => {
    setViewerIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setViewerIndex((prev) =>
      prev !== null
        ? (prev - 1 + galleryImages.length) % galleryImages.length
        : null
    );
  }, []);

  useEffect(() => {
    if (viewerIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeViewer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewerIndex, goNext, goPrev, closeViewer]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-background/80 backdrop-blur-xl" />
        <DialogContent
          showCloseButton={false}
          className="fixed inset-0 top-0 left-0 z-50 flex max-w-none translate-x-0 translate-y-0 flex-col border-none bg-transparent p-0 shadow-none sm:max-w-none"
        >
          <DialogTitle className="sr-only">Past Projects Gallery</DialogTitle>

          {/* Header bar */}
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
              Gallery
            </h2>
            <DialogClose asChild>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-foreground/10"
                aria-label="Close gallery"
              >
                <X size={20} />
              </motion.button>
            </DialogClose>
          </div>

          {/* Masonry Grid */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-6 pb-10 md:px-10">
            <motion.div
              initial="hidden"
              animate="visible"
              className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:gap-4"
            >
              {galleryImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  custom={i}
                  variants={staggerItem}
                  className="group mb-3 break-inside-avoid xl:mb-4"
                >
                  <button
                    onClick={() => openViewer(i)}
                    className="relative block w-full cursor-zoom-in overflow-hidden rounded-lg"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-auto w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-110"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/5" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Fullscreen Image Viewer */}
          <AnimatePresence>
            {viewerIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 backdrop-blur-2xl"
                onClick={closeViewer}
              >
                {/* Close */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeViewer}
                  className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-muted/80 text-foreground backdrop-blur-sm"
                  aria-label="Close viewer"
                >
                  <X size={20} />
                </motion.button>

                {/* Nav Left */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.15 } }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-muted/60 text-foreground backdrop-blur-sm md:left-8"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </motion.button>

                {/* Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={viewerIndex}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35, ease }}
                    className="relative max-h-[85vh] max-w-[90vw] md:max-w-[80vw]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={galleryImages[viewerIndex].src}
                      alt={galleryImages[viewerIndex].alt}
                      width={1400}
                      height={900}
                      priority
                      className="max-h-[85vh] w-auto rounded-lg object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Nav Right */}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.15 } }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-muted/60 text-foreground backdrop-blur-sm md:right-8"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </motion.button>

                {/* Counter */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-muted/60 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm"
                >
                  {viewerIndex + 1} / {galleryImages.length}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
