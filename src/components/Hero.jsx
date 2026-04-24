import { motion, useScroll, useTransform } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { publicAsset } from "../assets";
import { Header } from "./Header";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.06]);
  const textY = useTransform(scrollYProgress, [0, 0.28], [0, -34]);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-bone" aria-labelledby="hero-title">
      <motion.img
        src={publicAsset("assets/vineyard-bike.jpg")}
        alt="Słoneczna morawska winnica z rowerem przy ścieżce"
        className="absolute inset-0 h-full w-full origin-center object-cover object-[62%_center] max-[720px]:object-[58%_center]"
        style={{ scale: imageScale }}
      />
      <div className="hero-shade" />
      <Header />
      <motion.div className="relative z-20 flex min-h-[100svh] items-end px-5 pb-14 pt-28 sm:px-8 lg:pb-20" style={{ y: textY }}>
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            className="max-w-[40rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Winiarnia · Łódź</p>
            <h1 id="hero-title" className="max-w-full font-display text-[clamp(4.8rem,12vw,11rem)] font-black uppercase leading-[0.78] text-ink max-[720px]:text-[clamp(4.2rem,22vw,7rem)]">
              Vinko
            </h1>
            <p className="mt-5 font-display text-[clamp(2.1rem,5vw,4.2rem)] font-black leading-[0.88] text-wine">
              Vaše zdraví!
            </p>
            <p className="mt-6 max-w-[33rem] text-[clamp(1.05rem,2vw,1.28rem)] leading-[1.55] text-ink/80 max-[720px]:max-w-[22rem] max-[720px]:text-[1.02rem]">
              Kameralna winiarnia w Łodzi z morawskim winem z beczki, lekkimi butelkami na lato i przekąskami do wspólnego stołu.
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
      <div className="scroll-hint absolute bottom-8 left-1/2 z-20 text-ink/45">
        <IconChevronDown size={22} stroke={1.5} aria-hidden="true" />
      </div>
    </section>
  );
}
