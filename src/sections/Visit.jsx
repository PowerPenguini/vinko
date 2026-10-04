import { contact, copy, openingHours } from "../data";
import { Reveal } from "../ui/Reveal";

export function Visit({ openState }) {
  const v = copy.visit;
  const todayDow = openState.today.dow;

  return (
    <section className="visit paper" id="wizyta">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">{v.eyebrow}</p>
          <h2>{v.title}</h2>
          <p className="lead">{v.intro}</p>
        </Reveal>

        <div className="visit-grid">
          <Reveal className="card hours">
            <h3>{v.hoursTitle}</h3>
            <ul>
              {openingHours.map((d) => {
                const isToday = d.dow === todayDow;
                return (
                  <li key={d.day} className={`${isToday ? "is-today" : ""} ${d.open ? "" : "is-closed"}`}>
                    <span className="hours-day">
                      {d.day}
                      {isToday && <small>{v.todayLabel}</small>}
                    </span>
                    <span className="hours-time">{d.open ? `${d.open} do ${d.close}` : v.closedLabel}</span>
                  </li>
                );
              })}
            </ul>
            <p className={`hours-status state-${openState.state}`}>
              <span className="dot" aria-hidden="true" />
              {openState.text}
            </p>
          </Reveal>

          <div className="visit-side">
            <Reveal className="card" delay={80}>
              <h3>{v.addressTitle}</h3>
              <p className="address">
                {contact.street}
                <br />
                {contact.city}
              </p>
              <a className="btn btn-dark" href={contact.mapHref} target="_blank" rel="noreferrer">
                {v.mapCta}
              </a>
            </Reveal>
            <Reveal className="card" delay={160}>
              <h3>{v.contactTitle}</h3>
              <a className="contact-line" href={contact.phoneHref}>
                <span>{v.callCta}</span>
                <strong>{contact.phone}</strong>
              </a>
              <a className="contact-line" href={contact.emailHref}>
                <span>{v.mailCta}</span>
                <strong>{contact.email}</strong>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
