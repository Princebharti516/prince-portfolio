import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { navLinks, site } from "../data/site.js";

const item = "inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-900">
      <div className="page-container grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl font-semibold text-white">{site.name}</p>
          <p className="mt-3 max-w-sm leading-relaxed text-slate-400">{site.footerText}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <p className="mb-4 text-sm font-medium text-white">Pages</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 md:grid-cols-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={item}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="mb-4 text-sm font-medium text-white">Get in touch</p>
          <ul className="space-y-2.5">
            <li>
              <a href={`mailto:${site.email}`} className={`${item} break-all`}>
                <Mail size={16} aria-hidden="true" className="shrink-0" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className={item}>
                <Phone size={16} aria-hidden="true" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className={item}>
                <Github size={16} aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={item}>
                <Linkedin size={16} aria-hidden="true" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="page-container py-5 text-xs text-slate-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
