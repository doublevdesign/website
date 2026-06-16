"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]

export const CarouselContext = React.createContext<{ api: CarouselApi | null }>({
  api: null,
})

export function useCarousel() {
  const [emblaRef, api] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  })
  return { emblaRef, api }
}

export function Carousel({ 
  children, 
  emblaRef 
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
      className={cn(
        "embla__container flex gap-6 md:gap-8 px-8 pt-6 pb-6 md:pt-8 md:pb-8",
        className,
      )}
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
    <div
      className={`embla__slide flex-none ${className}`}
    >
      {children}
    </div>
  )
}

export function CarouselPrevious() {
  const { api } = React.useContext(CarouselContext)

  return (
    <button
      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 shadow-lg backdrop-blur transition hover:scale-105 border border-red-500/20 hover:bg-background"
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
      className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 shadow-lg backdrop-blur transition hover:scale-105 border border-red-500/20 hover:bg-background"
      onClick={() => {
        if (api) return api.scrollNext()
        const embla = document.querySelector('.embla') as HTMLElement | null
        if (embla) embla.scrollBy({ left: Math.round(embla.clientWidth * 0.7), behavior: 'smooth' })
      }}
    ><span className="text-red-600 text-2xl font-extrabold tracking-tight">
  →
</span>
    </button>
  )
}

export function CarouselTopNav() {
  const { api } = React.useContext(CarouselContext)

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <button
        className="rounded-full bg-background/80 p-3 shadow-lg backdrop-blur transition hover:scale-110 border border-red-500/20 hover:bg-background"
        onClick={() => {
          if (api) return api.scrollPrev()
          const embla = document.querySelector('.embla') as HTMLElement | null
          if (embla) embla.scrollBy({ left: -Math.round(embla.clientWidth * 0.7), behavior: 'smooth' })
        }}
        aria-label="Previous project"
      >
        <span className="text-red-600 text-2xl font-bold">
          ‹
        </span>
      </button>
      <button
        className="rounded-full bg-background/80 p-3 shadow-lg backdrop-blur transition hover:scale-110 border border-red-500/20 hover:bg-background"
        onClick={() => {
          if (api) return api.scrollNext()
          const embla = document.querySelector('.embla') as HTMLElement | null
          if (embla) embla.scrollBy({ left: Math.round(embla.clientWidth * 0.7), behavior: 'smooth' })
        }}
        aria-label="Next project"
      >
        <span className="text-red-600 text-2xl font-bold">
          ›
        </span>
      </button>
    </div>
  )
}

export function CarouselBottomNav() {
  const { api } = React.useContext(CarouselContext)

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        className="rounded-full bg-background/80 p-3 shadow-lg backdrop-blur transition hover:scale-110 border border-red-500/20 hover:bg-background"
        onClick={() => {
          if (api) return api.scrollPrev()
          const embla = document.querySelector('.embla') as HTMLElement | null
          if (embla) embla.scrollBy({ left: -Math.round(embla.clientWidth * 0.7), behavior: 'smooth' })
        }}
        aria-label="Previous project"
      >
        <span className="text-red-600 text-2xl font-bold">
          ‹
        </span>
      </button>
      <button
        className="rounded-full bg-background/80 p-3 shadow-lg backdrop-blur transition hover:scale-110 border border-red-500/20 hover:bg-background"
        onClick={() => {
          if (api) return api.scrollNext()
          const embla = document.querySelector('.embla') as HTMLElement | null
          if (embla) embla.scrollBy({ left: Math.round(embla.clientWidth * 0.7), behavior: 'smooth' })
        }}
        aria-label="Next project"
      >
        <span className="text-red-600 text-2xl font-bold">
          ›
        </span>
      </button>
    </div>
  )
}