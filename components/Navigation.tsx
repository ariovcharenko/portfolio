"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "AI Products", href: "#ai-products" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="text-sm font-medium tracking-wide text-gray-100 hover:text-sky-400 transition-colors"
            >
              Arina Ovcharenko
            </a>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
                {navItems.slice(1).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden inline-flex items-center justify-center rounded-full border border-neutral-700 px-3 py-1 text-xs text-gray-200 hover:bg-neutral-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed right-4 top-14 z-40 w-40 rounded-xl border border-neutral-800 bg-neutral-950 p-2 flex flex-col gap-1 text-sm sm:hidden">
          {navItems.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-gray-300 hover:text-sky-400 transition-colors px-2 py-1 rounded"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

