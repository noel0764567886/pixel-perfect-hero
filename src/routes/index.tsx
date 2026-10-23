import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import heroFruits from "@/assets/hero-fruits.jpg";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "frulicious – Frucht trifft Schokolade" },
      {
        name: "description",
        content:
          "Bio-zertifizierte, gefriergetrocknete Früchte von Hand in feinste Schokolade getaucht – Banane, Kiwi und Apfel aus der Schweiz.",
      },
      { property: "og:title", content: "frulicious – Frucht trifft Schokolade" },
      {
        property: "og:description",
        content:
          "Bio-zertifizierte, gefriergetrocknete Früchte von Hand in feinste Schokolade getaucht.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-soft/60 via-background to-background overflow-hidden flex flex-col">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-16 lg:pt-28 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-8">
            Bio · Handgemacht · Gefriergetrocknet
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-foreground font-normal">
            Gefriergetrocknete Früchte in
            <br />
            <span className="text-brand italic font-normal">Schokolade vollendet.</span>
          </h1>
          <div className="mt-8 h-[2px] w-16 bg-brand/60" />
          <p className="mt-8 text-base lg:text-lg text-foreground/70 max-w-md leading-relaxed">
            Jede Sorte wird schonend gefriergetrocknet, um den Geschmack und Nährstoffe zu bewahren
            – dann von Hand mit Schokolade veredelt.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/sorten"
              className="whitespace-nowrap rounded-full bg-brand text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-brand/90 transition shadow-md"
            >
              Sorten entdecken
            </Link>
          </div>
        </div>

        <div className="relative">
          <Sparkles
            className="absolute -left-4 top-16 w-6 h-6 text-brand/70 z-10"
            strokeWidth={1.5}
          />
          <Sparkles
            className="absolute left-8 top-40 w-4 h-4 text-amber-accent z-10"
            strokeWidth={1.5}
          />
          <svg
            className="absolute -left-6 top-32 w-24 h-24 text-brand/50 z-10"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M10 20 Q 60 10 80 60" />
            <path d="M75 50 L 80 60 L 70 62" />
          </svg>

          <img
            src={heroFruits}
            alt="Gefriergetrocknete Früchte in Schokolade"
            width={1024}
            height={1024}
            className="relative w-full max-w-lg mx-auto aspect-[4/5] object-cover drop-shadow-2xl rounded-3xl"
          />

          <div className="absolute bottom-4 right-0 lg:right-4 bg-card rounded-full pl-3 pr-6 py-3 shadow-lg flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand text-lg leading-none">
              +
            </span>
            <span className="text-sm font-medium text-foreground">100% Bio-Früchte</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
