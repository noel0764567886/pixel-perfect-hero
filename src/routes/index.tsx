import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import heroFruits from "@/assets/hero-fruits.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[oklch(0.965_0.022_15)] via-background to-[oklch(0.97_0.018_20)] overflow-hidden">
      <header className="mx-auto max-w-7xl px-6 lg:px-10 pt-8 flex items-center justify-between">
        <a href="/" className="font-display italic text-3xl font-bold text-brand tracking-tight">
          frulicious
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
          <a href="#sorten" className="hover:text-brand transition">Sorten</a>
          <a href="#herstellung" className="hover:text-brand transition">Herstellung</a>
          <a href="#team" className="hover:text-brand transition">Team</a>
          <a href="#nachhaltigkeit" className="hover:text-brand transition">Nachhaltigkeit</a>
          <a href="#kontakt" className="hover:text-brand transition">Kontakt</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-brand text-white px-6 py-2.5 text-sm font-medium hover:bg-brand/90 transition shadow-sm">
            Jetzt bestellen
          </button>
          <button aria-label="Warenkorb" className="text-foreground/80 hover:text-brand transition">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 lg:pt-28 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-8">
            Bio · Handgemacht · Gefriergetrocknet
          </p>
          <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl leading-[1.02] text-foreground font-normal">
            Frucht trifft<br />
            <span className="text-brand italic font-normal">Schokolade.</span>
          </h1>
          <div className="mt-8 h-[2px] w-16 bg-brand/60" />
          <p className="mt-8 text-base lg:text-lg text-foreground/70 max-w-md leading-relaxed">
            Wir tauchen bio-zertifizierte, gefriergetrocknete Früchte von Hand in feinste Schokolade – für einen Snack, der so klar schmeckt, wie er aussieht.
          </p>
          <div className="mt-12 flex items-center gap-8">
            <button className="rounded-full bg-brand text-white px-7 py-3.5 text-sm font-medium hover:bg-brand/90 transition shadow-md">
              Sorten entdecken
            </button>
            <a href="#story" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand transition">
              Unsere Geschichte
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="relative">
          <Sparkles className="absolute -left-4 top-16 w-6 h-6 text-brand/70 z-10" strokeWidth={1.5} />
          <Sparkles className="absolute left-8 top-40 w-4 h-4 text-amber-accent z-10" strokeWidth={1.5} />
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
            className="relative w-full max-w-xl mx-auto drop-shadow-2xl"
          />

          <div className="absolute bottom-4 right-0 lg:right-4 bg-white rounded-full pl-3 pr-6 py-3 shadow-lg flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand/10 text-brand text-lg leading-none">+</span>
            <span className="text-sm font-medium text-foreground">100% Bio-Früchte</span>
          </div>
        </div>
      </section>
    </div>
  );
}
