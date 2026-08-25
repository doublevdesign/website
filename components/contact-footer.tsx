"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [showImpressum, setShowImpressum] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const pointerStart = useRef({ x: 0, y: 0 })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
    } catch {
      setSubmitError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer id="contact" className="px-6 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-3xl">
        <div className="relative inline-block">
          <h2 className="font-heading text-5xl text-foreground text-balance sm:text-6xl md:text-7xl">
            let&apos;s talk.
          </h2>
          <svg
          viewBox="0 0 300 20"
          className="absolute -bottom-3 left-0 w-full text-primary"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M2 10 Q 75 7, 150 9 T 298 8"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>
        </div>

        <p className="mt-4 text-lg leading-relaxed text-foreground/70 text-pretty">
          Tell me what you&apos;re working on. No pitch, no pressure — just a
          real conversation.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl bordborderer-l-4 -foreground bg-white p-8">
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
              <FormField
                id="name"
                label="Name"
                type="text"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />
              <FormField
                id="email"
                label="Email"
                type="email"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />
            </div>
            <FormField
              id="message"
              label="Message"
              as="textarea"
              focusedField={focusedField}
              setFocusedField={setFocusedField}
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ rotate: -2, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="self-start rounded-full px-7 py-3.5 text-base font-semibold text-white"
              style={{ backgroundColor: '#2d1b1f' }}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </motion.button>
            {submitError && (
              <p role="alert" className="text-sm text-primary">
                {submitError}
              </p>
            )}
          </form>
        )}

        <div className="mt-10 overflow-hidden py-4">
        <div className="flex w-max">
          <MarqueeContent />
          <MarqueeContent aria-hidden />
        </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-foreground/20 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
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

function MarqueeContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="flex shrink-0 animate-marquee items-center gap-8 pr-8 text-lg font-bold uppercase tracking-wide text-primary sm:text-xl"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap">
  no buzzwords <span className="text-foreground">·</span> no pressure{" "}
  <span className="text-foreground">·</span> no strings attached{" "}
  <span className="text-foreground">·</span> no filler{" "}
  <span className="text-foreground">·</span> real talk{" "}
  <span className="text-foreground">·</span> real work{" "}
  <span className="text-foreground">·</span>
</span>
      ))}
    </div>
  )
}

type FieldProps = {
  id: string
  label: string
  type?: string
  as?: "input" | "textarea"
  focusedField: string | null
  setFocusedField: (id: string | null) => void
}

function FormField({
  id,
  label,
  type = "text",
  as = "input",
  focusedField,
  setFocusedField,
}: FieldProps) {
  const isFocused = focusedField === id

  const inputClasses =
  "rounded-md border-2 border-foreground/20 bg-white px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
  
  return (
    <div className="flex flex-col gap-2">
      <label
  htmlFor={id}
  className={`inline-block self-start text-sm font-semibold transition-all duration-200 ${
    isFocused
      ? "-rotate-2 rounded-sm bg-primary px-2.5 py-0.5 text-primary-foreground"
      : "rotate-0 px-0 py-0 text-foreground"
  }`}
>
  {label}
</label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          required
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          className={`resize-none ${inputClasses}`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required
          onFocus={() => setFocusedField(id)}
          onBlur={() => setFocusedField(null)}
          className={inputClasses}
        />
      )}
    </div>
  )
}