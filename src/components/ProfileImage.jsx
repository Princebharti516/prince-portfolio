import { useState } from "react";
import { site } from "../data/site.js";

// Shows /profile-pic.png; falls back to initials if the file is missing.
export default function ProfileImage({ className = "" }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <div aria-hidden="true" className="absolute -inset-3 translate-x-3 translate-y-3 rounded-2xl border border-indigo-300/30" />
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-line-strong bg-ink-800">
        {failed ? (
          <div role="img" aria-label="Profile photo placeholder" className="flex h-full w-full items-center justify-center font-display text-6xl font-bold text-slate-300">
            {site.shortName}
          </div>
        ) : (
          <img
            src="/profile-pic.png"
            alt="Portrait of Prince Kumar in a dark blazer and white shirt"
            width="640"
            height="640"
            className="h-full w-full object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}
