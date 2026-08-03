export function SparkCluster({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M30 6 L33 22 L48 24 L34 30 L38 46 L30 36 L22 46 L26 30 L12 24 L27 22 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="18" r="2.2" fill="currentColor" />
      <circle cx="50" cy="40" r="2" fill="currentColor" />
      <circle cx="40" cy="8" r="1.8" fill="currentColor" />
    </svg>
  );
}
