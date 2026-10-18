import { BookOpen, Briefcase, ExternalLink } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import usePageMeta from "../components/usePageMeta.js";
import { iconMap } from "../components/icons.js";
import { internship, ongoingLearning } from "../data/experience.js";

export default function Experience() {
  usePageMeta(
    "Experience & Learning | Prince Kumar",
    "Prince Kumar's AICTE–EduSkills Java Full Stack virtual internship and ongoing learning in DSA with C++ and the MERN stack."
  );

  const rows = [
    ["Program", internship.program],
    ["Role", internship.role],
    ["Duration", internship.duration],
    ["Program length", internship.length],
    ["Learning focus", internship.focus],
  ];

  return (
    <>
      <PageHeader
        title="Experience & Learning"
        subtitle="My learning journey, virtual internship, and ongoing development."
      />

      <section className="page-container page-section">
        <SectionHeading title="Virtual Internship" />
        <article className="card">
          <div className="flex flex-wrap items-center gap-3">
            <span className="icon-tile">
              <Briefcase size={22} aria-hidden="true" />
            </span>
            <h3 className="card-title text-xl">{internship.role}</h3>
            <span className="status-badge">{internship.status}</span>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">{internship.description}</p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {rows.map(([label, value]) => (
              <div key={label}>
                <dt className="text-sm text-slate-500">{label}</dt>
                <dd className="mt-0.5 text-slate-100">{value}</dd>
              </div>
            ))}
          </dl>
          {internship.credentialFile && (
            <Button href={internship.credentialFile} variant="secondary" className="mt-6">
              View Certificate <ExternalLink size={16} aria-hidden="true" />
              <span className="sr-only">(opens PDF in a new tab)</span>
            </Button>
          )}
        </article>
      </section>

      <section className="page-container page-section">
        <SectionHeading title="Ongoing Learning" description="Self-paced courses I'm following alongside my degree." />
        <div className="grid gap-5 md:grid-cols-2">
          {ongoingLearning.map((item) => {
            const Icon = iconMap[item.icon] ?? BookOpen;
            return (
              <article key={item.id} className="card card-hover">
                <div className="flex flex-wrap items-center gap-3">
                  <Icon size={22} className="text-cyan-300" aria-hidden="true" />
                  <h3 className="card-title">{item.title}</h3>
                  <span className="badge">Ongoing</span>
                </div>
                <dl className="mt-5 space-y-3">
                  {item.details.map((d) => (
                    <div key={d.label}>
                      <dt className="text-sm text-slate-500">{d.label}</dt>
                      <dd className="mt-0.5 text-slate-100">{d.value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-container page-section pb-20">
        <Button to="/certifications">View Certifications</Button>
      </section>
    </>
  );
}
