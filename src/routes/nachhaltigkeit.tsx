import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Hand } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import leaves from "@/assets/nachhaltigkeit-leaves.jpg";

export const Route = createFileRoute("/nachhaltigkeit")({
  head: () => ({
    meta: [
       { title: "Bio und Handgemacht – frulicious" },
       { name: "description", content: "100% bio-zertifizierte Früchte und Schokolade, von Hand veredelt und abgepackt." },
       { property: "og:title", content: "Bio und Handgemacht – frulicious" },
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
     text: "Wir verwenden ausschliesslich 100% bio-zertifizierte Früchte und Schokolade.",
  },
  {
     icon: Hand,
     title: "Handgemacht",
     text: "Die Veredelung, Abpackung und Gestaltung unserer Verpackungen wird von uns von Hand erledigt.",
  },
];

function NachhaltigkeitPage() {
  return (
    <div className="min-h-screen bg-[rgb(253,246,243)] flex flex-col">

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 pb-24 flex-1">
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
                 Bio und<br />Handgemacht
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
