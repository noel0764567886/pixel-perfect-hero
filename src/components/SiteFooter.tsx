import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import logo from "@/assets/frulicious-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-brand-soft/40 border-t border-brand/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 sm:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.2fr_0.8fr_1.3fr_1.4fr_auto] gap-x-6 gap-y-10 lg:gap-x-8">
        <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col justify-between gap-6">
          <Link to="/" aria-label="frulicious Startseite">
            <img src={logo} alt="frulicious Logo" className="h-16 w-auto" />
          </Link>

          <p className="text-xs text-foreground/60">© 2025 Frulicious. Alle Rechte vorbehalten.</p>
        </div>

        <div className="min-w-0">
          <p className="text-xs uppercase text-foreground font-semibold mb-4">
            Sorten
          </p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link
                to="/sorte/$slug"
                params={{ slug: "banane" }}
                className="hover:text-primary transition"
              >
                Banane
              </Link>
            </li>
            <li>
              <Link
                to="/sorte/$slug"
                params={{ slug: "kiwi" }}
                className="hover:text-primary transition"
              >
                Kiwi
              </Link>
            </li>
            <li>
              <Link
                to="/sorte/$slug"
                params={{ slug: "apfel" }}
                className="hover:text-primary transition"
              >
                Apfel
              </Link>
            </li>
          </ul>
        </div>

        <div className="min-w-0">
          <p className="text-xs uppercase text-foreground font-semibold mb-4">
            Unternehmen
          </p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link to="/team" className="hover:text-primary transition">
                Team
              </Link>
            </li>
            <li>
              <Link to="/nachhaltigkeit" className="hover:text-primary transition">
                Was Frulicious besonders macht
              </Link>
            </li>
            <li>
              <Link to="/herstellung" className="hover:text-primary transition">
                Herstellung
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1 min-w-0">
          <p className="text-xs uppercase text-foreground font-semibold mb-4">
            Kontakt
          </p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <a href="mailto:frulicious@outlook.com" className="hover:text-primary transition break-words">
                frulicious@outlook.com
              </a>
            </li>
            <li>Tilierstrasse 46, 3005 Bern</li>
          </ul>
        </div>

        <div className="flex flex-col items-start lg:items-end justify-between gap-6">
          <a
            href="https://www.instagram.com/frulicious_official/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer external"
            aria-label="frulicious auf Instagram (öffnet in neuem Tab)"
            className="w-10 h-10 rounded-full border border-brand/30 text-primary flex items-center justify-center hover:bg-brand hover:text-primary-foreground transition"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
