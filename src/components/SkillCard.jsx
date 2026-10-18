import { iconMap } from "./icons.js";

export default function SkillCard({ category }) {
  const Icon = iconMap[category.icon];
  return (
    <section className="card card-hover" aria-labelledby={`skill-${category.id}`}>
      <div className="flex items-center gap-3">
        <span className="icon-tile">
          {Icon && <Icon size={20} aria-hidden="true" />}
        </span>
        <h3 id={`skill-${category.id}`} className="card-title">
          {category.title}
        </h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <li key={item} className="badge">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
