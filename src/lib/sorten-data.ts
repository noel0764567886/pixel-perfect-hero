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
  price: string;
  weight: string;
  image: string;
  intro: string;
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
    intro: "Jede Sorte wird schonend gefriergetrocknet, um den Geschmack und Nährstoffe zu bewahren – dann von Hand mit Schokolade veredelt.",
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
    intro: "Jede Sorte wird schonend gefriergetrocknet, um den Geschmack und Nährstoffe zu bewahren – dann von Hand mit Schokolade veredelt.",
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
    intro: "Jede Sorte wird schonend gefriergetrocknet, um den Geschmack und Nährstoffe zu bewahren – dann von Hand mit Schokolade veredelt.",
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
