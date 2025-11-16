"use client";

import ProjectMediaCarousel, { MediaItem } from "./ProjectMediaCarousel";

const chemECarMedia: MediaItem[] = [
  {
    type: "image",
    src: "/images/chem1.jpeg",
    label: "Homepage",
  },
  {
    type: "image",
    src: "/images/chem2.jpeg",
    label: "Club information",
  },
  {
    type: "image",
    src: "/images/chem3.jpeg",
    label: "Club updates",
  },
];

export default function ChemECarCard() {
  return (
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden hover:border-sky-500/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition">
      <div className="p-6 md:p-10">
        {/* Top part - Content */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-sky-400">
              Club Website
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-50 mb-3">
            Chem-E-Car Club Website
          </h3>
          <p className="text-lg text-gray-300 mb-6 font-medium">
            The official website for the Chem-E-Car club, built to improve accessibility and communication.
          </p>
          
          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg text-gray-300">
            <li>
              Co-designed and implemented a clean, informative layout for club information and updates.
            </li>
            <li>
              Optimized for both desktop and mobile devices.
            </li>
            <li>
              Supported ongoing updates as an active member of the organization.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {["Web Design", "Responsive UI"].map((tag) => (
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
            title="See Chem-E-Car Website in Action"
            mediaItems={chemECarMedia}
            ariaLabel="Chem-E-Car website demo carousel"
          />
        </div>
      </div>
    </div>
  );
}

