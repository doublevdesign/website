"use client"

import { scrollToId } from "@/lib/scroll"
import { Blob, Squiggle, Star } from "@/components/doodles"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-65px)] items-center overflow-hidden bg-background px-6"
    >
      {/* SAFE DECORATIVE LAYER */}
<div aria-hidden="true" className="pointer-events-none">
  <Blob className="absolute -right-20 top-10 h-80 w-80 text-pink/40" />
  <Blob className="absolute -left-24 bottom-6 h-64 w-64 rotate-45 text-orange/25" />
  <Star className="absolute right-10 bottom-24 h-12 w-12 text-orange/70 md:right-32" />
</div>

<div aria-hidden="true" className="pointer-events-none absolute inset-0"></div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 py-20 lg:grid-cols-[1fr_400px]">
        <div className="px-6 md:px-0">
          <p className="mb-6 inline-block border-l-4 border-orange pl-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Strategic Design
        </p>
      <h1 className="group font-heading text-6xl leading-[0.95] text-foreground text-balance sm:text-7xl md:text-8xl lg:text-9xl">
        no <span className="inline-block hum group-hover:animate-hum">buzzwords.</span>
      </h1>
    
        <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-foreground/90 text-pretty">
          People trust what they can see, feel, and experience. Authenticity isn't a marketing strategy – it's what makes strategy work. In a noisy industry, I skip the process-speak to focus on what actually moves your business forward. We start with a clear conversation, not a pitch deck.
        </p>
        <div className="mt-10 inline-block">
          <div className="relative inline-block group">
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform duration-200 group-hover:scale-105"
            >
              It starts with hello! ✦
            </button>
          

            {/* Sparkles: two clusters (upper-right & lower-left), 3 each */}
            <span className="pointer-events-none">
              {/* Upper-right cluster */}
              <span style={{ transitionDelay: '0ms' }} className="absolute -right-8 -top-6 h-4 w-4 text-orange opacity-0 scale-75 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <Star aria-hidden="true" className="h-4 w-4" />
              </span>

              <span style={{ transitionDelay: '70ms' }} className="absolute -right-2 -top-10 h-5 w-5 text-primary opacity-0 scale-75 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-125">
                <Star aria-hidden="true" className="h-5 w-5" />
              </span>

              <span style={{ transitionDelay: '120ms' }} className="absolute -right-14 -top-2 h-3 w-3 text-pink opacity-0 scale-75 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-125">
                <Star aria-hidden="true" className="h-3 w-3" />
              </span>

              {/* Lower-left cluster */}
              <span style={{ transitionDelay: '40ms' }} className="absolute -left-8 -bottom-6 h-4 w-4 text-orange opacity-0 scale-75 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <Star aria-hidden="true" className="h-4 w-4" />
              </span>

              <span style={{ transitionDelay: '90ms' }} className="absolute -left-2 -bottom-10 h-5 w-5 text-primary opacity-0 scale-75 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-125">
                <Star aria-hidden="true" className="h-5 w-5" />
              </span>

              <span style={{ transitionDelay: '140ms' }} className="absolute -left-14 -bottom-2 h-3 w-3 text-pink opacity-0 scale-75 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-125">
                <Star aria-hidden="true" className="h-3 w-3" />
              </span>
            </span>
          </div>
        </div>
        </div>
        <div className="flex justify-center">
  <div className="group relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none rotate-1">

   <div className="absolute -right-6 top-8 z-0 text-5xl opacity-0 group-hover:opacity-100 group-hover:animate-[float_2.5s_ease-in-out_infinite] transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-2 group-hover:rotate-12">
  👀
</div>

    <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl">
      <Image
        src="/face-pic.png"
        alt="Portrait"
        width={400}
        height={500}
        priority
        className="h-auto w-full object-cover"
      />
    </div>

    <p className="mt-3 text-center text-sm text-muted-foreground">Hi, I'm <span className="font-semibold text-foreground">Vivi (VV)</span>.
      I made this.
    </p>
  </div>
</div>
      </div>
    
    </section>
  )
}

