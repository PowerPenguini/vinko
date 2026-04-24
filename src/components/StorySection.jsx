import { motion } from "framer-motion";
import { publicAsset } from "../assets";

export function StorySection() {
  return (
    <section id="klimat" className="relative overflow-hidden bg-bone text-ink" aria-labelledby="story-title">
      <div className="relative z-[1] mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <motion.figure
          className="aspect-[3/2] min-h-96 overflow-hidden rounded-[6px] shadow-[0_28px_90px_rgba(36,24,21,0.16)] max-[720px]:min-h-0"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-140px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={publicAsset("assets/vineyard-bottles.jpg")} alt="Butelki wina na beczce w słonecznej winnicy" className="h-full w-full object-cover object-[50%_center]" />
        </motion.figure>

        <motion.div
          className="max-w-xl lg:pl-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-140px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">przy stoliku</p>
          <span className="mb-[-1.2rem] block select-none font-display text-[5.5rem] font-black leading-[0.7] text-straw opacity-80" aria-hidden="true">
            ❝
          </span>
          <h2 id="story-title" className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[0.82]">
            Morawy bliżej niż myślisz
          </h2>
          <p className="mt-7 max-w-[34rem] text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.55] text-ink/72">
            Wina od ludzi, którzy robią je po swojemu. Bez wielkich marek, za to z charakterem, słońcem i prostą radością nalewania prosto z beczki.
          </p>
          <a href="#kontakt" className="button-ghost mt-8">
            Znajdź swój nalewak
          </a>
        </motion.div>
      </div>
    </section>
  );
}
