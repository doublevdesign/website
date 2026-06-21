import { Squiggle } from "@/components/doodles"

export function Statement() {
  return (
    <section className="bg-foreground px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Squiggle
          aria-hidden="true"
          className="mb-8 h-5 w-44 text-[#E7AAC0]"
        />
        <p className="font-heading text-3xl leading-[1.15] text-[#EFE0C8] text-balance sm:text-4xl md:text-5xl">
          "If you can't explain it simply, you don't understand it well enough."
        </p>
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#E7AAC0]">
          — Albert Einstein, allegedly
        </p>
      </div>
    </section>
  )
}
