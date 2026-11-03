import { createFileRoute } from "@tanstack/react-router";
import { Scene } from "@/components/Scene";
import { LOOKS } from "@/components/world/Chibi";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/cafe")({
  head: () => pageHead("المقهى", "للتعارف والمحادثات والجلوس مع الفانز."),
  component: () => (
    <Scene
      floor="iso"
      props={[
        { kind: "window", x: 14, y: 18, s: 0.8 }, { kind: "sign", x: 50, y: 8, label: "Cafe ☕" }, { kind: "window", x: 86, y: 18, s: 0.8 },
        { kind: "counter", x: 50, y: 30 }, { kind: "stool", x: 36, y: 36 }, { kind: "stool", x: 46, y: 36 }, { kind: "stool", x: 56, y: 36 }, { kind: "stool", x: 66, y: 36 },
        { kind: "plant", x: 6, y: 30 }, { kind: "plant", x: 94, y: 30 },
        { kind: "light", x: 22, y: 52 }, { kind: "chair", x: 15, y: 50 }, { kind: "table", x: 22, y: 54 }, { kind: "chair", x: 30, y: 58 },
        { kind: "light", x: 78, y: 52 }, { kind: "chair", x: 71, y: 50 }, { kind: "table", x: 78, y: 54 }, { kind: "chair", x: 86, y: 58 },
        { kind: "rug", x: 50, y: 72, s: 1.1 }, { kind: "sofa", x: 50, y: 70 }, { kind: "table", x: 50, y: 78 },
        { kind: "sofaSide", x: 8, y: 80 }, { kind: "table", x: 18, y: 82 }, { kind: "lamp", x: 6, y: 66 },
        { kind: "speaker", x: 92, y: 74 }, { kind: "rug", x: 82, y: 84, c: "oklch(0.6 0.1 330 / .35)" },
        { kind: "plant", x: 34, y: 96 }, { kind: "plant", x: 66, y: 96 },
      ]}
      title="المقهى"
      walk={{ minY: 40, maxY: 94 }}
      npcs={[
        { look: LOOKS.girl2, x: 40, y: 46, msg: "Let's dance! 🎉" },
        { look: LOOKS.girl, x: 60, y: 48, msg: "Hello! 💜" },
        { look: LOOKS.boy, x: 26, y: 64, msg: "قهوة؟ ☕" },
        { look: LOOKS.bob, x: 80, y: 86, msg: "🎶" },
        { look: LOOKS.boy2, x: 60, y: 88, msg: "..." },
      ]}
      hotspots={[{ x: 50, y: 97, to: "/", label: "⭐ الساحة" }]}
    />
  ),
});
