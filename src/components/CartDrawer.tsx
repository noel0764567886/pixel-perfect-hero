import { Link } from "@tanstack/react-router";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/cart";
import { Minus, Plus, Trash2 } from "lucide-react";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, total, clear } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Warenkorb</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto mt-4 -mx-6 px-6">
          {items.length === 0 ? (
            <p className="text-sm text-foreground/60 mt-8">Dein Warenkorb ist leer.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((i) => (
                <li key={i.id} className="flex gap-3 items-center border-b border-border pb-4">
                  {i.image && (
                    <img src={i.image} alt={i.name} className="w-16 h-16 object-contain rounded-xl bg-brand-soft/40 shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{i.name}</p>
                    <p className="text-xs text-foreground/60">{i.weight} · CHF {i.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button aria-label="Weniger" onClick={() => updateQty(i.id, i.qty - 1)} className="w-7 h-7 rounded-full border border-brand/30 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{i.qty}</span>
                      <button aria-label="Mehr" onClick={() => updateQty(i.id, i.qty + 1)} className="w-7 h-7 rounded-full border border-brand/30 text-brand flex items-center justify-center hover:bg-brand hover:text-white transition">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button aria-label="Entfernen" onClick={() => removeItem(i.id)} className="text-foreground/50 hover:text-brand shrink-0">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-4 mt-4 space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-foreground/70">Total</span>
              <span className="font-display text-2xl text-brand">CHF {total.toFixed(2)}</span>
            </div>
            <Link
              to="/kasse"
              onClick={closeCart}
              className="block text-center w-full rounded-full bg-brand text-white px-6 py-3 text-sm font-medium hover:bg-brand/90 transition shadow-sm"
            >
              Zur Kasse
            </Link>
            <button onClick={clear} className="w-full text-xs text-foreground/60 hover:text-brand transition">
              Warenkorb leeren
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
