import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Plus } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/context/cart";
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
      ],
    };
  },
  notFoundComponent: SorteNotFound,
  component: SortePage,
});

function SorteNotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
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
  const { addItem } = useCart();
  const others = sorten.filter((s) => s.slug !== sorte.slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(252,238,238)] via-background to-[rgb(253,245,244)] overflow-hidden">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-10 lg:pt-14 pb-16">
        <Link to="/sorten" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-brand transition">
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Alle Sorten
        </Link>

        <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[85%] bg-brand-soft rounded-t-full" />
            <img
              src={sorte.image}
              alt={sorte.name}
              width={1024}
              height={1024}
              className="relative w-64 sm:w-80 h-auto object-contain drop-shadow-xl"
            />
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-4">· {sorte.chocolate}</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              {sorte.name.charAt(0) + sorte.name.slice(1).toLowerCase()}.
            </h1>
            <p className="mt-5 text-base lg:text-lg text-foreground/70 leading-relaxed max-w-lg">{sorte.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className="text-lg font-semibold text-foreground">{sorte.price}</span>
              <span className="text-sm text-foreground/60">{sorte.weight}</span>
              <button
                onClick={() =>
                  addItem({
                    id: sorte.slug,
                    name: sorte.name,
                    price: parseFloat(sorte.price.replace(/[^0-9.]/g, "")),
                    weight: sorte.weight,
                    image: sorte.image,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-sm font-medium hover:bg-brand/90 transition shadow-md"
              >
                <Plus className="w-4 h-4" strokeWidth={2} /> In den Warenkorb
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
          <div className="space-y-5 text-sm sm:text-base text-foreground/75 leading-relaxed">
            <h2 className="font-display text-3xl text-foreground">Die Geschichte dahinter.</h2>
            {sorte.story.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>

          <dl className="bg-white/70 border border-brand/10 rounded-3xl p-6 sm:p-8 h-fit divide-y divide-brand/10">
            {sorte.facts.map((f) => (
              <div key={f.label} className="py-3 first:pt-0 last:pb-0">
                <dt className="text-xs tracking-[0.2em] uppercase text-brand font-medium">{f.label}</dt>
                <dd className="mt-1 text-sm text-foreground/80">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-20">
        <div className="grid sm:grid-cols-3 gap-5 lg:gap-8">
          {sorte.gallery.map((g) => (
            <img
              key={g.src}
              src={g.src}
              alt={g.alt}
              width={1024}
              height={768}
              loading="lazy"
              className="w-full aspect-[4/3] object-contain sm:object-cover rounded-3xl bg-brand-soft/40 shadow-[0_10px_40px_-20px_rgba(180,80,100,0.35)]"
            />
          ))}
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
              className="group flex items-center gap-5 bg-white rounded-3xl p-5 shadow-[0_10px_40px_-25px_rgba(180,80,100,0.4)] hover:shadow-[0_14px_45px_-20px_rgba(180,80,100,0.45)] transition"
            >
              <div className="w-24 h-24 rounded-2xl bg-brand-soft flex items-center justify-center shrink-0">
                <img src={o.image} alt={o.name} width={1024} height={1024} loading="lazy" className="w-20 h-20 object-contain" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground group-hover:text-brand transition">{o.name}</h3>
                <p className="mt-1 text-sm text-foreground/65 leading-relaxed">{o.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
