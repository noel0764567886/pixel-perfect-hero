import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { getSorte, sorten } from "@/lib/sorten-data";

export const Route = createFileRoute("/sorte/$slug")({
  loader: ({ params }) => {
    const sorte = getSorte(params.slug);
    if (!sorte) throw notFound();
    return { sorte };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Sorte nicht gefunden – frulicious" }, { name: "robots", content: "noindex" }] };
    }
    const { sorte } = loaderData;
    const title = `${sorte.name.charAt(0) + sorte.name.slice(1).toLowerCase()} – frulicious`;
    return {
      meta: [
        { title },
        { name: "description", content: sorte.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: sorte.intro },
         { property: "og:type", content: "website" },
         { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: SorteNotFound,
  component: SortePage,
});

function SorteNotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <section className="mx-auto max-w-3xl w-full px-4 sm:px-6 lg:px-10 py-24 flex-1">
        <h1 className="font-display text-4xl text-foreground">Diese Sorte gibt es nicht.</h1>
        <Link to="/sorten" className="mt-6 inline-block text-brand underline underline-offset-4">
          Zurück zu allen Sorten
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}

function SortePage() {
  const { sorte } = Route.useLoaderData();
  const others = sorten.filter((s) => s.slug !== sorte.slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-soft/60 via-background to-background overflow-hidden">

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-10 lg:pt-14 pb-16">
        <Link to="/sorten" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-brand transition">
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Alle Sorten
        </Link>

        <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[82%] h-[92%] bg-brand-soft rounded-t-full" />
            <img
              src={sorte.image}
              alt={`Frulicious ${sorte.name.charAt(0) + sorte.name.slice(1).toLowerCase()} – Produktpackung vor der Berner Altstadt`}
              width={768}
              height={1366}
              className="relative w-64 sm:w-80 h-auto rounded-3xl shadow-[0_20px_50px_-20px_rgba(78,10,25,0.35)]"
            />
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-4">· {sorte.chocolate}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              {sorte.name.charAt(0) + sorte.name.slice(1).toLowerCase()}.
            </h1>
            <p className="mt-5 text-base lg:text-lg text-foreground/70 leading-relaxed max-w-lg">{sorte.intro}</p>
            <p className="mt-4 text-sm text-foreground/60 leading-relaxed max-w-lg">
              <span className="font-semibold text-foreground/80">Zutaten pro 45-g-Packung:</span> {sorte.zutaten}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="text-lg font-semibold text-foreground">{sorte.price}</span>
              <span className="text-sm text-foreground/60">{sorte.weight}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-24">
        <h2 className="font-display text-3xl text-foreground mb-8">Weitere Sorten.</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/sorte/$slug"
              params={{ slug: o.slug }}
              className="group flex items-center gap-5 bg-card rounded-3xl p-5 shadow-[0_10px_40px_-25px_rgba(180,80,100,0.4)] hover:shadow-[0_14px_45px_-20px_rgba(180,80,100,0.45)] transition"
            >
              <div className="w-24 h-24 rounded-2xl bg-brand-soft flex items-center justify-center shrink-0">
                <img src={o.image} alt={`Frulicious ${o.name}`} width={768} height={1366} loading="lazy" className="w-24 h-24 rounded-2xl object-cover" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground group-hover:text-brand transition">{o.name}</h3>
                 <p className="mt-1 text-sm text-foreground/65 leading-relaxed">{o.chocolate}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
