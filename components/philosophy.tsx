import { Star, Arrow } from "@/components/doodles"
import { Button } from "@/components/ui/button"
import { scrollToId } from "@/lib/scroll"

export function Philosophy() {
  return (
    <section id="about" className="relative bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-5 px-6 md:px-0">
            <h2 className="font-heading text-4xl leading-tight text-foreground text-balance sm:text-5xl">
              strategy you can actually feel.
            </h2>
            <Arrow
              aria-hidden="true"
              className="mt-10 ml-30 rotate-12 hidden h-12 w-16 text-orange md:block"
            />
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl pl-6">
              <p className="text-lg leading-relaxed text-foreground/90 text-pretty">
               Chances are: you're busy. You don't really care about a 75-page corporate strategy deck and a design manual that fits none of your use cases. Instead, you want a clear, actionable plan that actually works for your business and your team. That's what I do.
              </p>
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mt-6 md:mt-12 relative px-6 md:px-0">
              <div className="hidden md:absolute md:left-1/2 md:top-0 md:h-full md:w-px md:bg-border/50" />
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rotate-[-0.5deg] relative flex h-full flex-col rounded-3xl bg-orange/5 p-6 ring-1 ring-orange/30 md:pr-8">
                  <span className="absolute left-0 top-0 -translate-y-1/2 md:top-6 md:-translate-y-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-orange text-sm font-semibold text-white shadow-lg">
                    1
                  </span>
                  <Star
                    aria-hidden="true"
                    className="absolute -top-3 -right-3 h-9 w-9 text-orange"
                  />
                 
                  <h3 className="mt-8 font-heading text-xl text-foreground">
                    clarity first
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We start by talking about what you really want to achieve. Not every coffee shop needs branded napkins. Not every accountant needs a viral TikTok strategy. Share your goals and we&apos;ll figure out the rest together.
                  </p>

                  <a
                href="#contact"
                className="mt-6 md:mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                Ready when you are! ✦
                </a>

                </div>

                <div className="rotate-[+0.5deg] relative rounded-3xl bg-primary/5 p-6 ring-1 ring-primary/30 md:px-8">
                  <span className="absolute left-0 top-0 -translate-y-1/2 md:top-6 md:-translate-y-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-lg">
                    2
                  </span>
                  <Star
                    aria-hidden="true"
                    className="absolute -bottom-3 -right-3 h-11 w-11 text-primary"
                  />
                  <h3 className="mt-8 font-heading text-xl text-foreground">
                    working with me
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                   If you want a thoughtful partner with real-world experience who can help you navigate the messy, unpredictable process of building something people love, I'm here to make it happen. If you're looking for the ultimate, foolproof guide to success feel free to browse your local bookstore's bestseller section. 
                  </p>
                </div>

                <div className=" rotate-[-0.5deg] relative rounded-3xl bg-pink/15 p-6 ring-1 ring-pink/60 md:pl-8">
                  <span className="absolute left-0 top-0 -translate-y-1/2 md:top-6 md:-translate-y-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-pink text-sm font-semibold text-white shadow-lg">
                    3
                  </span>
                  <Star
                    aria-hidden="true"
                    className="absolute -top-3 -right-3 h-9 w-9 text-pink"
                  />
                  <h3 className="mt-8 font-heading text-xl text-foreground">
                    built to last
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Your brand needs to work for you and your team, not just for now, not until you run into the next issue. Or worse: the next big trend! I help build brands that are adaptable, resilient, and built to last. You do your thing, and your brand will keep up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
