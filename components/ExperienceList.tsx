import ScrollFadeIn from "./ScrollFadeIn";
import Chip from "./Chip";
import Rich from "./Rich";
import { ArrowUpRight } from "./Icons";
import type { ExperienceEntry } from "@/data/site";

export default function ExperienceList({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="relative space-y-6 sm:space-y-8">
      {/* Timeline rail */}
      <div className="absolute bottom-4 left-[7px] top-4 w-px bg-neutral-200 sm:left-[9px]" aria-hidden="true" />

      {entries.map((entry) => (
        <li key={entry.id} className="relative pl-9 sm:pl-14">
          <span
            className={`absolute left-0 top-8 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 bg-paper sm:h-[19px] sm:w-[19px] ${
              entry.featured ? "border-accent-bright" : "border-neutral-300"
            }`}
            aria-hidden="true"
          >
            {entry.featured && <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />}
          </span>

          <ScrollFadeIn>
            <div
              className={`relative overflow-hidden rounded-2xl border bg-white p-6 transition-shadow duration-300 hover:shadow-card sm:p-8 ${
                entry.featured ? "border-neutral-300 shadow-soft" : "border-neutral-200"
              }`}
            >
              {entry.featured && (
                <div className="absolute inset-x-0 top-0 h-1 bg-accent-bright" aria-hidden="true" />
              )}

              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div>
                  {entry.featured && (
                    <p className="mb-2 font-mono text-xs uppercase tracking-widest text-accent">Most recent</p>
                  )}
                  <h3
                    className={`font-serif tracking-tight text-ink ${
                      entry.featured ? "text-3xl sm:text-4xl" : "text-2xl"
                    }`}
                  >
                    {entry.href ? (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 transition-colors hover:text-accent"
                      >
                        {entry.company}
                        <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-accent" />
                      </a>
                    ) : (
                      entry.company
                    )}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-neutral-700 sm:text-base">{entry.role}</p>
                </div>
                <p className="whitespace-nowrap font-mono text-xs text-neutral-500 sm:pt-2">{entry.period}</p>
              </div>

              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-neutral-600">
                <Rich text={entry.summary} />
              </p>

              {entry.bullets.length > 0 && (
                <ul className="mt-4 max-w-3xl space-y-2.5">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[15px] leading-7 text-neutral-700">
                      <span className="mt-[11px] h-1.5 w-1.5 flex-none rounded-[2px] bg-accent-bright" />
                      <span>
                        <Rich text={bullet} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {entry.tags && entry.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              )}
            </div>
          </ScrollFadeIn>
        </li>
      ))}
    </ol>
  );
}
