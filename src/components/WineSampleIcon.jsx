import { useId } from "react";

const GLASS_SHAPE = "M20 8c-1.4 9-2.6 20 1.8 31 2.5 6.5 5.9 9.4 10.2 9.4s7.7-2.9 10.2-9.4C46.6 28 45.4 17 44 8H20Z";

export function WineSampleIcon({ variant }) {
  const clipId = `wine-sample-${useId().replaceAll(":", "")}`;

  return (
    <svg
      className={`wine-sample wine-sample--${variant}`}
      viewBox="0 0 64 96"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={GLASS_SHAPE} />
        </clipPath>
      </defs>
      <rect className="wine-sample__liquid" x="17" y="26" width="30" height="28" clipPath={`url(#${clipId})`} />
      <path className="wine-sample__glass" d={GLASS_SHAPE} />
      <path className="wine-sample__glass" d="M32 48.4V84M22 84h20" />
      <path className="wine-sample__surface" d="M17 26h30" clipPath={`url(#${clipId})`} />
    </svg>
  );
}
