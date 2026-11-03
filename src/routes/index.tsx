import { createFileRoute } from "@tanstack/react-router";
import { Scene } from "@/components/Scene";
import { LOOKS } from "@/components/world/Chibi";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/")({
  head: () => pageHead("الساحة الرئيسية", "نقطة دخول الفانز والتجمع العام في عالم Orbit."),
  component: () => (
    <Scene
      floor="stone"
      wall={10}
      props={[
        { kind: "tree", x: 8, y: 22 }, { kind: "tree", x: 94, y: 30, s: 0.9 }, { kind: "tree", x: 6, y: 62, s: 1.1 }, { kind: "tree", x: 95, y: 72 },
        { kind: "sign", x: 20, y: 16, label: "☕ Cafe" }, { kind: "counter", x: 22, y: 26, s: 0.6 },
        { kind: "stage", x: 76, y: 28, s: 0.5 }, { kind: "speaker", x: 56, y: 27, s: 0.8 }, { kind: "speaker", x: 96, y: 27, s: 0.8 },
        { kind: "light", x: 50, y: 52 }, { kind: "fountain", x: 50, y: 58 },
        { kind: "flowerbed", x: 30, y: 46 }, { kind: "flowerbed", x: 70, y: 46 },
        { kind: "bench", x: 26, y: 66 }, { kind: "bench", x: 74, y: 66 },
        { kind: "lamp", x: 36, y: 38 }, { kind: "lamp", x: 64, y: 38 }, { kind: "lamp", x: 36, y: 78 }, { kind: "lamp", x: 64, y: 78 },
        { kind: "rack", x: 18, y: 88, s: 0.8 }, { kind: "sign", x: 18, y: 78, label: "🛍️ Shop" },
        { kind: "sofa", x: 82, y: 90, s: 0.7 }, { kind: "sign", x: 82, y: 80, label: "🌙 Lounge" },
        { kind: "plant", x: 44, y: 94 }, { kind: "plant", x: 56, y: 94 },
      ]}
      title="الساحة"
      start={{ x: 50, y: 74 }}
      walk={{ minY: 34, maxY: 96 }}
      npcs={[
        { look: LOOKS.girl2, x: 40, y: 42, msg: "أهلاً! 👋" },
        { look: LOOKS.girl, x: 64, y: 40, msg: "يلا المسرح 🎤" },
        { look: LOOKS.boy, x: 30, y: 72, msg: "😍" },
        { look: LOOKS.bob, x: 70, y: 74, msg: "💜" },
        { look: LOOKS.boy2, x: 80, y: 40, msg: "🎶" },
      ]}
      hotspots={[
        { x: 22, y: 32, to: "/cafe", label: "☕ المقهى" },
        { x: 76, y: 33, to: "/concert", label: "🎤 المسرح" },
        { x: 18, y: 93, to: "/shop", label: "🛍️ المتجر" },
        { x: 82, y: 95, to: "/rooms", label: "🌙 الصالات" },
      ]}
    />
  ),
});
