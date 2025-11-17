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
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 border-b border-gray-100 relative overflow-hidden">
        {/* Subtle gradient blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 gradient-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 gradient-blob" style={{ animationDelay: '2s' }}></div>
        
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
                Arina Ovcharenko
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
                AI Engineer & Product Developer
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
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
                  className="px-8 py-3 bg-accent text-white rounded-full hover:bg-blue-600 transition-colors text-center font-medium shadow-soft hover:shadow-lg"
                >
                  View Projects
                </a>
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-300 text-charcoal rounded-full hover:bg-lightGrey transition-colors text-center font-medium"
                >
                  View Resume
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden relative bg-white border border-gray-200 shadow-card">
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
                <p className="text-gray-600 font-medium">Based in Chicago</p>
                <p className="text-gray-600">Open to AI startup internships – Summer 2026</p>
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
      <Section id="about" title="About" className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        <div className="relative z-10">
          <div className="max-w-3xl bg-white border border-gray-200 rounded-xl p-8 shadow-card">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I'm an AI engineer and full-stack developer passionate about building AI-powered products
              and evaluation systems. I care deeply about UI clarity and developer experience,
              working on both startup projects and research initiatives. My focus is on creating
              practical, well-designed solutions that solve real problems.
            </p>
          </div>
        </div>
      </Section>

      {/* Outside of Engineering Section */}
      <Section id="life-outside-tech" title="Outside of engineering" className="relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30"></div>
        <div className="relative z-10">
          <div className="max-w-3xl bg-white border border-gray-200 rounded-xl p-8 shadow-card">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Outside of engineering, I love staying active — I&apos;ve been going to the gym for 4 years, and I&apos;m also on the Illinois Tech Track &amp; Field team, running 100m and 200m sprints. Before that, I trained in acrobatic rock-n-roll for 11 years.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                I also studied at an art school and still draw when I have time. I&apos;m interested in philosophy and psychology, and I enjoy learning how people think and make decisions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact" className="relative overflow-hidden">
        {/* Subtle gradient halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 mb-8 text-center">
              Interested in working together on AI products or research? Get in touch.
            </p>
            <div className="space-y-6">
              <div className="text-center">
                <a
                  href="mailto:arinna.ovcharenko@gmail.com"
                  className="text-accent hover:text-blue-600 text-lg md:text-xl transition-colors font-medium"
                >
                  arinna.ovcharenko@gmail.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/arina-ovcharenko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-accent text-white rounded-full hover:bg-blue-600 transition-colors text-center font-medium shadow-soft hover:shadow-lg"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ariovcharenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-300 text-charcoal rounded-full hover:bg-lightGrey transition-colors text-center font-medium"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Arina Ovcharenko. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

