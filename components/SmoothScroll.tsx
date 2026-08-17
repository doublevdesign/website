"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Track recent pointer/touch interaction to know whether the user is
    // interacting inside a dialog. This is a lightweight heuristic that
    // avoids relying solely on `event.target` inside Lenis's `prevent`.
    let lastInteractionInsideDialog = false

    const updateInteraction = (e: Event) => {
      const target = e.target as Element | null
      lastInteractionInsideDialog = Boolean(
        target && target.closest('[role="dialog"]'),
      )
    }

    window.addEventListener('pointerdown', updateInteraction, true)
    window.addEventListener('pointermove', updateInteraction, true)
    window.addEventListener('touchstart', updateInteraction, true)

    const lenis = new Lenis({
      duration: 0.8,
      smoothWheel: true,
      prevent: (event: Event) => {
        if (lastInteractionInsideDialog) return true

        // Fallback hit-test from client coordinates when available
        const anyE: any = event
        const cx = anyE.clientX ?? anyE.pageX ?? anyE.touches?.[0]?.clientX
        const cy = anyE.clientY ?? anyE.pageY ?? anyE.touches?.[0]?.clientY
        if (typeof cx === 'number' && typeof cy === 'number') {
          const hit = document.elementFromPoint(cx, cy) as Element | null
          return Boolean(hit && hit.closest('[role="dialog"]'))
        }

        return false
      },
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('pointerdown', updateInteraction, true)
      window.removeEventListener('pointermove', updateInteraction, true)
      window.removeEventListener('touchstart', updateInteraction, true)
      lenis.destroy()
    }
  }, [])

  return children
}