"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Sparkles, Menu, X, ShoppingBag } from "lucide-react";

const LINKS = [
  { id: "services", label: "Services" },
  { id: "store", label: "Shop" },
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const root = useRef(null);
  const progress = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(root.current, {
        yPercent: -120,
        opacity: 0,
        delay: 3.4,
        duration: 1,
        ease: "expo.out"
      });
    }, root);

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (y / max) * 100 : 0;
      if (progress.current) progress.current.style.transform = `scaleX(${pct / 100})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const lenis = typeof window !== "undefined" && window.__lenis;
    if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.3 });
    else target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      ref={root}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
    >
      <div
        className={`mx-auto mt-3 sm:mt-5 max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
          scrolled ? "scale-[0.99]" : ""
        }`}
      >
        <nav
          className={`relative flex items-center justify-between gap-4 rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
            scrolled
              ? "bg-white/70 backdrop-blur-2xl border border-white shadow-soft"
              : "bg-white/30 backdrop-blur border border-white/60"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 group" data-cursor>
            <span className="relative w-9 h-9 rounded-full bg-gradient-to-br from-blush-400 to-peach-300 grid place-items-center text-white shadow-soft">
              <Sparkles className="w-4 h-4" />
              <span className="absolute inset-0 rounded-full ring-1 ring-white/70 group-hover:scale-110 transition-transform" />
            </span>
            <span className="display text-xl tracking-tight">
              Cozy <span className="gold-text italic">Cuts</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 text-sm">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={scrollTo(l.id)}
                  className="relative px-4 py-2 rounded-full text-ink/70 hover:text-ink transition-colors group"
                  data-cursor
                >
                  <span className="relative z-10">{l.label}</span>
                  <span className="absolute inset-0 rounded-full bg-blush-100/0 group-hover:bg-blush-100 transition-colors duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-white text-xs font-medium tracking-wide hover:bg-blush-500 transition-colors"
              data-cursor
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Dashboard
            </Link>
            <button
              className="lg:hidden p-2 rounded-full bg-white/70 border border-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <div
            ref={progress}
            className="absolute -bottom-px left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-blush-400 via-rose-300 to-gold-300 rounded-full"
          />
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
            open ? "max-h-[420px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="glass rounded-3xl p-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={scrollTo(l.id)}
                  className="block px-4 py-3 rounded-2xl text-ink/80 hover:bg-blush-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/dashboard"
                className="block px-4 py-3 rounded-2xl bg-ink text-white text-center"
              >
                Open Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
