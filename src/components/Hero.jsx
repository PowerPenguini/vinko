import { contact } from "../data";
import { Header } from "./Header";
import { ResponsiveImage } from "./ResponsiveImage";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <Header />

      <div className="hero-collage">
        <figure className="hero-frame hero-frame--bar">
          <ResponsiveImage
            name="hero-glass"
            widths={[640, 960, 1440]}
            alt="Dzbanek i kieliszek różowego wina na stoliku w Vinko"
            width="1440"
            height="2160"
            sizes="(min-width: 900px) 58vw, 100vw"
            loading="eager"
            fetchPriority="high"
          />
        </figure>

        <figure className="hero-frame hero-frame--patio">
          <ResponsiveImage
            name="patio"
            widths={[640, 960]}
            alt="Kieliszek wina na stoliku przed Vinko"
            width="960"
            height="1440"
            sizes="(min-width: 900px) 40vw, 100vw"
            loading="eager"
          />
        </figure>

        <div className="hero-panel">
          <p className="hero-address">Pienista 50 · Łódź</p>
          <h1 id="hero-title">Vinko</h1>
          <p className="hero-statement">Morawskie wino z kranu. Bez ceremonii.</p>
          <div className="hero-actions">
            <a
              className="route-link"
              href={contact.mapHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Wyznacz trasę do Vinko w Mapach Google"
            >
              Wyznacz trasę
            </a>
            <a className="text-link" href="#wina">
              Zobacz, co lejemy
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
