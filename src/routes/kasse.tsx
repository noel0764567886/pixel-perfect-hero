import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteFooter } from "@/components/SiteFooter";
import { useCart } from "@/context/cart";

export const Route = createFileRoute("/kasse")({
  head: () => ({
    meta: [
      { title: "Kasse – frulicious" },
      { name: "description", content: "Bestellübersicht und Lieferadresse für deine frulicious Bestellung." },
      { property: "og:title", content: "Kasse – frulicious" },
      { property: "og:description", content: "Bestellübersicht und Lieferadresse für deine frulicious Bestellung." },
    ],
  }),
  component: KassePage,
});

const schema = z.object({
  fullName: z.string().trim().min(2, "Bitte gib deinen vollen Namen an.").max(120),
  country: z.string().trim().min(2, "Bitte gib das Land an.").max(60),
  zip: z.string().trim().min(3, "Bitte gib die Postleitzahl an.").max(12),
  street: z.string().trim().min(2, "Bitte gib die Strasse an.").max(120),
  houseNumber: z.string().trim().min(1, "Bitte gib die Hausnummer an.").max(12),
});

type Fields = z.infer<typeof schema>;
const empty: Fields = { fullName: "", country: "Schweiz", zip: "", street: "", houseNumber: "" };

const labels: Record<keyof Fields, string> = {
  fullName: "Vollständiger Name",
  country: "Land",
  zip: "Postleitzahl",
  street: "Strasse",
  houseNumber: "Hausnummer",
};

const autoComplete: Record<keyof Fields, string> = {
  fullName: "name",
  country: "country-name",
  zip: "postal-code",
  street: "address-line1",
  houseNumber: "address-line2",
};

function KassePage() {
  const { items, total, clear } = useCart();
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [done, setDone] = useState<{ address: Fields; total: number } | null>(null);

  const set = (key: keyof Fields, v: string) => {
    setValues((p) => ({ ...p, [key]: v }));
    setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof Fields, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Fields;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    if (items.length === 0) return;
    setDone({ address: parsed.data, total });
    clear();
  };

  if (done) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[rgb(252,238,238)] via-background to-[rgb(253,245,244)]">
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-10 pt-16 lg:pt-24 pb-24">
          <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">· Bestellung erfasst</p>
          <h1 className="font-display text-4xl sm:text-5xl text-foreground">Danke, {done.address.fullName}!</h1>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Wir haben deine Bestellung über <strong>CHF {done.total.toFixed(2)}</strong> erfasst und liefern an:
          </p>
          <div className="mt-6 rounded-3xl bg-white p-8 shadow-[0_10px_40px_-15px_rgba(180,80,100,0.15)] text-sm text-foreground/80 leading-relaxed">
            {done.address.fullName}
            <br />
            {done.address.street} {done.address.houseNumber}
            <br />
            {done.address.zip}
            <br />
            {done.address.country}
          </div>
          <Link
            to="/sorten"
            className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-medium text-white hover:bg-brand/90 transition"
          >
            Weiter stöbern
          </Link>
        </section>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(252,238,238)] via-background to-[rgb(253,245,244)]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-16 lg:pt-24 pb-8">
        <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">· Kasse</p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
          Deine Bestellung.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-24 grid lg:grid-cols-[1fr_0.9fr] gap-8 lg:gap-12 items-start">
        {/* Bestellübersicht */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-[0_10px_40px_-15px_rgba(180,80,100,0.15)] order-2 lg:order-1">
          <h2 className="font-display text-2xl text-foreground">Übersicht</h2>
          {items.length === 0 ? (
            <div className="mt-6">
              <p className="text-sm text-foreground/60">Dein Warenkorb ist leer.</p>
              <Link to="/sorten" className="mt-4 inline-block text-sm text-brand underline underline-offset-4">
                Sorten entdecken
              </Link>
            </div>
          ) : (
            <>
              <ul className="mt-6 divide-y divide-border">
                {items.map((i) => (
                  <li key={i.id} className="flex items-center gap-4 py-4">
                    {i.image && (
                      <img
                        src={i.image}
                        alt={i.name}
                        loading="lazy"
                        className="w-16 h-16 object-contain rounded-2xl bg-brand-soft/40 shrink-0"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-foreground truncate">{i.name}</p>
                      <p className="text-xs text-foreground/60">
                        {i.weight} · {i.qty} × CHF {i.price.toFixed(2)}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                      CHF {(i.qty * i.price).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-border pt-4 flex items-baseline justify-between">
                <span className="text-sm text-foreground/70">Gesamtbetrag</span>
                <span className="font-display text-3xl text-brand">CHF {total.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>

        {/* Lieferadresse */}
        <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 sm:p-8 shadow-[0_10px_40px_-15px_rgba(180,80,100,0.15)] order-1 lg:order-2">
          <h2 className="font-display text-2xl text-foreground">Lieferadresse</h2>
          <p className="mt-2 text-xs text-foreground/60">Alle Felder sind Pflichtfelder.</p>

          <div className="mt-6 space-y-4">
            {(Object.keys(labels) as (keyof Fields)[]).map((key) => (
              <div key={key}>
                <label htmlFor={key} className="block text-sm font-medium text-foreground">
                  {labels[key]} <span className="text-brand">*</span>
                </label>
                <input
                  id={key}
                  name={key}
                  required
                  autoComplete={autoComplete[key]}
                  value={values[key]}
                  onChange={(e) => set(key, e.target.value)}
                  aria-invalid={errors[key] ? true : undefined}
                  aria-describedby={errors[key] ? `${key}-error` : undefined}
                  className="mt-1 w-full rounded-2xl border border-brand/20 bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-brand"
                />
                {errors[key] && (
                  <p id={`${key}-error`} className="mt-1 text-xs text-brand">
                    {errors[key]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={items.length === 0}
            className="mt-6 w-full rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Bestellung abschliessen
          </button>
          {items.length === 0 && (
            <p className="mt-2 text-xs text-foreground/60">Lege zuerst Produkte in den Warenkorb.</p>
          )}
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}
