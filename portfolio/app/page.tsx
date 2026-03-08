import { Footer } from "./components/Footer";
import { MonitorScene } from "./components/MonitorScene";
import { ProjectGrid } from "./components/ProjectGrid";
import { StickyNav } from "./components/StickyNav";

export default function Home() {
  return (
    <main className="relative min-h-screen px-6 py-16 lg:px-12">
      <StickyNav />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#3b82f6]/40 via-[#22d3ee]/15 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tl from-[#38bdf8]/30 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0c1420_0%,rgba(9,12,18,0.6)_40%,rgba(6,8,12,0.9)_90%)]" />
      </div>

      <div className="relative mx-auto flex max-w-[1140px] gap-10">
        <header className="relative z-10 flex flex-1 flex-col gap-12 lg:w-8/12">
          <section>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-sm ring-1 ring-white/10">
              Cyber‑minimalist portfolio
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bringing modern UI to life with Next.js & React.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200/90">
              High‑angle design, neon reflections, and sharp code focus — all in a
              single page. Explore a collection of projects built with performance,
              clarity, and an azure aesthetic in mind.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 ring-1 ring-white/10 transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 shadow-sm transition hover:border-white/30 hover:bg-white/10"
              >
                Contact me
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 shadow-sm transition hover:bg-white/20"
              >
                Download resume
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-3 text-sm text-slate-200/70">
              <span className="rounded-full bg-white/5 px-3 py-1">Next.js</span>
              <span className="rounded-full bg-white/5 px-3 py-1">React</span>
              <span className="rounded-full bg-white/5 px-3 py-1">TypeScript</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Tailwind</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Vercel</span>
            </div>
          </section>

          <section id="projects" className="relative">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Selected projects
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-200/80">
              A curated selection of work that demonstrates clean architecture,
              component-driven design, and pixel-perfect UI.
            </p>

            <ProjectGrid projects={projects} />
          </section>

          <section
            id="contact"
            className="relative mt-20 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          >
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Let’s build something together
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-200/80">
              I’m always excited to collaborate on projects that push the web
              forward. Reach out if you have a concept, a challenge, or just want to
              talk tech.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="mailto:hello@yourdomain.com"
                className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-6 transition hover:border-white/20 hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-white/80">Email</p>
                <p className="mt-2 text-base font-medium text-white">hello@yourdomain.com</p>
              </a>
              <a
                href="https://github.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-6 transition hover:border-white/20 hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-white/80">GitHub</p>
                <p className="mt-2 text-base font-medium text-white">github.com/yourhandle</p>
              </a>
              <a
                href="https://www.linkedin.com/in/yourhandle/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-6 transition hover:border-white/20 hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-white/80">LinkedIn</p>
                <p className="mt-2 text-base font-medium text-white">linkedin.com/in/yourhandle</p>
              </a>
              <div className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-6">
                <p className="text-sm font-semibold text-white/80">Location</p>
                <p className="mt-2 text-base font-medium text-white">Remote · UTC</p>
              </div>
            </div>
          </section>

          <Footer />
        </header>

        <section className="relative z-10 hidden w-4/12 lg:block">
          <MonitorScene />
        </section>
      </div>
    </main>
  );
}

const projects = [
  {
    name: "Quantum UI",
    description:
      "A component library built with Next.js, Tailwind, and motion-driven UI patterns. Includes design tokens, dark-mode themes, and responsive grids.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    href: "#",
  },
  {
    name: "Data Lens",
    description:
      "Interactive analytics dashboard with real-time charts, filtering controls, and export-ready reporting.",
    tags: ["React", "D3", "Postgres"],
    href: "#",
  },
  {
    name: "Streamline Docs",
    description:
      "Developer docs site with search-first navigation, code snippet sync, and a plugin-based markdown parser.",
    tags: ["Next.js", "MDX", "Algolia"],
    href: "#",
  },
];
