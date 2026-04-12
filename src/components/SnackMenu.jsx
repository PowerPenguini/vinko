import { motion } from "framer-motion";
import { snackMenuItems } from "../data";

export function SnackMenu() {
  return (
    <section className="relative overflow-hidden bg-ink text-bone" aria-labelledby="snack-menu-title">
      <div className="relative z-[1] mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">
        <motion.div
          className="max-w-lg self-start lg:sticky lg:top-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="eyebrow">do kieliszka</p>
          <h2 id="snack-menu-title" className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[0.82]">
            Coś do przegryzienia
          </h2>
          <p className="mt-7 max-w-[34rem] text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.55] text-bone/70">
            Sery, wędliny i małe przyjemności do kieliszka.
          </p>
        </motion.div>

        <motion.ul
          className="grid gap-x-5 lg:grid-cols-2"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          aria-label="Menu przekąsek"
        >
          {snackMenuItems.map((item, index) => (
            <li key={item.name} className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-start gap-3 border-t border-bone/15 py-4 transition-transform duration-200 hover:translate-x-1 hover:border-[#c94857]/30 lg:grid-cols-[2.5rem_minmax(0,1fr)_auto] lg:gap-4 lg:[&:nth-last-child(-n+2)]:border-b lg:[&:nth-last-child(-n+2)]:border-bone/15 max-[720px]:last:border-b max-[720px]:last:border-bone/15">
              <span className="font-display text-xs font-black leading-[1.35] tracking-[0.14em] text-[#c94857]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-[clamp(1.15rem,1.8vw,1.45rem)] font-bold leading-none text-bone">{item.name}</h3>
                <p className="mt-1.5 max-w-[18rem] text-sm leading-[1.35] text-bone/55">{item.description}</p>
              </div>
              <strong className="whitespace-nowrap font-display text-[clamp(1.2rem,1.8vw,1.45rem)] font-black leading-none text-[#c94857]">{item.price}</strong>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
