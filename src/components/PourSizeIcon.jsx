import { useId } from "react";

const GLASS_LEVELS = {
  "glass-small": 50,
  "glass-large": 35,
};

const BOTTLE_LEVELS = {
  "bottle-half": 88,
  "bottle-full": 55,
};

export function PourSizeIcon({ variant }) {
  const clipId = `pour-${useId().replaceAll(":", "")}`;

  if (variant in GLASS_LEVELS) {
    return (
      <svg className="pour-size-icon pour-size-icon--glass" viewBox="0 0 96 128" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={clipId}>
            <path d="M32 13c-2 12-4 27 2 42 3.5 9 8 13 14 13s10.5-4 14-13c6-15 4-30 2-42H32Z" />
          </clipPath>
        </defs>
        <rect
          className="pour-size-icon__liquid"
          x="18"
          y={GLASS_LEVELS[variant]}
          width="60"
          height="62"
          clipPath={`url(#${clipId})`}
        />
        <path
          className="pour-size-icon__outline"
          d="M32 13c-2 12-4 27 2 42 3.5 9 8 13 14 13s10.5-4 14-13c6-15 4-30 2-42H32Z"
        />
        <path className="pour-size-icon__outline" d="M48 68v46M33 114h30" />
        <path
          className="pour-size-icon__surface"
          d={`M21 ${GLASS_LEVELS[variant]}h54`}
          clipPath={`url(#${clipId})`}
        />
      </svg>
    );
  }

  return (
    <svg className="pour-size-icon pour-size-icon--bottle" viewBox="0 0 96 128" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={clipId}>
          <path d="M40 17h16v24c0 4.8 2.3 8.2 7.2 12.4C67.7 57.4 70 62.2 70 68v48H26V68c0-5.8 2.3-10.6 6.8-14.6C37.7 49.2 40 45.8 40 41V17Z" />
        </clipPath>
      </defs>
      <rect
        className="pour-size-icon__liquid"
        x="20"
        y={BOTTLE_LEVELS[variant]}
        width="56"
        height="82"
        clipPath={`url(#${clipId})`}
      />
      <path
        className="pour-size-icon__outline"
        d="M40 17h16v24c0 4.8 2.3 8.2 7.2 12.4C67.7 57.4 70 62.2 70 68v48H26V68c0-5.8 2.3-10.6 6.8-14.6C37.7 49.2 40 45.8 40 41V17Z"
      />
      <path className="pour-size-icon__outline" d="M39 9h18v9H39Z" />
      <path
        className="pour-size-icon__surface"
        d={`M20 ${BOTTLE_LEVELS[variant]}h56`}
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
}
