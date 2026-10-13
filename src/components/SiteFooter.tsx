import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import logo from "@/assets/frulicious-logo.png";

export function SiteFooter() {
  return (
    <footer className="bg-[rgb(249,215,214)]/40 border-t border-brand/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2 md:col-span-2 flex flex-col justify-between gap-6">
          <Link to="/" aria-label="frulicious Startseite">
            <img src={logo} alt="frulicious Logo" className="h-16 w-auto" />
          </Link>

          <p className="text-xs text-foreground/60">
            © 2025 Frulicious. Alle Rechte vorbehalten.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground font-semibold mb-4">Shop</p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/sorte/$slug" params={{ slug: "banane" }} className="hover:text-brand transition">Banane</Link></li>
            <li><Link to="/sorte/$slug" params={{ slug: "kiwi" }} className="hover:text-brand transition">Kiwi</Link></li>
            <li><Link to="/sorte/$slug" params={{ slug: "apfel" }} className="hover:text-brand transition">Apfel</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground font-semibold mb-4">Unternehmen</p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/team" className="hover:text-brand transition">Team</Link></li>
            <li><Link to="/nachhaltigkeit" className="hover:text-brand transition">Bio und Handgemacht</Link></li>
            <li><Link to="/herstellung" className="hover:text-brand transition">Herstellung</Link></li>
            <li><Link to="/kontakt" className="hover:text-brand transition">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground font-semibold mb-4">Kontakt</p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <a href="mailto:frulicious@outlook.com" className="hover:text-brand transition">
                frulicious@outlook.com
              </a>
            </li>
            <li>Musterstrasse 1, 3000 Bern</li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end justify-between gap-6">
          <a
href="https://www.instagram.com/frulicious_official/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer external"
            aria-label="frulicious auf Instagram (öffnet in neuem Tab)"
            className="w-10 h-10 rounded-full border border-brand/30 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.75} />
          </a>
          <Link
            to="/impressum"
            className="rounded-full border border-brand/40 text-brand px-5 py-2 text-xs font-medium hover:bg-brand hover:text-white transition"
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
