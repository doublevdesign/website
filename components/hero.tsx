"use client"

import { scrollToId } from "@/lib/scroll"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-65px)] items-center overflow-hidden px-6"
    >


<div aria-hidden="true" className="pointer-events-none absolute inset-0"></div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 py-20 lg:grid-cols-[1fr_400px]">
        <motion.div
          className="px-6 md:px-0"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-6 inline-block border-l-4 border-orange pl-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Strategic Design
          </p>
          <h1 className="group font-heading text-6xl leading-[0.95] text-foreground text-balance sm:text-7xl md:text-8xl lg:text-9xl">
            no <span className="inline-block hum group-hover:animate-hum">buzzwords.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-foreground/90 text-pretty">
            People trust what they can see, feel, and experience. Authenticity isn't a marketing strategy — it's what makes a brand memorable. I create visual identities and design systems that give ideas a language people can connect with.
          </p>

          <div className="mt-10 inline-block">
            <div className="relative inline-block group">
              <button
                onClick={() => scrollToId("contact")}
                className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform duration-200 group-hover:scale-105"
              >
                It starts with hello!
              </button>
            </div>
          </div>
        </motion.div>
          <div className="flex justify-center">
  <div className="group relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none">

   {/* <div className="absolute -right-6 top-8 z-0 text-5xl opacity-0 group-hover:opacity-100 group-hover:animate-[float_2.5s_ease-in-out_infinite] transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-2 group-hover:rotate-12">
  👀
</div> */}

    <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
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

