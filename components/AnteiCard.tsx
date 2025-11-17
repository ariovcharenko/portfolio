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
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="p-6 md:p-10">
        {/* Top part - Content */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              Marketing Website
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
            Antei Construction Formwork Website
          </h3>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            A marketing site for a construction formwork rental company, designed and built end-to-end.
          </p>
          
          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg text-gray-600">
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
            mediaItems={anteiMedia}
            ariaLabel="Antei website demo carousel"
          />
        </div>
      </div>
    </div>
  );
}

