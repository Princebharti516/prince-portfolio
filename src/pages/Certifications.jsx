import PageHeader from "../components/PageHeader.jsx";
import CertificateCard from "../components/CertificateCard.jsx";
import usePageMeta from "../components/usePageMeta.js";
import { certifications } from "../data/certifications.js";

export default function Certifications() {
  usePageMeta(
    "Certifications | Prince Kumar",
    "Programming certificates earned by Prince Kumar: Basics of C++, Basics of Java, and the AICTE–EduSkills Java Full Stack virtual internship."
  );

  return (
    <>
      <PageHeader title="Certifications" subtitle="Programming certificates and learning milestones." />
      <section className="page-container page-section pb-20">
        {certifications.length === 0 ? (
          <p className="card text-slate-400">Certificates will appear here soon.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <CertificateCard key={c.id} certificate={c} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
