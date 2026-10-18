import { Award, ExternalLink, FileQuestion } from "lucide-react";
import Button from "./Button.jsx";

export default function CertificateCard({ certificate }) {
  const hasFile = certificate.available && certificate.file;

  return (
    <article className="card card-hover flex flex-col">
      <span
        className={hasFile ? "icon-tile" : "icon-tile !text-slate-600"}
      >
        {hasFile ? <Award size={22} aria-hidden="true" /> : <FileQuestion size={22} aria-hidden="true" />}
      </span>

      <h3 className="card-title mt-4">{certificate.title}</h3>
      <p className="mt-1 text-sm text-slate-300">{certificate.issuer}</p>
      {certificate.date && <p className="meta-text mt-1">{certificate.date}</p>}

      <div className="mt-6 flex-1 content-end">
        {hasFile ? (
          <Button href={certificate.file} variant="secondary" className="w-full sm:w-auto">
            View Certificate <ExternalLink size={16} aria-hidden="true" />
            <span className="sr-only">(opens PDF in a new tab)</span>
          </Button>
        ) : (
          <p className="rounded-lg border border-dashed border-line px-3 py-2 text-sm text-slate-500">
            Certificate file has not been added yet.
          </p>
        )}
      </div>
    </article>
  );
}
