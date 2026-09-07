import banane from "@/assets/sorte-banane.png";
import kiwi from "@/assets/sorte-kiwi.png";
import apfel from "@/assets/sorte-apfel.png";
import bananeFrucht from "@/assets/banane-frucht.jpg";
import bananeSchoggi from "@/assets/banane-schoggi.jpg";
import kiwiFrucht from "@/assets/kiwi-frucht.jpg";
import kiwiSchoggi from "@/assets/kiwi-schoggi.jpg";
import apfelFrucht from "@/assets/apfel-frucht.jpg";
import apfelSchoggi from "@/assets/apfel-schoggi.jpg";

export type Sorte = {
  slug: string;
  name: string;
  chocolate: string;
  description: string;
  price: string;
  weight: string;
  image: string;
  intro: string;
  story: string[];
  facts: { label: string; value: string }[];
  gallery: { src: string; alt: string }[];
};

export const sorten: Sorte[] = [
  {
    slug: "banane",
    name: "BANANE",
    chocolate: "DUNKLE SCHOKOLADE",
    description: "Süss-aromatisch und leicht mürbe, ummantelt mit kräftiger, dunkler Schokolade.",
    price: "CHF 10.90",
    weight: "45 g",
    image: banane,
    intro: "Sonnengereifte Bananen, schonend gefriergetrocknet und in kräftige dunkle Schokolade getaucht.",
    story: [
      "Unsere Bananen stammen aus biologischem Anbau und werden erst geerntet, wenn ihr Zucker voll entwickelt ist. Genau dieser Moment entscheidet über das intensive Aroma, das später in jedem Stück steckt.",
      "Beim Gefriertrocknen wird der Frucht bei tiefen Temperaturen nur das Wasser entzogen – Geschmack, Farbe und Nährstoffe bleiben erhalten. Zurück bleibt eine luftig-mürbe Scheibe, die auf der Zunge zergeht.",
      "Zum Schluss taucht sie unser Team von Hand in dunkle Schokolade mit hohem Kakaoanteil. Die herbe Note der Schokolade und die natürliche Süsse der Banane ergänzen sich perfekt.",
    ],
    facts: [
      { label: "Geschmack", value: "Süss, karamellig, aromatisch" },
      { label: "Schokolade", value: "Dunkel, 70 % Kakao" },
      { label: "Konsistenz", value: "Luftig-mürbe" },
      { label: "Zutaten", value: "Bio-Banane, Bio-Schokolade" },
    ],
    gallery: [
      { src: bananeFrucht, alt: "Frische Bio-Bananen vor rosa Hintergrund" },
      { src: bananeSchoggi, alt: "Gefriergetrocknete Bananenscheibe wird in dunkle Schokolade getaucht" },
      { src: banane, alt: "Frulicious Banane in dunkler Schokolade" },
    ],
  },
  {
    slug: "kiwi",
    name: "KIWI",
    chocolate: "MILCHSCHOKOLADE",
    description: "Fruchtig-frisch mit feiner Säure, getaucht in zarter Milchschokolade.",
    price: "CHF 10.90",
    weight: "45 g",
    image: kiwi,
    intro: "Frische Kiwis mit feiner Säure, umhüllt von zartschmelzender Milchschokolade.",
    story: [
      "Kiwis bringen eine Frische mit, die man von einer Schokoladenspezialität nicht erwartet. Wir wählen Früchte, die reif genug für volles Aroma und fest genug für perfekte Scheiben sind.",
      "Nach dem Gefriertrocknen bleibt das leuchtende Grün mit den feinen schwarzen Kernen sichtbar – ein Bild, das wir bewusst nicht verstecken. Jede Scheibe wird nur zur Hälfte umhüllt.",
      "Die milde Milchschokolade nimmt der Kiwi die Spitze der Säure, ohne ihre Frische zu überdecken. Ein Wechselspiel aus fruchtig und cremig.",
    ],
    facts: [
      { label: "Geschmack", value: "Fruchtig, frisch, leicht säuerlich" },
      { label: "Schokolade", value: "Zarte Milchschokolade" },
      { label: "Konsistenz", value: "Knusprig-leicht" },
      { label: "Zutaten", value: "Bio-Kiwi, Bio-Milchschokolade" },
    ],
    gallery: [
      { src: kiwiFrucht, alt: "Frische Kiwis, ganz und halbiert" },
      { src: kiwiSchoggi, alt: "Kiwischeiben in Milchschokolade auf einem Teller" },
      { src: kiwi, alt: "Frulicious Kiwi in Milchschokolade" },
    ],
  },
  {
    slug: "apfel",
    name: "APFEL",
    chocolate: "MILCHSCHOKOLADE",
    description: "Knackig-süss, umhüllt von zartschmelzender Milchschokolade.",
    price: "CHF 10.90",
    weight: "45 g",
    image: apfel,
    intro: "Schweizer Äpfel, hauchdünn geschnitten und in zartschmelzende Milchschokolade gehüllt.",
    story: [
      "Der Apfel ist unser Klassiker – und die Sorte, die am meisten nach Zuhause schmeckt. Wir verwenden Bio-Äpfel aus regionalem Anbau und verarbeiten sie am Tag der Anlieferung.",
      "Hauchdünn geschnitten und gefriergetrocknet, werden die Ringe erstaunlich knusprig. Wir verzichten dabei komplett auf Zusatz von Zucker oder Konservierungsstoffen.",
      "In Milchschokolade getaucht entsteht die Kombination, die viele aus der Kindheit kennen – nur ohne alles, was da nicht hineingehört.",
    ],
    facts: [
      { label: "Geschmack", value: "Süss, knackig, natürlich" },
      { label: "Schokolade", value: "Zarte Milchschokolade" },
      { label: "Konsistenz", value: "Knusprig" },
      { label: "Zutaten", value: "Bio-Apfel, Bio-Milchschokolade" },
    ],
    gallery: [
      { src: apfelFrucht, alt: "Frische rote Äpfel, ganz und aufgeschnitten" },
      { src: apfelSchoggi, alt: "Apfelringe in Schokolade auf einem Teller" },
      { src: apfel, alt: "Frulicious Apfel in Milchschokolade" },
    ],
  },
];

export function getSorte(slug: string) {
  return sorten.find((s) => s.slug === slug);
}
