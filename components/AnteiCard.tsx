"use client";

import ProjectMediaCarousel, { MediaItem } from "./ProjectMediaCarousel";

const anteiMedia: MediaItem[] = [
  {
    type: "image",
    src: "/images/antei1.jpeg",
    label: "Homepage",
  },
  {
    type: "image",
    src: "/images/antei2.jpeg",
    label: "Product page",
  },
];

export default function AnteiCard() {
  return (
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden hover:border-sky-500/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition">
      <div className="p-6 md:p-10">
        {/* Top part - Content */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-sky-400">
              Marketing Website
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-50 mb-3">
            Antei Construction Formwork Website
          </h3>
          <p className="text-lg text-gray-300 mb-6 font-medium">
            A marketing site for a construction formwork rental company, designed and built end-to-end.
          </p>
          
          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg text-gray-300">
            <li>
              Designed layout in Figma focused on clarity and navigation.
            </li>
            <li>
              Implemented custom HTML/CSS and deployed via Hostinger.
            </li>
            <li>
              Ensured responsive behavior for desktop and mobile.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "Figma", "Responsive Design"].map((tag) => (
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
            title="See Antei Website in Action"
            mediaItems={anteiMedia}
            ariaLabel="Antei website demo carousel"
          />
        </div>
      </div>
    </div>
  );
}

