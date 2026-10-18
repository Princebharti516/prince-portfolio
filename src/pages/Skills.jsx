import PageHeader from "../components/PageHeader.jsx";
import SkillCard from "../components/SkillCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import usePageMeta from "../components/usePageMeta.js";
import { iconMap } from "../components/icons.js";
import { skillCategories, learningFocus } from "../data/skills.js";

export default function Skills() {
  usePageMeta(
    "Technical Skills | Prince Kumar",
    "Technologies Prince Kumar is learning and using: C++, Java, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB and more."
  );

  return (
    <>
      <PageHeader
        title="Technical Skills"
        subtitle="Technologies I'm learning and using to develop my programming and web development skills."
      />

      <section className="page-container page-section">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="page-container page-section">
        <SectionHeading title="Learning Focus" description="What I'm prioritising right now." />
        <div className="grid gap-5 md:grid-cols-3">
          {learningFocus.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="card card-hover">
                {Icon && <Icon size={22} className="text-cyan-300" aria-hidden="true" />}
                <h3 className="card-title mt-4">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="page-container page-section pb-20">
        <Button to="/projects">See What I've Built</Button>
      </section>
    </>
  );
}
