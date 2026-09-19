"use client";

import { useState, useEffect } from "react";
import { navItems, profile } from "@/data/site";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mark the nav link for the section currently in the middle of the viewport
  useEffect(() => {
    // Include the intro so no link is highlighted while it is in view
    const sections = ["#home", ...navItems.map((item) => item.href)]
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "home" ? "" : `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "border-b border-neutral-200 bg-paper/85" : "border-b border-transparent bg-paper/40"
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="font-serif text-xl tracking-tight text-ink"
            >
              {profile.name}
            </a>

            <div className="flex items-center gap-1">
              <div className="hidden items-center gap-1 text-sm lg:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`relative rounded-md px-3 py-1.5 transition-colors ${
                      active === item.href ? "text-ink" : "text-neutral-500 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-accent-bright transition-transform duration-300 ${
                        active === item.href ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="ml-3 hidden rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent sm:inline-flex"
              >
                Email me
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="ml-2 rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm text-ink lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-neutral-200 bg-paper/95 px-5 py-2 shadow-card backdrop-blur-md lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`block border-b border-neutral-100 py-3 text-base last:border-0 ${
                active === item.href ? "text-accent" : "text-neutral-700"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="block py-3 text-base font-medium text-ink">
            Email me
          </a>
        </div>
      )}
    </>
  );
}
