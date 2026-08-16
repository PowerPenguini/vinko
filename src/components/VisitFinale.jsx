import { IconDog, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { contact, openingHours } from "../data";
import { ResponsiveImage } from "./ResponsiveImage";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function VisitFinale() {
  const todayName = dayNames[new Date().getDay()];

  return (
    <section id="kontakt" className="visit-finale" aria-labelledby="contact-title">
      <figure className="visit-finale__photo">
        <ResponsiveImage
          name="storefront"
          widths={[960, 1440, 1920]}
          alt="Witryna i wejście do Vinko przy Pienistej 50"
          width="1920"
          height="1280"
          sizes="(min-width: 900px) 94vw, 150vw"
        />
      </figure>

      <div className="visit-sheet">
        <header>
          <h2 id="contact-title">Pienista 50. Do zobaczenia.</h2>
          <p>Wpadnij na kieliszek, wspólną deskę albo litr wina na później.</p>
        </header>

        <a
          className="route-link"
          href={contact.mapHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Wyznacz trasę do Vinko w Mapach Google"
        >
          Wyznacz trasę
        </a>

        <address className="contact-lines" aria-label="Dane kontaktowe Vinko">
          <ContactLine href={contact.mapHref} icon={<IconMapPin aria-hidden="true" />} external>{contact.address}</ContactLine>
          <ContactLine href={contact.phoneHref} icon={<IconPhone aria-hidden="true" />}>{contact.phone}</ContactLine>
          <ContactLine href={contact.emailHref} icon={<IconMail aria-hidden="true" />}>{contact.email}</ContactLine>
        </address>

        <div className="opening-hours">
          <h3>Godziny otwarcia</h3>
          <ul aria-label="Godziny otwarcia">
            {openingHours.map((item) => {
              const isToday = item.schemaDay === todayName;
              return (
                <li key={item.day} className={isToday ? "is-today" : undefined} aria-current={isToday ? "date" : undefined}>
                  <span>{item.day}</span>
                  <strong>{item.hours}</strong>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="dog-line">
          <IconDog aria-hidden="true" />
          <span>
            <strong>Psy są mile widziane.</strong>
            <span>Wpadajcie razem.</span>
          </span>
        </p>
      </div>
    </section>
  );
}

function ContactLine({ href, icon, external = false, children }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {icon}
      <span>{children}</span>
    </a>
  );
}
