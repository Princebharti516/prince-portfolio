import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Award, Briefcase, Download, GraduationCap } from "lucide-react";
import Button from "../components/Button.jsx";
import ProfileImage from "../components/ProfileImage.jsx";
import Typewriter from "../components/Typewriter.jsx";
import TechMarquee from "../components/TechMarquee.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import usePageMeta from "../components/usePageMeta.js";
import { projects } from "../data/projects.js";
import { learningSnapshot } from "../data/skills.js";
import { certifications } from "../data/certifications.js";
import { internship } from "../data/experience.js";
import { site } from "../data/site.js";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  usePageMeta(
    "Prince Kumar | IT Student & MERN Stack Developer",
    "Explore Prince Kumar's developer portfolio, frontend project, technical skills, learning journey, and programming certifications."
  );
  const featured = projects[0];

  return (
    <>
      {/* Hero — the one expressive moment: oversized type on a faint grid */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="page-container relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-12 lg:py-28">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={fade} className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink-900 px-3.5 py-1.5 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" aria-hidden="true" />
              Currently Learning &amp; Building
            </motion.p>
            <motion.h1 variants={fade} className="mt-7 text-[2.9rem] font-bold leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
              Hi, I'm
              <br />
              <span className="gradient-text">Prince Kumar.</span>
            </motion.h1>
            <motion.p variants={fade} className="mt-6 font-display text-xl text-slate-200 sm:text-2xl">
              <Typewriter texts={["B.Tech IT Student", "Aspiring MERN Stack Developer", "DSA Learner in C++", "Frontend Builder"]} />
            </motion.p>
            <motion.p variants={fade} className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              I'm a B.Tech Information Technology student exploring modern web development, building frontend
              projects, and strengthening my problem-solving skills through Data Structures and Algorithms in C++.
            </motion.p>
            <motion.p variants={fade} className="mt-4 max-w-xl leading-relaxed text-slate-500">
              Learning by building, improving through practice, and turning ideas into functional digital experiences.
            </motion.p>
            <motion.div variants={fade} className="mt-9 flex flex-wrap gap-3">
              <Button to="/projects">
                Explore My Projects <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button to="/about" variant="secondary">About Me</Button>
            </motion.div>
            <motion.div variants={fade} className="mt-9 flex items-center gap-4 border-t border-line pt-6">
              <SocialLinks />
              <a href={site.resume} download className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white">
                <Download size={16} aria-hidden="true" /> Download Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:max-w-md lg:justify-self-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <ProfileImage className="float-soft aspect-square w-[calc(100%-0.75rem)]" />
          </motion.div>
        </div>
      </section>

      {/* Education strip */}
      <section className="border-b border-line bg-ink-900/50">
        <div className="page-container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="icon-tile"><GraduationCap size={20} aria-hidden="true" /></span>
            <p className="text-slate-300">
              <span className="font-medium text-white">{site.degree}</span>
              <span className="text-slate-500"> · {site.institutionShort} · {site.duration}</span>
            </p>
          </div>
          <Button to="/about" variant="ghost" className="self-start sm:self-auto">
            Read my story <ArrowUpRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </section>

      <TechMarquee />

      {/* Featured project */}
      {featured && (
        <section className="page-container page-section">
          <SectionHeading title="Featured Project" description="My verified frontend project, live on the web." />
          <ProjectCard project={featured} detailsTo="/projects" />
        </section>
      )}

      {/* Learning snapshot — bento grid */}
      <section className="page-container page-section pt-0 sm:pt-4">
        <SectionHeading
          title="Learning Snapshot"
          description="Technologies I'm learning and practising — not a claim of mastery."
          action={<Button to="/skills" variant="secondary">All Skills <ArrowRight size={16} aria-hidden="true" /></Button>}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {learningSnapshot.map((row, i) => (
            <div
              key={row.label}
              className={`card card-hover ${i < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${i === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              <h3 className="card-title">{row.label}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <li key={item} className="badge">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button to="/projects" variant="ghost" className="!px-0">
            See what I've built <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* Experience + certificates */}
      <section className="page-container page-section pt-0 sm:pt-4">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card flex flex-col">
            <span className="icon-tile"><Briefcase size={20} aria-hidden="true" /></span>
            <h2 className="mt-5 text-xl font-semibold">{internship.role}</h2>
            <p className="meta-text mt-1.5">{internship.program} · {internship.duration}</p>
            <p className="mt-4 flex-1 leading-relaxed text-slate-400">{internship.description}</p>
            <Button to="/experience" variant="secondary" className="mt-6 self-start">View Experience</Button>
          </div>
          <div className="card flex flex-col">
            <span className="icon-tile"><Award size={20} aria-hidden="true" /></span>
            <h2 className="mt-5 text-xl font-semibold">Certifications</h2>
            <ul className="mt-4 flex-1 divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.id} className="py-3 first:pt-0">
                  <p className="text-slate-200">{c.title}</p>
                  <p className="meta-text">{c.issuer} · {c.date}</p>
                </li>
              ))}
            </ul>
            <Button to="/certifications" variant="secondary" className="mt-3 self-start">View Certifications</Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="page-container pb-20 sm:pb-28">
        <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-ink-900 px-6 py-14 sm:px-14 sm:py-20">
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-70" />
          <div className="relative max-w-2xl">
            <h2 className="text-4xl font-bold leading-[1.05] sm:text-5xl">Let's Build Something Meaningful</h2>
            <p className="mt-5 text-lg text-slate-400">
              I'm always interested in connecting with developers, discussing technology, and learning through
              practical projects.
            </p>
            <Button to="/contact" className="mt-8">Get In Touch <ArrowRight size={16} aria-hidden="true" /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
