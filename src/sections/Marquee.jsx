import { tapWines } from "../data";

export function Marquee() {
  const items = [...tapWines.map((w) => w.name), "Morawy Południowe", "Pienista 50", "Wino z kranu"];
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="marquee-item">
            {t}
            <i className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
