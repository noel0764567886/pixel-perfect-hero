import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Hand, UtensilsCrossed, Gift } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import leaves from "@/assets/nachhaltigkeit-leaves.jpg";

export const Route = createFileRoute("/nachhaltigkeit")({
  head: () => ({
    meta: [
       { title: "Was Frulicious besonders macht – frulicious" },
       { name: "description", content: "100% bio-zertifizierte Früchte und Schokolade, von Hand veredelt und abgepackt – vielseitig geniessen als Snack, Topping oder Geschenk." },
       { property: "og:title", content: "Was Frulicious besonders macht – frulicious" },
       { property: "og:description", content: "100% bio-zertifizierte Früchte und Schokolade, von Hand veredelt und abgepackt." },
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
    <div className="min-h-screen bg-[rgb(253,246,243)] flex flex-col">

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 py-12 sm:py-16 flex-1 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left card */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-soft p-8 sm:p-10 lg:p-14 flex flex-col justify-center">

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
              <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">
                 · Frulicious
              </p>
               <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-foreground">
                 Was Frulicious<br />besonders macht
               </h1>
            </div>
          </div>

          {/* Right list */}
          <div className="space-y-12">
            {points.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="flex items-start gap-6">
                  <span className="shrink-0 w-14 h-14 rounded-full border border-brand/30 text-brand flex items-center justify-center">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                    <p className="mt-3 text-sm sm:text-base text-foreground/75 leading-relaxed max-w-xl">
                      {p.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24">
        <div className="rounded-3xl border border-brand-soft bg-brand-soft/30 p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
            {/* Heading */}
            <div>
              <span className="inline-flex w-14 h-14 rounded-full bg-amber-accent/20 text-[rgb(171,110,35)] items-center justify-center">
                <UtensilsCrossed className="w-6 h-6" strokeWidth={1.5} />
              </span>
              <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mt-8 mb-4">
                · Frulicious
              </p>
              <h2 className="font-display text-3xl sm:text-4xl leading-[1.15] text-foreground">
                Vielseitiger<br />Genuss
              </h2>
            </div>

            {/* Text */}
            <div className="space-y-6 text-sm sm:text-base text-foreground/75 leading-relaxed lg:pt-2">
              <p>
                Frulicious lässt sich auf vielfältige Weise geniessen. Unsere schokoladenüberzogenen
                Früchte eignen sich nicht nur als Snack für zwischendurch, sondern auch als besondere
                Ergänzung zu verschiedenen Speisen. Ob als Topping für Müesli, Joghurt, Glace oder
                Porridge – Frulicious verleiht zahlreichen Gerichten eine fruchtig-schokoladige Note.
                Auch zum Verfeinern und Dekorieren von Desserts lassen sich unsere Produkte vielseitig
                einsetzen.
              </p>
              <p>
                Darüber hinaus eignet sich Frulicious hervorragend als kleines Mitbringsel oder als
                Geschenk für besondere Anlässe. Ob als Wichtelgeschenk, Weihnachtsgeschenk oder
                einfach als kleine Überraschung.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { icon: UtensilsCrossed, label: "Müesli" },
                  { icon: UtensilsCrossed, label: "Joghurt" },
                  { icon: UtensilsCrossed, label: "Glace" },
                  { icon: UtensilsCrossed, label: "Porridge" },
                  { icon: Gift, label: "Geschenke" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-olive/40 bg-card px-4 py-1.5 text-sm text-foreground/80"
                  >
                    <Icon className="w-3.5 h-3.5 text-olive" strokeWidth={1.5} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
