"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -4, 0],
            transition: {
              opacity: { duration: 0.3 },
              scale: { duration: 0.3, ease: "easeOut" },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{
            y: -6,
            boxShadow: "0 8px 30px rgba(0,157,163,0.35)",
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20"
        >
          <ArrowUp size={20} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
