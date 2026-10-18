// `icon` is a key into the icon map in components/icons.js.
export const skillCategories = [
  { id: "languages", title: "Programming Languages", icon: "code", items: ["C++", "Java", "JavaScript"] },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "monitor",
    items: ["HTML5", "CSS3", "Responsive Web Design", "Tailwind CSS", "React.js"],
  },
  { id: "backend", title: "Backend Development", icon: "server", items: ["Node.js", "Express.js"] },
  { id: "databases", title: "Databases", icon: "database", items: ["MongoDB"] },
  {
    id: "tools",
    title: "Developer Tools",
    icon: "wrench",
    items: ["Visual Studio Code", "Git", "GitHub", "npm"],
  },
  { id: "hosting", title: "Hosting and Deployment", icon: "cloud", items: ["Vercel", "Netlify", "GitHub Pages"] },
];

export const learningFocus = [
  {
    title: "DSA in C++",
    icon: "puzzle",
    text: "Practising programming fundamentals, loops, patterns, arrays, and problem-solving.",
  },
  {
    title: "Frontend Development",
    icon: "monitor",
    text: "Learning to build responsive interfaces and reusable components.",
  },
  {
    title: "MERN Stack",
    icon: "layers",
    text: "Progressively exploring React, Node.js, Express.js, and MongoDB.",
  },
];

// Compact summary used on the Home page.
export const learningSnapshot = [
  { label: "Programming", items: ["C++", "Java", "JavaScript"] },
  { label: "Frontend", items: ["HTML", "CSS", "React", "Tailwind CSS"] },
  { label: "Backend learning", items: ["Node.js", "Express.js"] },
  { label: "Database learning", items: ["MongoDB"] },
  { label: "Problem-solving", items: ["DSA in C++"] },
];
