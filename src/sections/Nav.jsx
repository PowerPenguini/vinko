import { useEffect, useState } from "react";
import { copy } from "../data";
import { BrandLogo } from "../ui/BrandLogo";

const links = [
  { href: "#krany", label: copy.nav.taps },
  { href: "#przekaski", label: copy.nav.snacks },
  { href: "#morawy", label: copy.nav.story },
];

export function Nav({ openState }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" className="nav-brand" aria-label="Vinko, strona główna">
        <BrandLogo size={52} />
        <span className="nav-wordmark">
          Vinko <small>z beczki</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Nawigacja">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a href="#wizyta" className={`nav-status state-${openState.state}`}>
        <span className="dot" aria-hidden="true" />
        <span className="nav-status-text">{openState.text}</span>
        <span className="nav-status-short">{copy.nav.visit}</span>
      </a>
    </header>
  );
}
