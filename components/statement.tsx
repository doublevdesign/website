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
          &ldquo;If you can&apos;t explain it at a kitchen table, it&apos;s not
          strategy — it&apos;s decoration.&rdquo;
        </p>
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#E7AAC0]">
          — my whole methodology, basically
        </p>
      </div>
    </section>
  )
}
