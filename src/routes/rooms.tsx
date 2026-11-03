import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { DoorOpen, Link2, Plus, X } from "lucide-react";
import { Scene, LOOKS } from "@/components/Scene";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/rooms")({
  validateSearch: (s: Record<string, unknown>) => ({ r: typeof s["r"] === "string" ? (s["r"] as string).slice(0, 30) : undefined }),
  head: () => pageHead("الصالات الخاصة", "أنشئ صالتك الخاصة وادعُ أصدقاءك إليها."),
  component: Rooms,
});

const KEY = "orbit-rooms";

function Rooms() {
  const { r } = Route.useSearch();
  const [rooms, setRooms] = useState<string[]>([]);
  const [open, setOpen] = useState(!r);
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try { setRooms(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { /* ignore */ }
  }, []);
  useEffect(() => { setOpen(!r); }, [r]);

  function create(e: FormEvent) {
    e.preventDefault();
    const n = name.trim().slice(0, 30);
    if (!n || rooms.includes(n)) return;
    const next = [n, ...rooms];
    setRooms(next); localStorage.setItem(KEY, JSON.stringify(next)); setName("");
  }
  async function invite() {
    await navigator.clipboard?.writeText(`${location.origin}/rooms?r=${encodeURIComponent(r ?? "")}`);
    setCopied(true); setTimeout(() => setCopied(false), 1800);
  }

  return (
    <Scene
      floor="carpet"
      props={[
        { kind: "bookshelf", x: 12, y: 22 }, { kind: "window", x: 50, y: 18 }, { kind: "plant", x: 88, y: 22 },
        { kind: "light", x: 40, y: 44 }, { kind: "beanbag", x: 30, y: 40 }, { kind: "beanbag", x: 56, y: 40, c: "oklch(0.85 0.04 80)" }, { kind: "table", x: 43, y: 46, s: 0.8 },
        { kind: "rug", x: 70, y: 66 }, { kind: "sofaSide", x: 92, y: 66 }, { kind: "table", x: 72, y: 68 },
        { kind: "lamp", x: 6, y: 56 }, { kind: "beanbag", x: 20, y: 80 }, { kind: "plant", x: 92, y: 92 },
      ]}
      title={r ? `صالة ${r}` : "الصالات"}
      walk={{ minY: 36, maxY: 94 }}
      npcs={r ? [
        { look: LOOKS.girl, x: 64, y: 48, msg: "نورت الصالة 💜" },
        { look: LOOKS.girl2, x: 36, y: 62, msg: "🎶" },
      ] : []}
      hotspots={[{ x: 50, y: 97, to: "/", label: "⭐ الساحة" }]}
    >
      <div className="absolute left-1/2 top-[20%] z-[1700] flex -translate-x-1/2 gap-2">
        <button onClick={() => setOpen(true)} className="neon-chip flex items-center gap-1"><DoorOpen className="size-4" /> صالاتي</button>
        {r && <button onClick={invite} className="neon-chip flex items-center gap-1"><Link2 className="size-4" /> {copied ? "تم النسخ ✓" : "ادعُ أصدقاءك"}</button>}
      </div>
      {open && (
        <div className="absolute inset-0 z-[3000] flex items-end bg-night/70 backdrop-blur-sm" onClick={() => r && setOpen(false)}>
          <div dir="rtl" className="neon-panel w-full rounded-t-3xl p-4" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold">🌙 الصالات الخاصة</h2>
              {r && <button aria-label="إغلاق" onClick={() => setOpen(false)}><X className="size-5" /></button>}
            </div>
            <form onSubmit={create} className="flex gap-2">
              <input value={name} onChange={(e) => setName(e.target.value)} maxLength={30} placeholder="اسم صالتك الجديدة" className="min-w-0 flex-1 rounded-xl bg-night/60 px-3 py-2 text-sm outline-none" />
              <button className="bg-neon-gradient flex items-center gap-1 rounded-xl px-3 text-sm font-bold"><Plus className="size-4" /> أنشئ</button>
            </form>
            <div className="mt-3 grid max-h-60 gap-2 overflow-y-auto">
              {rooms.length === 0 && <p className="text-center text-xs opacity-70">لا توجد صالات بعد. أنشئ أول صالة لك!</p>}
              {rooms.map((n) => (
                <Link key={n} to="/rooms" search={{ r: n }} className="place-card flex items-center justify-between rounded-2xl px-3 py-2">
                  <span className="font-bold">{n}</span><span className="text-xs opacity-80">ادخل ←</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </Scene>
  );
}
