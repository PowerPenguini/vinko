import { copy, snacks } from "../data";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";

export function Snacks({ photo }) {
  const s = copy.snacks;
  return (
    <section className="snacks paper" id="przekaski">
      <div className="container snacks-grid">
        <Reveal className="snacks-visual">
          <div className="arch">
            <Photo
              name={photo}
              alt="Deska wędlin i serów na zielonej ceramice, oliwki, grzanki"
              sizes="(min-width: 960px) 42vw, 100vw"
            />
          </div>
          <span className="stamp">{copy.gallery.captions.food}</span>
        </Reveal>

        <div className="snacks-copy">
          <Reveal className="section-head">
            <p className="eyebrow">{s.eyebrow}</p>
            <h2>{s.title}</h2>
            <p className="lead">{s.intro}</p>
          </Reveal>
          <ul className="menu">
            {snacks.map((item, i) => (
              <Reveal as="li" key={item.name} delay={i * 50} className="menu-item">
                <div className="menu-row">
                  <span className="menu-name">{item.name}</span>
                  <span className="menu-leader" aria-hidden="true" />
                  <span className="menu-price">{item.price}</span>
                </div>
                <p className="menu-text">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
