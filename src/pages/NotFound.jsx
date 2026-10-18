import Button from "../components/Button.jsx";
import usePageMeta from "../components/usePageMeta.js";

export default function NotFound() {
  usePageMeta("Page Not Found | Prince Kumar", "The page you're looking for doesn't exist.");
  return (
    <section className="page-container flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="font-display text-7xl font-bold gradient-text">404</p>
      <h1 className="mt-4 text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-400">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button to="/" className="mt-8">
        Back to Home
      </Button>
    </section>
  );
}
