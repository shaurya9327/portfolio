/* ASCII art + SVG meme components. */

export const TUX_ASCII = String.raw`        .--"""--.
       /_       _\
      // \     / \\
      |\__\   /__/|
       \    Y    /
       /'---'---'\
      /           \
     (  .-""-.   )
     |  |    |   |
     |  |    |   |
      \  \__/   /
       '.____.'
`;

/* Happy Wojak — clean SVG outline drawn to resemble the imgflip meme.
   White stroke, solid eyes. Scales crisply at any size. */
export function HappyWojak({
  size = 80,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 180"
      width={size}
      height={(size * 180) / 160}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Happy Wojak"
      role="img"
    >
      {/* wispy hair strokes */}
      <path d="M38 32 Q40 14 50 10" />
      <path d="M55 10 Q62 2 72 6" />
      <path d="M78 6 Q88 2 96 10" />
      <path d="M100 10 Q112 14 118 30" />

      {/* egg-shaped head */}
      <path d="M30 40 Q22 74 30 108 Q42 150 80 156 Q118 150 130 108 Q138 74 130 40 Q112 22 80 22 Q48 22 30 40 Z" />

      {/* eyes — solid filled dots (classic wojak) */}
      <circle cx="58" cy="72" r="5" fill="currentColor" stroke="none" />
      <circle cx="102" cy="72" r="5" fill="currentColor" stroke="none" />

      {/* slight brows — relaxed happy */}
      <path d="M48 60 Q58 54 68 60" />
      <path d="M92 60 Q102 54 112 60" />

      {/* big open happy smile (upper curve + lower lip line) */}
      <path d="M46 108 Q80 146 114 108" />
      <path d="M52 112 Q80 124 108 112" />
    </svg>
  );
}

/* Keep the string constant name around for any old imports. */
export const HAPPY_WOJAK = "";
