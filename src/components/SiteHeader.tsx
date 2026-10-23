import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/frulicious-logo.png";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen]);

  const navLinks = (
    <>
      <Link
        to="/sorten"
        onClick={() => setMobileOpen(false)}
        className="py-2 hover:text-primary transition [&.active]:text-primary [&.active]:underline underline-offset-8 decoration-rose-accent"
        activeProps={{ "aria-current": "page" }}
      >
        Sorten
      </Link>
      <Link
        to="/herstellung"
        onClick={() => setMobileOpen(false)}
        className="py-2 hover:text-primary transition [&.active]:text-primary [&.active]:underline underline-offset-8 decoration-rose-accent"
        activeProps={{ "aria-current": "page" }}
      >
        Herstellung
      </Link>
      <Link
        to="/team"
        onClick={() => setMobileOpen(false)}
        className="py-2 hover:text-primary transition [&.active]:text-primary [&.active]:underline underline-offset-8 decoration-rose-accent"
        activeProps={{ "aria-current": "page" }}
      >
        Team
      </Link>
      <Link
        to="/nachhaltigkeit"
        onClick={() => setMobileOpen(false)}
        className="py-2 hover:text-primary transition [&.active]:text-primary [&.active]:underline underline-offset-8 decoration-rose-accent"
        activeProps={{ "aria-current": "page" }}
      >
        Was Frulicious besonders macht
      </Link>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <header
        ref={headerRef}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-4 sm:py-5 flex items-center justify-between gap-4"
      >
        <Link to="/" className="shrink-0" aria-label="frulicious Startseite">
          <img src={logo} alt="frulicious Logo" className="h-12 sm:h-14 w-auto" />
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden lg:flex items-center gap-5 text-sm text-foreground/80"
        >
          {navLinks}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <button
            type="button"
            aria-label={mobileOpen ? "Menü schliessen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-foreground/80 hover:text-primary transition"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            className="absolute top-full left-0 right-0 mt-1 mx-4 sm:mx-6 max-h-[calc(100dvh-7rem)] overflow-y-auto bg-card rounded-3xl shadow-xl border border-brand/10 p-6 flex flex-col gap-2 text-base text-foreground/80 lg:hidden z-50"
          >
            {navLinks}
          </nav>
        )}
      </header>
    </div>
  );
}
