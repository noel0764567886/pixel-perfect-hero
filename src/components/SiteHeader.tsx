import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/cart";

export function SiteHeader() {
  const { openCart, count } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = (
    <>
      <Link to="/sorten" onClick={() => setMobileOpen(false)} className="hover:text-brand transition [&.active]:text-brand">Sorten</Link>
      <Link to="/herstellung" onClick={() => setMobileOpen(false)} className="hover:text-brand transition [&.active]:text-brand">Herstellung</Link>
      <Link to="/team" onClick={() => setMobileOpen(false)} className="hover:text-brand transition [&.active]:text-brand">Team</Link>
      <Link to="/nachhaltigkeit" onClick={() => setMobileOpen(false)} className="hover:text-brand transition [&.active]:text-brand">Nachhaltigkeit</Link>
      <Link to="/" hash="kontakt" onClick={() => setMobileOpen(false)} className="hover:text-brand transition">Kontakt</Link>
    </>
  );

  return (
    <header className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 flex items-center justify-between gap-4">
      <Link to="/" className="font-display italic text-2xl sm:text-3xl font-bold text-bordeaux tracking-tight shrink-0">
        frulicious
      </Link>
      <nav className="hidden lg:flex items-center gap-9 text-sm text-foreground/80">
        {navLinks}
      </nav>
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <Link to="/sorten-detail" className="hidden sm:inline-flex rounded-full bg-brand text-white px-5 sm:px-6 py-2.5 text-sm font-medium hover:bg-brand/90 transition shadow-sm">
          Jetzt bestellen
        </Link>
        <button aria-label="Warenkorb öffnen" onClick={openCart} className="relative text-foreground/80 hover:text-brand transition">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-brand text-white text-[10px] font-semibold flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
        <button
          aria-label="Menü öffnen"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden text-foreground/80 hover:text-brand transition"
        >
          {mobileOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 mx-4 sm:mx-6 bg-white rounded-2xl shadow-xl border border-brand/10 p-6 flex flex-col gap-4 text-base text-foreground/80 lg:hidden z-50">
          {navLinks}
          <Link to="/sorten-detail" onClick={() => setMobileOpen(false)} className="sm:hidden rounded-full bg-brand text-white px-6 py-2.5 text-sm font-medium text-center hover:bg-brand/90 transition mt-2">
            Jetzt bestellen
          </Link>
        </div>
      )}
    </header>
  );
}
