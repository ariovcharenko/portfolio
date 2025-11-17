"use client";

import Image from "next/image";
import ProjectMediaCarousel, { MediaItem } from "./ProjectMediaCarousel";
import ScrollFadeIn from "./ScrollFadeIn";

interface UnifiedProjectCardProps {
  category: string;
  title: string;
  description: string;
  bullets?: string[];
  techTags: string[];
  mediaItems?: MediaItem[];
  links?: { label: string; href: string }[];
  status?: string;
  className?: string;
  unmutedVideoIndices?: number[];
}

export default function UnifiedProjectCard({
  category,
  title,
  description,
  bullets = [],
  techTags,
  mediaItems,
  links = [],
  status,
  className = "",
  unmutedVideoIndices = [],
}: UnifiedProjectCardProps) {
  return (
    <ScrollFadeIn>
      <div
        className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-soft hover:shadow-card hover:scale-[1.01] transition-all duration-300 ${className}`}
      >
        {/* Media Section - Full width at top */}
        {mediaItems && mediaItems.length > 0 && (
          <div className="w-full border-b border-gray-100">
            <ProjectMediaCarousel
              mediaItems={mediaItems}
              ariaLabel={`${title} media carousel`}
              unmutedVideoIndices={unmutedVideoIndices}
              className="rounded-t-2xl"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {/* Category and Status */}
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {category}
            </span>
            {status && (
              <span className="inline-flex items-center rounded-full bg-lightGrey px-3 py-1 text-xs font-medium text-gray-600">
                {status}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">{title}</h3>

          {/* Description */}
          <p className="text-base text-gray-700 mb-4 leading-relaxed">{description}</p>

          {/* Bullets */}
          {bullets.length > 0 && (
            <ul className="list-disc list-inside space-y-2 mb-6 text-sm text-gray-600">
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-lightGrey px-3 py-1 text-xs font-medium text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-blue-600 transition-colors group/link"
                >
                  {link.label}
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
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

