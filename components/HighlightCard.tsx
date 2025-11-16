import { ReactNode } from "react";

interface HighlightCardProps {
  title: string;
  tagline: string;
  bullets: string[];
  techTags: string[];
  imagePlaceholder?: string;
  children?: ReactNode;
}

export default function HighlightCard({
  title,
  tagline,
  bullets,
  techTags,
  imagePlaceholder,
  children,
}: HighlightCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-10">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#111] mb-3">{title}</h3>
          <p className="text-lg text-[#1f2933] mb-6 font-medium">{tagline}</p>
          
          <ul className="list-disc list-inside space-y-3 mb-6 text-[#1f2933]">
            {bullets.map((bullet, index) => (
              <li key={index} className="text-base md:text-lg">
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm bg-gray-100 text-[#1f2933] rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-center">
          {children ? (
            children
          ) : imagePlaceholder ? (
            <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 md:p-16 bg-gray-50 text-center">
              <p className="text-sm text-gray-500">
                {imagePlaceholder} – TODO: replace with real image
              </p>
            </div>
          ) : (
            <div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 md:p-16 bg-gray-50 text-center">
              <p className="text-sm text-gray-500">
                {title} UI screenshot – TODO: replace with real image
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

