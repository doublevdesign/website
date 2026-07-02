import { Arrow, Blob, Squiggle, Star } from "@/components/doodles";

export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Hero */}
      <Blob className="absolute -right-24 top-20 h-80 w-80 text-pink/15" />

      <Blob className="absolute -left-20 top-[38rem] h-64 w-64 rotate-45 text-orange/12" />

      {/* Philosophy */}
      <Squiggle className="absolute left-0 top-[72rem] w-[520px] text-orange/12" />

      {/* Projects */}
      <Star className="absolute right-[14%] top-[120rem] h-10 w-10 text-pink/30" />

      {/* Statement */}
      <Arrow className="absolute left-[8%] top-[170rem] h-24 w-24 rotate-12 text-orange/12" />

      {/* Footer */}
      <Blob className="absolute -right-32 top-[210rem] h-[420px] w-[420px] text-pink/10" />
    </div>
  );
}