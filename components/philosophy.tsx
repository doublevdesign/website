import { Button } from "@/components/ui/button"
import { scrollToId } from "@/lib/scroll"
import StrategyHeading from "@/components/strategyheading";

export function Philosophy() {
  return (
    <section id="about" className="relative z-20 px-6 pt-12 pb-24 md:pt-16 md:pb-32">
     <div className="mx-auto max-w-6xl">
    
    
       <div className="rounded-[2rem] bg-foreground p-8 md:p-12 lg:p-16">
  <div className="grid items-start gap-10 md:grid-cols-12">

    {/* Header */}
    <div className="md:col-span-5">
      <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-background/60">
        my approach
      </p>

      <h2 className="font-heading text-4xl leading-tight text-background sm:text-5xl md:text-6xl">
        clarity before creativity.
      </h2>
    </div>

    {/* Text */}
    <div className="md:col-span-7">
      <p className="max-w-xl text-lg leading-relaxed text-background/90">
        Great design starts with understanding. Before jumping into colours,
        logos, or layouts, we take the time to understand what makes your
        business unique, where you want to go, and what your audience needs.
      </p>

      <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/90">
        Together, we turn ideas into a clear identity that feels authentic,
        works in the real world, and gives your brand the confidence to grow.
      </p>
    </div>

  </div>
</div>
       
    

        {/* --- CARDS SECTION */}
<div className="mt-12 md:mt-16 px-6 md:px-0">
  <div className="grid gap-6 md:grid-cols-3">

    {/* Card 1 */}
    <div className="flex h-full flex-col rounded-2xl bg-background p-8 ring-1 ring-border">
      <div className="flex flex-col gap-y-6">
        <h3 className="font-heading text-xl text-foreground">
          clarity first
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Let's nail down the why before we worry about the how. If a tactic doesn't directly serve your core goals, we don't do it. No filler, no distracting detours, just work that pays off.
        </p>
        <a
          href="#contact"
          className="inline-flex w-fit items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          Ready when you are!
        </a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="flex h-full flex-col rounded-2xl bg-background p-8 ring-1 ring-border">
      <div className="flex flex-col gap-y-6">
        <h3 className="font-heading text-xl text-foreground">
          working with me
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Not another textbook theory. Every brand starts as a messy mix of ideas, questions, and possibilities. I help bring clarity to that process, creating identities that feel authentic, intentional, and uniquely yours.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex h-full flex-col rounded-2xl bg-background p-8 ring-1 ring-border">
      <div className="flex flex-col gap-y-6">
        <h3 className="font-heading text-xl text-foreground">
          built to last
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Your brand needs to work for you and your team. I help build systems that are adaptable, resilient, and designed to grow with you, independent of fleeting design trends. You do your thing, and your brand will keep up.
        </p>
      </div>
    </div>

  </div>
</div>

      </div>
    </section>
  )
}
