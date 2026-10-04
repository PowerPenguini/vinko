import copy from "./copy.json";

export { copy };

export const tapWines = [
  { name: "Ryzlink vlašský", kind: "white" },
  { name: "Müller-Thurgau", kind: "white" },
  { name: "Rulandské šedé", kind: "white" },
  { name: "Frankovka", kind: "red" },
  { name: "Zweigelt", kind: "red" },
  { name: "Rosé", kind: "rose" },
].map((wine, i) => ({ ...wine, note: copy.taps.wines[i].note }));

export const kindLabels = { white: "białe", red: "czerwone", rose: "różowe" };

export const measures = [
  { size: "10 cl", price: "10 zł", vessel: "glass-small", label: "kieliszek" },
  { size: "20 cl", price: "15 zł", vessel: "glass-large", label: "duży kieliszek" },
  { size: "0,5 l", price: "30 zł", vessel: "carafe-half", label: "karafka" },
  { size: "1 l", price: "40 zł", vessel: "carafe-full", label: "dzbanek" },
];

export const snacks = copy.snacks.items;

export const openingHours = [
  { day: "Poniedziałek", short: "pon", open: null, close: null, dow: 1, when: "w poniedziałek" },
  { day: "Wtorek", short: "wt", open: null, close: null, dow: 2, when: "we wtorek" },
  { day: "Środa", short: "śr", open: "15:00", close: "22:00", dow: 3, when: "w środę" },
  { day: "Czwartek", short: "czw", open: "15:00", close: "22:00", dow: 4, when: "w czwartek" },
  { day: "Piątek", short: "pt", open: "15:00", close: "23:00", dow: 5, when: "w piątek" },
  { day: "Sobota", short: "sob", open: "14:00", close: "23:00", dow: 6, when: "w sobotę" },
  { day: "Niedziela", short: "nd", open: "12:00", close: "20:00", dow: 0, when: "w niedzielę" },
];

export const contact = {
  street: "Pienista 50, lok. U2",
  city: "94-109 Łódź",
  phone: "+48 884 160 015",
  phoneHref: "tel:+48884160015",
  email: "vinkolodz@gmail.com",
  emailHref: "mailto:vinkolodz@gmail.com",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Pienista%2050%2Flok%20U2%2C%2094-109%20%C5%81%C3%B3d%C5%BA",
};

const minutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/**
 * Returns { state: "open" | "later" | "closed", today, next, text }
 * state "open": open right now, closes at today.close
 * state "later": opens later today
 * state "closed": closed today, next is the next open day
 */
export function getOpenState(now = new Date()) {
  const dow = now.getDay();
  const today = openingHours.find((d) => d.dow === dow);
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const t = copy.hero;

  if (today.open && nowMin >= minutes(today.open) && nowMin < minutes(today.close)) {
    return { state: "open", today, text: t.openNow.replace("{close}", today.close) };
  }
  if (today.open && nowMin < minutes(today.open)) {
    return { state: "later", today, text: t.openLater.replace("{open}", today.open) };
  }
  for (let i = 1; i <= 7; i++) {
    const next = openingHours.find((d) => d.dow === (dow + i) % 7);
    if (next.open) {
      const when = i === 1 ? "jutro" : next.when;
      return {
        state: "closed",
        today,
        next,
        text: t.closedToday.replace("{day}", when).replace("{open}", next.open),
      };
    }
  }
  return { state: "closed", today, text: copy.visit.closedLabel };
}
