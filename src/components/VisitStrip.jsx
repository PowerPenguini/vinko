import { IconMapPin, IconPhone } from "@tabler/icons-react";
import { contact, getTodayOpeningHours } from "../data";

export function VisitStrip() {
  const today = getTodayOpeningHours();

  return (
    <aside className="visit-strip" aria-label="Najważniejsze informacje o Vinko">
      <div className="visit-strip__item visit-strip__intro">
        <strong>Po prostu wpadnij</strong>
        <span>Stolików nie rezerwujemy.</span>
      </div>
      <div className="visit-strip__item">
        <span>Dziś</span>
        <strong>{today?.hours ?? "Sprawdź godziny"}</strong>
      </div>
      <a className="visit-strip__item" href={contact.phoneHref} aria-label={`Zadzwoń do Vinko: ${contact.phone}`}>
        <IconPhone aria-hidden="true" />
        <span>{contact.phone}</span>
      </a>
      <a
        className="visit-strip__item visit-strip__route"
        href={contact.mapHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Wyznacz trasę do Vinko w Mapach Google"
      >
        <IconMapPin aria-hidden="true" />
        <span>Pienista 50 · wyznacz trasę</span>
      </a>
    </aside>
  );
}
