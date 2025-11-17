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
  mutedVideoIndices?: number[];
  unmutedVideoIndices?: number[];
  className?: string;
}

export default function ProjectMediaCarousel({
  mediaItems,
  ariaLabel,
  mutedVideoIndices,
  unmutedVideoIndices = [],
  className = "",
}: ProjectMediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  // Swipe handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < mediaItems.length - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
  };

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
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <div className="relative w-full h-full" role="region" aria-label={ariaLabel}>
        {/* Scroll-snap carousel container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full h-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="min-w-full h-full flex-shrink-0 snap-center snap-always relative"
            >
              <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-neutral-50">
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
                    className="w-full h-full"
                    style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%" }}
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.src}
                      alt={item.label || `Screenshot ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 100vw"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Desktop only */}
        {mediaItems.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-neutral-200 text-charcoal hover:bg-white shadow-sm p-2 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neutral-400 hidden md:flex items-center justify-center"
              tabIndex={0}
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
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-neutral-200 text-charcoal hover:bg-white shadow-sm p-2 rounded-full transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-neutral-400 hidden md:flex items-center justify-center"
          tabIndex={0}
        >
          <svg
            className="w-4 h-4"
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
          </>
        )}

        {/* Dots Indicator - Positioned absolutely at bottom */}
        {mediaItems.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex justify-center gap-1">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 ${
                  index === currentIndex
                    ? "w-6 h-1.5 bg-white"
                    : "w-1.5 h-1.5 bg-white/50 hover:bg-white/70"
                }`}
                tabIndex={0}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

