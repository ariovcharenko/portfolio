"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import PlatformProjectCard from "@/components/PlatformProjectCard";
import { MediaItem } from "@/components/ProjectMediaCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="py-24 lg:py-32 border-b border-neutral-200">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left side - Editorial text */}
            <div>
              {/* Name headline - smaller, more subtle */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal leading-tight">
                Arina Ovcharenko
              </h1>

              {/* Buttons - Black/neutral style */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition"
                >
                  View Projects
                </a>
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-6 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition"
                >
                  View Resume
                </a>
              </div>

              {/* Meta line */}
              <p className="text-xs text-neutral-500 mt-3 sm:mt-4">
                Based in Chicago
              </p>
            </div>

            {/* Right side - Large portrait card */}
            <div className="relative">
              <div className="relative rounded-3xl border border-neutral-200 bg-white shadow-sm overflow-hidden aspect-square">
                <Image
                  src="/images/me.jpeg"
                  alt="Arina Ovcharenko"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 20%' }}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Platform Style */}
      <Section id="projects">
        <ScrollFadeIn>
          <h2 className="text-3xl sm:text-4xl font-semibold text-charcoal mb-8 lg:mb-12">
            Selected Projects
          </h2>
        </ScrollFadeIn>
        <div className="space-y-8 md:space-y-12">
          {/* PitchPal */}
          <PlatformProjectCard
            category="AI Product · Interview Simulator"
            title="PitchPal"
            description="Voice + coding interview simulator for realistic practice. Built React frontend, Spring Boot backend with WebSockets, and integrated AI logic to adapt questions based on user responses."
            bullets={[
              "Built React frontend for resume upload, interview setup, and adaptive question flow",
              "Implemented Spring Boot backend with REST APIs, WebSockets, and secure JWT authentication",
              "Integrated AI logic to adapt questions based on user responses",
            ]}
            mediaItems={[
              { type: "video", src: "/videos/pitchpal-demo.mp4", label: "Log in & Setup" },
              { type: "image", src: "/images/pitchpal2.png", label: "Dashboard Overview" },
              { type: "image", src: "/images/pitchpal3.png", label: "Real-time Insights" },
              { type: "image", src: "/images/pitchpal4.png", label: "Interview Setup" },
              { type: "video", src: "/videos/pitchpal-interactive.mp4", label: "Interactive Experience" },
              { type: "image", src: "/images/pitchpal6.png", label: "Analytics View" },
              { type: "image", src: "/images/pitchpal7.png", label: "Performance Metrics" },
            ]}
            unmutedVideoIndices={[4]}
          />

          {/* Growvio */}
          <PlatformProjectCard
            category="AI Product · Business Growth"
            title="Growvio"
            description="AI that generates daily tasks to help founders grow their business. Co-founded product, led React frontend, and created branding and social media content."
            bullets={[
              "Co-founded product and led React frontend for dashboards and task views",
              "Built UI for daily AI-generated tasks and progress tracking",
              "Created branding and social media content to support growth",
            ]}
            mediaItems={[
              { type: "video", src: "/videos/growvio-demo.mp4", label: "Growvio Overview" },
              { type: "image", src: "/images/growvio2.png", label: "Dashboard View" },
              { type: "image", src: "/images/growvio3.png", label: "Task Management" },
              { type: "image", src: "/images/growvio4.png", label: "AI-Generated Tasks" },
              { type: "image", src: "/images/growvio5.png", label: "Progress Tracking" },
              { type: "image", src: "/images/growvio6.png", label: "Analytics Dashboard" },
            ]}
            links={[
              { label: "Visit Website", href: "https://growvio.app" },
              { label: "Instagram", href: "https://www.instagram.com/growvio.app/" },
            ]}
          />

          {/* Semantic Search Analysis */}
          <PlatformProjectCard
            category="AI Product · Evaluation"
            title="Semantic Search Analysis App"
            description="An AI-powered product search tool with a custom evaluation framework for semantic understanding. Achieved ~97% match accuracy across 100 user-like queries."
            bullets={[
              "Interprets natural language queries and returns relevant product matches using semantic filtering",
              "Designed a custom evaluation framework comparing AI outputs to manually defined expectations",
              "Achieved ~97% match accuracy across 100 user-like queries by iteratively refining prompts and normalization logic",
            ]}
            mediaItems={[
              { type: "image", src: "/images/sem-search1.png", label: "Query and results view" },
              { type: "image", src: "/images/sem-search2.png", label: "Search parameters and filters" },
              { type: "image", src: "/images/sem-search3.png", label: "Evaluation dashboard" },
            ]}
            links={[
              { label: "View App on GitHub", href: "https://github.com/ariovcharenko/ai-shopping-assistant" },
              { label: "Read Article: The Power of Evals", href: "https://open.substack.com/pub/ariovcharenko/p/the-power-of-evals-teaching-ai-to?r=5fmti7&utm_campaign=post&utm_medium=web" },
            ]}
          />

          {/* HallwAE Research */}
          <ScrollFadeIn>
            <div className="group bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              {/* Images grid - side by side */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 px-6 lg:px-8">
                <div className="relative rounded-3xl border border-neutral-200 overflow-hidden bg-white aspect-[4/3]">
                  <Image
                    src="/images/hall.jpg"
                    alt="HallwAE – AR research"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative rounded-3xl border border-neutral-200 overflow-hidden bg-white aspect-[4/3]">
                  <Image
                    src="/images/hall3.jpeg"
                    alt="HallwAE – AR research"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* TEXT AREA */}
              <div className="p-6 lg:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  Research · HCI
                </p>
                <h3 className="text-xl font-semibold text-charcoal mb-2">HallwAE – AR Hallway Conversations</h3>
                <p className="text-sm text-neutral-600 mt-1 mb-4 leading-relaxed">
                  User research for an augmented reality application that enables spontaneous hallway-style conversations remotely.
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4 text-xs text-neutral-500">
                  <li>Gathered user feedback and translated it into actionable research questions</li>
                  <li>Contributed insights to guide product decisions and improve human-computer interaction in AR environments</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/attathment/pdfvr.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-charcoal hover:text-neutral-600 transition-colors group/link"
                  >
                    View Research Paper
                    <svg
                      className="w-3 h-3 ml-1 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollFadeIn>

          {/* IT Ticket App */}
          <ScrollFadeIn>
            <div className="group bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              {/* Images grid - side by side */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 px-6 lg:px-8">
                <div className="relative rounded-3xl border border-neutral-200 overflow-hidden bg-white">
                  <Image
                    src="/images/sql1.jpeg"
                    alt="IT Ticket App – Login screen"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
                <div className="relative rounded-3xl border border-neutral-200 overflow-hidden bg-white">
                  <Image
                    src="/images/sql2.jpeg"
                    alt="IT Ticket App – Admin ticket list"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* TEXT AREA */}
              <div className="p-6 lg:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-2">
                  Web App · Desktop
                </p>
                <h3 className="text-xl font-semibold text-charcoal mb-2">IT Ticket Management App</h3>
                <p className="text-sm text-neutral-600 mt-1 mb-4 leading-relaxed">
                  A Java-based ticketing system with MySQL backend and role-based access.
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4 text-xs text-neutral-500">
                  <li>Created database tables in MySQL Workbench for trouble tickets and user credentials</li>
                  <li>Implemented a Java GUI with login and role-based access (admin vs regular users)</li>
                  <li>Enabled CRUD operations for admins and scoped access for regular users</li>
                </ul>
              </div>
            </div>
          </ScrollFadeIn>

          {/* Antei Website */}
          <PlatformProjectCard
            category="Web Design · Marketing"
            title="Antei Construction Formwork Website"
            description="A marketing site for a construction formwork rental company, designed and built end-to-end."
            bullets={[
              "Designed layout in Figma focused on clarity and navigation",
              "Implemented custom HTML/CSS and deployed via Hostinger",
              "Ensured responsive behavior for desktop and mobile",
            ]}
            mediaItems={[
              { type: "image", src: "/images/antei1.jpeg", label: "Homepage" },
              { type: "image", src: "/images/antei2.jpeg", label: "Product page" },
            ]}
          />

          {/* Chem-E-Car Website */}
          <PlatformProjectCard
            category="Web Design · Club Website"
            title="Chem-E-Car Club Website"
            description="The official website for the Chem-E-Car club, built to improve accessibility and communication."
            bullets={[
              "Co-designed and implemented a clean, informative layout for club information and updates",
              "Optimized for both desktop and mobile devices",
              "Supported ongoing updates as an active member of the organization",
            ]}
            mediaItems={[
              { type: "image", src: "/images/chem1.jpeg", label: "Homepage" },
              { type: "image", src: "/images/chem2.jpeg", label: "Club information" },
              { type: "image", src: "/images/chem3.jpeg", label: "Club updates" },
            ]}
          />
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI & Data */}
          <div className="rounded-xl border border-gray-200 bg-lightGrey p-6 shadow-soft">
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
              AI AND DATA
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                NLP
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Semantic search
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Evaluation frameworks
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Prompt engineering
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-xl border border-gray-200 bg-lightGrey p-6 shadow-soft">
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
              BACKEND
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Python
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Java (Spring Boot)
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Node.js / Express
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                REST APIs
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                WebSockets
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                JWT
              </span>
            </div>
          </div>

          {/* Frontend */}
          <div className="rounded-xl border border-gray-200 bg-lightGrey p-6 shadow-soft">
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
              FRONTEND
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                React
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                TypeScript / JavaScript
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                HTML
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                CSS
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Responsive UI
              </span>
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-xl border border-gray-200 bg-lightGrey p-6 shadow-soft md:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-accent mb-4">
              TOOLS
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Git / GitHub
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Docker
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Kubernetes
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                AWS / GCP
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                PostgreSQL / MySQL
              </span>
              <span className="px-3 py-1.5 text-xs rounded-full bg-white text-gray-700 font-medium shadow-soft">
                Figma
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-soft">
            <h3 className="text-xl font-bold text-charcoal mb-2">
              Illinois Institute of Technology, Chicago, IL
            </h3>
            <p className="text-base text-gray-700 mb-1">
              Bachelor of Information Technology and Management, Minor in Artificial Intelligence
            </p>
            <p className="text-base text-gray-600">Expected graduation: May 2027</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-soft">
            <h3 className="text-xl font-bold text-charcoal mb-2">
              University of Roehampton, London, United Kingdom
            </h3>
            <p className="text-base text-gray-700">Exchange Semester in Computer Science</p>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About">
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
            I'm an AI engineer and full-stack developer passionate about building AI-powered products
            and evaluation systems. I care deeply about UI clarity and developer experience,
            working on both startup projects and research initiatives. My focus is on creating
            practical, well-designed solutions that solve real problems.
          </p>
        </div>
      </Section>

      {/* Outside of Engineering Section */}
      <Section id="life-outside-tech" title="Outside of engineering">
        <div className="max-w-3xl">
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Outside of engineering, I love staying active — I&apos;ve been going to the gym for 4 years, and I&apos;m also on the Illinois Tech Track &amp; Field team, running 100m and 200m sprints. Before that, I trained in acrobatic rock-n-roll for 11 years.
            </p>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              I also studied at an art school and still draw when I have time. I&apos;m interested in philosophy and psychology, and I enjoy learning how people think and make decisions.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            {/* Email */}
            <div>
              <a
                href="mailto:arinna.ovcharenko@gmail.com"
                className="inline-flex items-center text-charcoal hover:text-neutral-600 text-lg md:text-xl transition-colors font-medium"
              >
                arinna.ovcharenko@gmail.com
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.linkedin.com/in/arina-ovcharenko/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ariovcharenko"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-neutral-900 px-6 py-2.5 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

    </main>
  );
}

