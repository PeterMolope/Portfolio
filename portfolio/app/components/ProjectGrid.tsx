import React from "react";

type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
};

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <a
          key={project.name}
          href={project.href}
          className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
        >
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition group-hover:text-white">
            View project
            <span aria-hidden>→</span>
          </span>
        </a>
      ))}
    </div>
  );
}
