import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MenuBoard } from "./components/MenuBoard";
import { PhotoJournal } from "./components/PhotoJournal";
import { VisitFinale } from "./components/VisitFinale";
import { VisitStrip } from "./components/VisitStrip";

export function App() {
  return (
    <>
      <main>
        <Hero />
        <VisitStrip />
        <PhotoJournal />
        <MenuBoard />
        <VisitFinale />
      </main>
      <Footer />
    </>
  );
}
