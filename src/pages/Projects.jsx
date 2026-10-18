import { Github } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Button from "../components/Button.jsx";
import usePageMeta from "../components/usePageMeta.js";
import { projects } from "../data/projects.js";
import { site } from "../data/site.js";

export default function Projects() {
  usePageMeta(
    "Projects | Prince Kumar",
    "Projects built by Prince Kumar while learning frontend development, including a live hospital website."
  );

  return (
    <>
      <PageHeader
        title="My Projects"
        subtitle="Projects I've worked on while learning frontend development and building practical programming skills."
      />

      <section className="page-container page-section">
        {projects.length === 0 ? (
          <p className="card text-slate-400">Projects will appear here soon.</p>
        ) : (
          <div className="space-y-16">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-400">More projects are in progress. Follow along on GitHub.</p>
          <Button href={site.github} variant="secondary">
            <Github size={16} aria-hidden="true" /> Visit My GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </Button>
        </div>
      </section>
    </>
  );
}
