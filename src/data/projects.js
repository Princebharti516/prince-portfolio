// Add new projects to this array. Leave unknown values as "" or [].
// - technologies: badges are hidden when the array is empty
// - image: path inside /public (e.g. "/projects/hospital-website.png"); a placeholder shows when empty
// - github: the GitHub button only appears when this is a real URL
export const projects = [
  {
    id: "hospital-management-website",
    title: "Hospital Management Website — Dr. Nirav Kumar",
    description:
      "A hospital-related website developed while learning frontend web development, focusing on website structure, presentation, and user interface design.",
    category: "Frontend Development",
    // Taken from your resume ("Hospital Services Website | HTML, CSS, JavaScript") plus React.js, as you confirmed. Edit if needed.
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    image: "/projects/hospital-1.webp",
    // Extra screenshots shown as a gallery on the project card.
    gallery: [
      { src: "/projects/hospital-1.webp", alt: "Home page with hero section and appointment request form", caption: "Home & appointment request" },
      { src: "/projects/hospital-2.webp", alt: "Services section listing six cardiac care services", caption: "Services overview" },
      { src: "/projects/hospital-3.webp", alt: "Doctor profile section for Dr. Nirav Kumar", caption: "Doctor profile" },
      { src: "/projects/hospital-4.webp", alt: "Clinic address, call to action and footer", caption: "Clinic details & footer" },
    ],
    github: "",
    demo: "https://drniravpatna.vercel.app/",
    status: "Completed",
  },
];
