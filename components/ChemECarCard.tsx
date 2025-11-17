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
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="p-6 md:p-10">
        {/* Top part - Content */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Club Website
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
            Chem-E-Car Club Website
          </h3>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            The official website for the Chem-E-Car club, built to improve accessibility and communication.
          </p>
          
          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg text-gray-600">
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
                className="inline-flex items-center rounded-full bg-lightGrey px-3 py-1 text-xs text-gray-700 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8"></div>

        {/* Bottom part - Full-width media section */}
        <div className="w-full max-w-6xl mx-auto">
          <ProjectMediaCarousel
            mediaItems={chemECarMedia}
            ariaLabel="Chem-E-Car website demo carousel"
          />
        </div>
      </div>
    </div>
  );
}

