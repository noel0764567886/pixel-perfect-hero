import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import banane from "@/assets/sorte-banane.png";
import kiwi from "@/assets/sorte-kiwi.png";
import apfel from "@/assets/sorte-apfel.png";

export const Route = createFileRoute("/sorten")({
  head: () => ({
    meta: [
      { title: "Sorten – frulicious" },
      { name: "description", content: "Drei Sorten gefriergetrockneter Früchte, von Hand in feinste Schokolade getaucht." },
      { property: "og:title", content: "Sorten – frulicious" },
      { property: "og:description", content: "Drei Sorten gefriergetrockneter Früchte, von Hand in feinste Schokolade getaucht." },
    ],
  }),
  component: SortenPage,
});

const sorten = [
  {
    name: "BANANE",
    chocolate: "DUNKLE SCHOKOLADE",
    description: "Süss-aromatisch und leicht mürbe, ummantelt mit kräftiger, dunkler Schokolade.",
    price: "CHF 6.00",
    weight: "50 g",
    image: banane,
  },
  {
    name: "KIWI",
    chocolate: "MILCHSCHOKOLADE",
    description: "Fruchtig-frisch mit feiner Säure, getaucht in zarter Milchschokolade.",
    price: "CHF 6.90",
    weight: "50 g",
    image: kiwi,
  },
  {
    name: "APFEL",
    chocolate: "MILCHSCHOKOLADE",
    description: "Knackig-süss, umhüllt von zartschmelzender Milchschokolade.",
    price: "CHF 6.90",
    weight: "50 g",
    image: apfel,
  },
];

function SortenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[oklch(0.965_0.022_15)] via-background to-[oklch(0.97_0.018_20)] overflow-hidden">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 lg:pt-24 pb-16">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">
          · Unsere Sorten
        </p>
        <h1 className="font-display text-5xl lg:text-6xl leading-[1.05] text-foreground max-w-3xl">
          Drei Früchte, in Schokolade<br />vollendet.
        </h1>
        <p className="mt-6 text-base lg:text-lg text-foreground/70 max-w-xl leading-relaxed">
          Jede Sorte wird schonend gefriergetrocknet, um Geschmack und Nährstoffe zu bewahren – dann von Hand in Schokolade getaucht.
        </p>
        <button className="mt-8 rounded-full bg-brand text-white px-7 py-3 text-sm font-medium hover:bg-brand/90 transition shadow-md">
          Sorten entdecken
        </button>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {sorten.map((s) => (
            <article
              key={s.name}
              className="relative bg-white rounded-3xl pt-56 pb-8 px-8 shadow-[0_10px_40px_-15px_rgba(180,80,100,0.15)]"
            >
              {/* Pink arch behind image */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-64 bg-brand-soft rounded-t-full rounded-b-none -z-0" />
              <img
                src={s.image}
                alt={s.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute top-6 left-1/2 -translate-x-1/2 w-56 h-56 object-contain drop-shadow-xl z-10"
              />
              <h3 className="font-display text-2xl tracking-wide text-foreground">{s.name}</h3>
              <p className="mt-1 text-xs tracking-[0.2em] uppercase text-brand font-medium">
                {s.chocolate}
              </p>
              <p className="mt-4 text-sm text-foreground/70 leading-relaxed min-h-[4.5rem]">
                {s.description}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-foreground">{s.price}</span>
                  <span className="text-xs text-foreground/60">{s.weight}</span>
                </div>
                <button
                  aria-label={`${s.name} in den Warenkorb`}
                  className="w-10 h-10 rounded-full border border-brand/30 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition"
                >
                  <Plus className="w-4 h-4" strokeWidth={2} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
