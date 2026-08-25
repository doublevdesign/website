"use client"

import { scrollToId } from "@/lib/scroll"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.15,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }, // slow, confident settle
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-65px)] items-center overflow-hidden px-6 bg-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* <div className="absolute inset-0 light-band"></div> */}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 py-20 lg:grid-cols-[1fr_400px]">
        <motion.div
          className="px-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="mb-6 inline-block border-l-4 border-primary pl-3 text-sm font-semibold uppercase tracking-widest text-background"
          >
            Strategic Design
          </motion.p>

          <motion.h1
            variants={item}
            className="group font-heading text-6xl leading-[0.95] text-background text-balance sm:text-7xl md:text-8xl lg:text-9xl"
          >
            no{" "}
            <span className="inline-block hum group-hover:animate-hum">
              buzzwords.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-background text-pretty"
          >
            People trust what they can see, feel, and experience.
            Authenticity isn't a marketing strategy — it's what makes a brand
            memorable. I create visual identities and design systems that
            give ideas a language people can connect with.
          </motion.p>

          <motion.div variants={item} className="mt-10 inline-block">
            <div className="relative inline-block group">
              <button
                onClick={() => scrollToId("contact")}
                className="rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-transform duration-200 group-hover:scale-105"
              >
                It starts with hello!
              </button>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="group relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative z-10">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/face-pic-2.jpeg"
                  alt="Portrait"
                  width={400}
                  height={500}
                  priority
                  className="h-auto w-full object-cover"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>

              <div className="absolute bottom-0 left-6 translate-y-1/3 -rotate-2 bg-primary px-5 py-2.5 shadow-sm">
                <p className="text-sm sm:text-base font-semibold text-primary-foreground whitespace-nowrap">
                  Hi, I'm Vivi (VV).{" "}
                  <button
                    onClick={() => scrollToId("work")}
                    className="underline decoration-2 underline-offset-2 bg-transparent p-0 m-0 cursor-pointer"
                    aria-label="Jump to selected work"
                  >
                    I made this.
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}