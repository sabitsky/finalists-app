export function svgAvatar(seed: "a" | "b" | "c", title: string): string {
  const bg1 = seed === "a" ? "#E7E5FF" : seed === "b" ? "#E5F6FF" : "#FFF1E7";
  const bg2 = seed === "a" ? "#FDF2F8" : seed === "b" ? "#ECFDF5" : "#EEF2FF";
  const accent = seed === "a" ? "#7C3AED" : seed === "b" ? "#0EA5E9" : "#F97316";
  const initials = title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => (s[0] ? s[0].toUpperCase() : ""))
    .join("");

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${bg1}"/>
        <stop offset="1" stop-color="${bg2}"/>
      </linearGradient>
      <radialGradient id="r" cx="35%" cy="30%" r="70%">
        <stop offset="0" stop-color="white" stop-opacity="0.85"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="160" height="160" rx="28" fill="url(#g)"/>
    <circle cx="60" cy="62" r="44" fill="url(#r)"/>
    <circle cx="86" cy="78" r="52" fill="${accent}" opacity="0.10"/>
    <path d="M40 130c9-26 28-39 40-39s31 13 40 39" fill="${accent}" opacity="0.14"/>
    <circle cx="80" cy="66" r="26" fill="${accent}" opacity="0.18"/>
    <text x="80" y="94" font-family="Inter, system-ui, -apple-system" font-size="28" text-anchor="middle" fill="${accent}" opacity="0.78" font-weight="800">${initials}</text>
  </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
