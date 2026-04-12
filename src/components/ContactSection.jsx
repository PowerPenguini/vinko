import { IconDog, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { contact, openingHours } from "../data";
import { Wordmark } from "./Wordmark";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function ContactSection() {
  const todayName = dayNames[new Date().getDay()];

  return (
    <section id="kontakt" className="bg-ink text-bone" aria-labelledby="contact-title">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Wordmark />
            <h2 id="contact-title" className="mt-8 max-w-xl font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[0.82]">
              Wpadnij na kieliszek. Zobaczymy, co dalej!
            </h2>
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

            <section className="border-t border-bone/15 pt-7" aria-labelledby="hours-title">
              <h3 id="hours-title" className="mb-4 font-display text-sm font-black uppercase tracking-[0.16em] text-bone/50">
                Godziny
              </h3>
              <ul aria-label="Godziny otwarcia">
                {openingHours.map((item) => {
                  const isToday = item.schemaDay === todayName;
                  return (
                    <li key={item.day} className={`grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-bone/10 py-2 leading-[1.4] ${isToday ? "text-wine" : "text-bone/75"}`}>
                      <span>{item.day}</span>
                      <strong className={`font-semibold ${isToday ? "font-black text-wine" : "text-bone"}`}>{item.hours}</strong>
                    </li>
                  );
                })}
              </ul>
            </section>

            <aside className="grid grid-cols-[3.25rem_minmax(0,1fr)] items-center gap-4 rounded-lg border border-bone/15 bg-bone/5 p-4">
              <IconDog className="h-[3.25rem] w-[3.25rem] text-bone" stroke={1.8} aria-hidden="true" />
              <div>
                <p className="m-0 font-display text-[1.35rem] font-bold leading-none text-bone">Wpadnij z psem</p>
                <p className="mt-2 text-bone/70">Przy stoliku znajdzie się miejsce dla Was obojga.</p>
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
      <p className="mb-3 font-display text-sm font-black uppercase tracking-[0.16em] text-bone/50">{label}</p>
      <a
        href={href}
        className="inline-flex items-start gap-1.5 text-bone/90 no-underline transition-colors duration-200 hover:text-bone"
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        <span className="mt-1 shrink-0 text-wine">{icon}</span>
        {children}
      </a>
    </div>
  );
}
