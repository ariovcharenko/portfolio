import ProjectMediaCarousel from "./ProjectMediaCarousel";
import ScrollFadeIn from "./ScrollFadeIn";
import Chip from "./Chip";
import Rich from "./Rich";
import { ArrowUpRight } from "./Icons";
import type { FeaturedProjectData } from "@/data/site";

interface FeaturedProjectProps {
  project: FeaturedProjectData;
  index: number;
}

export default function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const reversed = index % 2 === 1;

  return (
    <ScrollFadeIn>
      <article className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <p className="text-right font-mono text-xs text-neutral-500">
            {project.role}, {project.period}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className={`min-w-0 lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
            <ProjectMediaCarousel
              mediaItems={project.media}
              ariaLabel={`${project.title} media`}
              unmutedVideoIndices={project.unmutedVideoIndices}
            />
          </div>

          <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
            <h3 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">{project.title}</h3>
            <p className="mt-3 text-base leading-7 text-neutral-600">
              <Rich text={project.description} />
            </p>

            <ul className="mt-5 space-y-2.5">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-neutral-600">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-[2px] bg-accent-bright" />
                  <span>
                    <Rich text={bullet} />
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link group/link inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </ScrollFadeIn>
  );
}
