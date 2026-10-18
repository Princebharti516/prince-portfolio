import { Code2, Compass, GraduationCap, Puzzle, Rocket, Sparkles, Globe, Lightbulb } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import usePageMeta from "../components/usePageMeta.js";
import { site } from "../data/site.js";

const journey = [
  "Learning programming fundamentals",
  "Practising DSA using C++",
  "Building a hospital-related frontend website",
  "Exploring React and the MERN stack",
  "Continuing to build and improve projects",
];

const interests = [
  { title: "Web Development", icon: Globe },
  { title: "Programming", icon: Code2 },
  { title: "Problem-Solving", icon: Puzzle },
  { title: "Learning New Technologies", icon: Lightbulb },
];

export default function About() {
  usePageMeta(
    "About | Prince Kumar",
    "Learn about Prince Kumar, a B.Tech IT student at BIHER Chennai learning web development, the MERN stack, and DSA in C++."
  );

  return (
    <>
      <PageHeader
        title="About Me"
        subtitle="An IT student learning through programming, experimentation, and practical web development."
      />

      <section className="page-container page-section">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 text-lg leading-relaxed text-slate-300 lg:col-span-3">
            <p>
              I'm Prince Kumar, a B.Tech Information Technology student at Bharath Institute of Higher Education and
              Research, Chennai.
            </p>
            <p>
              I'm interested in software development, web technologies, and problem-solving. I'm building my
              understanding of modern frontend development while exploring the MERN stack and practising Data
              Structures and Algorithms in C++.
            </p>
            <p>
              I believe consistent practice and building real projects are important parts of becoming a better
              developer. My current focus is strengthening my programming fundamentals, improving my frontend
              development skills, and gradually building more complete web applications.
            </p>
            <p>
              My long-term goal is to grow into a capable software developer with strong fundamentals and practical
              development experience.
            </p>
          </div>

          <aside className="card h-fit lg:col-span-2" aria-labelledby="education-heading">
            <span className="icon-tile">
              <GraduationCap size={22} aria-hidden="true" />
            </span>
            <h2 id="education-heading" className="card-title mt-4">
              Education
            </h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-slate-500">Degree</dt>
                <dd className="mt-0.5 text-slate-100">{site.degree}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Institution</dt>
                <dd className="mt-0.5 text-slate-100">{site.institutionShort}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Duration</dt>
                <dd className="mt-0.5 text-slate-100">{site.duration}</dd>
              </div>
              <div>
                <dt className="text-slate-500">Focus areas</dt>
                <dd className="mt-0.5 text-slate-100">Programming, Web Development, and DSA</dd>
              </div>
              <div>
                <dt className="text-slate-500">Earlier education</dt>
                <dd className="mt-0.5 text-slate-100">{site.earlierEducation}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="page-container page-section">
        <SectionHeading title="Relevant Coursework" description="Subjects from my B.Tech program that shape my fundamentals." />
        <ul className="flex flex-wrap gap-3">
          {site.coursework.map((c) => (
            <li key={c} className="card !px-4 !py-2.5 text-sm font-medium text-slate-200">{c}</li>
          ))}
        </ul>
      </section>

      <section className="page-container page-section">
        <SectionHeading title="Development Journey" description="A learning path, step by step." />
        <ol className="relative ml-3 space-y-6 border-l border-line">
          {journey.map((step, i) => (
            <li key={step} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-400 bg-ink-950"
              />
              <p className="meta-text">Step {i + 1}</p>
              <p className="mt-0.5 text-lg text-white">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-container page-section">
        <SectionHeading title="Interests" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {interests.map(({ title, icon: Icon }) => (
            <li key={title} className="card card-hover flex items-center gap-3">
              <Icon size={20} className="shrink-0 text-cyan-300" aria-hidden="true" />
              <span className="font-medium text-white">{title}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-container page-section pb-20">
        <div className="flex flex-wrap gap-3">
          <Button to="/skills">
            <Sparkles size={16} aria-hidden="true" /> View Skills
          </Button>
          <Button to="/projects" variant="secondary">
            <Rocket size={16} aria-hidden="true" /> See Projects
          </Button>
          <Button to="/contact" variant="secondary">
            <Compass size={16} aria-hidden="true" /> Contact Me
          </Button>
        </div>
      </section>
    </>
  );
}
