import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";


export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team – frulicious" },
       { name: "description", content: "Lerne die Köpfe hinter Frulicious besser kennen." },
      { property: "og:title", content: "Team – frulicious" },
       { property: "og:description", content: "Lerne die Köpfe hinter Frulicious besser kennen." },
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Alisha Balasubramaniam", role: "CEO" },
  { name: "Milena Blaser", role: "CAO" },
  { name: "Ilan Bino", role: "CFO" },
  { name: "Ava Christener", role: "CTO" },
  { name: "Noah Perren", role: "CMO" },
  { name: "Arno Blank", role: "CPO" },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 pb-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-brand font-medium mb-6">
              · Die Köpfe dahinter
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
               Unser Team
            </h1>
            <p className="mt-6 text-base sm:text-lg text-foreground/70 max-w-md leading-relaxed">
               Lerne die Köpfe hinter Frulicious besser kennen.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-3xl bg-brand-soft flex items-center justify-center overflow-hidden">
            <div className="rounded-full bg-brand/70 text-white px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium">
              Foto: Das ganze Team
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-16 pb-24 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-brand-soft to-brand/40 flex items-center justify-center shadow-[0_10px_30px_-15px_rgba(180,80,100,0.4)]">
                <span className="text-white text-xs tracking-[0.2em] font-medium">FOTO</span>
              </div>
              <p className="mt-6 font-medium text-foreground">{m.name}</p>
              <p className="mt-1 text-xs tracking-[0.2em] uppercase text-foreground/70">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
