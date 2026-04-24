import { motion } from "framer-motion";
import { tapPricing, tapWines } from "../data";
import { BottleIcon } from "./BottleIcon";

export function WineMenu() {
  return (
    <section id="menu" className="relative bg-bone text-ink" aria-labelledby="wine-menu-title">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="eyebrow">aktualnie na kranie</p>
            <h2 id="wine-menu-title" className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[0.82]">
              Lekkie lato czy coś konkretnego?
            </h2>
            <p className="mt-7 max-w-[34rem] text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.55] text-ink/70">
              Powiedz, jaki masz nastrój. Nalejemy kieliszek, karafkę albo litr prosto z kranu.
            </p>
            <dl className="mt-6 flex border-t border-ink/10 pt-6" aria-label="Ceny wina z kranu">
              {tapPricing.map(({ size, price }) => (
                <div key={size} className="flex flex-1 flex-col items-center gap-1 border-r border-ink/10 last:border-r-0">
                  <dt className="font-display text-xs font-bold uppercase tracking-[0.14em] text-ink/45">{size}</dt>
                  <dd className="font-display text-[1.7rem] font-black leading-none text-olive">{price}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <ul className="grid grid-cols-3 gap-3" aria-label="Aktualne wina z kranu">
              {tapWines.map((wine) => (
                <li key={wine.name}>
                  <article className="wine-card group relative flex min-h-[128px] flex-col items-center justify-center overflow-hidden rounded-[5px] border border-ink/10 bg-cream px-3 py-8 text-center text-ink shadow-[0_18px_48px_rgba(36,24,21,0.08)]" tabIndex={0}>
                    <BottleIcon variant={wine.variant} />
                    <h3 className="wine-card-title m-0 font-display text-[0.92rem] font-black leading-[1.15] text-ink">{wine.name}</h3>
                    <p className="wine-card-type font-display text-[0.68rem] font-bold uppercase tracking-[0.14em] text-olive">{wine.type}</p>
                    <p className="wine-card-description absolute inset-4 z-[1] m-0 flex translate-y-2 items-center justify-center text-[0.82rem] font-bold leading-[1.25] text-ink opacity-0">
                      {wine.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
