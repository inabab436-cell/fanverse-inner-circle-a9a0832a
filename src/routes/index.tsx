import { createFileRoute } from "@tanstack/react-router";
import { Scene, SPRITES } from "@/components/Scene";
import { pageHead } from "@/lib/head";
import bg from "@/assets/bg-plaza.jpg";

export const Route = createFileRoute("/")({
  head: () => pageHead("الساحة الرئيسية", "نقطة دخول الفانز والتجمع العام في عالم Orbit."),
  component: () => (
    <Scene
      bg={bg}
      title="الساحة"
      start={{ x: 50, y: 72 }}
      walk={{ minY: 34, maxY: 92 }}
      npcs={[
        { src: SPRITES.girl2, x: 30, y: 40, msg: "أهلاً! 👋" },
        { src: SPRITES.girl, x: 70, y: 42, msg: "يلا المسرح 🎤" },
        { src: SPRITES.boy3, x: 26, y: 62, msg: "😍" },
        { src: SPRITES.girl3, x: 74, y: 64, msg: "💜" },
      ]}
      lights={[
        { x: 10, y: 14, s: 14, kind: "lamp" }, { x: 29, y: 21, s: 8, kind: "lamp" }, { x: 46, y: 39, s: 6, kind: "lamp" },
        { x: 9, y: 40, s: 6, kind: "lamp" }, { x: 17, y: 56, s: 7, kind: "lamp" }, { x: 39, y: 66, s: 6, kind: "lamp" },
        { x: 61, y: 68, s: 6, kind: "lamp" }, { x: 85, y: 69, s: 7, kind: "lamp" }, { x: 82, y: 81, s: 6, kind: "lamp" },
        { x: 64, y: 10, s: 10, kind: "spot" }, { x: 78, y: 11, s: 10, kind: "spot" }, { x: 88, y: 14, s: 10, kind: "spot" },
        { x: 40, y: 82, s: 14, kind: "floor" }, { x: 55, y: 88, s: 14, kind: "floor" }, { x: 65, y: 80, s: 12, kind: "floor" },
      ]}
      hotspots={[
        { x: 18, y: 26, to: "/cafe", label: "☕ المقهى" },
        { x: 80, y: 24, to: "/concert", label: "🎤 المسرح" },
        { x: 14, y: 74, to: "/shop", label: "🛍️ المتجر" },
        { x: 86, y: 70, to: "/rooms", label: "🌙 الصالات" },
      ]}
    />
  ),
});
