import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "../data/site.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const buttonRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "border-line-strong bg-ink-950/85" : "border-line bg-ink-950/50"
      }`}
    >
      <nav
        className={`page-container flex items-center justify-between transition-[height] duration-300 ${scrolled ? "h-14" : "h-[68px]"}`}
        aria-label="Main navigation"
      >
        <Link to="/" className="group flex items-center gap-3" aria-label="Prince Kumar — home">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-50 font-display text-sm font-bold text-ink-950 transition-transform duration-300 group-hover:rotate-[-6deg]">
            {site.shortName}
          </span>
          <span className="font-display text-base font-semibold text-white">{site.name}</span>
        </Link>

        <LayoutGroup id="desktop-nav">
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} className="group relative block rounded-lg px-3 py-2 text-sm font-medium">
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/10"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className={`relative transition-colors ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`}>
                        {link.label}
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </LayoutGroup>

        <a href={site.resume} download className="btn btn-secondary hidden !min-h-9 !px-3.5 !py-1.5 lg:inline-flex">
          <Download size={14} aria-hidden="true" /> Resume
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line-strong text-slate-200 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto bg-ink-950 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="page-container py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-line px-1 py-4 font-display text-2xl font-medium ${
                        isActive ? "text-white" : "text-slate-400"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <li className="pt-6">
                <a href={site.resume} download className="btn btn-secondary w-full">
                  <Download size={16} aria-hidden="true" /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
