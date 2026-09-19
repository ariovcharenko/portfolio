"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  phrases: string[];
  className?: string;
}

// Types out each phrase, pauses, deletes it, and moves on to the next.
// Renders the first phrase in full on the server and with reduced motion.
export default function Typewriter({ phrases, className = "" }: TypewriterProps) {
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = phrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(tick, 2200);
        } else {
          timer = setTimeout(tick, 42);
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timer = setTimeout(tick, 280);
        } else {
          timer = setTimeout(tick, 20);
        }
      }
    };

    timer = setTimeout(tick, 2400);
    return () => clearTimeout(timer);
  }, [phrases]);

  return (
    <span className={className}>
      <span className="sr-only">{phrases.join(" ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="caret ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] bg-accent-bright" />
      </span>
    </span>
  );
}
