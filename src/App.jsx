import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SnackMenu } from "./components/SnackMenu";
import { StorySection } from "./components/StorySection";
import { WineMenu } from "./components/WineMenu";

export function App() {
  return (
    <>
      <main>
        <Hero />
        <WineMenu />
        <SnackMenu />
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
