export default function PageHeader({ title, subtitle }) {
  return (
    <header className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
      />
      <div className="page-container relative py-16 sm:py-24">
        <h1 className="page-title max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">{subtitle}</p>}
      </div>
    </header>
  );
}
