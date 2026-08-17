"use client";

import { useEffect, useRef, useState } from "react";

export default function StrategyHeading() {
  const words = ["strategy", "you", "can", "actually", "feel."];

  const ref = useRef<HTMLHeadingElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className="font-heading text-4xl leading-tight text-background text-balance sm:text-5xl"
    >
      {words.map((word, i) => {
        const isFeel = word === "feel.";

        return (
          <span
            key={word}
            className="inline-block mr-[0.35em] transition-opacity duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transitionDelay: `${i * 280}ms`,
            }}
          >
            <span
              className="inline-block"
              style={{
                animation: isFeel
                  ? "feelFloat 5.5s ease-in-out infinite"
                  : "none",
                willChange: "transform",
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </h2>
  );
}