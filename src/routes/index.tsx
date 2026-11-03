import { createFileRoute } from "@tanstack/react-router";
import { Scene } from "@/components/Scene";
import { LOOKS } from "@/components/world/Chibi";
import { pageHead } from "@/lib/head";

export const Route = createFileRoute("/")({
  head: () => pageHead("الساحة الرئيسية", "نقطة دخول الفانز والتجمع العام في عالم Orbit."),
  component: () => (
    <Scene
      floor="iso"
      wall={18}
      props={[
        // cafe corner (top-left)
        { kind: "window", x: 38, y: 12, s: 0.8 }, { kind: "neon", x: 18, y: 9, label: "Cafe" },
        { kind: "shelf", x: 14, y: 17, s: 0.8 }, { kind: "counter", x: 20, y: 27, s: 0.75 },
        { kind: "stool", x: 12, y: 31 }, { kind: "stool", x: 19, y: 31 }, { kind: "stool", x: 26, y: 31 },
        { kind: "plant", x: 4, y: 26 }, { kind: "plant", x: 38, y: 24 },
        // stage (top-right)
        { kind: "truss", x: 72, y: 6, s: 0.62 }, { kind: "stage", x: 72, y: 32, s: 0.62 },
        { kind: "speaker", x: 50, y: 31, s: 0.9 }, { kind: "speaker", x: 95, y: 31, s: 0.9 },
        { kind: "plant", x: 62, y: 40 }, { kind: "plant", x: 92, y: 42 },
        // cafe seating (left)
        { kind: "chair", x: 10, y: 44, c: "var(--sofa)" }, { kind: "table", x: 18, y: 47 }, { kind: "chair", x: 27, y: 50, c: "var(--sofa)" },
        { kind: "plant", x: 6, y: 58 }, { kind: "plant", x: 26, y: 62 },
        { kind: "chair", x: 10, y: 70, c: "var(--sofa)" }, { kind: "table", x: 18, y: 73 }, { kind: "chair", x: 27, y: 76, c: "var(--sofa)" },
        // lounge (right)
        { kind: "sofa", x: 80, y: 74, s: 0.9 }, { kind: "table", x: 80, y: 80, s: 0.8 }, { kind: "sofa", x: 80, y: 88, s: 0.9 },
        { kind: "plant", x: 96, y: 66 }, { kind: "plant", x: 95, y: 94 },
        // dance floor (bottom)
        { kind: "dance", x: 46, y: 88 },
        { kind: "railing", x: 12, y: 92 }, { kind: "plant", x: 4, y: 96 },
      ]}
      title="الساحة"
      start={{ x: 48, y: 62 }}
      walk={{ minY: 36, maxY: 96 }}
      npcs={[
        { look: LOOKS.boy2, x: 20, y: 22, msg: "☕" },
        { look: LOOKS.girl, x: 42, y: 42, msg: "Let's dance! 🎉" },
        { look: LOOKS.girl2, x: 54, y: 46, msg: "Hello! 💜" },
        { look: LOOKS.boy, x: 72, y: 54, msg: "😍" },
        { look: LOOKS.me, x: 82, y: 56, msg: "🎶" },
        { look: LOOKS.bob, x: 40, y: 88, msg: "🎵" },
        { look: LOOKS.boy2, x: 54, y: 92, msg: "👏" },
        { look: LOOKS.girl, x: 74, y: 84, msg: "💜" },
      ]}
      hotspots={[
        { x: 20, y: 36, to: "/cafe", label: "☕ المقهى" },
        { x: 72, y: 37, to: "/concert", label: "🎤 المسرح" },
        { x: 14, y: 85, to: "/shop", label: "🛍️ المتجر" },
        { x: 88, y: 64, to: "/rooms", label: "🌙 الصالات" },
      ]}
    />
  ),
});
