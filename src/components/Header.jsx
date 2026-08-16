import React from "react";
import { contact, navItems } from "../data";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Główna nawigacja">
        <Wordmark />

        <ul className="desktop-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <a
          className="route-link route-link--header"
          href={contact.mapHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Wyznacz trasę do Vinko w Mapach Google"
        >
          Wyznacz trasę
        </a>

        <button
          type="button"
          className={`mobile-menu-button ${isMenuOpen ? "is-open" : ""}`}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="mobile-menu"
          className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contact.mapHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Wyznacz trasę do Vinko w Mapach Google"
                onClick={() => setIsMenuOpen(false)}
              >
                Wyznacz trasę
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
