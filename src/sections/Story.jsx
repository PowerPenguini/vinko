import { copy } from "../data";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";

export function Story() {
  const s = copy.story;
  return (
    <section className="story" id="morawy">
      <div className="story-hero">
        <Photo
          name="vineyard"
          alt="Rower oparty przy winnicy na Morawach Południowych, droga polna i chmury"
          sizes="100vw"
        />
        <Reveal className="story-quote">
          <blockquote>{s.pullQuote}</blockquote>
        </Reveal>
      </div>

      <div className="container story-body">
        <Reveal className="section-head">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2>{s.title}</h2>
        </Reveal>

        <div className="story-columns">
          {s.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80}>
              {p}
            </Reveal>
          ))}
        </div>

        <Reveal as="ul" className="facts">
          {s.facts.map((f) => (
            <li key={f.label}>
              <span className="fact-value">{f.value}</span>
              <span className="fact-label">{f.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
