"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-surface/75 shadow-card backdrop-blur-xl"
          : "border-b border-transparent bg-surface/40 backdrop-blur-md"
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-6 lg:h-[4.25rem]">
        <Link
          href="#home"
          className="group inline-flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-sm font-semibold tracking-tight text-ink transition group-hover:text-accent-cyan/95">
            {siteConfig.name}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-subtle">
            {siteConfig.role}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink-muted transition hover:bg-white/[0.05] hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a className="btn-secondary px-4 py-2 text-xs" href={`mailto:${siteConfig.email}`}>
            Email
          </a>
          <a
            className="btn-primary px-4 py-2 text-xs"
            href={siteConfig.linkedInUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-ink transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-4 rounded-full bg-ink transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-4 rounded-full bg-ink transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden border-t border-white/[0.06] bg-surface/95 backdrop-blur-xl transition duration-200 ${
          open ? "block" : "hidden"
        }`}
        aria-hidden={!open}
      >
        <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Mobile primary">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-ink-muted transition hover:bg-white/[0.04] hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-white/[0.06] pt-4">
            <a className="btn-secondary justify-center" href={`mailto:${siteConfig.email}`}>
              Email
            </a>
            <a
              className="btn-primary justify-center"
              href={siteConfig.linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
