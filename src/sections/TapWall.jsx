import { useState } from "react";
import { copy, kindLabels, tapWines } from "../data";
import { Reveal } from "../ui/Reveal";

function Tap({ wine, index, active, onToggle }) {
  return (
    <li className={`tap kind-${wine.kind} ${active ? "is-pouring" : ""}`} style={{ "--i": index }}>
      <button
        type="button"
        className="tap-button"
        onClick={onToggle}
        aria-pressed={active}
        aria-label={`${wine.name}, ${kindLabels[wine.kind]}. ${wine.note}`}
      >
        <span className="handle">
          <span className="handle-board">
            <span className="handle-name">{wine.name}</span>
          </span>
        </span>
        <span className="faucet" aria-hidden="true">
          <span className="faucet-collar" />
          <span className="faucet-spout" />
          <span className="faucet-stream" />
        </span>
        <span className="glass" aria-hidden="true">
          <span className="glass-liquid" />
        </span>
      </button>
      <div className="tap-meta">
        <span className={`kind-pill kind-${wine.kind}`}>{kindLabels[wine.kind]}</span>
        <p>{wine.note}</p>
      </div>
    </li>
  );
}

export function TapWall() {
  const t = copy.taps;
  const [active, setActive] = useState(null);

  return (
    <section className="tapwall" id="krany">
      <div className="container">
        <Reveal className="section-head split">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.title}</h2>
          </div>
          <p className="lead">{t.intro}</p>
        </Reveal>

        <ul className="taps">
          {tapWines.map((w, i) => (
            <Tap
              key={w.name}
              wine={w}
              index={i}
              active={active === i}
              onToggle={() => setActive(active === i ? null : i)}
            />
          ))}
        </ul>

        <p className="tapwall-note">{t.footnote}</p>
      </div>
    </section>
  );
}
