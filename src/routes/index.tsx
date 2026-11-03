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
      walk={{ minY: 30, maxY: 88 }}
      npcs={[
        { src: SPRITES.girl2, x: 30, y: 40, msg: "أهلاً! 👋" },
        { src: SPRITES.girl, x: 70, y: 42, msg: "يلا المسرح 🎤" },
        { src: SPRITES.boy, x: 26, y: 62, msg: "😍" },
        { src: SPRITES.girl, x: 74, y: 64, msg: "💜" },
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
