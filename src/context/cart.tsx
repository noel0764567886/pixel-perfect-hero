import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  weight: string;
  image?: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartCtx | null>(null);

const STORAGE_KEY = "frulicious-cart";
const MAX_QTY = 20;

/** Gespeicherte Warenkorbdaten sind nicht vertrauenswürdig – strikt prüfen. */
function sanitize(raw: unknown): CartItem[] {
  if (!Array.isArray(raw)) return [];
  const items: CartItem[] = [];
  for (const entry of raw.slice(0, 50)) {
    if (!entry || typeof entry !== "object") continue;
    const e = entry as Record<string, unknown>;
    const id = typeof e.id === "string" ? e.id.slice(0, 64) : null;
    const name = typeof e.name === "string" ? e.name.slice(0, 120) : null;
    const price = typeof e.price === "number" && Number.isFinite(e.price) && e.price >= 0 ? e.price : null;
    const qty = typeof e.qty === "number" && Number.isFinite(e.qty) ? Math.min(MAX_QTY, Math.max(1, Math.round(e.qty))) : null;
    if (!id || !name || price === null || qty === null) continue;
    const weight = typeof e.weight === "string" ? e.weight.slice(0, 40) : "";
    const image =
      typeof e.image === "string" && /^(\/|https?:\/\/|data:image\/)/.test(e.image) ? e.image : undefined;
    if (items.some((i) => i.id === id)) continue;
    items.push({ id, name, price, weight, image, qty });
  }
  return items;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setItems(sanitize(JSON.parse(raw)));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const value = useMemo<CartCtx>(() => {
    const clampQty = (n: number) => Math.min(MAX_QTY, Math.max(0, Math.round(n)));
    return {
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: items.reduce((n, i) => n + i.qty * i.price, 0),
      isOpen,
      openCart: () => setOpen(true),
      closeCart: () => setOpen(false),
      addItem: (item, qty = 1) => {
        const add = clampQty(qty) || 1;
        setItems((prev) => {
          const found = prev.find((p) => p.id === item.id);
          if (found) {
            return prev.map((p) => (p.id === item.id ? { ...p, qty: clampQty(p.qty + add) } : p));
          }
          return [...prev, { ...item, qty: add }];
        });
        setOpen(true);
      },
      removeItem: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
      updateQty: (id, qty) => {
        const next = clampQty(qty);
        setItems((prev) =>
          next <= 0 ? prev.filter((p) => p.id !== id) : prev.map((p) => (p.id === id ? { ...p, qty: next } : p)),
        );
      },
      clear: () => setItems([]),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
