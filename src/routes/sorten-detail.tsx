import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/context/cart";
import banane from "@/assets/sorte-banane.png";
import kiwi from "@/assets/sorte-kiwi.png";
import apfel from "@/assets/sorte-apfel.png";


export const Route = createFileRoute("/sorten-detail")({
  head: () => ({
    meta: [
      { title: "Sorten Detail – frulicious" },
      { name: "description", content: "Alle Details zu unseren drei Sorten: Banane, Kiwi und Apfel in feinster Schokolade." },
      { property: "og:title", content: "Sorten Detail – frulicious" },
      { property: "og:description", content: "Alle Details zu unseren drei Sorten: Banane, Kiwi und Apfel in feinster Schokolade." },
    ],
  }),
  component: SortenDetailPage,
});

type Sorte = {
  id: string;
  name: string;
  chocolate: string;
  description: string;
  price: string;
  weight: string;
  image: string;
  bgFrom: string;
  bgTo: string;
  arch: string;
};

const sorten: Sorte[] = [
  {
    id: "banane",
    name: "Banane",
    chocolate: "DUNKLE SCHOKOLADE",
    description: "Süss-aromatisch und leicht mürbe, ummantelt mit kräftiger, dunkler Schokolade.",
    price: "CHF 6.90",
    weight: "50 g",
    image: banane,
    bgFrom: "oklch(0.97 0.015 15)",
    bgTo: "oklch(0.965 0.02 20)",
    arch: "oklch(0.82 0.09 15)",
  },
  {
    id: "kiwi",
    name: "Kiwi",
    chocolate: "MILCHSCHOKOLADE",
    description: "Fruchtig-frisch mit feiner Säure, getaucht in zarter Milchschokolade.",
    price: "CHF 6.90",
    weight: "50 g",
    image: kiwi,
    bgFrom: "oklch(0.97 0.012 90)",
    bgTo: "oklch(0.94 0.05 130)",
    arch: "oklch(0.82 0.09 135)",
  },
  {
    id: "apfel",
    name: "Apfel",
    chocolate: "MILCHSCHOKOLADE",
    description: "Knackig-süss, umhüllt von zartschmelzender Milchschokolade.",
    price: "CHF 6.90",
    weight: "50 g",
    image: apfel,
    bgFrom: "oklch(0.97 0.02 60)",
    bgTo: "oklch(0.93 0.08 55)",
    arch: "oklch(0.78 0.13 55)",
  },
];

function SortenDetailPage() {
  const { addItem } = useCart();

    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <section className="mx-auto max-w-7xl w-full px-6 lg:px-10 pt-16 pb-8">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-4">
          03 – Sorten Detail
        </p>
        <h1 className="font-display text-5xl lg:text-6xl leading-[1.05] text-foreground">
          Sorten im Detail.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl w-full px-6 lg:px-10 pb-24 space-y-8 flex-1">
        {sorten.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="relative overflow-hidden rounded-3xl shadow-[0_10px_40px_-15px_rgba(180,80,100,0.15)] scroll-mt-24"
            style={{ background: `linear-gradient(90deg, ${s.bgFrom} 0%, ${s.bgFrom} 55%, ${s.bgTo} 100%)` }}
          >
            <div className="grid md:grid-cols-2 items-center min-h-[280px]">
              <div className="px-10 lg:px-16 py-12">
                <p className="text-xs tracking-[0.25em] uppercase text-brand font-semibold">
                  {s.chocolate}
                </p>
                <h2 className="mt-3 font-display text-4xl lg:text-5xl text-foreground">
                  {s.name}
                </h2>
                <p className="mt-4 text-sm lg:text-base text-foreground/70 leading-relaxed max-w-sm">
                  {s.description}
                </p>
                <div className="mt-8 flex items-center gap-6">
                  <button className="rounded-full border border-brand/40 text-brand px-6 py-2.5 text-sm font-medium hover:bg-brand hover:text-white transition">
                    In den Warenkorb
                  </button>
                  <span className="text-sm text-foreground/70">{s.price}</span>
                  <span className="text-sm text-foreground/50">{s.weight}</span>
                </div>
              </div>
              <div className="relative h-[280px] md:h-full min-h-[280px]">
                <div
                  className="absolute right-0 top-0 h-full w-[75%] rounded-l-[50%]"
                  style={{ background: s.arch, opacity: 0.55 }}
                />
                <img
                  src={s.image}
                  alt={s.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="absolute right-8 top-1/2 -translate-y-1/2 w-64 lg:w-80 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </article>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
