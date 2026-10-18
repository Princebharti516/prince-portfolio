import { useEffect, useState } from "react";

// Types and deletes each phrase in turn. With reduced motion it shows the first phrase, static.
export default function Typewriter({ texts, className = "" }) {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const full = texts[index];
    let t;
    if (!deleting && count < full.length) t = setTimeout(() => setCount(count + 1), 65);
    else if (!deleting) t = setTimeout(() => setDeleting(true), 1700);
    else if (count > 0) t = setTimeout(() => setCount(count - 1), 30);
    else {
      setDeleting(false);
      setIndex((index + 1) % texts.length);
    }
    return () => clearTimeout(t);
  }, [count, deleting, index, texts, reduce]);

  return (
    <span className={`inline-block min-h-[1.6em] ${className}`}>
      <span className="sr-only">{texts.join(", ")}</span>
      <span aria-hidden="true">
        {reduce ? texts[0] : texts[index].slice(0, count)}
        {!reduce && <span className="caret" />}
      </span>
    </span>
  );
}
