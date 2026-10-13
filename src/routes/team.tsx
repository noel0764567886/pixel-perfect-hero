import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import teamAlisha from "@/assets/team-alisha.jpg.asset.json";
import teamMilena from "@/assets/team-milena.jpg.asset.json";
import teamIlan from "@/assets/team-ilan.jpg.asset.json";
import teamAva from "@/assets/team-ava.jpg.asset.json";
import teamNoah from "@/assets/team-noah.jpg.asset.json";
import teamArno from "@/assets/team-arno.jpg.asset.json";


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
  { name: "Alisha Balasubramaniam", role: "CEO", photo: teamAlisha.url },
  { name: "Milena Blaser", role: "CAO", photo: teamMilena.url },
  { name: "Ilan Bino", role: "CFO", photo: teamIlan.url },
  { name: "Ava Christener", role: "CTO", photo: teamAva.url },
  { name: "Noah Perren", role: "CMO", photo: teamNoah.url },
  { name: "Arno Blank", role: "CPO", photo: teamArno.url },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 pb-8">
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
      </section>

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-16 pb-24 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-br from-brand-soft to-brand/40 shadow-[0_10px_30px_-15px_rgba(180,80,100,0.4)]">
                <img
                  src={m.photo}
                  alt={`Porträt von ${m.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
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
