import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 border-b border-neutral-900 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-50 mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

