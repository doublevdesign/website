"use client"

import { useEffect, useRef } from "react"

const DOT_COUNT = 6
// Each dot eases toward the one before it. Lower = more drag/lazier chain.
const EASE = 0.10
const IDLE_DELAY = 200

export function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (isTouchDevice || prefersReducedMotion) return

    const container = containerRef.current
    if (!container) return

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const positions = Array.from({ length: DOT_COUNT }, () => ({
      x: mouse.x,
      y: mouse.y,
    }))

    let rafId: number
    let idleTimeout: ReturnType<typeof setTimeout>

    function showTrail() {
      if (container) container.style.opacity = "1"
    }

    function hideTrail() {
      if (container) container.style.opacity = "0"
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX
      mouse.y = e.clientY

      showTrail()
      clearTimeout(idleTimeout)
      idleTimeout = setTimeout(hideTrail, IDLE_DELAY)
    }

    function animate() {
      let targetX = mouse.x
      let targetY = mouse.y

      for (let i = 0; i < DOT_COUNT; i++) {
        const pos = positions[i]
        pos.x += (targetX - pos.x) * EASE
        pos.y += (targetY - pos.y) * EASE

        const dot = dotRefs.current[i]
        if (dot) {
          dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
        }

        targetX = pos.x
        targetY = pos.y
      }

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafId)
      clearTimeout(idleTimeout)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block"
      style={{ opacity: 0, transition: "opacity 0.4s ease-out" }}
    >
      {Array.from({ length: DOT_COUNT }).map((_, i) => {
        const scale = 1 - i * 0.13
        const opacity = 1 - i * 0.14

        return (
          <div
            key={i}
            ref={(el) => {
              dotRefs.current[i] = el
            }}
            className="fixed left-0 top-0 rounded-full"
            style={{
              width: "9px",
              height: "9px",
              backgroundColor: "var(--background)",
              opacity,
              transform: `scale(${scale})`,
              willChange: "transform",
            }}
          />
        )
      })}
    </div>
  )
}