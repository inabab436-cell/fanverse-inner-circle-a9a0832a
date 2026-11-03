import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, X } from "lucide-react";
import { Scene } from "@/components/Scene";
import { LOOKS } from "@/components/world/Chibi";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/shop")({
  head: () => pageHead("المتجر", "تيشيرتات وهوديز وهدايا للفانز."),
  component: Shop,
});

const ITEMS = [
  { id: "tee", name: "تيشيرت الفانز", icon: "👕", price: 120 },
  { id: "hoodie", name: "هودي النجم", icon: "🧥", price: 250 },
  { id: "cap", name: "كاب", icon: "🧢", price: 80 },
  { id: "phones", name: "سماعات بنفسجي", icon: "🎧", price: 300 },
  { id: "vinyl", name: "أسطوانة", icon: "💿", price: 150 },
  { id: "gift", name: "هدية للفنان", icon: "🎁", price: 50 },
];
const KEY = "orbit-shop";

function Shop() {
  const [open, setOpen] = useState(false);
  const [coins, setCoins] = useState(500);
  const [owned, setOwned] = useState<string[]>([]);

  useEffect(() => {
    try {
      const s = JSON.parse(localStorage.getItem(KEY) || "null");
      if (s) { setCoins(s.coins); setOwned(s.owned); }
    } catch { /* ignore */ }
  }, []);

  function buy(id: string, price: number) {
    if (coins < price || owned.includes(id)) return;
    const next = { coins: coins - price, owned: [...owned, id] };
    setCoins(next.coins); setOwned(next.owned);
    localStorage.setItem(KEY, JSON.stringify(next));
  }

  return (
    <Scene
      floor="wood"
      props={[
        { kind: "shelf", x: 14, y: 22 }, { kind: "sign", x: 50, y: 8, label: "Merch 🛍️" }, { kind: "shelf", x: 86, y: 22 },
        { kind: "counter", x: 50, y: 30, s: 0.6 }, { kind: "plant", x: 28, y: 30 }, { kind: "plant", x: 72, y: 30 },
        { kind: "rack", x: 24, y: 52 }, { kind: "rack", x: 76, y: 52 },
        { kind: "rug", x: 50, y: 66, c: "oklch(0.75 0.06 160 / .4)" }, { kind: "table", x: 50, y: 68 },
        { kind: "rack", x: 22, y: 82 }, { kind: "shelf", x: 80, y: 84, s: 0.8 },
        { kind: "plant", x: 6, y: 60 }, { kind: "plant", x: 94, y: 60 }, { kind: "plant", x: 36, y: 97 }, { kind: "plant", x: 64, y: 97 },
      ]}
      title="المتجر"
      walk={{ minY: 40, maxY: 94 }}
      npcs={[
        { look: LOOKS.girl2, x: 34, y: 56, msg: "الهودي تحفة 😍" },
        { look: LOOKS.boy, x: 70, y: 70, msg: "🛍️" },
      ]}
      hotspots={[{ x: 50, y: 97, to: "/", label: "⭐ الساحة" }]}
    >
      <button onClick={() => setOpen(true)} className="neon-chip absolute left-1/2 top-[20%] z-[1700] flex -translate-x-1/2 items-center gap-1 animate-pulse-soft">
        <ShoppingBag className="size-4" /> تسوّق · 🪙 {coins}
      </button>
      {open && (
        <div className="absolute inset-0 z-[3000] flex items-end bg-night/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div dir="rtl" className="neon-panel w-full rounded-t-3xl p-4" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold">🛍️ المتجر</h2>
              <span className="text-sm font-bold text-neon-gold">🪙 {coins}</span>
              <button aria-label="إغلاق" onClick={() => setOpen(false)}><X className="size-5" /></button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {ITEMS.map((it) => {
                const has = owned.includes(it.id);
                return (
                  <button key={it.id} disabled={has || coins < it.price} onClick={() => buy(it.id, it.price)}
                    className="place-card flex flex-col items-center rounded-2xl p-2 disabled:opacity-60">
                    <span className="text-3xl">{it.icon}</span>
                    <span className="mt-1 text-[11px] font-bold">{it.name}</span>
                    <span className="text-[11px] text-neon-gold">{has ? "✓ عندك" : `🪙 ${it.price}`}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Scene>
  );
}
