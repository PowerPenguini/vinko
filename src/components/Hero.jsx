import { motion, useScroll, useTransform } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { publicAsset } from "../assets";
import { Header } from "./Header";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 0.28], [0, -46]);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink" aria-labelledby="hero-title">
      <motion.img
        src={publicAsset("assets/krany.jpg")}
        alt="Drewniane nalewaki wina przy barze Vinko"
        className="absolute inset-0 h-full w-full origin-center object-cover object-[66%_center] max-[720px]:object-[58%_center]"
        style={{ scale: imageScale }}
      />
      <div className="hero-shade" />
      <Header />
      <motion.div className="relative z-20 flex min-h-[100svh] items-end px-5 pb-16 pt-28 sm:px-8 lg:pb-20" style={{ y: textY }}>
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Winiarnia · Łódź</p>
            <h1 id="hero-title" className="max-w-full whitespace-nowrap font-display text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.78] text-bone shadow-black/60 [text-shadow:0_12px_42px_rgba(0,0,0,0.58)] max-[720px]:text-[clamp(3.2rem,17vw,6rem)]">
              Vaše zdraví!
            </h1>
            <p className="mt-8 max-w-[34rem] text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.55] text-bone/95 [text-shadow:0_6px_28px_rgba(0,0,0,0.66)] max-[720px]:max-w-[22rem] max-[720px]:text-[1.02rem]">
              Kameralna winiarnia w Łodzi z morawskim winem nalewanym prosto z beczki. Własna selekcja butelek, przekąski i miejsce, do którego się wraca.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#menu" className="button-primary">
                Zobacz menu
              </a>
              <a href="#kontakt" className="button-secondary">
                Odwiedź nas
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="scroll-hint absolute bottom-8 left-1/2 z-20 text-bone/55">
        <IconChevronDown size={22} stroke={1.5} aria-hidden="true" />
      </div>
    </section>
  );
}
