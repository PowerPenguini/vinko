import { copy } from "../data";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";

const shots = [
  { name: "taps", key: "taps", ratio: "3 / 2", alt: "Ściana z dziesięcioma drewnianymi kranami" },
  { name: "pour", key: "pour", ratio: "2 / 3", alt: "Nalewanie białego wina z kranu do kieliszka" },
  { name: "bar", key: "bar", ratio: "2 / 3", alt: "Goście przy barze, lampy z butelek, zbiorniki za szkłem" },
  { name: "friends", key: "friends", ratio: "2 / 3", alt: "Dwie przyjaciółki wznoszą toast kieliszkami rosé" },
  { name: "patio", key: "patio", ratio: "2 / 3", alt: "Kieliszek wina na ławce przed wejściem" },
  { name: "host", key: "host", ratio: "2 / 3", alt: "Gospodarz w fartuchu Vinko za barem" },
  { name: "storefront", key: "storefront", ratio: "3 / 2", alt: "Witryna Vinko z malowanymi winogronami i słonecznikami" },
];

export function Gallery() {
  const g = copy.gallery;
  return (
    <section className="gallery" id="galeria">
      <Reveal className="container section-head split">
        <div>
          <p className="eyebrow">{g.eyebrow}</p>
          <h2>{g.title}</h2>
        </div>
        <p className="gallery-hint">Przesuń w bok</p>
      </Reveal>

      <div className="strip" role="list">
        {shots.map((s) => (
          <figure key={s.name} className="shot" role="listitem" style={{ "--ratio": s.ratio, "--w": s.ratio === "3 / 2" ? "460px" : "300px" }}>
            <Photo name={s.name} alt={s.alt} sizes="(min-width: 960px) 30vw, 72vw" />
            <figcaption>{g.captions[s.key]}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
