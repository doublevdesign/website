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
