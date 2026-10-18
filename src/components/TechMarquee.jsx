import { skillCategories } from "../data/skills.js";

// Slow, pausable strip of the technologies listed on the Skills page.
const items = [...new Set(skillCategories.flatMap((c) => c.items))];

export default function TechMarquee() {
  return (
    <section aria-label="Technologies I'm learning and using" className="marquee-mask overflow-hidden border-b border-line bg-ink-900/40 py-5">
      <div className="marquee-track flex w-max">
        {[...items, ...items].map((t, i) => (
          <span key={`${t}-${i}`} aria-hidden={i >= items.length} className="badge mr-3 !px-4 !py-2 !text-sm">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
