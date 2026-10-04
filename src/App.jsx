import { useEffect, useState } from "react";
import { getOpenState } from "./data";
import { photos } from "./assets";
import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Marquee } from "./sections/Marquee";
import { Ritual } from "./sections/Ritual";
import { TapWall } from "./sections/TapWall";
import { Snacks } from "./sections/Snacks";
import { Story } from "./sections/Story";
import { Gallery } from "./sections/Gallery";
import { Visit } from "./sections/Visit";
import { Footer } from "./sections/Footer";

// Prefer the retouched photos when the pipeline produced them.
const heroBg = photos["taps-wide"] ? "taps-wide" : "taps";
const pitcherPhoto = photos["pitcher-clean"] ? "pitcher-clean" : "pour";
const snackPhoto = photos["snacks-clean"] ? "snacks-clean" : "food";

export function App() {
  const [openState, setOpenState] = useState(() => getOpenState());

  useEffect(() => {
    const id = setInterval(() => setOpenState(getOpenState()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Nav openState={openState} />
      <main>
        <Hero openState={openState} bgPhoto={heroBg} />
        <Marquee />
        <Ritual photo={pitcherPhoto} />
        <TapWall />
        <Snacks photo={snackPhoto} />
        <Story />
        <Gallery />
        <Visit openState={openState} />
      </main>
      <Footer />
    </>
  );
}
