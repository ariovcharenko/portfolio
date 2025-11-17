"use client";

import ProjectMediaCarousel, { MediaItem } from "./ProjectMediaCarousel";

const growvioMedia: MediaItem[] = [
  {
    type: "video",
    src: "/videos/growvio-demo.mp4",
    label: "Growvio Overview",
  },
  {
    type: "image",
    src: "/images/growvio2.png",
    label: "Dashboard View",
  },
  {
    type: "image",
    src: "/images/growvio3.png",
    label: "Task Management",
  },
  {
    type: "image",
    src: "/images/growvio4.png",
    label: "AI-Generated Tasks",
  },
  {
    type: "image",
    src: "/images/growvio5.png",
    label: "Progress Tracking",
  },
  {
    type: "image",
    src: "/images/growvio6.png",
    label: "Analytics Dashboard",
  },
];

export default function GrowvioCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="p-6 md:p-10">
        {/* Top part - Content */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              AI Business Growth Coach
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
            Growvio – AI Business Growth Coach
          </h3>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            AI that generates daily tasks to help founders grow their business.
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg text-gray-600">
            <li>
              Co-founded product and led React frontend for dashboards and task views.
            </li>
            <li>
              Built UI for daily AI-generated tasks and progress tracking.
            </li>
            <li>
              Created branding and social media content to support growth.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "AI", "Product Design"].map((tag) => (
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
            mediaItems={growvioMedia}
            ariaLabel="Growvio demo carousel"
            // All videos muted by default (growvio-demo.mp4 at index 0 is muted)
          />
        </div>

        {/* Social Media & Branding section - after the demo */}
        <section className="mt-10">
          <div className="border-l-2 border-accent pl-6">
            <h3 className="text-sm font-semibold text-charcoal mb-2">
              Social Media & Branding
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              In addition to full-stack development and product design, I also manage Growvio&apos;s social media content and branding strategy.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="https://growvio.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm bg-lightGrey rounded-full text-gray-700 hover:bg-gray-200 transition font-medium"
              >
                Visit Website
              </a>
              <a
                href="https://www.instagram.com/growvio.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm bg-lightGrey rounded-full text-gray-700 hover:bg-gray-200 transition font-medium"
              >
                Instagram
              </a>
              <a
                href="https://www.instagram.com/reel/DQHYwNrinOK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm bg-lightGrey rounded-full text-gray-700 hover:bg-gray-200 transition font-medium"
              >
                View Instagram Reel
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

