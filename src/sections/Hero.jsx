import { copy } from "../data";
import { Photo } from "../ui/Photo";
import { BrandLogo } from "../ui/BrandLogo";

export function Hero({ openState, bgPhoto }) {
  const h = copy.hero;
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <Photo
          name={bgPhoto}
          alt=""
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-aside" aria-hidden="true">
          <div className="hero-sign">
            <BrandLogo size={150} />
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">{h.eyebrow}</p>
          <h1 className="hero-title">
            <span>{h.headlineLines[0]}</span>
            <em>{h.headlineLines[1]}</em>
          </h1>
          <p className="hero-sub">{h.sub}</p>
          <div className="hero-actions">
            <a href="#krany" className="btn btn-primary">
              {h.ctaPrimary}
            </a>
            <a href="#wizyta" className="btn btn-ghost">
              {h.ctaSecondary}
            </a>
          </div>
          <p className={`hero-status state-${openState.state}`}>
            <span className="dot" aria-hidden="true" />
            {openState.text}
          </p>
        </div>
      </div>
    </section>
  );
}
