"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { scrollToId } from "@/lib/scroll"

type HeaderMessages = {
  contact: string
  switchToEnglish: string
  switchToGerman: string
  logoAlt: string
}

export function SiteHeader({
  locale,
  messages,
}: {
  locale: "en" | "de"
  messages: HeaderMessages
}) {
  const pathname = usePathname()

  const getLocalePath = (targetLocale: "en" | "de") =>
    pathname.replace(`/${locale}`, `/${targetLocale}`)
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md px-6">
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
            alt={messages.logoAlt}
            width={280}
            height={96}
            className="h-14 w-auto transition-opacity hover:opacity-80"
            priority
          />
        </a>

        <nav className="flex items-center gap-4 text-base font-semibold">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToId("contact")
            }}
            className="text-foreground transition-colors hover:text-red-500 hover:underline decoration-red-500 decoration-2 underline-offset-4"
          >
            {messages.contact}
          </a>

          <div className="flex items-center gap-2 border-l-2 border-foreground pl-4">
            {(["en", "de"] as const).map((targetLocale) => {
              const isActive = targetLocale === locale

              return (
                <a
                  key={targetLocale}
                  href={getLocalePath(targetLocale)}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={
                    targetLocale === "en"
                      ? messages.switchToEnglish
                      : messages.switchToGerman
                  }
                  className={`transition-colors hover:text-red-500 hover:underline decoration-red-500 decoration-2 underline-offset-4 ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {targetLocale.toUpperCase()}
                </a>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
