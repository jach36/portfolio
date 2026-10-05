"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-nav backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-8 py-7">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight">
            JC<span className="text-muted">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-contrast transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-5">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="block w-6 h-0.5 bg-contrast" />
            <span className="block w-6 h-0.5 bg-contrast" />
            <span className="block w-6 h-0.5 bg-contrast" />
          </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {open && (
          <div className="md:hidden flex flex-col gap-5 pt-7 pb-2 text-base">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-contrast transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

