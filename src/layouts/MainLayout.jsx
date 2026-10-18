import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Background from "../components/Background.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";
import BackToTop from "../components/BackToTop.jsx";

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Scroll reveal: cards and [data-reveal] elements fade up once as they enter the viewport.
  useLayoutEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = [...document.querySelectorAll("#main .card, #main [data-reveal]")];
    els.forEach((el, i) => {
      el.style.setProperty("--d", `${(i % 3) * 70}ms`);
      el.classList.add("reveal-pending");
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.remove("reveal-pending");
          e.target.classList.add("reveal-in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Cursor spotlight: feeds pointer position to the hovered card's CSS variables.
  useEffect(() => {
    const onMove = (e) => {
      if (e.pointerType !== "mouse") return;
      const card = e.target.closest?.(".card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Background />
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <Navbar />
      <motion.main
        id="main"
        key={pathname}
        className="flex-1"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
}
