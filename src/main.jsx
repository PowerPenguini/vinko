import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconDog, IconMapPin, IconPhone, IconMail, IconChevronDown, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import "./styles.css";

const tapWines = [
  { name: "Ryzlink vlašský", type: "białe", variant: "white", description: "Świeże, mineralne, z lekką cytrusową końcówką." },
  { name: "Müller-Thurgau", type: "białe", variant: "white", description: "Łagodne i kwiatowe, dobre na pierwszy kieliszek." },
  { name: "Rulandské šedé", type: "białe", variant: "white", description: "Pełniejsze białe z nutą gruszki i miodu." },
  { name: "Frankovka", type: "czerwone", variant: "red", description: "Soczysta czerwień, wiśnia, pieprz i lekka tanina." },
  { name: "Zweigelt", type: "czerwone", variant: "red", description: "Miękkie czerwone, śliwka, wiśnia i gładki finisz." },
  { name: "Rosé", type: "różowe", variant: "rose", description: "Lekkie, owocowe, z truskawką i czystą świeżością." },
];

const tapPricing = [
  { size: "10 dl", price: "10 zł" },
  { size: "20 dl", price: "15 zł" },
  { size: "0,5 l", price: "30 zł" },
  { size: "1 l", price: "40 zł" },
];

const contactItems = [
  ["Adres", "Pienista 50/lok U2, 94-109 Łódź"],
  ["Telefon", "+48 884 160 015"],
  ["E-mail", "vinkolodz@gmail.com"],
];

const openingHours = [
  ["Niedziela", "12:00-20:00"],
  ["Poniedziałek", "Zamknięte"],
  ["Wtorek", "Zamknięte"],
  ["Środa", "15:00-22:00"],
  ["Czwartek", "15:00-22:00"],
  ["Piątek", "15:00-23:00"],
  ["Sobota", "14:00-23:00"],
];

const navItems = [
  ["#menu", "Menu"],
  ["#klimat", "Wpadnij na kieliszek"],
  ["#kontakt", "Kontakt"],
];

function BottleIcon({ variant = "white" }) {
  const hue = { white: "#dcc850", red: "#bf3a4a", rose: "#d4788e" };
  const c = hue[variant] ?? hue.white;
  return (
    <svg viewBox="0 0 40 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="tap-icon" aria-hidden="true">
      {/* cork */}
      <rect x="15" y="2" width="10" height="5" rx="2" fill={c} opacity="0.9" />
      {/* bottle — neck → shoulder → body */}
      <path
        d="M8 76 L32 76 L32 34 Q32 22 25 20 L25 8 L27 6 L13 6 L15 8 L15 20 Q8 22 8 34 Z"
        fill={c} opacity="0.28"
        stroke={c} strokeWidth="1.8" strokeLinejoin="round"
      />
      {/* wine level (lower third) */}
      <rect x="9" y="55" width="22" height="20" fill={c} opacity="0.3" />
      {/* label outline */}
      <rect x="11" y="36" width="18" height="16" rx="1.5" stroke={c} strokeWidth="1.2" opacity="0.7" />
      {/* glass reflection */}
      <path d="M12.5 34 L12.5 71" stroke={c} strokeWidth="1.4" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="logo-link" aria-label="Vinko strona główna">
      <img src="/assets/vinko-logo.svg" alt="Vinko z Beczki" />
    </a>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <Wordmark />
        <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-bone/80 sm:flex">
          {navItems.map(([href, label]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className={`mobile-menu-button sm:hidden ${isMenuOpen ? "is-open" : ""}`}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <motion.div
          id="mobile-menu"
          className="mobile-menu sm:hidden"
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, y: 0, pointerEvents: "auto" },
            closed: { opacity: 0, y: -10, pointerEvents: "none" },
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          aria-hidden={!isMenuOpen}
        >
          {navItems.map(([href, label]) => (
            <a key={href} href={href} className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
              {label}
            </a>
          ))}
        </motion.div>
      </nav>
    </header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 0.28], [0, -46]);

  return (
    <section id="top" className="hero">
      <motion.img
        src="/assets/krany.jpg"
        alt="Drewniane nalewaki wina przy barze Vinko"
        className="hero-image"
        style={{ scale: imageScale }}
      />
      <div className="hero-shade" />
      <Header />
      <motion.div
        className="relative z-20 flex min-h-[92svh] items-end px-5 pb-16 pt-28 sm:px-8 lg:pb-20"
        style={{ y: textY }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Winiarnia · Łódź</p>
            <h1 className="h1--hero-title">Vaše zdraví!</h1>
            <p className="hero-copy">
              Kameralna winiarnia w Łodzi z morawskim winem nalewanym prosto z beczki. Własna selekcja butelek, przekąski i miejsce, do którego się wraca.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#menu" className="button button-primary">
                Zobacz menu
              </a>
              <a href="#kontakt" className="button button-secondary">
                Odwiedź nas
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="scroll-hint">
        <IconChevronDown size={22} stroke={1.5} />
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="section bg-bone text-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="eyebrow text-wine">aktualnie na kranie</p>
            <h2 className="h2--menu-prompt">Dziś coś lekkiego czy konkretnego?</h2>
            <p className="section-copy">
              Powiedz, jaki masz nastrój, my nalejemy to, czego potrzebujesz.
            </p>
            <div className="tap-pricing">
              {tapPricing.map(({ size, price }) => (
                <div key={size} className="pricing-item">
                  <span className="pricing-size">{size}</span>
                  <span className="pricing-price">{price}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="tap-wines-panel"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="barrels-grid">
              {tapWines.map((wine) => (
                <div key={wine.name} className={`barrel-card barrel-card--${wine.variant}`}>
                  <BottleIcon variant={wine.variant} />
                  <p className="barrel-name">{wine.name}</p>
                  <span className="barrel-type-label">{wine.type}</span>
                  <p className="barrel-description">{wine.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AtmosphereSection() {
  return (
    <section id="klimat" className="section overflow-hidden bg-coal text-bone">
      <div className="relative z-[1] mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <motion.div
          className="food-frame"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-140px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/assets/przekaski.png"
            alt="Talerz serów, oliwek i wędlin do wina"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          className="max-w-xl lg:pl-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-140px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow text-muted">przy stoliku</p>
          <span className="deco-quote" aria-hidden="true">❝</span>
          <h2 className="h2--menu-prompt">Nie masowe, tylko z beczki</h2>
          <p className="section-copy text-bone/74">
            Wina z Moraw od ludzi, którzy robią je po swojemu. Bez wielkich marek, za to z charakterem — nalewane prosto z beczki. Do tego coś na stół — sery, wędliny i drobne rzeczy, które robią robotę przy kieliszku.
          </p>
          <a href="#kontakt" className="button button-ghost mt-8">
            Znajdź swój nalewak
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const snackMenuItems = [
  { name: "Deska wędlin", description: "Wędliny do wspólnego stołu.", price: "40 zł" },
  { name: "Deska serów", description: "Sery dobrane pod wino z kranu.", price: "40 zł" },
  { name: "Utopenci", description: "Czeska klasyka do wina i rozmowy.", price: "25 zł" },
  { name: "Sernik wytrawny", description: "Kremowy, słony, dobry do białego.", price: "15 zł" },
  { name: "Tarta wytrawna", description: "Krucha porcja na spokojny wieczór.", price: "15 zł" },
  { name: "Ciasto", description: "Coś słodkiego do kawy albo herbaty.", price: "18 zł" },
  { name: "Bagietka", description: "Chrupiąca, prosta, do podgryzania.", price: "30 zł" },
  { name: "Szparagi", description: "Sezonowo, lekko, do kieliszka.", price: "20 zł" },
];

function SnacksSection() {
  return (
    <section className="snacks-section section text-bone">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:py-24">
        <motion.div
          className="snacks-intro max-w-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="eyebrow text-muted">do kieliszka</p>
          <h2 className="h2--menu-prompt">Coś do przegryzienia</h2>
          <p className="section-copy">
            Sery, wędliny i małe przyjemności do kieliszka.
          </p>
        </motion.div>

        <motion.div
          className="snack-menu-list"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {snackMenuItems.map((item, index) => (
            <div className="snack-menu-row" key={item.name}>
              <span className="snack-menu-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              {item.price ? <strong>{item.price}</strong> : null}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const todayIndex = new Date().getDay();

  return (
    <section id="kontakt" className="section bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <Wordmark />
            <h2 className="mt-8 max-w-xl">Wpadnij na kieliszek. Zobaczymy, co dalej!</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="button button-primary" href="tel:+48884160015">
                Zadzwoń
              </a>
              <a
                className="button button-secondary"
                href="https://www.google.com/maps/search/?api=1&query=Pienista%2050%2Flok%20U2%2C%2094-109%20%C5%81%C3%B3d%C5%BA"
                target="_blank"
                rel="noreferrer"
              >
                Trasa
              </a>
            </div>
          </div>
          <div className="contact-grid">
            <div className="grid gap-7 sm:grid-cols-2">
              {contactItems.map(([label, value]) => (
                <div className="contact-item" key={label}>
                  <p>{label}</p>
                  {label === "Adres" ? (
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Pienista%2050%2Flok%20U2%2C%2094-109%20%C5%81%C3%B3d%C5%BA"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-map-link"
                    >
                      <IconMapPin size={18} stroke={2} />
                      {value}
                    </a>
                  ) : label === "Telefon" ? (
                    <a href="tel:+48884160015" className="contact-map-link">
                      <IconPhone size={18} stroke={2} />
                      {value}
                    </a>
                  ) : label === "E-mail" ? (
                    <a href={`mailto:${value}`} className="contact-map-link">
                      <IconMail size={18} stroke={2} />
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="hours-list" aria-label="Godziny otwarcia">
              <p>Godziny</p>
              {openingHours.map(([day, hours], i) => (
                <div key={day} className={i === todayIndex ? "today-row" : undefined}>
                  <span>{day}</span>
                <strong>{hours}</strong>
              </div>
            ))}
            </div>
            <div className="pet-note">
              <IconDog aria-label="Ikona psa" stroke={1.8} />
              <div>
                <p>Wpadnij z psem</p>
                <span>Przy stoliku znajdzie się miejsce dla Was obojga.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <main>
        <Hero />
        <MenuSection />
        <SnacksSection />
        <AtmosphereSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <p className="vaše-zdraví">Vaše zdraví i do zobaczenia</p>
        <a
          href="https://www.facebook.com/vinko"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          aria-label="Facebook"
        >
          <IconBrandFacebook size={16} stroke={1.6} />
          vinko
        </a>
        <a
          href="https://www.instagram.com/vinkolodz"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          aria-label="Instagram"
        >
          <IconBrandInstagram size={16} stroke={1.6} />
          vinkolodz
        </a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
