import { copy, measures } from "../data";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";
import { useInView } from "../ui/useInView";

/* Vessels are simple outlines; the liquid is a rect clipped to the bowl shape
   whose offset animates to the vessel's own fill line when the pricing block scrolls into view. */
const vessels = {
  "glass-small": {
    vb: "0 0 60 110",
    bowl: "M15 8h30c2 24 1 44-15 50C14 52 13 32 15 8Z",
    stem: "M30 58v34M16 102c8-5 20-5 28 0",
    top: 30,
  },
  "glass-large": {
    vb: "0 0 60 110",
    bowl: "M12 6h36c3 28 2 50-18 58C10 56 9 34 12 6Z",
    stem: "M30 64v28M15 102c8-5 22-5 30 0",
    top: 26,
  },
  "carafe-half": {
    vb: "0 0 60 110",
    bowl: "M22 8h16v18c12 6 16 22 16 38 0 26-12 40-24 40S6 90 6 64c0-16 4-32 16-38V8Z",
    stem: "M38 10c6 2 8 4 8 10M14 104h32",
    top: 52,
  },
  "carafe-full": {
    vb: "0 0 60 110",
    bowl: "M20 4h20v16c14 6 18 24 18 42 0 28-12 44-28 44S2 90 2 62c0-18 4-36 18-42V4Z",
    stem: "M40 6c8 2 12 6 12 14M10 106h40",
    top: 40,
  },
};

const liquidColor = ["#e9d78f", "#f0b9a2", "#b7414f", "#8f2c3c"];

export function Ritual({ photo }) {
  const r = copy.ritual;
  const [ref, inView] = useInView({ threshold: 0.35 });

  return (
    <section className="ritual" id="jak">
      <div className="container ritual-grid">
        <Reveal className="ritual-visual">
          <div className="arch">
            <Photo
              name={photo}
              alt="Litrowy dzbanek i kieliszek rosé na dębowym barze, w tle ciepłe światła lokalu"
              sizes="(min-width: 960px) 36vw, 100vw"
            />
          </div>
          <span className="stamp">{measures[3].size}, {measures[3].price}</span>
        </Reveal>

        <div>
          <Reveal className="section-head">
            <p className="eyebrow">{r.eyebrow}</p>
            <h2>{r.title}</h2>
          </Reveal>

          <ol className="steps">
            {r.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 90} className="step">
                <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>

          <div className={`pricing ${inView ? "is-in" : ""}`} ref={ref}>
            <div className="pricing-head">
              <h3>{r.pricingTitle}</h3>
              <p>{r.pricingNote}</p>
            </div>
            <ul className="measures">
              {measures.map((m, i) => {
                const v = vessels[m.vessel];
                const id = `clip-${m.vessel}`;
                return (
                  <li key={m.size} className="measure" style={{ "--i": i }}>
                    <svg viewBox={v.vb} className="vessel" aria-hidden="true">
                      <defs>
                        <clipPath id={id}>
                          <path d={v.bowl} />
                        </clipPath>
                      </defs>
                      <g clipPath={`url(#${id})`}>
                        <rect
                          className="liquid"
                          x="0"
                          y="0"
                          width="60"
                          height="110"
                          fill={liquidColor[i]}
                          style={{ "--top": `${v.top}px` }}
                        />
                      </g>
                      <path d={v.bowl} className="glass-line" />
                      <path d={v.stem} className="glass-line" />
                    </svg>
                    <span className="measure-size">{m.size}</span>
                    <span className="measure-label">{m.label}</span>
                    <span className="measure-price">{m.price}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
