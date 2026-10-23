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
      {
        name: "description",
        content:
          "Von der Ernte über die Gefriertrocknung bis zur Veredelung – so entsteht Frulicious.",
      },
      { property: "og:title", content: "Herstellung – frulicious" },
      {
        property: "og:description",
        content:
          "Von der Ernte über die Gefriertrocknung bis zur Veredelung – so entsteht Frulicious.",
      },
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
    accent: "text-rose-accent",
    accentSoft: "bg-rose-accent/15",
    rule: "bg-rose-accent",
    title: "Fruuna – Einkauf, Rüstung, Gefriertrocknung",
    text: "Der erste Schritt unserer Herstellung erfolgt bei unserem Produzenten Fruuna. Dort werden sorgfältig ausgewählte Bio-Früchte eingekauft, gewaschen und für die Weiterverarbeitung vorbereitet. Anschliessend werden die Früchte in gleichmässige Stücke geschnitten und gefriergetrocknet. Bei diesem Verfahren wird den Früchten das Wasser entzogen, wodurch ihr natürlicher Geschmack und ihre wertvollen Inhaltsstoffe weitgehend erhalten bleiben. Danach werden die gefriergetrockneten Früchte an uns geliefert.",
    image: ernte,
    caption: "Gefriertrocknung bei Fruuna",
  },
  {
    n: "02",
    icon: Utensils,
    accent: "text-olive",
    accentSoft: "bg-olive/20",
    rule: "bg-olive",
    title: "Veredelung",
    text: "Sobald die gefriergetrockneten Früchte bei uns eintreffen, beginnt die Veredelung durch unser Frulicious-Team. In sorgfältiger Handarbeit versehen wir jedes einzelne Fruchtstück auf einer Seite mit einer feinen Schicht hochwertiger Bio-Kuvertüre von Felchlin. Dabei verwenden wir sowohl Milch- als auch Zartbitter-Kuvertüre, die wir schonend schmelzen und dann von Hand sorgfältig auf die Früchte auftragen.",
    image: produktion,
    caption: "Handveredelung mit Felchlin-Kuvertüre",
  },
  {
    n: "03",
    icon: Package,
    accent: "text-amber-accent",
    accentSoft: "bg-amber-accent/20",
    rule: "bg-amber-accent",
    title: "Verpacken und verkaufen",
    text: "Sobald die Schokolade getrocknet ist, wiegen wir jeweils 45 g einer Fruchtsorte ab und verpacken diese in wiederverschliessbare Standbeutel. Unsere wiederverschliessbaren Verpackungen sorgen dafür, dass die Früchte möglichst lange frisch und aromatisch bleiben. Anschliessend sind unsere Produkte bereit für den Verkauf.",
    image: verpackung,
    caption: "Frisch verpackt im Standbeutel",
  },
];

function HerstellungPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 pb-10 overflow-hidden">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-4">
          · Gefriergetrocknet und von Hand veredelt
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
          So entsteht Frulicious.
        </h1>
        <p className="mt-5 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
          In drei Schritten von der sorgfältig ausgewählten Bio-Frucht zum handveredelten
          Genussprodukt – transparent und nah an jedem Schritt.
        </p>
        <div className="mt-6 h-[2px] w-16 bg-brand/60" />
      </section>

      {/* Schritte */}
      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pb-24 sm:pb-28 flex-1">
        <div className="space-y-16 sm:space-y-24">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const flip = i % 2 === 1;
            return (
              <div key={s.n} className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Text */}
                <div className={flip ? "md:order-2" : undefined}>
                  <div className="grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-7 gap-y-4">
                    <span
                      className={`font-display text-5xl sm:text-6xl lg:text-7xl leading-none pt-1 shrink-0 ${s.accent}`}
                    >
                      {s.n}
                    </span>
                    <div className="pt-1.5 min-w-0">
                      <span
                        className={`inline-flex items-center justify-center w-11 h-11 rounded-full mb-4 ${s.accentSoft}`}
                      >
                        <Icon
                          className="w-5 h-5 text-foreground"
                          strokeWidth={1.75}
                        />
                      </span>
                      <h2 className="font-display text-2xl sm:text-[1.7rem] text-foreground leading-snug break-words">
                        {s.title}
                      </h2>
                      <div className={`mt-3 h-px w-10 ${s.rule}`} />
                    </div>
                      <p className="col-span-2 sm:col-span-1 sm:col-start-2 text-base text-muted-foreground leading-relaxed max-w-xl">
                        {s.text}
                      </p>
                  </div>
                </div>

                {/* Bild */}
                <div className={flip ? "md:order-1" : undefined}>
                  <figure className="group">
                    <div className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-photo">
                      <img
                        src={s.image}
                        alt={s.caption}
                        width={1024}
                        height={1024}
                        loading="lazy"
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${s.n === "03" ? "object-[center_70%]" : ""}`}
                      />
                      <span
                        aria-hidden="true"
                        className="absolute top-4 left-4 font-display bg-primary/75 backdrop-blur-sm text-primary-foreground text-sm px-4 py-1.5 rounded-full"
                      >
                        {s.n}
                      </span>
                    </div>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <span className={`h-px w-6 shrink-0 ${s.rule}`} />
                      <span className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-medium">
                        {s.caption}
                      </span>
                    </figcaption>
                  </figure>
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
