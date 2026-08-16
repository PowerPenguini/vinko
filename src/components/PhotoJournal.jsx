import { ResponsiveImage } from "./ResponsiveImage";

export function PhotoJournal() {
  return (
    <section id="o-vinko" className="photo-journal" aria-labelledby="journal-title">
      <div className="journal-copy">
        <h2 id="journal-title">Wino bez egzaminu.</h2>
        <p>Nie musisz znać szczepów ani roczników. Powiedz, jakie smaki lubisz — damy spróbować i nalejemy coś dla Ciebie.</p>
      </div>

      <figure className="journal-frame journal-frame--friends">
        <ResponsiveImage
          name="friends"
          widths={[640, 960]}
          alt="Dwie osoby wznoszą toast różowym winem w Vinko"
          width="960"
          height="1440"
          sizes="(min-width: 900px) 55vw, 100vw"
        />
      </figure>

      <figure className="journal-frame journal-frame--taps">
        <ResponsiveImage
          name="taps"
          widths={[640, 960, 1280]}
          alt="Rząd drewnianych nalewaków z nazwami win w Vinko"
          width="1280"
          height="853"
          sizes="(min-width: 900px) 52vw, 100vw"
        />
      </figure>

      <figure className="journal-frame journal-frame--host">
        <ResponsiveImage
          name="host"
          widths={[640, 960]}
          alt="Gospodarz Vinko przygotowuje wino za barem"
          width="960"
          height="1440"
          sizes="(min-width: 900px) 38vw, 50vw"
        />
      </figure>
    </section>
  );
}
