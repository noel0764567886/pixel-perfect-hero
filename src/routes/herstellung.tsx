import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Snowflake, Utensils } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import ernte from "@/assets/herstellung-ernte.jpg";
import produktion from "@/assets/herstellung-produktion.jpg";
import verpackung from "@/assets/herstellung-verpackung.jpg";

export const Route = createFileRoute("/herstellung")({
  head: () => ({
    meta: [
      { title: "Herstellung – frulicious" },
      { name: "description", content: "Von der Ernte über die Gefriertrocknung bis zur Veredelung – so entsteht Frulicious." },
      { property: "og:title", content: "Herstellung – frulicious" },
      { property: "og:description", content: "Von der Ernte über die Gefriertrocknung bis zur Veredelung – so entsteht Frulicious." },
    ],
  }),
  component: HerstellungPage,
});

const steps = [
  {
    n: "01",
    icon: Leaf,
    title: "Ernte",
    text: "Wir wählen reife, bio-zertifizierte Früchte von regionalen Betrieben aus.",
    image: ernte,
    label: "FOTO: BIO-FRUCHT",
  },
  {
    n: "02",
    icon: Snowflake,
    title: "Gefriertrocknung",
    text: "Schonend getrocknet bei tiefen Temperaturen – Geschmack und Nährstoffe bleiben erhalten.",
    image: produktion,
    label: "FOTO: HERSTELLUNG",
  },
  {
    n: "03",
    icon: Utensils,
    title: "Veredelung",
    text: "Jedes Stück wird von Hand in feine Schokolade getaucht und sorgfältig verpackt.",
    image: verpackung,
    label: "FOTO: VERPACKUNG",
  },
];

function HerstellungPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.98_0.008_60)] flex flex-col">
      <SiteHeader />

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-8">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-4">
          · Von der Ernte bis zur Tüte
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
          So entsteht Frulicious.
        </h1>
        <div className="mt-6 h-[2px] w-16 bg-brand/60" />
      </section>

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pb-24 flex-1">
        <div className="space-y-12">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

                <div className="flex items-start gap-5 sm:gap-8">
                  <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand/70 leading-none pt-1 shrink-0">
                    {s.n}
                  </span>

                  <div className="pt-2">
                    <Icon className="w-7 h-7 text-foreground/70 mb-4" strokeWidth={1.5} />
                    <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                    <p className="mt-3 text-sm lg:text-base text-foreground/70 leading-relaxed max-w-sm">
                      {s.text}
                    </p>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-[0_10px_40px_-15px_rgba(180,80,100,0.25)]">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand/30 mix-blend-multiply" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-brand/90 text-white text-xs tracking-[0.2em] font-semibold px-5 py-2 rounded-full">
                      {s.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
