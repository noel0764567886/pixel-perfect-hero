import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – frulicious" },
      { name: "description", content: "Impressum und rechtliche Angaben zu frulicious." },
       { property: "og:title", content: "Impressum – frulicious" },
       { property: "og:description", content: "Impressum und rechtliche Angaben zu frulicious." },
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <section className="mx-auto max-w-3xl w-full px-4 sm:px-6 lg:px-10 pt-16 pb-24 flex-1">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">
          · Rechtliches
        </p>
        <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-foreground">Impressum.</h1>

        <div className="mt-12 space-y-8 text-sm sm:text-base text-foreground/80 leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-foreground mb-3">Betreiberin</h2>
            <p>Frulicious GmbH<br />Musterstrasse 1<br />3000 Bern<br />Schweiz</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-3">Kontakt</h2>
            <p>E-Mail: frulicious@outlook.com</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-3">Handelsregister</h2>
            <p>Eingetragen im Handelsregister des Kantons Bern.<br />UID: CHE-000.000.000</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-foreground mb-3">Haftungsausschluss</h2>
            <p>
              Die Autor:innen übernehmen keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
              Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
