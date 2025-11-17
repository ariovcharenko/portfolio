import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 border-b border-gray-100 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mb-12">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

