import { ReactNode } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  bullets: string[];
  techTags: string[];
  imagePlaceholders?: { label: string; count?: number }[];
  images?: { src: string; alt: string }[];
  className?: string;
  pdfLink?: string;
}

export default function ProjectCard({
  title,
  description,
  bullets,
  techTags,
  imagePlaceholders = [],
  images = [],
  className = "",
  pdfLink,
}: ProjectCardProps) {
  return (
    <div className={`bg-neutral-900/80 border border-neutral-800 rounded-2xl px-5 py-6 sm:px-7 sm:py-7 hover:border-sky-500/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition ${className}`}>
      <h3 className="text-xl font-semibold text-gray-50 mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">{description}</p>
      
      <ul className="list-disc list-inside space-y-2 mb-6 text-sm sm:text-base text-gray-300">
        {bullets.map((bullet, index) => (
          <li key={index}>
            {bullet}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {techTags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full border border-neutral-700 px-2.5 py-0.5 text-xs text-gray-300 hover:border-sky-500 hover:text-sky-300 transition"
          >
            {tag}
          </span>
        ))}
      </div>

      {pdfLink && (
        <div className="mb-6">
          <a
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm border border-neutral-700 rounded-full text-gray-300 hover:border-sky-500 hover:text-sky-300 transition"
          >
            View Research Paper
          </a>
        </div>
      )}

      {images.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ gridAutoRows: "1fr" }}>
          {images.map((image, idx) => {
            const isHall = image.src.includes("hall.jpg");
            return (
              <div 
                key={idx} 
                className="relative w-full rounded-lg border border-neutral-800 bg-black p-2 overflow-hidden"
              >
                {isHall ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg object-contain"
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
      {imagePlaceholders.length > 0 && images.length === 0 && (
        <div className="space-y-4 mt-6">
          {imagePlaceholders.map((placeholder, idx) => (
            <div
              key={idx}
              className="border-2 border-dashed border-neutral-700 rounded-lg p-8 md:p-12 bg-neutral-900 text-center"
            >
              <p className="text-sm text-gray-400">
                {placeholder.label} – TODO: replace with real image
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

