import Image from "next/image";
import ScrollFadeIn from "./ScrollFadeIn";
import Chip from "./Chip";
import Rich from "./Rich";
import { ArrowUpRight } from "./Icons";
import type { MoreProject } from "@/data/site";

export default function MoreProjectCard({ project, delay = 0 }: { project: MoreProject; delay?: number }) {
  return (
    <ScrollFadeIn delay={delay} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-neutral-200 bg-neutral-100">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: project.imagePosition ?? "center" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</p>
            <p className="font-mono text-xs text-neutral-500">{project.period}</p>
          </div>
          <h4 className="mt-2 font-serif text-2xl tracking-tight text-ink">{project.title}</h4>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            <Rich text={project.description} />
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link group/link mt-5 inline-flex items-center gap-1 text-sm font-medium"
            >
              {project.link.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          )}
        </div>
      </article>
    </ScrollFadeIn>
  );
}
