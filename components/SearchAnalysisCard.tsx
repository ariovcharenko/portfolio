"use client";

import ProjectMediaCarousel, { MediaItem } from "./ProjectMediaCarousel";

const searchAnalysisMedia: MediaItem[] = [
  {
    type: "image",
    src: "/images/sem-search1.png",
    label: "Query and results view",
  },
  {
    type: "image",
    src: "/images/sem-search2.png",
    label: "Search parameters and filters",
  },
  {
    type: "image",
    src: "/images/sem-search3.png",
    label: "Evaluation dashboard",
  },
];

export default function SearchAnalysisCard() {
  return (
    <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden hover:border-sky-500/60 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition">
      <div className="p-6 md:p-10">
        {/* Top part - Content */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-sky-400">
              AI-Powered Search Tool
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-50 mb-3">
            Semantic Search Analysis App
          </h3>
          <p className="text-lg text-gray-300 mb-6 font-medium">
            An AI-powered product search tool with a custom evaluation framework for semantic understanding.
          </p>
          
          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg text-gray-300">
            <li>
              Interprets natural language queries and returns relevant product matches using semantic filtering.
            </li>
            <li>
              Designed a custom evaluation framework comparing AI outputs to manually defined expectations.
            </li>
            <li>
              Achieved ~97% match accuracy across 100 user-like queries by iteratively refining prompts and normalization logic.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {["Python", "Semantic Search", "Evaluation", "AI"].map((tag) => (
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
            title="See Search Analysis App in Action"
            mediaItems={searchAnalysisMedia}
            ariaLabel="Search Analysis App demo carousel"
          />
          
          {/* Links */}
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://github.com/ariovcharenko/ai-shopping-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm border border-neutral-700 rounded-full text-gray-300 hover:border-sky-500 hover:text-sky-300 transition"
            >
              View App on GitHub
            </a>
            <a
              href="https://open.substack.com/pub/ariovcharenko/p/the-power-of-evals-teaching-ai-to?r=5fmti7&utm_campaign=post&utm_medium=web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm border border-neutral-700 rounded-full text-gray-300 hover:border-sky-500 hover:text-sky-300 transition"
            >
              Read Article: The Power of Evals
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

