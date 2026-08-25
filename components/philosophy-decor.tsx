export function PhilosophyDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Top-left droplet cluster */}
      <span className="absolute left-[12%] top-[17%] h-3 w-3 rounded-full bg-foreground philosophy-dot-a" style={{ animationDelay: "0s" }} />
      <span className="absolute left-[9%] top-[14%] h-1.5 w-1.5 rounded-full bg-foreground philosophy-dot-b" style={{ animationDelay: "1.3s" }} />
      <span className="absolute left-[15.5%] top-[20%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-e" style={{ animationDelay: "2.6s" }} />

      {/* Top-right droplet cluster */}
      <span className="absolute left-[88%] top-[16%] h-3 w-3 rounded-full bg-foreground philosophy-dot-a" style={{ animationDelay: "3.9s" }} />
      <span className="absolute left-[91.5%] top-[13%] h-1.5 w-1.5 rounded-full bg-foreground philosophy-dot-c" style={{ animationDelay: "5.2s" }} />
      <span className="absolute left-[85%] top-[19.5%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-d" style={{ animationDelay: "6.5s" }} />

      {/* Bottom-left droplet cluster */}
      <span className="absolute left-[12%] bottom-[16%] h-3 w-3 rounded-full bg-foreground philosophy-dot-a" style={{ animationDelay: "7.8s" }} />
      <span className="absolute left-[15%] bottom-[13%] h-1.5 w-1.5 rounded-full bg-foreground philosophy-dot-b" style={{ animationDelay: "9.1s" }} />
      <span className="absolute left-[8.5%] bottom-[19.5%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-e" style={{ animationDelay: "10.4s" }} />

      {/* Bottom-right droplet cluster */}
      <span className="absolute left-[88%] bottom-[17%] h-3 w-3 rounded-full bg-foreground philosophy-dot-a" style={{ animationDelay: "11.7s" }} />
      <span className="absolute left-[91%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-foreground philosophy-dot-c" style={{ animationDelay: "13s" }} />
      <span className="absolute left-[84.5%] bottom-[13.5%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-d" style={{ animationDelay: "14.3s" }} />

      {/* Top-center droplet cluster, above the card */}
      <span className="absolute left-[49%] top-[6%] h-2.5 w-2.5 rounded-full bg-foreground philosophy-dot-b" style={{ animationDelay: "15.6s" }} />
      <span className="absolute left-[52%] top-[9%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-e" style={{ animationDelay: "16.9s" }} />
      <span className="absolute left-[46%] top-[4%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-d" style={{ animationDelay: "18.2s" }} />

      {/* Bottom-center droplet cluster, below the card */}
      <span className="absolute left-[51%] bottom-[6%] h-2.5 w-2.5 rounded-full bg-foreground philosophy-dot-c" style={{ animationDelay: "19.5s" }} />
      <span className="absolute left-[48%] bottom-[9%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-e" style={{ animationDelay: "20.8s" }} />
      <span className="absolute left-[54%] bottom-[4%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-a" style={{ animationDelay: "22.1s" }} />

      {/* Left-middle droplet cluster, in the outer margin */}
      <span className="absolute left-[3%] top-[48%] h-2.5 w-2.5 rounded-full bg-foreground philosophy-dot-d" style={{ animationDelay: "23.4s" }} />
      <span className="absolute left-[6%] top-[52%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-b" style={{ animationDelay: "24.7s" }} />
      <span className="absolute left-[1%] top-[44%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-c" style={{ animationDelay: "26s" }} />

      {/* Right-middle droplet cluster, in the outer margin */}
      <span className="absolute left-[96%] top-[50%] h-2.5 w-2.5 rounded-full bg-foreground philosophy-dot-e" style={{ animationDelay: "27.3s" }} />
      <span className="absolute left-[93%] top-[46%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-a" style={{ animationDelay: "28.6s" }} />
      <span className="absolute left-[98%] top-[54%] h-1 w-1 rounded-full bg-foreground/70 philosophy-dot-b" style={{ animationDelay: "29.9s" }} />
    </div>
  )
}