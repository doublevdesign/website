let activeFrame: number | null = null

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function scrollToId(id: string, duration = 1400) {
  const el = document.getElementById(id)
  if (!el) return

  if (activeFrame !== null) {
    cancelAnimationFrame(activeFrame)
  }

  const startY = window.scrollY
  const scrollPaddingTop = Number.parseFloat(
    getComputedStyle(document.documentElement).scrollPaddingTop,
  ) || 0
  const targetY = Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - scrollPaddingTop,
  )
  const distance = targetY - startY
  let startTime: number | null = null

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp
    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutCubic(progress)

    window.scrollTo({
      top: startY + distance * eased,
      behavior: "instant",
    })

    if (progress < 1) {
      activeFrame = requestAnimationFrame(step)
    } else {
      activeFrame = null
    }
  }

  activeFrame = requestAnimationFrame(step)
}