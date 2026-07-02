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
