const bottleColors = {
  white: "#dcc850",
  red: "#bf3a4a",
  rose: "#d4788e",
};

export function BottleIcon({ variant = "white" }) {
  const color = bottleColors[variant] ?? bottleColors.white;

  return (
    <svg viewBox="0 0 40 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="wine-card-icon mb-2 h-auto w-10 shrink-0" aria-hidden="true">
      <rect x="15" y="2" width="10" height="5" rx="2" fill={color} opacity="0.9" />
      <path
        d="M8 76 L32 76 L32 34 Q32 22 25 20 L25 8 L27 6 L13 6 L15 8 L15 20 Q8 22 8 34 Z"
        fill={color}
        opacity="0.28"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <rect x="9" y="55" width="22" height="20" fill={color} opacity="0.3" />
      <rect x="11" y="36" width="18" height="16" rx="1.5" stroke={color} strokeWidth="1.2" opacity="0.7" />
      <path d="M12.5 34 L12.5 71" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}
