export type Look = {
  skin: string;
  hair: string;
  hairStyle: "short" | "long" | "bob";
  top: string;
  bottom: string;
  shoes: string;
  skirt?: boolean;
  headphones?: string;
};

export const LOOKS = {
  me: { skin: "#f2c7a5", hair: "#2a1d1a", hairStyle: "short", top: "#2b2b35", bottom: "#3b3346", shoes: "#f4f1ee" },
  girl: { skin: "#f5cfb3", hair: "#6b4330", hairStyle: "long", top: "#f3a6c0", bottom: "#6e8fc7", shoes: "#f4f1ee" },
  girl2: { skin: "#efc3a1", hair: "#1f1a24", hairStyle: "long", top: "#26222e", bottom: "#26222e", shoes: "#1f1c25", skirt: true, headphones: "#b9a6e8" },
  boy: { skin: "#e6b994", hair: "#3a2a22", hairStyle: "short", top: "#e9e6ef", bottom: "#4c5f86", shoes: "#2b2b35" },
  bob: { skin: "#f5d2b8", hair: "#c26a4a", hairStyle: "bob", top: "#8fc4a8", bottom: "#f1e6d2", shoes: "#c26a4a", skirt: true },
  boy2: { skin: "#c99572", hair: "#16120f", hairStyle: "short", top: "#e8b35a", bottom: "#2f2f3a", shoes: "#f4f1ee" },
} satisfies Record<string, Look>;

/** Code-drawn chibi character. Legs swing while walking, body breathes while idle. */
export function Chibi({ look, walking, className, style }: { look: Look; walking?: boolean; className?: string; style?: React.CSSProperties }) {
  const l = look;
  return (
    <svg viewBox="0 0 60 100" className={`${walking ? "chibi-walk" : "chibi-idle"} ${className ?? ""}`} style={style} aria-hidden>
      {/* legs */}
      <g className="leg-l"><rect x="22" y="64" width="7" height="24" rx="3" fill={l.bottom} /><rect x="20" y="85" width="10" height="6" rx="3" fill={l.shoes} /></g>
      <g className="leg-r"><rect x="31" y="64" width="7" height="24" rx="3" fill={l.bottom} /><rect x="30" y="85" width="10" height="6" rx="3" fill={l.shoes} /></g>
      <g className="body">
        {/* arms */}
        <g className="arm-l"><rect x="13" y="47" width="6" height="18" rx="3" fill={l.top} /><circle cx="16" cy="65" r="3" fill={l.skin} /></g>
        <g className="arm-r"><rect x="41" y="47" width="6" height="18" rx="3" fill={l.top} /><circle cx="44" cy="65" r="3" fill={l.skin} /></g>
        {/* torso */}
        <rect x="18" y="45" width="24" height="23" rx="7" fill={l.top} />
        {l.skirt && <path d="M17 62 L43 62 L46 73 L14 73 Z" fill={l.bottom} />}
        {/* back hair */}
        {l.hairStyle === "long" && <path d="M10 28 Q10 8 30 7 Q50 8 50 28 L52 56 Q30 62 8 56 Z" fill={l.hair} />}
        {/* head */}
        <rect x="27" y="40" width="6" height="6" fill={l.skin} />
        <ellipse cx="30" cy="27" rx="17" ry="16" fill={l.skin} />
        <ellipse cx="23.5" cy="29" rx="2" ry="2.6" fill="#2a2030" />
        <ellipse cx="36.5" cy="29" rx="2" ry="2.6" fill="#2a2030" />
        <circle cx="24.2" cy="28" r="0.8" fill="#fff" />
        <circle cx="37.2" cy="28" r="0.8" fill="#fff" />
        <ellipse cx="20" cy="34" rx="2.6" ry="1.4" fill="#f29a9a" opacity=".45" />
        <ellipse cx="40" cy="34" rx="2.6" ry="1.4" fill="#f29a9a" opacity=".45" />
        <path d="M27.5 36 Q30 38 32.5 36" stroke="#8a4a4a" strokeWidth="1.1" fill="none" strokeLinecap="round" />
        {/* front hair */}
        {l.hairStyle === "short" && <path d="M12 26 Q11 8 30 8 Q49 8 48 26 Q44 17 37 16 Q33 21 25 18 Q18 19 12 26 Z" fill={l.hair} />}
        {l.hairStyle === "long" && <path d="M13 26 Q13 9 30 9 Q47 9 47 26 Q41 15 30 17 Q20 15 13 26 Z" fill={l.hair} />}
        {l.hairStyle === "bob" && <path d="M11 38 Q8 9 30 8 Q52 9 49 38 L45 38 Q46 22 40 18 Q30 22 18 18 Q14 24 15 38 Z" fill={l.hair} />}
        {l.headphones && <><path d="M12 26 Q12 6 30 6 Q48 6 48 26" stroke={l.headphones} strokeWidth="2.5" fill="none" /><rect x="9" y="23" width="6" height="10" rx="3" fill={l.headphones} /><rect x="45" y="23" width="6" height="10" rx="3" fill={l.headphones} /></>}
      </g>
    </svg>
  );
}
