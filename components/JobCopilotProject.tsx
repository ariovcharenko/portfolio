import Image from "next/image";
import ScrollFadeIn from "./ScrollFadeIn";
import Chip from "./Chip";
import { ArrowUpRight } from "./Icons";
import type { JobCopilotData } from "@/data/site";

export default function JobCopilotProject({ project }: { project: JobCopilotData }) {
  return (
    <ScrollFadeIn>
      <article className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-8">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">01 · {project.category}</p>
          <p className="text-right font-mono text-xs text-neutral-500">
            {project.role}, {project.period}
          </p>
        </div>

        <h3 className="mt-6 font-serif text-3xl tracking-tight text-ink sm:text-4xl">{project.title}</h3>
        <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">{project.pitch}</p>

        {/* How it works: one screenshot per step, alternating sides on wide screens */}
        <ol className="mt-8 space-y-10 sm:space-y-12">
          {project.steps.map((step, i) => (
            <li key={step.title} className="grid grid-cols-1 items-center gap-5 lg:grid-cols-12 lg:gap-10">
              <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  Step {i + 1}
                </p>
                <h4 className="mt-2 text-xl font-semibold tracking-tight text-ink">{step.title}</h4>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{step.description}</p>
              </div>
              <div className={`min-w-0 lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 shadow-soft">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={step.width}
                    height={step.height}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-xs italic text-neutral-400">{project.disclaimer}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>

        <p className="mt-4 font-mono text-xs leading-6 text-neutral-500">{project.tech}</p>

        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
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
      </article>
    </ScrollFadeIn>
  );
}
