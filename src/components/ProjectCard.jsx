import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Monitor } from "lucide-react";
import Button from "./Button.jsx";

// Browser-style frame around the screenshot, with thumbnails when a gallery exists.
function Gallery({ project }) {
  const images = project.gallery?.length ? project.gallery : project.image ? [{ src: project.image, alt: `Screenshot of ${project.title}` }] : [];
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState(false);
  const current = images[active];
  const host = project.demo ? project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "") : "preview";

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line-strong bg-ink-950">
        <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <i className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <i className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          </span>
          <span className="truncate rounded-md bg-ink-800 px-3 py-1 text-xs text-slate-500">{host}</span>
        </div>
        <div className="aspect-[16/8] bg-ink-900">
          {current && !broken ? (
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              loading="lazy"
              className="h-full w-full object-cover object-top"
              onError={() => setBroken(true)}
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-600">
              <Monitor size={28} aria-hidden="true" />
              <span className="text-xs">Screenshot not available</span>
            </div>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-2 sm:gap-3" aria-label="Project screenshots">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => { setActive(i); setBroken(false); }}
                aria-label={`Show screenshot: ${img.caption || img.alt}`}
                aria-pressed={i === active}
                className={`block w-full overflow-hidden rounded-lg border transition ${
                  i === active ? "border-indigo-300" : "border-line opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img.src} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover object-top" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {images[active]?.caption && <p className="mt-2 text-xs text-slate-500">{images[active].caption}</p>}
    </div>
  );
}

export default function ProjectCard({ project, detailsTo }) {
  const hasTech = project.technologies?.length > 0;
  return (
    <article data-reveal className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <Gallery project={project} />
      </div>

      <div className="flex flex-col lg:col-span-5 lg:py-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge">{project.category}</span>
          {project.status && <span className="status-badge">{project.status}</span>}
        </div>
        <h3 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed text-slate-400">{project.description}</p>

        {hasTech && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((t) => (
              <li key={t} className="badge">{t}</li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.demo && (
            <Button href={project.demo} variant="primary">
              Live Demo <ExternalLink size={16} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </Button>
          )}
          {detailsTo && (
            <Button to={detailsTo} variant="secondary">
              View Project <ArrowRight size={16} aria-hidden="true" />
            </Button>
          )}
          {project.github && (
            <Button href={project.github} variant="secondary">
              <Github size={16} aria-hidden="true" /> GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
