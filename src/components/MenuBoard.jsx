import { snackMenuItems, tapPricing, tapWines } from "../data";
import { PourSizeIcon } from "./PourSizeIcon";
import { ResponsiveImage } from "./ResponsiveImage";
import { WineSampleIcon } from "./WineSampleIcon";

export function MenuBoard() {
  return (
    <section id="wina" className="menu-board" aria-labelledby="wine-menu-title">
      <div className="menu-board__intro">
        <header className="menu-board__heading">
          <h2 id="wine-menu-title">Co dziś lejemy</h2>
          <p>Sześć win z Moraw — od kieliszka na próbę po litr na później.</p>
        </header>

        <dl className="pour-prices" aria-label="Ceny wina z kranu">
          {tapPricing.map(({ size, price, visual }) => (
            <div key={size}>
              <dt>
                <PourSizeIcon variant={visual} />
                <span>{size}</span>
              </dt>
              <dd>{price}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ol className="wine-grid" aria-label="Aktualne wina z kranu">
        {tapWines.map((wine, index) => (
          <li key={wine.name}>
            <span className="wine-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <WineSampleIcon variant={wine.variant} />
            <h3>{wine.name}</h3>
            <p>{wine.description}</p>
            <span className="wine-kind">{wine.type}</span>
          </li>
        ))}
      </ol>

      <figure className="tap-panorama">
        <ResponsiveImage
          name="pour"
          widths={[640, 960, 1440]}
          alt="Kieliszek napełniany winem prosto z kranu w Vinko"
          width="1440"
          height="2160"
          sizes="100vw"
        />
        <figcaption>Z kranu prosto do kieliszka.</figcaption>
      </figure>

      <div id="przekaski" className="snack-board">
        <figure className="snack-board__photo">
          <ResponsiveImage
            name="food"
            widths={[640, 960, 1280]}
            alt="Deska serów, wędlin, oliwek i warzyw podawana w Vinko"
            width="1280"
            height="1920"
            sizes="(min-width: 900px) 60vw, 100vw"
            formats={["webp"]}
          />
        </figure>

        <div className="snack-board__menu">
          <header>
            <h2>Coś do wina</h2>
            <p>Deski, małe talerze i coś słodkiego — do dzielenia albo dla siebie.</p>
          </header>
          <ul aria-label="Menu przekąsek">
            {snackMenuItems.map((item, index) => (
              <li key={item.name}>
                <span className="snack-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <strong>{item.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
