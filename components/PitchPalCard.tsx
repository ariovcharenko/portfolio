"use client";

import ProjectMediaCarousel, { MediaItem } from "./ProjectMediaCarousel";

const pitchPalMedia: MediaItem[] = [
  {
    type: "video",
    src: "/videos/pitchpal-demo.mp4",
    label: "Log in & Setup",
  },
  {
    type: "image",
    src: "/images/pitchpal2.png",
    label: "Dashboard Overview",
  },
  {
    type: "image",
    src: "/images/pitchpal3.png",
    label: "Real-time Insights",
  },
  {
    type: "image",
    src: "/images/pitchpal4.png",
    label: "Interview Setup",
  },
  {
    type: "video",
    src: "/videos/pitchpal-interactive.mp4",
    label: "Interactive Experience",
  },
  {
    type: "image",
    src: "/images/pitchpal6.png",
    label: "Analytics View",
  },
  {
    type: "image",
    src: "/images/pitchpal7.png",
    label: "Performance Metrics",
  },
];

export default function PitchPalCard() {

  return (
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden hover:border-sky-500/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition">
      <div className="p-6 md:p-10">
        {/* Top part - Content */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-sky-400">
              AI Interview Simulator
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-50 mb-3">
            PitchPal – AI Interview Simulator
          </h3>
          <p className="text-lg text-gray-300 mb-6 font-medium">
            Voice + coding interview simulator for realistic practice.
          </p>
          
          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg text-gray-300">
            <li>
              Built React frontend for resume upload, interview setup, and adaptive question flow.
            </li>
            <li>
              Implemented Spring Boot backend with REST APIs, WebSockets, and secure JWT authentication.
            </li>
            <li>
              Integrated AI logic to adapt questions based on user responses.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Spring Boot", "WebSockets", "JWT", "AI"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-neutral-700 px-2.5 py-0.5 text-xs text-gray-300 hover:border-sky-500 hover:text-sky-300 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mb-8"></div>

        {/* Bottom part - Full-width media section */}
        <div className="w-full max-w-6xl mx-auto">
          <ProjectMediaCarousel
            title="See PitchPal in Action"
            mediaItems={pitchPalMedia}
            ariaLabel="PitchPal demo carousel"
            unmutedVideoIndices={[4]} // pitchpal-interactive.mp4 (index 4) should have sound
          />
        </div>
      </div>
    </div>
  );
}

