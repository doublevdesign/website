"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import type { Messages } from "@/lib/i18n"

export function ContactFooter({ messages }: { messages: Messages["footer"] }) {
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
        const result = await response.json().catch(() => null)
        throw new Error(result?.error || "Failed to send message")
      }

      setSubmitted(true)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : messages.submitError,
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer id="contact" className="px-6 pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-3xl">
        <div className="relative inline-block">
          <h2 className="font-heading text-5xl text-foreground text-balance sm:text-6xl md:text-7xl">
            {messages.heading}
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
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              pathLength: { duration: 0.9, ease: "easeInOut", delay: 0.3 },
              opacity: { duration: 0.12, ease: "linear", delay: 0.3 },
            }}
          />
        </svg>
        </div>

        <p className="mt-4 text-lg leading-relaxed text-foreground/70 text-pretty">
          {messages.description}
        </p>

        {submitted ? (
          <div className="mt-10 rounded-xl bordborderer-l-4 -foreground bg-white p-8">
            <p className="font-heading text-2xl text-foreground">
              {messages.successHeading}
            </p>
            <p className="mt-2 text-foreground/70">
              {messages.successDescription}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                id="name"
                label={messages.name}
                type="text"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />
              <FormField
                id="email"
                label={messages.email}
                type="email"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
              />
            </div>
            <FormField
              id="message"
              label={messages.message}
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
              {isSubmitting ? messages.sending : messages.send}
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
          <MarqueeContent messages={messages.marquee} />
          <MarqueeContent messages={messages.marquee} aria-hidden />
        </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-foreground/20 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-foreground/70">
            © {new Date().getFullYear()} doublevdesign. {messages.copyright}
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
            {messages.impressum}
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
              {messages.impressum}
            </h3>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>{messages.legalName}</p>
              <p>{messages.legalRole}</p>
              <p>{messages.legalAddress}</p>
              <p>{messages.legalEmail}</p>
            </div>
            <button
              onClick={() => setShowImpressum(false)}
              className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
            >
              {messages.close}
            </button>
          </div>
        </div>
      )}
    </footer>
  )
}

function MarqueeContent({
  messages,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { messages: string[] }) {
  return (
    <div
      {...props}
      className="flex shrink-0 animate-marquee items-center gap-8 pr-8 text-lg font-bold uppercase tracking-wide text-primary sm:text-xl"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap">
          {messages.map((message) => (
            <span key={message}>
              {message} <span className="text-foreground">·</span>{" "}
            </span>
          ))}
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