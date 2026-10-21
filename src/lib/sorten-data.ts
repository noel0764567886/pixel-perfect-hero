import banane from "@/assets/sorte-banane.png";
import kiwi from "@/assets/sorte-kiwi.png";
import apfel from "@/assets/sorte-apfel.png";


export type Sorte = {
  slug: string;
  name: string;
  chocolate: string;
  price: string;
  weight: string;
  image: string;
  intro: string;
  zutaten: string;
  gallery: { src: string; alt: string }[];
};

export const sorten: Sorte[] = [
  {
    slug: "banane",
    name: "BANANE",
    chocolate: "DUNKLE SCHOKOLADE",
    price: "CHF 10.90",
    weight: "45 g",
    image: banane,
    intro:
      "Entdecke die perfekte Kombination aus den natürlichen, süssen Bio-Bananen und Bio-Zartbitterkuvertüre (60% Kakaanteil). Durch die schonende Gefriertrocknung bleibt das natürliche Aroma der Bananen weitgehend erhalten. Anschliessend werden die Bananenscheiben von unserem Team in sorgfältiger Handarbeit auf einer Seite mit einer feinen Schicht Schokolade veredelt.",
    zutaten: "Bio-Banane (75,27 %), Bio-Zartbitterkuvertüre (24,73 %)",
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
    price: "CHF 10.90",
    weight: "45 g",
    image: kiwi,
    intro:
      "Entdecke die besondere Kombination aus dem erfrischenden, säuerlichen Geschmack unserer Bio-Kiwis und Bio-Milchkuvertüre (40% Kakaanteil). Durch die schonende Gefriertrocknung bleibt das natürliche Aroma der Kiwis weitgehend erhalten. Anschliessend werden die Kiwischeiben von unserem Team in sorgfältiger Handarbeit auf einer Seite mit einer feinen Schicht Schokolade veredelt.",
    zutaten: "Bio-Kiwi (75.27 %), Bio-Milchkuvertüre (24,73 %)",
    gallery: [
      { src: kiwiFrucht, alt: "Frische Kiwis, ganz und halbiert" },
      { src: kiwiSchoggi, alt: "Kiwischeiben in Milchschokolade auf einem Teller" },
      { src: kiwi, alt: "Frulicious Kiwi in Milchschokolade" },
    ],
  },
  {
    slug: "apfel",
    name: "APFEL",
    chocolate: "DUNKLE SCHOKOLADE & MILCHSCHOKOLADE",
    price: "CHF 10.90",
    weight: "45 g",
    image: apfel,
    intro:
      "Geniesse das harmonische Zusammenspiel aus dem fruchtigen, süß-säuerlichen Geschmack unserer Bio-Äpfel und einer Mischung aus Bio-Milch- und Bio-Zartbitterkuvertüre (60 % Kakaanteil bei der Zartbitterkuvertüre & 40% Kakaanteil bei der Milchkuvertüre). Durch die schonende Gefriertrocknung bleibt das natürliche Aroma der Äpfel weitgehend erhalten. Anschliessend werden die Apfelscheiben von unserem Team in sorgfältiger Handarbeit auf einer Seite mit einer feinen Schicht Schokolade veredelt.",
    zutaten: "Bio-Apfel (38,09 %), Bio-Zartbitterkuvertüre (30,995 %), Bio-Milchkuvertüre (30,955 %)",
    gallery: [
      { src: apfelFrucht, alt: "Frische rote Äpfel, ganz und aufgeschnitten" },
      { src: apfelSchoggi, alt: "Apfelringe in Schokolade auf einem Teller" },
      { src: apfel, alt: "Frulicious Apfel in dunkler Schokolade und Milchschokolade" },
    ],
  },
];

export function getSorte(slug: string) {
  return sorten.find((s) => s.slug === slug);
}
