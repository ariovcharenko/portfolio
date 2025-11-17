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
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="p-6 md:p-10">
        {/* Top part - Content */}
        <div className="mb-8">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              AI-Powered Search Tool
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
            Semantic Search Analysis App
          </h3>
          <p className="text-lg text-gray-700 mb-6 font-medium">
            An AI-powered product search tool with a custom evaluation framework for semantic understanding.
          </p>
          
          <ul className="list-disc list-inside space-y-3 mb-6 text-base md:text-lg text-gray-600">
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
            mediaItems={searchAnalysisMedia}
            ariaLabel="Search Analysis App demo carousel"
          />
          
          {/* Links */}
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://github.com/ariovcharenko/ai-shopping-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm bg-accent text-white rounded-full hover:bg-blue-600 transition-colors font-medium"
            >
              View App on GitHub
            </a>
            <a
              href="https://open.substack.com/pub/ariovcharenko/p/the-power-of-evals-teaching-ai-to?r=5fmti7&utm_campaign=post&utm_medium=web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm bg-lightGrey rounded-full text-gray-700 hover:bg-gray-200 transition font-medium"
            >
              Read Article: The Power of Evals
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

