import { easeInOut } from "framer-motion"

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function scrollToId(id: string, duration = 1400) {
  const el = document.getElementById(id)
  if (!el) return

  const startY = window.scrollY
  const targetY = el.getBoundingClientRect().top + window.scrollY
  const distance = targetY - startY
  let startTime: number | null = null

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutCubic(progress)

    window.scrollTo(0, startY + distance * eased)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}