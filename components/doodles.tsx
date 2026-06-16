export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 14c14-12 28-12 42 0s28 12 42 0 28-12 42 0 28 12 42 0 28-12 42 0"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Underline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 18"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 11c40-7 92-9 142-6 28 2 56 0 88-3"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 4c1 9 3 14 8 18 4 3 9 5 12 6-9 1-14 3-18 8-3 4-5 9-6 12-1-9-3-14-8-18-4-3-9-5-12-6 9-1 14-3 18-8 3-4 5-9 6-12Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 12c14 0 30 4 40 14 4 4 7 9 8 14"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M52 40c-5-2-9-4-13-4M52 40c1-5 2-9 4-13"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Blob({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="currentColor"
        d="M44 -64C58 -54 71 -43 76 -29C81 -14 78 4 71 19C64 35 53 47 39 56C24 65 7 70 -10 68C-27 66 -45 56 -57 42C-69 27 -76 8 -74 -10C-72 -28 -61 -45 -46 -56C-30 -67 -11 -71 5 -75C22 -78 30 -74 44 -64Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}
