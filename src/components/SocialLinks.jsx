import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "../data/site.js";

const linkClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-ink-800 text-slate-300 transition-colors hover:border-indigo-400/60 hover:text-white";

export default function SocialLinks({ withContact = false }) {
  return (
    <ul className="flex items-center gap-2" aria-label="Social links">
      <li>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="GitHub profile">
          <Github size={18} aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="LinkedIn profile">
          <Linkedin size={18} aria-hidden="true" />
        </a>
      </li>
      {withContact && (
        <>
          <li>
            <a href={`mailto:${site.email}`} className={linkClass} aria-label="Send an email">
              <Mail size={18} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={site.phoneHref} className={linkClass} aria-label="Call Prince Kumar">
              <Phone size={18} aria-hidden="true" />
            </a>
          </li>
        </>
      )}
    </ul>
  );
}
