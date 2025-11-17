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
        className="fixed top-0 inset-x-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm shadow-soft"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              onClick={(e) => handleClick(e, "#home")}
              className="text-sm font-semibold tracking-wide text-charcoal hover:text-accent transition-colors"
            >
              Arina Ovcharenko
            </a>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-8 text-sm text-gray-600">
                {navItems.slice(1).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="hover:text-accent transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="sm:hidden inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-xs text-charcoal hover:bg-lightGrey transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="fixed right-4 top-16 z-40 w-48 rounded-xl border border-gray-200 bg-white shadow-card p-3 flex flex-col gap-2 text-sm sm:hidden">
          {navItems.slice(1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-gray-700 hover:text-accent transition-colors px-3 py-2 rounded-lg hover:bg-lightGrey font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

