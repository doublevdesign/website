import { Star, Arrow } from "@/components/doodles"
import { Button } from "@/components/ui/button"
import { scrollToId } from "@/lib/scroll"
import StrategyHeading from "@/components/strategyheading";

export function Philosophy() {
  return (
    <section id="about" className="relative bg-background px-6 py-24 md:py-32">
     <div className="mx-auto max-w-6xl">
    
    
          <div className="rounded-[3rem] bg-foreground p-8 md:p-12 lg:p-16">
          
          <div className="grid items-start gap-12 md:grid-cols-12">
            {/* Header Section */}
            <div className="md:col-span-5 px-6 md:px-0">
              <StrategyHeading />
            </div>
            
            {/* Intro Text Section */}
            <div className="md:col-span-7">
              <div className="pl-6">
                <p className="text-lg leading-relaxed text-background/90 text-pretty">
                  Chances are: you're busy. You don't need an overblown 75-page corporate strategy deck and a design manual that fits none of your use cases. Instead, you want a clear, actionable plan that actually works for your business and your team. That's what I do.
                </p>
              </div>
            </div>
          </div>
          
        </div> 
       
              {/* <Arrow
                aria-hidden="true"
                className="mt-10 ml-30 rotate-12 hidden h-12 w-16 text-orange/90 md:block" 
              /> */}

        {/* --- CARDS SECTION */}
        <div className="mt-12 md:mt-16 px-6 md:px-0"> 
          <div className="grid gap-6 md:grid-cols-3 relative">
            
            
            {/* Card 1 */}
            <div className="rotate-[-0.5deg] relative flex h-full flex-col rounded-3xl bg-orange/5 p-6 ring-1 ring-orange/30 md:pr-8">
              <span className="absolute left-0 top-0 -translate-y-1/2 md:top-6 md:-translate-y-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-orange text-sm font-semibold text-white shadow-lg">
                1
              </span>
              <Star aria-hidden="true" className="absolute -top-3 -right-3 h-9 w-9 text-orange" />
              
              <div className="flex flex-col gap-y-6 mt-8">
                <h3 className="font-heading text-xl text-foreground">
                  clarity first
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Let's nail down the why before we worry about the how. If a tactic doesn't directly serve your core goals, we don't do it. No filler, no distracting detours, just work that pays off.
                </p>
                <a href="#contact" className="inline-flex w-fit items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer self-start">
                  Ready when you are! ✦
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rotate-[+0.5deg] relative rounded-3xl bg-primary/5 p-6 ring-1 ring-primary/30 md:px-8">
              <span className="absolute left-0 top-0 -translate-y-1/2 md:top-6 md:-translate-y-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-lg">
                2
              </span>
              <Star aria-hidden="true" className="absolute -bottom-3 -right-3 h-11 w-11 text-primary" />
              
              <div className="flex flex-col gap-y-6 mt-8">
                <h3 className="font-heading text-xl text-foreground">
                  working with me
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Not another textbook theory. Someone who has navigated the messy reality of scaling a brand before. I bring that real-world experience to every project, so we can skip the guesswork and get straight to building.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rotate-[-0.5deg] relative rounded-3xl bg-pink/15 p-6 ring-1 ring-pink/60 md:pl-8">
              <span className="absolute left-0 top-0 -translate-y-1/2 md:top-6 md:-translate-y-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-pink text-sm font-semibold text-white shadow-lg">
                3
              </span>
              <Star aria-hidden="true" className="absolute -top-3 -right-3 h-9 w-9 text-pink" />
              
              <div className="flex flex-col gap-y-6 mt-8">
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
