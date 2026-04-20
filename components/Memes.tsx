/* minimal white-stroke line-art wojak + pepe. decorative only. */

export function Wojak({ className = "", size = 72 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 100 110"
      width={size}
      height={(size * 110) / 100}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* wispy hair */}
      <path d="M22 26 Q24 14 34 12" />
      <path d="M34 12 Q42 6 55 10" />
      <path d="M55 10 Q68 8 74 22" />
      <path d="M74 22 Q80 36 78 54" />
      {/* head */}
      <path d="M22 26 Q18 46 24 66 Q30 92 50 98 Q72 94 78 66" />
      {/* left eye */}
      <ellipse cx="38" cy="52" rx="4.5" ry="3" />
      <circle cx="38" cy="52" r="1.1" fill="currentColor" />
      {/* right eye */}
      <ellipse cx="62" cy="52" rx="4.5" ry="3" />
      <circle cx="62" cy="52" r="1.1" fill="currentColor" />
      {/* brows - slight sad slope */}
      <path d="M31 44 L45 46" />
      <path d="M69 44 L55 46" />
      {/* nose */}
      <path d="M50 56 L46 70 Q50 72 54 70" />
      {/* frown */}
      <path d="M40 82 Q50 78 60 82" />
      {/* cheek line */}
      <path d="M28 70 Q30 76 34 78" opacity="0.6" />
    </svg>
  );
}

export function Pepe({ className = "", size = 72 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* head */}
      <path d="M12 46 Q10 30 24 22 Q38 14 50 14 Q64 14 76 22 Q90 30 88 48 Q88 68 76 80 Q60 92 50 92 Q36 92 22 82 Q12 72 12 46 Z" />
      {/* left eye socket */}
      <path d="M26 32 Q22 24 32 22 Q42 22 42 34 Q42 42 34 42 Q26 42 26 32 Z" />
      {/* right eye socket */}
      <path d="M58 22 Q68 22 74 32 Q74 42 66 42 Q58 42 58 34 Q58 26 58 22 Z" />
      {/* pupils */}
      <circle cx="34" cy="33" r="1.5" fill="currentColor" />
      <circle cx="66" cy="33" r="1.5" fill="currentColor" />
      {/* smug mouth */}
      <path d="M24 60 Q40 74 62 70 Q74 68 78 60" />
      <path d="M76 60 Q72 64 66 64" />
      {/* chin line */}
      <path d="M34 72 Q44 78 56 76" opacity="0.5" />
    </svg>
  );
}

/* a simple ascii Tux penguin block */
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

export const MOTD_ASCII = String.raw` _____  ______ __     __  ____   _____   _____
|  __ \|  ____|\ \   / / / __ \ |  __ \ / ____|
| |  | | |__    \ \_/ / | |  | || |__) | (___
| |  | |  __|    \   /  | |  | ||  ___/ \___ \
| |__| | |____    | |   | |__| || |     ____) |
|_____/|______|   |_|    \____/ |_|    |_____/
`;
