export const tapWines = [
  { name: "Ryzlink vlašský", type: "białe", variant: "white", description: "Cytrusowy, mineralny, wytrawny." },
  { name: "Müller-Thurgau", type: "białe", variant: "white", description: "Lekki, kwiatowy, łatwy na początek." },
  { name: "Rulandské šedé", type: "białe", variant: "white", description: "Gruszka, odrobina miodu, pełniejszy smak." },
  { name: "Frankovka", type: "czerwone", variant: "red", description: "Wiśniowa, pieprzna, z lekką taniną." },
  { name: "Zweigelt", type: "czerwone", variant: "red", description: "Śliwka, wiśnia, miękki finisz." },
  { name: "Rosé", type: "różowe", variant: "rose", description: "Truskawka, świeżość, lekki finisz." },
];

export const tapPricing = [
  { size: "10 cl", price: "10 zł", visual: "glass-small" },
  { size: "20 cl", price: "15 zł", visual: "glass-large" },
  { size: "0,5 l", price: "30 zł", visual: "bottle-half" },
  { size: "1 l", price: "40 zł", visual: "bottle-full" },
];

export const snackMenuItems = [
  { name: "Deska wędlin", description: "Do dzielenia przy winie.", price: "40 zł" },
  { name: "Deska serów", description: "Dobierana do win na kranach.", price: "40 zł" },
  { name: "Utopenci", description: "Czeska klasyka do kieliszka.", price: "25 zł" },
  { name: "Sernik wytrawny", description: "Kremowy, słony, dobry do białego.", price: "15 zł" },
  { name: "Tarta wytrawna", description: "Krucha, wytrawna, sezonowa.", price: "15 zł" },
  { name: "Ciasto", description: "Coś słodkiego na koniec.", price: "18 zł" },
  { name: "Bagietka", description: "Chrupiąca i prosta.", price: "30 zł" },
  { name: "Szparagi", description: "Sezonowe i lekkie.", price: "20 zł" },
];

export const openingHours = [
  { day: "Poniedziałek", hours: "Zamknięte", schemaDay: "Monday" },
  { day: "Wtorek", hours: "Zamknięte", schemaDay: "Tuesday" },
  { day: "Środa", hours: "15:00-22:00", schemaDay: "Wednesday" },
  { day: "Czwartek", hours: "15:00-22:00", schemaDay: "Thursday" },
  { day: "Piątek", hours: "15:00-23:00", schemaDay: "Friday" },
  { day: "Sobota", hours: "14:00-23:00", schemaDay: "Saturday" },
  { day: "Niedziela", hours: "12:00-20:00", schemaDay: "Sunday" },
];

export const contact = {
  address: "Pienista 50/lok U2, 94-109 Łódź",
  phone: "+48 884 160 015",
  phoneHref: "tel:+48884160015",
  email: "vinkolodz@gmail.com",
  emailHref: "mailto:vinkolodz@gmail.com",
  mapHref: "https://www.google.com/maps/search/?api=1&query=Pienista%2050%2Flok%20U2%2C%2094-109%20%C5%81%C3%B3d%C5%BA",
};

export const navItems = [
  { href: "#wina", label: "Wina" },
  { href: "#przekaski", label: "Do wina" },
  { href: "#o-vinko", label: "O Vinko" },
  { href: "#kontakt", label: "Kontakt" },
];

export function getTodayOpeningHours(date = new Date()) {
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return openingHours.find((item) => item.schemaDay === dayNames[date.getDay()]);
}
