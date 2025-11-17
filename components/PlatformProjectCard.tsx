"use client";

import Image from "next/image";
import ProjectMediaCarousel, { MediaItem } from "./ProjectMediaCarousel";
import ScrollFadeIn from "./ScrollFadeIn";

interface PlatformProjectCardProps {
  category: string;
  title: string;
  description: string;
  bullets?: string[];
  mediaItems?: MediaItem[];
  links?: { label: string; href: string }[];
  className?: string;
  unmutedVideoIndices?: number[];
}

export default function PlatformProjectCard({
  category,
  title,
  description,
  bullets = [],
  mediaItems,
  links = [],
  className = "",
  unmutedVideoIndices = [],
}: PlatformProjectCardProps) {
  return (
    <ScrollFadeIn>
      <div
        className={`group bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
      >
        {/* MEDIA AREA - Full width, no zoom */}
        {mediaItems && mediaItems.length > 0 && (
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <div className="absolute inset-0 w-full h-full bg-neutral-50">
              {mediaItems.length === 1 ? (
                // Single image/video - no carousel needed
                <div className="relative w-full h-full flex items-center justify-center">
                  {mediaItems[0].type === "video" ? (
                    <video
                      src={mediaItems[0].src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      preload="metadata"
                      className="w-full h-full"
                      style={{ objectFit: "contain" }}
                    />
                  ) : (
                    <Image
                      src={mediaItems[0].src}
                      alt={mediaItems[0].label || title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 100vw"
                    />
                  )}
                </div>
              ) : (
                // Multiple media - use carousel
                <ProjectMediaCarousel
                  mediaItems={mediaItems}
                  ariaLabel={`${title} media carousel`}
                  unmutedVideoIndices={unmutedVideoIndices}
                />
              )}
            </div>
          </div>
        )}

        {/* TEXT AREA - Below media */}
        <div className="p-6 lg:p-8">
          {/* Category label */}
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
            {category}
          </p>

          {/* Title */}
          <h3 className="text-xl font-semibold text-charcoal mb-2">{title}</h3>

          {/* Description */}
          <p className="text-sm text-neutral-600 mt-1 mb-4 leading-relaxed">
            {description}
          </p>

          {/* Bullets */}
          {bullets.length > 0 && (
            <ul className="list-disc list-inside space-y-1 mb-4 text-xs text-neutral-500">
              {bullets.slice(0, 3).map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}

          {/* Links */}
          {links.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center text-sm font-medium text-charcoal hover:text-neutral-600 transition-colors group/link"
                >
                  {link.label}
                  <svg
                    className="w-3 h-3 ml-1 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeCap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </ScrollFadeIn>
  );
}

