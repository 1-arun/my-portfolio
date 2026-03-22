import SectionTitle from "../components/layout/SectionTitle";
import projectsData from "../config/projects.config";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-12">
      <SectionTitle
        title="Featured Projects"
        subtitle="Crafting digital experiences with code and creativity"
      />

      <div className="mt-8 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/70 overflow-hidden">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`group px-5 py-6 sm:px-6 sm:py-7 ${
              index !== projectsData.length - 1
                ? "border-b border-gray-200 dark:border-zinc-800"
                : ""
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-gray-300 bg-gray-100 px-2 py-0.5 text-xs text-gray-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-gray-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-gray-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>

              <div className="w-full sm:w-56 md:w-64 lg:w-[260px] xl:w-[300px] h-32 sm:h-40 md:h-44 rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/80 shadow-sm">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-4">
                    <div className="h-full w-full rounded border border-zinc-700/60 bg-zinc-900/80" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
