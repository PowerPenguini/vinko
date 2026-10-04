import { contact, copy } from "../data";
import { BrandLogo } from "../ui/BrandLogo";
import { publicAsset } from "../assets";

export function Footer() {
  const f = copy.footer;
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandLogo size={96} />
          <p className="footer-tagline">{f.tagline}</p>
        </div>
        <div className="footer-col">
          <span>{contact.street}</span>
          <span>{contact.city}</span>
        </div>
        <div className="footer-col">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
        </div>
      </div>
      <div className="container footer-legal">
        <span>{f.legal}</span>
        <a className="footer-archive" href={publicAsset("archiwum/")}>
          {f.archive}
        </a>
        <span>
          {f.credit}, {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
