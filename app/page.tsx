"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import HighlightCard from "@/components/HighlightCard";
import PitchPalCard from "@/components/PitchPalCard";
import GrowvioCard from "@/components/GrowvioCard";
import SearchAnalysisCard from "@/components/SearchAnalysisCard";
import AnteiCard from "@/components/AnteiCard";
import ChemECarCard from "@/components/ChemECarCard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 border-b border-neutral-900">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 mb-6">
                Arina Ovcharenko
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
                AI Engineer and Full-Stack Developer
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
                I build AI-powered products, evaluation frameworks, and clean user interfaces for
                startups and research teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 bg-sky-500 text-white rounded hover:bg-sky-400/80 transition-colors text-center"
                >
                  View Projects
                </a>
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-neutral-700 text-gray-200 rounded hover:bg-neutral-800 hover:border-neutral-600 transition-colors text-center"
                >
                  View Resume
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden relative bg-neutral-900 border border-neutral-800">
                  <Image
                    src="/images/me.jpeg"
                    alt="Arina Ovcharenko"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 25%' }}
                    priority
                  />
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-gray-300">Based in Chicago</p>
                <p className="text-gray-300">Open to AI startup internships – Summer 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Products Section */}
      <Section id="ai-products" title="AI Products and Startups">
        <div className="space-y-12 md:space-y-16">
          <PitchPalCard />
          <GrowvioCard />
        </div>
      </Section>

      {/* AI & Evaluation Projects */}
      <Section id="projects" title="AI and Evaluation Projects">
        <div className="space-y-8 md:space-y-12">
          <SearchAnalysisCard />
        </div>
      </Section>

      {/* Web Apps and Interfaces */}
      <Section id="web-apps" title="Web Apps and Interfaces">
        <div className="space-y-8 md:space-y-12">
          <ProjectCard
            title="IT Ticket Management App"
            description="A Java-based ticketing system with MySQL backend and role-based access."
            bullets={[
              "Created database tables in MySQL Workbench for trouble tickets and user credentials.",
              "Implemented a Java GUI with login and role-based access (admin vs regular users).",
              "Enabled CRUD operations for admins and scoped access for regular users.",
            ]}
            techTags={["Java", "MySQL", "Desktop App"]}
            images={[
              { src: "/images/sql1.jpeg", alt: "IT Ticket App – Login screen" },
              { src: "/images/sql2.jpeg", alt: "IT Ticket App – Admin ticket list" },
            ]}
          />
          <AnteiCard />
          <ChemECarCard />
        </div>
      </Section>

      {/* Research Section */}
      <Section id="research" title="Research and Experiments">
        <ProjectCard
          title="HallwAE – AR Hallway Conversations"
          description="User research for an augmented reality application that enables spontaneous hallway-style conversations remotely."
          bullets={[
            "Gathered user feedback and translated it into actionable research questions.",
            "Contributed insights to guide product decisions and improve human-computer interaction in AR environments.",
          ]}
          techTags={["HCI", "AR", "User Research"]}
          images={[
            { src: "/images/hall.jpg", alt: "HallwAE – AR research" },
            { src: "/images/hall3.jpeg", alt: "HallwAE – AR research" },
          ]}
          pdfLink="/attathment/pdfvr.pdf"
        />
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* AI & Data */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              AI AND DATA
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                NLP
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Semantic search
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Evaluation frameworks
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Prompt engineering
              </span>
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              BACKEND
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Python
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Java (Spring Boot)
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Node.js / Express
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                REST APIs
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                WebSockets
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                JWT
              </span>
            </div>
          </div>

          {/* Frontend */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              FRONTEND
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                React
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                TypeScript / JavaScript
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                HTML
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                CSS
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Responsive UI
              </span>
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              TOOLS
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Git / GitHub
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Docker
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Kubernetes
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                AWS / GCP
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                PostgreSQL / MySQL
              </span>
              <span className="px-2.5 py-0.5 text-xs rounded-full border border-neutral-700 text-gray-200">
                Figma
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-50 mb-2">
              Illinois Institute of Technology, Chicago, IL
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-1">
              Bachelor of Information Technology and Management, Minor in Artificial Intelligence
            </p>
            <p className="text-sm sm:text-base text-gray-300">Expected graduation: May 2027</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-50 mb-2">
              University of Roehampton, London, United Kingdom
            </h3>
            <p className="text-sm sm:text-base text-gray-300">Exchange Semester in Computer Science</p>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About">
        <div className="max-w-3xl">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            I'm an AI engineer and full-stack developer passionate about building AI-powered products
            and evaluation systems. I care deeply about UI clarity and developer experience,
            working on both startup projects and research initiatives. My focus is on creating
            practical, well-designed solutions that solve real problems.
          </p>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="max-w-2xl">
          <p className="text-sm sm:text-base text-gray-300 mb-8">
            Interested in working together on AI products or research? Get in touch.
          </p>
          <div className="space-y-4">
            <div>
              <a
                href="mailto:arinna.ovcharenko@gmail.com"
                className="text-sky-400 hover:text-sky-300 text-base md:text-lg transition-colors"
              >
                arinna.ovcharenko@gmail.com
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/arina-ovcharenko/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-neutral-700 text-gray-200 rounded hover:bg-neutral-800 hover:border-neutral-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/ariovcharenko"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-neutral-700 text-gray-200 rounded hover:bg-neutral-800 hover:border-neutral-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-neutral-900 py-8">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Arina Ovcharenko. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

