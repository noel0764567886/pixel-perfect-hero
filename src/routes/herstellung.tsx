import { createFileRoute } from "@tanstack/react-router";
import { Package, Snowflake, Utensils } from "lucide-react";
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
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HerstellungPage,
});

const steps = [
  {
    n: "01",
     icon: Snowflake,
     title: "Fruuna – Einkauf, Rüstung, Gefriertrocknung",
     text: "Der erste Schritt unserer Herstellung erfolgt bei unserem Produzenten Fruuna. Dort werden sorgfältig ausgewählte Bio-Früchte eingekauft, gewaschen und für die Weiterverarbeitung vorbereitet. Anschliessend werden die Früchte in gleichmässige Stücke geschnitten und gefriergetrocknet. Bei diesem Verfahren wird den Früchten das Wasser entzogen, wodurch ihr natürlicher Geschmack und ihre wertvollen Inhaltsstoffe weitgehend erhalten bleiben. Danach werden die gefriergetrockneten Früchte an uns geliefert.",
    image: ernte,
     label: "FOTO: GEFRIERTROCKNUNG",
  },
  {
    n: "02",
     icon: Utensils,
     title: "Veredelung",
     text: "Sobald die gefriergetrockneten Früchte bei uns eintreffen, beginnt die Veredelung durch unser Frulicious-Team. In sorgfältiger Handarbeit versehen wir jedes einzelne Fruchtstück auf einer Seite mit einer feinen Schicht hochwertiger Bio-Kuvertüre von Felchlin. Dabei verwenden wir sowohl Milch- als auch Zartbitter-Kuvertüre, die wir schonend schmelzen und dann von Hand sorgfältig auf die Früchte auftragen.",
    image: produktion,
     label: "FOTO: VEREDELUNG",
  },
  {
    n: "03",
     icon: Package,
     title: "Verpacken und verkaufen",
     text: "Sobald die Schokolade getrocknet ist, wiegen wir jeweils 45 g einer Fruchtsorte ab und verpacken diese in wiederverschliessbare Standbeutel. Unsere wiederverschliessbaren Verpackungen sorgen dafür, dass die Früchte möglichst lange frisch und aromatisch bleiben. Anschliessend sind unsere Produkte bereit für den Verkauf.",
    image: verpackung,
     label: "FOTO: FERTIGES PRODUKT",
  },
];

function HerstellungPage() {
  return (
    <div className="min-h-screen bg-[rgb(253,246,243)] flex flex-col">

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-8">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-4">
           · Gefriergetrocknet und von Hand veredelt
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
                    <p className="mt-3 text-sm lg:text-base text-foreground/70 leading-relaxed max-w-md">
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
