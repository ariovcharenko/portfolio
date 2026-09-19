import { ReactNode } from "react";
import ScrollFadeIn from "./ScrollFadeIn";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, index, label, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <ScrollFadeIn>
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              {index} / {label}
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">{title}</h2>
            <div className="rule-draw mt-5 h-[3px] w-14 rounded-full bg-accent-bright" aria-hidden="true" />
            {description && (
              <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">{description}</p>
            )}
          </div>
        </ScrollFadeIn>
        {children}
      </div>
    </section>
  );
}
