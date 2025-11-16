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
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden hover:border-sky-500/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition">
      <div className="p-6 md:p-10">
        {/* Top part - Content */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-sky-400">
              AI Business Growth Coach
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-50 mb-3">
            Growvio – AI Business Growth Coach
          </h3>
          <p className="text-lg text-gray-300 mb-6 font-medium">
            AI that generates daily tasks to help founders grow their business.
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg text-gray-300">
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
            title="See Growvio in Action"
            mediaItems={growvioMedia}
            ariaLabel="Growvio demo carousel"
            // All videos muted by default (growvio-demo.mp4 at index 0 is muted)
          />
        </div>

        {/* Social Media & Branding section - after the demo */}
        <section className="mt-10">
          <div className="border-l-2 border-neutral-800 pl-6">
            <h3 className="text-sm font-semibold text-gray-50 mb-2">
              Social Media & Branding
            </h3>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              In addition to full-stack development and product design, I also manage Growvio&apos;s social media content and branding strategy.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="https://growvio.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm border border-neutral-700 rounded-full text-gray-300 hover:border-sky-500 hover:text-sky-300 transition"
              >
                Visit Website
              </a>
              <a
                href="https://www.instagram.com/growvio.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm border border-neutral-700 rounded-full text-gray-300 hover:border-sky-500 hover:text-sky-300 transition"
              >
                Instagram
              </a>
              <a
                href="https://www.instagram.com/reel/DQHYwNrinOK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 text-sm border border-neutral-700 rounded-full text-gray-300 hover:border-sky-500 hover:text-sky-300 transition"
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

