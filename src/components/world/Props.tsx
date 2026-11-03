import type { ReactNode } from "react";

/** Code-drawn interior/exterior props in a soft 3/4 top-down view. Each has a base width in % of world width. */
export type PropKind =
  | "plant" | "tree" | "table" | "sofa" | "sofaSide" | "chair" | "lamp" | "counter" | "stage" | "speaker"
  | "fountain" | "bench" | "rack" | "shelf" | "rug" | "beanbag" | "window" | "bookshelf" | "light" | "stool" | "flowerbed" | "sign";

export type Prop = { kind: PropKind; x: number; y: number; s?: number; c?: string; label?: string };

const W: Record<PropKind, number> = {
  plant: 7, tree: 20, table: 12, sofa: 22, sofaSide: 9, chair: 6, lamp: 4, counter: 46, stage: 70, speaker: 8,
  fountain: 30, bench: 14, rack: 18, shelf: 18, rug: 34, beanbag: 10, window: 22, bookshelf: 16, light: 26, stool: 5, flowerbed: 18, sign: 20,
};
export const FLAT: PropKind[] = ["rug", "light"];

function Svg({ vb, children }: { vb: string; children: ReactNode }) {
  return <svg viewBox={vb} className="block h-auto w-full overflow-visible" aria-hidden>{children}</svg>;
}

export function PropArt({ p }: { p: Prop }) {
  const c = p.c;
  switch (p.kind) {
    case "plant":
      return <Svg vb="0 0 40 60"><g className="sway"><ellipse cx="20" cy="22" rx="8" ry="16" fill="var(--leaf-2)" transform="rotate(-25 20 30)" /><ellipse cx="20" cy="22" rx="8" ry="16" fill="var(--leaf-1)" transform="rotate(25 20 30)" /><ellipse cx="20" cy="18" rx="7" ry="15" fill="var(--leaf-3)" /></g><path d="M9 38 L31 38 L28 58 L12 58 Z" fill="var(--pot)" /><rect x="8" y="36" width="24" height="5" rx="2" fill="var(--pot-rim)" /></Svg>;
    case "tree":
      return <Svg vb="0 0 100 130"><rect x="44" y="70" width="12" height="55" rx="4" fill="var(--trunk)" /><g className="sway"><circle cx="50" cy="45" r="34" fill="var(--leaf-2)" /><circle cx="30" cy="58" r="22" fill="var(--leaf-1)" /><circle cx="70" cy="58" r="22" fill="var(--leaf-1)" /><circle cx="52" cy="32" r="20" fill="var(--leaf-3)" /></g><ellipse cx="50" cy="126" rx="26" ry="5" fill="var(--shade)" /></Svg>;
    case "table":
      return <Svg vb="0 0 60 50"><rect x="27" y="22" width="6" height="22" fill="var(--wood-d)" /><ellipse cx="30" cy="45" rx="12" ry="3.5" fill="var(--wood-d)" /><ellipse cx="30" cy="20" rx="28" ry="11" fill="var(--wood-d)" /><ellipse cx="30" cy="18" rx="28" ry="11" fill="var(--wood)" /><rect x="27" y="9" width="6" height="7" rx="1.5" fill="var(--candle)" /><ellipse className="flicker" cx="30" cy="7.5" rx="2" ry="3" fill="var(--flame)" /></Svg>;
    case "chair":
    case "stool":
      return <Svg vb="0 0 30 40"><rect x="6" y="18" width="3" height="20" fill="var(--wood-d)" /><rect x="21" y="18" width="3" height="20" fill="var(--wood-d)" /><ellipse cx="15" cy="17" rx="13" ry="6" fill={c ?? "var(--cushion)"} />{p.kind === "chair" && <rect x="3" y="0" width="24" height="14" rx="5" fill={c ?? "var(--cushion)"} />}</Svg>;
    case "sofa":
      return <Svg vb="0 0 110 50"><rect x="4" y="4" width="102" height="24" rx="10" fill={c ?? "var(--sofa-d)"} /><rect x="4" y="22" width="102" height="22" rx="8" fill={c ?? "var(--sofa)"} /><rect x="0" y="14" width="14" height="32" rx="6" fill={c ?? "var(--sofa-d)"} /><rect x="96" y="14" width="14" height="32" rx="6" fill={c ?? "var(--sofa-d)"} /><rect x="20" y="10" width="20" height="14" rx="5" fill="var(--pillow)" opacity=".9" /><rect x="70" y="10" width="20" height="14" rx="5" fill="var(--pillow-2)" opacity=".9" /></Svg>;
    case "sofaSide":
      return <Svg vb="0 0 40 70"><rect x="4" y="2" width="32" height="64" rx="10" fill={c ?? "var(--sofa)"} /><rect x="22" y="2" width="14" height="64" rx="7" fill={c ?? "var(--sofa-d)"} /></Svg>;
    case "beanbag":
      return <Svg vb="0 0 50 40"><ellipse cx="25" cy="26" rx="24" ry="13" fill={c ?? "var(--sofa)"} /><ellipse cx="25" cy="18" rx="17" ry="12" fill={c ?? "var(--sofa-d)"} /></Svg>;
    case "lamp":
      return <Svg vb="0 0 20 90"><rect x="9" y="16" width="2.5" height="70" fill="var(--metal)" /><ellipse cx="10" cy="87" rx="6" ry="2.5" fill="var(--metal)" /><path d="M2 18 L18 18 L14 4 L6 4 Z" fill="var(--shade-lamp)" /><circle className="flicker" cx="10" cy="20" r="3" fill="var(--flame)" /></Svg>;
    case "light":
      return <div className="lamp-pool aspect-[2/1] w-full rounded-[50%]" />;
    case "rug":
      return <div className="aspect-[2/1] w-full rounded-[50%] border-4" style={{ background: c ?? "var(--rug)", borderColor: "var(--rug-edge)" }} />;
    case "counter":
      return <Svg vb="0 0 230 70"><rect x="0" y="0" width="230" height="22" rx="5" fill="var(--counter-top)" /><rect x="0" y="18" width="230" height="48" rx="6" fill="var(--wood)" />{[20, 60, 100, 140, 180].map((x) => <rect key={x} x={x} y="26" width="30" height="34" rx="3" fill="var(--wood-d)" opacity=".5" />)}<rect x="30" y="-16" width="26" height="18" rx="3" fill="var(--metal)" /><rect x="150" y="-10" width="36" height="12" rx="6" fill="var(--glass-case)" /></Svg>;
    case "stage":
      return <Svg vb="0 0 350 160"><rect x="40" y="0" width="270" height="86" rx="6" fill="var(--screen-frame)" /><rect className="screen" x="48" y="7" width="254" height="72" rx="3" /><path d="M0 100 L350 100 L330 150 L20 150 Z" fill="var(--stage-front)" /><path d="M10 92 L340 92 L350 104 L0 104 Z" fill="var(--stage-top)" /><rect x="140" y="70" width="70" height="26" rx="4" fill="var(--dj)" /><circle cx="158" cy="80" r="6" fill="var(--metal)" /><circle cx="192" cy="80" r="6" fill="var(--metal)" /></Svg>;
    case "speaker":
      return <Svg vb="0 0 40 70"><rect x="2" y="2" width="36" height="66" rx="4" fill="var(--dj)" /><circle className="thump" cx="20" cy="46" r="11" fill="var(--metal)" /><circle cx="20" cy="18" r="6" fill="var(--metal)" /></Svg>;
    case "fountain":
      return <Svg vb="0 0 150 110"><ellipse cx="75" cy="78" rx="72" ry="28" fill="var(--stone-d)" /><ellipse cx="75" cy="72" rx="66" ry="24" fill="var(--stone)" /><ellipse className="water" cx="75" cy="72" rx="56" ry="18" /><rect x="68" y="28" width="14" height="44" rx="4" fill="var(--stone)" /><ellipse cx="75" cy="30" rx="22" ry="7" fill="var(--stone)" /><g className="spray"><path d="M75 26 Q60 10 52 34 M75 26 Q90 10 98 34 M75 26 L75 8" stroke="var(--water-hi)" strokeWidth="3" fill="none" strokeLinecap="round" /></g></Svg>;
    case "bench":
      return <Svg vb="0 0 70 34"><rect x="6" y="18" width="4" height="14" fill="var(--metal)" /><rect x="60" y="18" width="4" height="14" fill="var(--metal)" /><rect x="0" y="0" width="70" height="8" rx="3" fill="var(--wood-d)" /><rect x="0" y="12" width="70" height="9" rx="3" fill="var(--wood)" /></Svg>;
    case "rack":
      return <Svg vb="0 0 90 70"><rect x="4" y="4" width="3" height="64" fill="var(--metal)" /><rect x="83" y="4" width="3" height="64" fill="var(--metal)" /><rect x="2" y="4" width="86" height="3" fill="var(--metal)" />{["var(--merch-1)", "var(--merch-2)", "var(--merch-3)", "var(--merch-1)", "var(--merch-4)"].map((f, i) => <path key={i} className="sway" d={`M${12 + i * 14} 8 L${24 + i * 14} 8 L${27 + i * 14} 44 L${9 + i * 14} 44 Z`} fill={f} />)}</Svg>;
    case "shelf":
    case "bookshelf":
      return <Svg vb="0 0 90 80"><rect x="0" y="0" width="90" height="80" rx="4" fill="var(--wood-d)" />{[6, 32, 58].map((y) => <g key={y}><rect x="5" y={y} width="80" height="20" fill="var(--wood)" />{Array.from({ length: 6 }, (_, i) => <rect key={i} x={9 + i * 13} y={y + (p.kind === "bookshelf" ? 2 : 8)} width={p.kind === "bookshelf" ? 8 : 10} height={p.kind === "bookshelf" ? 18 : 12} rx="2" fill={`var(--merch-${(i + y) % 4 + 1})`} />)}</g>)}</Svg>;
    case "window":
      return <Svg vb="0 0 110 80"><rect x="0" y="0" width="110" height="80" rx="4" fill="var(--wall-trim)" /><rect x="6" y="6" width="98" height="68" fill="var(--sky)" /><circle cx="84" cy="22" r="7" fill="var(--moon)" />{[12, 28, 46, 62].map((x, i) => <rect key={x} x={x} y={36 - (i % 2) * 10} width="12" height={44 + (i % 2) * 10} fill="var(--city)" />)}<rect x="53" y="6" width="4" height="68" fill="var(--wall-trim)" /></Svg>;
    case "flowerbed":
      return <Svg vb="0 0 90 36"><rect x="0" y="12" width="90" height="22" rx="8" fill="var(--stone)" /><ellipse cx="45" cy="13" rx="42" ry="10" fill="var(--leaf-1)" />{[12, 26, 40, 54, 68, 80].map((x, i) => <circle key={x} className="sway" cx={x} cy={9 + (i % 2) * 4} r="4" fill={`var(--flower-${i % 3 + 1})`} />)}</Svg>;
    case "sign":
      return <div className="sign rounded-xl px-3 py-1 text-center font-display text-sm font-bold">{p.label}</div>;
  }
}

export function propWidth(p: Prop) {
  return W[p.kind] * (p.s ?? 1);
}
