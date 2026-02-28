"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ThemeToggle from "@/components/ui/theme-toggle";

const navLinks = [
  { label: "HOME", sectionId: "home" },
  { label: "TALENTS", sectionId: "talents" },
  { label: "SERVICES", sectionId: "services" },
  { label: "OUR WORK", sectionId: "our-work" },
  { label: "ABOUT", sectionId: "about" },
  { label: "NEWS", sectionId: "news" },
];

const sectionIds = navLinks.map((l) => l.sectionId);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const { scrollYProgress, scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));

  const scrollTo = useCallback((id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-primary"
      />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ease-out md:px-10 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
            className="shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Rising Stars London"
              width={140}
              height={65}
              priority
              className={`h-auto transition-all duration-300 ease-out ${
                scrolled
                  ? "w-[90px] md:w-[115px]"
                  : "w-[110px] md:w-[140px]"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.sectionId;
              return (
                <button
                  key={link.sectionId}
                  onClick={() => scrollTo(link.sectionId)}
                  className="relative px-4 py-2"
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-primary/[0.08]"
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 24,
                        mass: 0.8,
                      }}
                    />
                  )}
                  <span
                    className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 24,
                        mass: 0.8,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop: Toggle + CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <button
              onClick={() => scrollTo("news")}
              className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile: Toggle + Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-50 rounded-md p-2 text-foreground transition-colors hover:bg-muted"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-x-0 top-full border-b border-border bg-background/95 shadow-lg backdrop-blur-xl lg:hidden"
            >
              <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => {
                  const isActive = activeId === link.sectionId;
                  return (
                    <button
                      key={link.sectionId}
                      onClick={() => scrollTo(link.sectionId)}
                      className={`rounded-lg px-4 py-3 text-left text-sm font-medium tracking-wide transition-colors ${
                        isActive
                          ? "bg-muted text-primary"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
                <button
                  onClick={() => scrollTo("news")}
                  className="mt-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  CONTACT
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
