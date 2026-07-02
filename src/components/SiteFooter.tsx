import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Music2 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.965_0.015_20)] border-t border-brand/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2 md:col-span-2 flex flex-col justify-between">
          <Link to="/" className="font-display italic text-3xl font-bold text-brand tracking-tight">
            frulicious
          </Link>
          <p className="mt-6 text-xs text-foreground/60">
            © 2025 Frulicious. Alle Rechte vorbehalten.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground font-semibold mb-4">Shop</p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/sorten-detail" hash="banane" className="hover:text-brand transition">Banane</Link></li>
            <li><Link to="/sorten-detail" hash="kiwi" className="hover:text-brand transition">Kiwi</Link></li>
            <li><Link to="/sorten-detail" hash="apfel" className="hover:text-brand transition">Apfel</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground font-semibold mb-4">Unternehmen</p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><a href="#team" className="hover:text-brand transition">Team</a></li>
            <li><a href="#nachhaltigkeit" className="hover:text-brand transition">Nachhaltigkeit</a></li>
            <li><Link to="/herstellung" className="hover:text-brand transition">Herstellung</Link></li>
            <li><a href="#kontakt" className="hover:text-brand transition">Kontakt</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-foreground font-semibold mb-4">Kontakt</p>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>Frulicious@outlook.com</li>
            <li>Musterstrasse 1, 3000 Bern</li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end justify-between">
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-brand/30 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition">
              <Instagram className="w-4 h-4" strokeWidth={1.75} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-brand/30 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition">
              <Facebook className="w-4 h-4" strokeWidth={1.75} />
            </a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full border border-brand/30 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition">
              <Music2 className="w-4 h-4" strokeWidth={1.75} />
            </a>
          </div>
          <p className="mt-6 text-xs text-foreground/60">
            Design zum Selbst-Anpassen<br />
            <a href="#" className="underline text-foreground">frulidesign</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
