import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Package } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import leaves from "@/assets/nachhaltigkeit-leaves.jpg";

export const Route = createFileRoute("/nachhaltigkeit")({
  head: () => ({
    meta: [
      { title: "Nachhaltigkeit – frulicious" },
      { name: "description", content: "Bio-Früchte und wiederverschliessbare Verpackung – gut für dich, gut für die Erde." },
      { property: "og:title", content: "Nachhaltigkeit – frulicious" },
      { property: "og:description", content: "Bio-Früchte und wiederverschliessbare Verpackung – gut für dich, gut für die Erde." },
    ],
  }),
  component: NachhaltigkeitPage,
});

const points = [
  {
    icon: Leaf,
    title: "100% Bio-Früchte",
    text: "Wir arbeiten ausschliesslich mit bio-zertifizierten Erzeugern zusammen.",
  },
  {
    icon: Package,
    title: "Wiederverschliessbare Verpackung",
    text: "Unsere Beutel lassen sich immer wieder verschliessen – für maximale Frische ohne unnötigen Verpackungsmüll.",
  },
];

function NachhaltigkeitPage() {
  return (
    <div className="min-h-screen bg-[oklch(0.98_0.008_60)] flex flex-col">
      <SiteHeader />

      <section className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-16 pb-24 flex-1">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left card */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-soft p-10 lg:p-14 flex flex-col justify-center">
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
                · Von der Ernährlichkeit
              </p>
              <h1 className="font-display text-4xl lg:text-5xl leading-[1.1] text-foreground">
                Gut für dich.<br />Gut für die Erde.
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
                    <p className="mt-3 text-sm lg:text-base text-foreground/70 leading-relaxed max-w-sm">
                      {p.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
