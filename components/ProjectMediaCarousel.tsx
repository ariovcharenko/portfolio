"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export interface MediaItem {
  type: "video" | "image";
  src: string;
  label?: string;
}

interface ProjectMediaCarouselProps {
  mediaItems: MediaItem[];
  ariaLabel: string;
  unmutedVideoIndices?: number[];
  className?: string;
}

export default function ProjectMediaCarousel({
  mediaItems,
  ariaLabel,
  unmutedVideoIndices = [],
  className = "",
}: ProjectMediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const count = mediaItems.length;

  // Only play video while the carousel is actually on screen
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play the current slide's video (if visible); pause everything else
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentIndex && inView) {
        video.play().catch(() => {
          // Autoplay with sound can be blocked; the native controls still work
        });
      } else {
        video.pause();
      }
    });
  }, [currentIndex, inView]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setCurrentIndex(Math.round(container.scrollLeft / container.clientWidth));
  };

  const goToSlide = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.clientWidth, behavior: "smooth" });
  };

  const handlePrev = () => goToSlide(currentIndex > 0 ? currentIndex - 1 : count - 1);
  const handleNext = () => goToSlide(currentIndex < count - 1 ? currentIndex + 1 : 0);

  const current = mediaItems[currentIndex];

  return (
    <div ref={rootRef} className={className} role="region" aria-label={ariaLabel}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex h-full w-full snap-x snap-mandatory overflow-x-auto scrollbar-hide"
        >
          {mediaItems.map((item, index) => (
            <div key={item.src} className="relative h-full w-full flex-none snap-center snap-always">
              {item.type === "video" ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={item.src}
                  loop
                  muted={!unmutedVideoIndices.includes(index)}
                  playsInline
                  controls
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.label || `Screenshot ${index + 1}`}
                  fill
                  quality={90}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="mt-2.5 flex items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="min-w-0 truncate">
            <span className="font-mono text-neutral-700">
              {currentIndex + 1}/{count}
            </span>
            {current?.label && (
              <span>
                {"  "}
                {current.type === "video" ? "Video: " : ""}
                {current.label}
              </span>
            )}
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="flex h-7 w-7 items-center justify-center rounded border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-400 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="flex h-7 w-7 items-center justify-center rounded border border-neutral-200 text-neutral-600 transition-colors hover:border-neutral-400 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
