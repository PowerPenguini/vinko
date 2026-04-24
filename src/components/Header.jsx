import React from "react";
import { motion } from "framer-motion";
import { navItems } from "../data";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8" aria-label="Główna nawigacja">
        <Wordmark />
        <ul className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-ink/70 sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="no-underline transition-colors duration-200 hover:text-wine">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={`mobile-menu-button sm:hidden ${isMenuOpen ? "is-open" : ""}`}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <motion.div
          id="mobile-menu"
          className="absolute left-5 right-5 top-[calc(100%-0.45rem)] z-[1] overflow-hidden rounded-lg border border-ink/10 bg-bone/95 shadow-[0_20px_54px_rgba(36,24,21,0.14)] backdrop-blur-md sm:hidden"
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, y: 0, pointerEvents: "auto" },
            closed: { opacity: 0, y: -10, pointerEvents: "none" },
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          aria-hidden={!isMenuOpen}
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block border-b border-ink/10 px-5 py-4 font-display text-[1.05rem] font-bold uppercase tracking-[0.14em] text-ink/85 no-underline transition-colors duration-200 last:border-b-0 hover:bg-wine/5 hover:text-wine"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </header>
  );
}
