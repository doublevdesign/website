"use client"

import Image from "next/image"
import { scrollToId } from "@/lib/scroll"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            scrollToId("top")
          }}
          className="flex items-center font-heading text-2xl tracking-tight text-foreground"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={280}
            height={96}
            className="h-20 w-auto transition-opacity hover:opacity-80"
            priority
          />
        </a>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            scrollToId("contact")
          }}
          className="px-6 py-3 text-base font-semibold text-foreground transition-colors hover:text-red-500 hover:underline decoration-red-500 decoration-2 underline-offset-4"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
