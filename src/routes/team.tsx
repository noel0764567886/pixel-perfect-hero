import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import teamAlisha from "@/assets/team-alisha.jpg";
import teamMilena from "@/assets/team-milena.jpg";
import teamIlan from "@/assets/team-ilan.jpg";
import teamAva from "@/assets/team-ava.jpg";
import teamNoah from "@/assets/team-noah.jpg";
import teamArno from "@/assets/team-arno.jpg";

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
  { name: "Alisha Balasubramaniam", role: "CEO", photo: teamAlisha },
  { name: "Milena Blaser", role: "CAO", photo: teamMilena },
  { name: "Ilan Bino", role: "CFO", photo: teamIlan },
  { name: "Ava Christener", role: "CTO", photo: teamAva },
  { name: "Noah Perren", role: "CMO", photo: teamNoah },
  { name: "Arno Blank", role: "CPO", photo: teamArno },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-10 sm:pt-16 pb-8">
        <div>
          <p className="text-xs uppercase text-primary font-medium mb-6">· Die Köpfe dahinter</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
            Unser Team
          </h1>
          <p className="mt-6 text-base sm:text-lg text-foreground/70 max-w-md leading-relaxed">
            Lerne die Köpfe hinter Frulicious besser kennen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 pt-6 sm:pt-10 pb-24 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8">
          {team.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-brand-soft shadow-product">
                <img
                  src={m.photo}
                  alt={`Porträt von ${m.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-6 font-medium text-foreground">{m.name}</p>
              <p className="mt-1 text-xs uppercase text-foreground/70">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-brand/15 bg-brand-soft/30">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-10 py-14 sm:py-20 grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground">Über uns</h2>
          <div className="max-w-2xl space-y-5 text-base lg:text-lg text-foreground/75 leading-relaxed">
            <p>
              Wir sind sechs engagierte Schülerinnen und Schüler des Gymnasiums Kirchenfeld in Bern.
              Im Rahmen des YES-Projekts haben wir unser eigenes Start-up-Unternehmen Frulicious
              gegründet.
            </p>
            <p>
              Unser Team vereint unterschiedliche Stärken und Fähigkeiten, die wir in den
              verschiedenen Bereichen unseres Unternehmens gezielt einsetzen. Gemeinsam übernehmen
              wir Verantwortung, entwickeln neue Ideen und arbeiten daran, unsere Ziele erfolgreich
              umzusetzen.
            </p>
            <p>
              Mit Frulicious möchten wir wertvolle Erfahrungen im Unternehmertum sammeln und zeigen,
              was wir als junges, motiviertes Team erreichen können.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
