import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

const socialLinks = [
  { href: "https://www.facebook.com/vinko", label: "Facebook", text: "vinko", icon: IconBrandFacebook },
  { href: "https://www.instagram.com/vinkolodz", label: "Instagram", text: "vinkolodz", icon: IconBrandInstagram },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <p>Vaše zdraví!</p>
      <ul aria-label="Profile społecznościowe">
        {socialLinks.map(({ href, label, text, icon: Icon }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={`${label}: ${text}`}>
              <Icon aria-hidden="true" />
              {text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
