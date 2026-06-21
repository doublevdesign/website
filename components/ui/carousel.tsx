"use client"

import * as React from "react"
import { HTMLAttributes, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

// Types
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]

// Context
export const CarouselContext = React.createContext<{ api: CarouselApi | null }>({
  api: null,
})

// Hook for carousel setup
export function useCarousel() {
  const [emblaRef, api] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  })
  return { emblaRef, api }
}

// Hook for tracking selected index
export function useCarouselIndex(api: CarouselApi | null) {
  const [scrollIndex, setScrollIndex] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setScrollIndex(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return scrollIndex
}

// Components
export function Carousel({
  children,
  emblaRef,
}: {
  children: React.ReactNode
  emblaRef: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void)
}) {
  return (
    <div className="embla relative overflow-hidden" ref={emblaRef}>
      {children}
    </div>
  )
}

export function CarouselContent({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("embla__container flex gap-6 md:gap-8 px-8", className)}
      
      {...props}
    >
      {children}
    </div>
  )
}

export function CarouselItem({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`embla__slide flex-none ${className}`}>
      {children}
    </div>
  )
}

export function CarouselPrevious() {
  const { api } = React.useContext(CarouselContext)

  return (
    <button
      className="absolute left-35 top-[35%] -translate-y-1/2 rounded-full bg-background/80 p-3 shadow-lg backdrop-blur transition hover:scale-105 bg-background/60 hover:bg-background border border-red-500/20"
      onClick={() => api?.scrollPrev()}
    >
      <span className="text-red-600 text-2xl font-extrabold tracking-tight">
        ←
      </span>
    </button>
  )
}

export function CarouselNext() {
  const { api } = React.useContext(CarouselContext)

  return (
    <button
      className="absolute right-65 top-[35%] -translate-y-1/2 rounded-full bg-background/80 p-3 shadow-lg backdrop-blur transition hover:scale-105 bg-background/60 hover:bg-background border border-red-500/20"
      onClick={() => api?.scrollNext()}
    >
      <span className="text-red-600 text-2xl font-extrabold tracking-tight">
        →
      </span>
    </button>
  )
}