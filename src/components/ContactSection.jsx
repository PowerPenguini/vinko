import { IconDog, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { contact, openingHours } from "../data";
import { Wordmark } from "./Wordmark";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function ContactSection() {
  const todayName = dayNames[new Date().getDay()];

  return (
    <section id="kontakt" className="bg-cream text-ink" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Wordmark />
            <h2 id="contact-title" className="mt-8 max-w-xl font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[0.82]">
              Wpadnij na kieliszek w słońcu.
            </h2>
            <p className="mt-6 max-w-md text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.5] text-ink/70">
              Jesteśmy na Pienistej. Nalejemy coś lekkiego, pokażemy butelki i znajdziemy przekąskę do stołu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button-primary" href={contact.phoneHref}>
                Zadzwoń
              </a>
              <a className="button-secondary" href={contact.mapHref} target="_blank" rel="noreferrer">
                Trasa
              </a>
            </div>
          </div>

          <div className="grid gap-[clamp(2rem,5vw,4rem)]">
            <address className="grid gap-7 not-italic sm:grid-cols-2" aria-label="Dane kontaktowe Vinko">
              <ContactItem label="Adres" href={contact.mapHref} icon={<IconMapPin size={18} stroke={2} aria-hidden="true" />} external>
                {contact.address}
              </ContactItem>
              <ContactItem label="Telefon" href={contact.phoneHref} icon={<IconPhone size={18} stroke={2} aria-hidden="true" />}>
                {contact.phone}
              </ContactItem>
              <ContactItem label="E-mail" href={contact.emailHref} icon={<IconMail size={18} stroke={2} aria-hidden="true" />}>
                {contact.email}
              </ContactItem>
            </address>

            <section className="border-t border-ink/12 pt-7" aria-labelledby="hours-title">
              <h3 id="hours-title" className="mb-4 font-display text-sm font-black uppercase tracking-[0.16em] text-ink/50">
                Godziny
              </h3>
              <ul aria-label="Godziny otwarcia">
                {openingHours.map((item) => {
                  const isToday = item.schemaDay === todayName;
                  return (
                    <li key={item.day} className={`grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-ink/10 py-2 leading-[1.4] ${isToday ? "text-wine" : "text-ink/70"}`}>
                      <span>{item.day}</span>
                      <strong className={`font-semibold ${isToday ? "font-black text-wine" : "text-ink"}`}>{item.hours}</strong>
                    </li>
                  );
                })}
              </ul>
            </section>

            <aside className="grid grid-cols-[3.25rem_minmax(0,1fr)] items-center gap-4 rounded-[6px] border border-ink/10 bg-bone/70 p-4 shadow-[0_16px_45px_rgba(36,24,21,0.08)]">
              <IconDog className="h-[3.25rem] w-[3.25rem] text-olive" stroke={1.8} aria-hidden="true" />
              <div>
                <p className="m-0 font-display text-[1.35rem] font-bold leading-none text-ink">Wpadnij z psem</p>
                <p className="mt-2 text-ink/65">Przy stoliku znajdzie się miejsce dla Was obojga.</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, href, icon, external = false, children }) {
  return (
    <div>
      <p className="mb-3 font-display text-sm font-black uppercase tracking-[0.16em] text-ink/50">{label}</p>
      <a
        href={href}
        className="inline-flex items-start gap-1.5 text-ink/82 no-underline transition-colors duration-200 hover:text-wine"
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        <span className="mt-1 shrink-0 text-olive">{icon}</span>
        {children}
      </a>
    </div>
  );
}
