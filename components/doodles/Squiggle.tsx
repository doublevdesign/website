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
