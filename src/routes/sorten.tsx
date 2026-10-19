import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { sorten } from "@/lib/sorten-data";


export const Route = createFileRoute("/sorten")({
  head: () => ({
    meta: [
      { title: "Sorten – frulicious" },
      { name: "description", content: "Drei Sorten gefriergetrockneter Früchte, von Hand in feinste Schokolade getaucht." },
      { property: "og:title", content: "Sorten – frulicious" },
      { property: "og:description", content: "Drei Sorten gefriergetrockneter Früchte, von Hand in feinste Schokolade getaucht." },
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SortenPage,
});

function SortenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(252,238,238)] via-background to-[rgb(253,245,244)] overflow-hidden">

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
         <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">
           · Unser Produkt
         </p>
         <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground max-w-3xl">
            Gefriergetrocknete Früchte in Schokolade veredelt.
         </h1>
         <p className="mt-6 text-base lg:text-lg text-foreground/70 max-w-xl leading-relaxed">
            Frulicious vereint den natürlichen Geschmack sorgfältig ausgewählter Bio-Früchte mit hochwertiger Bio-Schokolade. Durch diese besondere Kombination entsteht ein einzigartiges Geschmackserlebnis, bei dem fruchtige Aromen auf feinste Schokolade treffen. Unser Sortiment umfasst drei verschiedene Fruchtsorten: Banane, Apfel und Kiwi. Jede Sorte überzeugt durch ihren individuellen Geschmack und wird mit einer passenden Schokoladenkombination verfeinert.
         </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {sorten.map((s) => (
            <article
              key={s.name}
              className="group relative flex flex-col bg-card rounded-3xl overflow-hidden pb-8 px-6 sm:px-8 shadow-[0_10px_40px_-15px_rgba(180,80,100,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_55px_-20px_rgba(180,80,100,0.35)]"
            >
              {/* Arch zone */}
              <Link
                to="/sorte/$slug"
                params={{ slug: s.slug }}
                aria-label={`${s.name} ansehen`}
                className="relative block h-60 sm:h-64 focus-visible:outline-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[78%] h-[88%] bg-brand-soft rounded-t-full transition-transform duration-500 group-hover:scale-[1.04]" />
                <img
                  src={s.image}
                  alt={s.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 w-44 h-44 sm:w-48 sm:h-48 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.06] group-hover:-rotate-2"
                />
              </Link>

              <div className="relative z-10 mt-1 flex flex-1 flex-col">
                <h3 className="font-display text-2xl tracking-wide text-foreground">
                  <Link to="/sorte/$slug" params={{ slug: s.slug }} className="transition-colors hover:text-brand">
                    {s.name}
                  </Link>
                </h3>
                <p className="mt-1.5 text-xs tracking-[0.2em] uppercase text-brand font-medium leading-relaxed min-h-[1rem]">
                  {s.chocolate}
                </p>

                <Link
                  to="/sorte/$slug"
                  params={{ slug: s.slug }}
                  className="group/link mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-brand transition-opacity hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand rounded-sm"
                >
                  Mehr über {s.name.charAt(0) + s.name.slice(1).toLowerCase()}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" strokeWidth={2} />
                </Link>

                <div className="mt-auto pt-6">
                  <div className="h-px bg-brand-soft mb-5" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="text-sm font-semibold text-foreground">{s.price}</span>
                      <span className="text-xs text-foreground/60">{s.weight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-brand/15 bg-brand-soft/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-20 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">Interesse geweckt?</h2>
          <div className="max-w-2xl space-y-5 text-base lg:text-lg text-foreground/75 leading-relaxed">
            <p>Du möchtest Frulicious selbst probieren? Unsere Produkte findest du im Breitschlädeli im Berner Breitenrainquartier. Ausserdem sind wir am Weihnachtsmarkt in Bolligen sowie am 6. Dezember am Weihnachtsmarkt in Worb mit einem eigenen Stand vertreten.</p>
            <p>Bei Fragen oder Interesse an unseren Produkten kannst du uns jederzeit über unser <a href="https://www.instagram.com/frulicious_official/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer external" className="text-brand underline underline-offset-4 hover:opacity-75">Instagram-Profil</a> kontaktieren. Wir freuen uns auf deine Nachricht!</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
