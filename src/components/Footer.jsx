import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

const socialLinks = [
  { href: "https://www.facebook.com/vinko", label: "Facebook", text: "vinko", icon: IconBrandFacebook },
  { href: "https://www.instagram.com/vinkolodz", label: "Instagram", text: "vinkolodz", icon: IconBrandInstagram },
];

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-6 border-t border-bone/10 bg-ink px-6 py-6 text-center sm:flex-row sm:text-left">
      <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-bone/35 sm:mr-auto">Vaše zdraví i do zobaczenia</p>
      <ul className="flex flex-wrap justify-center gap-6" aria-label="Profile społecznościowe">
        {socialLinks.map(({ href, label, text, icon: Icon }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.1em] text-bone/60 no-underline transition-colors duration-200 hover:text-bone" aria-label={label}>
              <Icon size={16} stroke={1.6} aria-hidden="true" />
              {text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
