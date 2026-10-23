import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Hand, UtensilsCrossed } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import leaves from "@/assets/nachhaltigkeit-leaves.jpg";

export const Route = createFileRoute("/nachhaltigkeit")({
  head: () => ({
    meta: [
      { title: "Was Frulicious besonders macht – frulicious" },
      {
        name: "description",
        content:
          "100% bio-zertifizierte Früchte und Schokolade, von Hand veredelt und abgepackt – vielseitig geniessen als Snack, Topping oder Geschenk.",
      },
      { property: "og:title", content: "Was Frulicious besonders macht – frulicious" },
      {
        property: "og:description",
        content: "100% bio-zertifizierte Früchte und Schokolade, von Hand veredelt und abgepackt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NachhaltigkeitPage,
});

const points = [
  {
    icon: Leaf,
    title: "100% Bio-Früchte",
    text: "Für unsere Frulicious-Produkte verwenden wir ausschliesslich sorgfältig ausgewählte Früchte aus biologischem Anbau. Dabei legen wir grossen Wert auf Qualität, Natürlichkeit und einen unverfälschten Fruchtgeschmack. Bei der Gefriertrocknung wird den Früchten das Wasser entzogen, während ihr natürliches Aroma und viele wertvolle Inhaltsstoffe zu einem grossen Teil erhalten bleiben. So bilden unsere Bio-Früchte die perfekte Grundlage für unsere fruchtigen Schokoladenkreationen.",
  },
  {
    icon: Hand,
    title: "Handgemacht",
    text: "Bei Frulicious legen wir grossen Wert auf sorgfältige Handarbeit. Jedes einzelne Fruchtstück wird von unserem Team von Hand mit einer feinen Schicht Bio-Schokolade veredelt. Auch das anschliessende Abfüllen und Verpacken unserer Produkte übernehmen wir selbst. Dabei achten wir auf eine sorgfältige Verarbeitung und eine gleichbleibend hohe Qualität. So steckt in jeder Frulicious-Packung nicht nur eine besondere Kombination aus Frucht und Schokolade, sondern auch viel Zeit, Sorgfalt und Liebe zum Detail.",
  },
];

function NachhaltigkeitPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left card */}
          <div className="relative rounded-3xl overflow-hidden min-h-72 sm:min-h-80 lg:aspect-[4/5] bg-brand-soft p-6 sm:p-10 lg:p-10 flex flex-col justify-center">
            <img
              src={leaves}
              alt=""
              aria-hidden="true"
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-multiply pointer-events-none"
            />
            <div className="relative">
              <p className="text-xs uppercase text-primary font-medium mb-6">
                · Frulicious
              </p>
              <h1 className="font-display text-3xl sm:text-4xl leading-[1.15] text-foreground max-w-md">
                Was Frulicious besonders macht
              </h1>
            </div>
          </div>

          {/* Right list */}
          <div className="space-y-12">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="grid grid-cols-[2.75rem_1fr] sm:grid-cols-[3.5rem_1fr] gap-x-4 sm:gap-x-6 gap-y-3">
                  <span className="shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-brand/30 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </span>
                  <h2 className="self-center font-display text-2xl text-foreground">{p.title}</h2>
                    <p className="col-span-2 sm:col-span-1 sm:col-start-2 text-base text-muted-foreground leading-relaxed max-w-xl">
                      {p.text}
                    </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-brand/15 bg-brand-soft/30">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
          <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
            {/* Heading */}
            <div>
              <span className="inline-flex w-14 h-14 rounded-full bg-amber-accent/20 text-bordeaux items-center justify-center">
                <UtensilsCrossed className="w-6 h-6" strokeWidth={1.5} />
              </span>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl leading-[1.15] text-foreground">
                Vielseitiger Genuss
              </h2>
            </div>

            {/* Text */}
            <div className="max-w-2xl space-y-5 text-base lg:text-lg text-foreground/75 leading-relaxed">
              <p>
                Frulicious lässt sich auf vielfältige Weise geniessen. Unsere schokoladenüberzogenen
                Früchte eignen sich nicht nur als Snack für zwischendurch, sondern auch als
                besondere Ergänzung zu verschiedenen Speisen. Ob als Topping für Müesli, Joghurt,
                Glace oder Porridge – Frulicious verleiht zahlreichen Gerichten eine
                fruchtig-schokoladige Note. Auch zum Verfeinern und Dekorieren von Desserts lassen
                sich unsere Produkte vielseitig einsetzen.
              </p>
              <p>
                Darüber hinaus eignet sich Frulicious hervorragend als kleines Mitbringsel oder als
                Geschenk für besondere Anlässe. Ob als Wichtelgeschenk, Weihnachtsgeschenk oder
                einfach als kleine Überraschung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
