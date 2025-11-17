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
    <div className={`bg-white border border-gray-200 rounded-xl px-6 py-8 sm:px-8 sm:py-10 shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ${className}`}>
      <h3 className="text-2xl font-bold text-charcoal mb-3">{title}</h3>
      <p className="text-base text-gray-700 mb-6 leading-relaxed">{description}</p>
      
      <ul className="list-disc list-inside space-y-2 mb-6 text-base text-gray-600">
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
            className="inline-flex items-center rounded-full bg-lightGrey px-3 py-1 text-xs text-gray-700 font-medium"
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
            className="inline-flex items-center px-5 py-2.5 text-sm bg-accent text-white rounded-full hover:bg-blue-600 transition-colors font-medium"
          >
            View Research Paper
          </a>
        </div>
      )}

      {images.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ gridAutoRows: "1fr" }}>
          {images.map((image, idx) => {
            const isHall = image.src.includes("hall.jpg");
            return (
              <div 
                key={idx} 
                className="relative w-full rounded-xl border border-gray-200 bg-white p-3 overflow-hidden shadow-soft"
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
              className="border-2 border-dashed border-gray-300 rounded-xl p-8 md:p-12 bg-lightGrey text-center"
            >
              <p className="text-sm text-gray-500">
                {placeholder.label} – TODO: replace with real image
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

