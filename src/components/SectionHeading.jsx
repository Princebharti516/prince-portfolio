export default function SectionHeading({ title, description, action }) {
  return (
    <div data-reveal className="mb-10 flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="section-title">{title}</h2>
        {description && <p className="mt-3 max-w-xl text-slate-400">{description}</p>}
      </div>
      {action}
    </div>
  );
}
