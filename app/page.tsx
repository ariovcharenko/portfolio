import Image from "next/image";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Section from "@/components/Section";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import Typewriter from "@/components/Typewriter";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import SpotlightCard from "@/components/SpotlightCard";
import ExperienceList from "@/components/ExperienceList";
import FeaturedProject from "@/components/FeaturedProject";
import MoreProjectCard from "@/components/MoreProjectCard";
import Chip from "@/components/Chip";
import Rich from "@/components/Rich";
import CopyEmail from "@/components/CopyEmail";
import { ArrowUpRight } from "@/components/Icons";
import {
  profile,
  stats,
  heroPhrases,
  strengths,
  stackTicker,
  experience,
  featuredProjects,
  moreProjects,
  skillGroups,
  education,
  aboutPoints,
  outsidePoints,
} from "@/data/site";

// Each word slides up out of its own mask; `start` offsets the stagger.
function RiseWords({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span className="rise" style={{ animationDelay: `${start + i * 110}ms` }}>
            {word}
          </span>{" "}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
        <div className="bg-dots absolute inset-x-0 top-0 h-[38rem]" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p
                className="fade-up inline-flex items-center gap-2.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700"
                style={{ animationDelay: "50ms" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for full-time roles · Open to relocation · Graduating May 2027
              </p>

              <h1 className="mt-7 font-serif text-[3.25rem] leading-[0.98] tracking-tight text-ink sm:text-7xl lg:text-[5.5rem]">
                <RiseWords text="Arina" start={150} />
                <br />
                <RiseWords text="Ovcharenko" start={260} />
              </h1>

              <p
                className="fade-up mt-6 text-xl font-medium text-ink sm:text-2xl"
                style={{ animationDelay: "650ms" }}
              >
                Software engineer.
              </p>
              <p
                className="fade-up mt-1 min-h-[3.75rem] max-w-xl text-xl leading-8 text-neutral-600 sm:min-h-[4rem] sm:text-2xl sm:leading-9"
                style={{ animationDelay: "750ms" }}
              >
                I <Typewriter phrases={heroPhrases} className="text-neutral-800" />
              </p>

              <p
                className="fade-up mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8"
                style={{ animationDelay: "850ms" }}
              >
                Recently a <strong className="font-semibold text-ink">software engineering intern at Xsolla</strong>,
                where I <strong className="font-semibold text-ink">shipped six features</strong> in a{" "}
                <strong className="font-semibold text-ink">React Native</strong> app used on mobile and web.
                Studying <strong className="font-semibold text-ink">IT &amp; Management</strong> (AI minor) at
                Illinois Tech, and looking for my{" "}
                <strong className="font-semibold text-ink">first full-time engineering role</strong>.
              </p>

              <div
                className="fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                style={{ animationDelay: "950ms" }}
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
                >
                  See my work
                  <span className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
                    ↓
                  </span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  Email me
                </a>
                <span className="hidden h-6 w-px bg-neutral-300 sm:block" aria-hidden="true" />
                <div className="flex items-center gap-5 text-sm font-medium">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link inline-flex items-center gap-1"
                  >
                    GitHub
                    <ArrowUpRight />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link inline-flex items-center gap-1"
                  >
                    LinkedIn
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>

            {/* Portrait */}
            <div className="fade-up flex justify-center lg:col-span-5 lg:justify-end" style={{ animationDelay: "400ms" }}>
              <div className="portrait-wrap relative w-full max-w-[19rem] sm:max-w-sm">
                <div
                  className="portrait-back absolute inset-0 rounded-2xl bg-accent-soft ring-1 ring-accent-bright/20"
                  aria-hidden="true"
                />
                <div className="portrait-tilt relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card">
                  <Image
                    src="/images/me.jpeg"
                    alt="Arina Ovcharenko"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 20%" }}
                    priority
                    sizes="(max-width: 1024px) 320px, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <ScrollFadeIn className="mt-20 sm:mt-24">
            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft lg:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-5 sm:p-7 ${i % 2 === 1 ? "border-l border-neutral-200" : ""} ${
                    i > 1 ? "border-t border-neutral-200 lg:border-t-0" : ""
                  } ${i > 0 ? "lg:border-l lg:border-neutral-200" : ""}`}
                >
                  <dt className="font-serif text-5xl tracking-tight text-ink sm:text-6xl">
                    <CountUp to={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-snug text-ink">{stat.label}</dd>
                  <dd className="mt-0.5 text-xs leading-snug text-neutral-500">{stat.note}</dd>
                </div>
              ))}
            </dl>
          </ScrollFadeIn>
        </div>
      </section>

      <div className="border-y border-neutral-200 bg-white">
        <Marquee items={stackTicker} />
      </div>

      {/* Strengths */}
      <Section
        id="strengths"
        index="01"
        label="Strengths"
        title="What I bring to a team"
        description="The habits that show up in my work: shipping, testing, and knowing whether something actually works."
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, i) => (
            <ScrollFadeIn key={item.title} delay={(i % 3) * 90} className="h-full">
              <SpotlightCard className="h-full rounded-2xl border border-neutral-200 bg-white transition-colors duration-300 hover:border-neutral-400">
                <div className="p-6 sm:p-7">
                  <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-neutral-600">
                    <Rich text={item.body} />
                  </p>
                </div>
              </SpotlightCard>
            </ScrollFadeIn>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        index="02"
        label="Experience"
        title="Where I've been building"
        description="Industry experience, products I've started, and research I've contributed to."
        className="border-t border-neutral-200 bg-white"
      >
        <ExperienceList entries={experience} />
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        index="03"
        label="Projects"
        title="Selected work"
        description="Products I've designed and built end to end. Click through the screenshots and demo videos."
      >
        <div className="space-y-8 sm:space-y-10">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        <ScrollFadeIn className="mb-8 mt-20">
          <h3 className="font-serif text-3xl tracking-tight text-ink">Earlier work</h3>
          <p className="mt-2 text-neutral-600">Research, desktop, and web projects from my first years of college.</p>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
          {moreProjects.map((project, i) => (
            <MoreProjectCard key={project.id} project={project} delay={(i % 2) * 100} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        index="04"
        label="Skills"
        title="What I work with"
        description="Tools I've used in internship and project work, grouped by where they show up in the stack."
        className="border-t border-neutral-200 bg-white"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <ScrollFadeIn key={group.title} delay={(i % 3) * 80} className="h-full">
              <div className="h-full rounded-2xl border border-neutral-200 bg-paper p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn className="mt-16">
          <h3 className="mb-6 font-serif text-3xl tracking-tight text-ink">Education</h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.school} className="rounded-2xl border border-neutral-200 bg-paper p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-serif text-2xl tracking-tight text-ink">{item.school}</h4>
                    <p className="text-sm text-neutral-500">{item.place}</p>
                  </div>
                  <p className="whitespace-nowrap pt-1.5 font-mono text-xs text-neutral-500">{item.period}</p>
                </div>
                <p className="mt-4 text-[15px] font-medium text-neutral-800">{item.degree}</p>
                <p className="mt-1 text-sm text-neutral-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </Section>

      {/* About */}
      <Section id="about" index="05" label="About" title="A bit about me">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollFadeIn>
            <ul className="space-y-5">
              {aboutPoints.map((point) => (
                <li key={point.label} className="flex gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-[2px] bg-accent-bright" />
                  <p className="text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
                    <strong className="font-semibold text-ink">{point.label}</strong> {point.text}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              <h3 className="font-serif text-2xl tracking-tight text-ink">Outside of engineering</h3>
              <ul className="mt-4 space-y-3 text-[15px] leading-7 text-neutral-600">
                {outsidePoints.map((point) => (
                  <li key={point.label}>
                    <strong className="font-semibold text-ink">{point.label}</strong> {point.text}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFadeIn>
        </div>
      </Section>

      {/* Contact */}
      <section id="contact" className="px-5 pb-12 pt-8 sm:px-8 sm:pb-16">
        <ScrollFadeIn>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-neutral-200 bg-white px-6 py-16 text-center shadow-card sm:px-12 sm:py-24">
            <div className="bg-dots absolute inset-0 opacity-70" aria-hidden="true" />
            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">06 / Contact</p>
              <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl tracking-tight text-ink sm:text-6xl">
                Let&apos;s talk about your next engineering hire.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
                I&apos;m looking for a full-time software engineering role and I&apos;m open to relocating.
                Email is the fastest way to reach me.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-center rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
                >
                  {profile.email}
                </a>
                <CopyEmail email={profile.email} />
              </div>

              <div className="mt-6 flex items-center justify-center gap-6 text-sm font-medium">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ArrowUpRight />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-1"
                >
                  GitHub
                  <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        <p className="mt-10 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js and Tailwind
        </p>
      </section>
    </main>
  );
}
