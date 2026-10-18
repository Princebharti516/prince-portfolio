import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// For GitHub Pages under a repo path, set `base: "/your-repo-name/"` (see README).
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
