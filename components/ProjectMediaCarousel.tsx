"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export interface MediaItem {
  type: "video" | "image";
  src: string;
  label?: string;
}

interface ProjectMediaCarouselProps {
  title: string;
  mediaItems: MediaItem[];
  ariaLabel: string;
  mutedVideoIndices?: number[]; // Indices of videos that should be muted (default: all muted except those specified)
  unmutedVideoIndices?: number[]; // Indices of videos that should NOT be muted
}

export default function ProjectMediaCarousel({
  title,
  mediaItems,
  ariaLabel,
  mutedVideoIndices,
  unmutedVideoIndices = [],
}: ProjectMediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Determine if a video at given index should be muted
  const shouldMuteVideo = (index: number) => {
    if (mutedVideoIndices && mutedVideoIndices.includes(index)) {
      return true;
    }
    if (unmutedVideoIndices.includes(index)) {
      return false;
    }
    // Default: all videos muted unless specified in unmutedVideoIndices
    return true;
  };

  // Update current index based on scroll position
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / slideWidth);
    setCurrentIndex(newIndex);
  };

  // Scroll to specific slide
  const goToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slideWidth = container.offsetWidth;
    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : mediaItems.length - 1;
    goToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < mediaItems.length - 1 ? currentIndex + 1 : 0;
    goToSlide(newIndex);
  };

  // Handle video playback - only play current slide's video
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play().catch(() => {
            // Autoplay might be blocked, ignore
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  // Initialize first video on mount
  useEffect(() => {
    const firstVideoIndex = mediaItems.findIndex((item) => item.type === "video");
    if (firstVideoIndex >= 0 && videoRefs.current[firstVideoIndex]) {
      videoRefs.current[firstVideoIndex].play().catch(() => {
        // Autoplay might be blocked
      });
    }
  }, []);

  return (
    <div className="w-full">
      <h4 className="text-xl md:text-2xl font-bold text-charcoal mb-6">{title}</h4>

      <div className="relative w-full" role="region" aria-label={ariaLabel}>
        {/* Scroll-snap carousel container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-xl overflow-hidden border border-gray-200 bg-white shadow-card w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 snap-center snap-always"
            >
              <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-white p-4 shadow-soft">
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
                    {item.type === "video" ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={item.src}
                        autoPlay={index === 0 && shouldMuteVideo(index)}
                        loop
                        muted={shouldMuteVideo(index)}
                        playsInline
                        controls
                        preload="metadata"
                        className="w-full h-full object-contain rounded-lg"
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={item.src}
                          alt={item.label || `Screenshot ${index + 1}`}
                          fill
                          className="object-contain rounded-lg"
                          sizes="(max-width: 768px) 100vw, 100vw"
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Desktop only */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 text-charcoal hover:bg-lightGrey shadow-card p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent hidden md:flex items-center justify-center"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 text-charcoal hover:bg-lightGrey shadow-card p-3 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent hidden md:flex items-center justify-center"
        >
          <svg
            className="w-5 h-5"
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
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "w-8 h-2 bg-accent"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

