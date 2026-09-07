import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/context/cart";
import { sorten } from "@/lib/sorten-data";


export const Route = createFileRoute("/sorten")({
  head: () => ({
    meta: [
      { title: "Sorten – frulicious" },
      { name: "description", content: "Drei Sorten gefriergetrockneter Früchte, von Hand in feinste Schokolade getaucht." },
      { property: "og:title", content: "Sorten – frulicious" },
      { property: "og:description", content: "Drei Sorten gefriergetrockneter Früchte, von Hand in feinste Schokolade getaucht." },
    ],
  }),
  component: SortenPage,
});

function SortenPage() {
  const { addItem } = useCart();
  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(252,238,238)] via-background to-[rgb(253,245,244)] overflow-hidden">

      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">
          · Unsere Sorten
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground max-w-3xl">
          Drei Früchte, in Schokolade<br />vollendet.
        </h1>
        <p className="mt-6 text-base lg:text-lg text-foreground/70 max-w-xl leading-relaxed">
          Jede Sorte wird schonend gefriergetrocknet, um Geschmack und Nährstoffe zu bewahren – dann von Hand in Schokolade getaucht.
        </p>
        <Link to="/sorten-detail" className="mt-8 inline-block rounded-full bg-brand text-white px-7 py-3 text-sm font-medium hover:bg-brand/90 transition shadow-md">
          Sorten entdecken
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {sorten.map((s) => (
            <article
              key={s.name}
              className="relative bg-white rounded-3xl pt-60 pb-8 px-8 shadow-[0_10px_40px_-15px_rgba(180,80,100,0.15)]"
            >
              {/* Pink arch behind image */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[75%] h-56 bg-brand-soft rounded-t-full rounded-b-none z-0" />
              <img
                src={s.image}
                alt={s.name}
                width={1024}
                height={1024}
                loading="lazy"
                className="absolute top-6 left-1/2 -translate-x-1/2 w-52 h-52 object-contain drop-shadow-xl z-10"
              />
              <Link to="/sorte/$slug" params={{ slug: s.slug }} className="relative z-20 block">
                <h3 className="font-display text-2xl tracking-wide text-foreground hover:text-brand transition">{s.name}</h3>
              </Link>
              <p className="relative z-20 mt-1 text-xs tracking-[0.2em] uppercase text-brand font-medium">
                {s.chocolate}
              </p>
              <p className="relative z-20 mt-4 text-sm text-foreground/70 leading-relaxed min-h-[4.5rem]">
                {s.description}
              </p>

              <Link to="/sorte/$slug" params={{ slug: s.slug }} className="relative z-20 mt-4 inline-block text-sm text-brand underline underline-offset-4 hover:opacity-80 transition">
                Mehr über {s.name.charAt(0) + s.name.slice(1).toLowerCase()}
              </Link>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-foreground">{s.price}</span>
                  <span className="text-xs text-foreground/60">{s.weight}</span>
                </div>
                <button
                  onClick={() => addItem({ id: s.slug, name: s.name, price: parseFloat(s.price.replace(/[^0-9.]/g, "")), weight: s.weight, image: s.image })}
                  aria-label={`${s.name} in den Warenkorb`}
                  className="w-10 h-10 rounded-full border border-brand/30 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition"
                >
                  <Plus className="w-4 h-4" strokeWidth={2} />
                </button>

              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
