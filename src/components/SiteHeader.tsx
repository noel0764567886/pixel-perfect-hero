import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-7xl px-6 lg:px-10 pt-8 flex items-center justify-between">
      <Link to="/" className="font-display italic text-3xl font-bold text-brand tracking-tight">
        frulicious
      </Link>
      <nav className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
        <Link to="/sorten" className="hover:text-brand transition [&.active]:text-brand">Sorten</Link>
        <a href="#herstellung" className="hover:text-brand transition">Herstellung</a>
        <a href="#team" className="hover:text-brand transition">Team</a>
        <a href="#nachhaltigkeit" className="hover:text-brand transition">Nachhaltigkeit</a>
        <a href="#kontakt" className="hover:text-brand transition">Kontakt</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-brand text-white px-6 py-2.5 text-sm font-medium hover:bg-brand/90 transition shadow-sm">
          Jetzt bestellen
        </button>
        <button aria-label="Warenkorb" className="text-foreground/80 hover:text-brand transition">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}
