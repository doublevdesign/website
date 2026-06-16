"use client"

import { useState, useRef } from "react"

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)
  const [showImpressum, setShowImpressum] = useState(false)
  const pointerStart = useRef({ x: 0, y: 0 })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <footer id="contact" className="px-6 py-24 md:py-32" style={{ backgroundColor: '#E7AAC0' }}>
      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-5xl text-foreground text-balance sm:text-6xl md:text-7xl">
          let&apos;s talk.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/70 text-pretty">
          Tell me what you&apos;re working on. No pitch, no pressure — just a
          real conversation.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl border-l-4 border-foreground bg-white p-8">
            <p className="font-heading text-2xl text-foreground">
              message sent.
            </p>
            <p className="mt-2 text-foreground/70">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-md border border-foreground/20 bg-white px-4 py-3 text-foreground outline-none transition-colors focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border border-foreground/20 bg-white px-4 py-3 text-foreground outline-none transition-colors focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="resize-none rounded-md border border-foreground/20 bg-white px-4 py-3 text-foreground outline-none transition-colors focus:border-foreground/50 focus:ring-2 focus:ring-foreground/20"
              />
            </div>
            <button
              type="submit"
              className="self-start rounded-full px-7 py-3.5 text-base font-semibold text-white transition-transform duration-200 hover:scale-105"
              style={{ backgroundColor: '#2d1b1f' }}
            >
              Send
            </button>
          </form>
        )}

        <div className="mt-20 flex flex-col items-center gap-3 border-t border-foreground/20 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-foreground/70">
            © {new Date().getFullYear()} doublevdesign. All rights reserved.
          </p>
          <button
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setShowImpressum(true)
            }}
            onPointerDown={(e) => {
              // store start to avoid treating swipes as taps
              ;(pointerStart as any).current = { x: e.clientX, y: e.clientY }
            }}
            onPointerUp={(e) => {
              const start = (pointerStart as any).current || { x: 0, y: 0 }
              const dx = Math.abs(e.clientX - start.x)
              const dy = Math.abs(e.clientY - start.y)
              if (dx < 10 && dy < 10) setShowImpressum(true)
            }}
            className="text-xs font-medium text-foreground/70 underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Impressum
          </button>
        </div>
      </div>

      {showImpressum && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="impressum-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 px-6"
          onClick={() => setShowImpressum(false)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-card p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              id="impressum-title"
              className="font-heading text-2xl text-foreground"
            >
              Impressum
            </h3>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>Vivienne Ecker</p>
              <p>Werbegrafikerin</p>
              <p>Ferdinandstraße 6/1/18, 1020 Wien, Austria</p>
              <p>vivi@doublevdesign.at</p>
            </div>
            <button
              onClick={() => setShowImpressum(false)}
              className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}
