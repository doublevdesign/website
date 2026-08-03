import { Blob, Squiggle } from "@/components/doodles/intex";
import { SparkCluster } from "@/components/doodles/SparkCluster";

export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden"
    >
      <div className="relative h-[320vh] w-full">

        {/* HERO */}
        <Blob className="absolute right-[-8rem] top-[80px] h-[420px] w-[420px] text-pink/25" />

        <div className="absolute left-[6%] top-[140px]">
          <SparkCluster className="h-28 w-28 text-orange/50 rotate-12" />
        </div>

        {/* PHILOSOPHY */}
        <Squiggle className="absolute left-[-10rem] top-[120vh] w-[900px] text-orange/12 rotate-2" />

        <Blob className="absolute left-[-6rem] top-[180vh] h-[520px] w-[520px] text-orange/12" />

        <div className="absolute right-[10%] top-[175vh]">
          <SparkCluster className="h-20 w-20 text-pink/40 rotate-150" />
        </div>

        {/* PROJECTS */}
        <Squiggle className="absolute right-[-12rem] top-[245vh] w-[850px] text-pink/10 -rotate-6" />

        <Blob className="absolute right-[5%] top-[265vh] h-70 w-70 text-pink/30" />

        <div className="absolute left-[10%] top-[280vh]">
          <SparkCluster className="h-28 w-28 text-orange/30" />
        </div>

      </div>
    </div>
  );
}