"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, Facebook, Phone, ArrowRight } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/risingstarslondon", label: "Instagram" },
  { icon: Mail, href: "mailto:info@risingstarslondon.co.uk", label: "Email" },
  { icon: Facebook, href: "https://facebook.com/risingstarslondon", label: "Facebook" },
  { icon: Phone, href: "tel:+44", label: "Phone" },
];

const footerNav = [
  {
    title: "Programmes",
    links: [
      { label: "Rising Stars Talent", href: "/talents" },
      { label: "Rising Stars Casting", href: "/casting" },
      { label: "Rising Stars Learning", href: "/learning" },
      { label: "Workshops", href: "/workshops" },
      { label: "Private Sessions", href: "/private-sessions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Gallery", href: "/gallery" },
      { label: "News & Updates", href: "/news" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Parent Guide", href: "/parent-guide" },
      { label: "FAQs", href: "/faqs" },
      { label: "Registration", href: "/register" },
      { label: "Policies", href: "/policies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

const contactInfo = [
  "London, UK",
  "info@risingstarslondon.co.uk",
  "@risingstarslondon",
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <div className="dark">
      <footer className="bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* ── Top: Logo + Newsletter ── */}
          <div className="grid gap-12 py-14 md:grid-cols-2 md:gap-20 md:py-20">
            {/* Left: Logo, Mission, Social */}
            <div>
              <Image
                src="/images/logo.png"
                alt="Rising Stars London"
                width={160}
                height={75}
                className="h-auto w-[140px] brightness-0 invert md:w-[160px]"
              />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Uplifting children and young adults with special needs through
                creativity, inclusion, and opportunity.
              </p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-muted-foreground/30 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right: Newsletter */}
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                Stay Updated
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Subscribe to our newsletter for programme updates and
                opportunities.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-5 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 flex-1 rounded-lg border border-muted-foreground/30 bg-transparent px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

          <hr className="border-muted-foreground/15" />

          {/* ── Navigation Columns ── */}
          <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:gap-10 md:py-16">
            {footerNav.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h4 className="font-heading text-sm font-bold text-foreground">
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="link-underline text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Contact column */}
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground">
                Contact
              </h4>
              <ul className="mt-4 space-y-3">
                {contactInfo.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-muted-foreground/15" />

          {/* ── Accessibility Statement ── */}
          <div className="py-10 md:py-12">
            <div className="rounded-xl bg-card p-6 md:p-8">
              <h4 className="font-heading text-base font-bold text-foreground">
                Accessibility Statement
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Rising Stars London welcomes individuals of all abilities, ages,
                and backgrounds. We are committed to representation, inclusion,
                and equal opportunity.
              </p>
            </div>
          </div>

          <hr className="border-muted-foreground/15" />

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col items-center justify-between gap-4 py-8 text-xs text-muted-foreground sm:flex-row">
            <p>&copy; 2025 Rising Stars London. All rights reserved.</p>
            <nav aria-label="Legal" className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
