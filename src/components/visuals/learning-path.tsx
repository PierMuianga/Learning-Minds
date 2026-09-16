type Props = { variant?: "light" | "dark"; compact?: boolean; className?: string };

export function LearningPath({ variant = "light", compact = false, className = "" }: Props) {
  const dark = variant === "dark";
  return (
    <svg className={`learning-path ${className}`} viewBox="0 0 620 300" role="img" aria-label="A connected learning path with completed, current and upcoming topics">
      <defs>
        <linearGradient id={`path-${variant}`} x1="0" x2="1">
          <stop stopColor={dark ? "#F5C451" : "#315fef"} />
          <stop offset="1" stopColor={dark ? "#83d5b1" : "#2e7657"} />
        </linearGradient>
        <filter id="node-glow"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>
      <path className="path-guide" d="M35 220 C105 220 102 92 180 92 S260 235 338 208 S420 72 486 100 S535 205 590 170" fill="none" stroke={dark ? "#fff" : "#102e26"} strokeOpacity={dark ? ".18" : ".14"} strokeWidth="2" strokeDasharray="7 9" />
      <path className="path-progress" d="M35 220 C105 220 102 92 180 92 S260 235 338 208" fill="none" stroke={`url(#path-${variant})`} strokeWidth="4" strokeLinecap="round" />
      <circle cx="35" cy="220" r="9" fill={dark ? "#F5C451" : "#315fef"}/>
      <circle cx="180" cy="92" r="15" fill={dark ? "#102e26" : "#fffdf8"} stroke={dark ? "#F5C451" : "#315fef"} strokeWidth="4"/>
      <circle className="node-pulse" cx="338" cy="208" r="25" fill={dark ? "#83d5b1" : "#d9efe3"} opacity=".25" filter="url(#node-glow)"/>
      <circle cx="338" cy="208" r="13" fill={dark ? "#83d5b1" : "#2e7657"}/>
      <circle cx="486" cy="100" r="10" fill={dark ? "#102e26" : "#f7f3e8"} stroke={dark ? "#fff" : "#102e26"} strokeOpacity=".45" strokeWidth="2"/>
      <path d="m590 155 4.6 9.4 10.4 1.5-7.5 7.3 1.8 10.3-9.3-4.9-9.3 4.9 1.8-10.3-7.5-7.3 10.4-1.5z" fill={dark ? "#F5C451" : "#f5c451"}/>
      {!compact && <>
        <text x="22" y="250">START</text><text x="149" y="61">FOUNDATION</text><text x="309" y="246">CURRENT</text><text x="462" y="72">NEXT</text>
        <text className="path-glyph" x="225" y="65">π</text><text className="path-glyph" x="415" y="230">∑</text>
      </>}
    </svg>
  );
}

