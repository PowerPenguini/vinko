export const tapWines = [
  { name: "Ryzlink vlašský", type: "białe", variant: "white", description: "Świeże, mineralne, z lekką cytrusową końcówką." },
  { name: "Müller-Thurgau", type: "białe", variant: "white", description: "Łagodne i kwiatowe, dobre na pierwszy kieliszek." },
  { name: "Rulandské šedé", type: "białe", variant: "white", description: "Pełniejsze białe z nutą gruszki i miodu." },
  { name: "Frankovka", type: "czerwone", variant: "red", description: "Soczysta czerwień, wiśnia, pieprz i lekka tanina." },
  { name: "Zweigelt", type: "czerwone", variant: "red", description: "Miękkie czerwone, śliwka, wiśnia i gładki finisz." },
  { name: "Rosé", type: "różowe", variant: "rose", description: "Lekkie, owocowe, z truskawką i czystą świeżością." },
];

export const tapPricing = [
  { size: "10 dl", price: "10 zł" },
  { size: "20 dl", price: "15 zł" },
  { size: "0,5 l", price: "30 zł" },
  { size: "1 l", price: "40 zł" },
];

export const snackMenuItems = [
  { name: "Deska wędlin", description: "Wędliny do wspólnego stołu.", price: "40 zł" },
  { name: "Deska serów", description: "Sery dobrane pod wino z kranu.", price: "40 zł" },
  { name: "Utopenci", description: "Czeska klasyka do wina i rozmowy.", price: "25 zł" },
  { name: "Sernik wytrawny", description: "Kremowy, słony, dobry do białego.", price: "15 zł" },
  { name: "Tarta wytrawna", description: "Krucha porcja na spokojny wieczór.", price: "15 zł" },
  { name: "Ciasto", description: "Coś słodkiego do kawy albo herbaty.", price: "18 zł" },
  { name: "Bagietka", description: "Chrupiąca, prosta, do podgryzania.", price: "30 zł" },
  { name: "Szparagi", description: "Sezonowo, lekko, do kieliszka.", price: "20 zł" },
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
  { href: "#menu", label: "Menu" },
  { href: "#klimat", label: "Wpadnij na kieliszek" },
  { href: "#kontakt", label: "Kontakt" },
];
