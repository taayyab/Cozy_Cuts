"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Scissors, Sparkles, Heart, Star, Flower2, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    let onMove;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.4, defaults: { ease: "expo.out" } });

      tl.from(".hero-pill", { y: 30, opacity: 0, duration: 0.8 })
        .from(".hero-h-line", {
          yPercent: 110,
          opacity: 0,
          duration: 1.1,
          stagger: 0.12
        }, "-=0.4")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.9 }, "-=0.6")
        .from(".hero-cta > *", {
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12
        }, "-=0.5")
        .from(".hero-meta > *", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08
        }, "-=0.5")
        .from(".hero-visual", {
          scale: 0.85,
          opacity: 0,
          duration: 1.1
        }, "-=0.9")
        .from(".hero-orbit", { opacity: 0, duration: 1 }, "-=0.6");

      // Floating decor
      gsap.utils.toArray(".float-icon").forEach((el, i) => {
        gsap.to(el, {
          y: "+=20",
          x: i % 2 ? "+=10" : "-=10",
          rotate: i % 2 ? 10 : -10,
          duration: 4 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2
        });
      });

      // Subtle parallax follow
      onMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to(".hero-parallax", {
          x,
          y,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        });
        gsap.to(".hero-parallax-strong", {
          x: x * 2.4,
          y: y * 2.4,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        });
      };
      window.addEventListener("pointermove", onMove);
    }, root);

    return () => {
      if (onMove) window.removeEventListener("pointermove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={root}
      id="home"
      className="relative isolate overflow-hidden pt-32 sm:pt-40 pb-20 sm:pb-28 grain"
    >
      {/* Background gradient + blobs */}
      <div className="absolute inset-0 -z-10 bg-blush-gradient" />
      <div className="absolute inset-0 -z-10 bg-rose-radial opacity-80" />
      <div className="absolute -top-32 -left-40 w-[36rem] h-[36rem] rounded-full bg-blush-300/40 blur-3xl hero-parallax" />
      <div className="absolute -bottom-40 -right-32 w-[40rem] h-[40rem] rounded-full bg-peach-200/50 blur-3xl hero-parallax" />
      <div className="absolute top-1/3 left-1/2 w-72 h-72 rounded-full bg-gold-200/40 blur-3xl hero-parallax-strong" />

      {/* Floating decor icons */}
      <Decor className="top-32 left-[6%] text-blush-400" icon={<Scissors />} delay={0} />
      <Decor className="top-44 right-[10%] text-rose-300" icon={<Sparkles />} delay={0.3} />
      <Decor className="top-1/2 left-[3%] text-peach-400" icon={<Flower2 />} delay={0.6} />
      <Decor className="bottom-32 right-[6%] text-gold-400" icon={<Star />} delay={0.9} />
      <Decor className="bottom-44 left-[40%] text-blush-300" icon={<Heart />} delay={1.2} />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        {/* Copy */}
        <div className="lg:col-span-7">
          <div className="hero-pill pill glass text-ink/70">
            <span className="w-1.5 h-1.5 rounded-full bg-blush-500 animate-pulseGlow" />
            New season collection · Bloom 2026
          </div>

          <h1 className="display mt-6 text-[3rem] sm:text-[4.5rem] lg:text-[6rem] leading-[1.05] tracking-tight">
            <span className="block overflow-hidden pb-2">
              <span className="hero-h-line inline-block">Welcome to</span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="hero-h-line inline-block blush-text italic pr-2">
                Cozy Cuts
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="hero-h-line inline-block text-ink/80">
                where you <span className="gold-text italic">glow</span>.
              </span>
            </span>
          </h1>

          <p className="hero-sub mt-6 text-base sm:text-lg text-ink/65 max-w-xl text-balance">
            A modern sanctuary for beauty and self-care. From signature cuts to
            bridal glam, every visit is a quiet luxury — crafted by artists who
            love what they do.
          </p>

          <div className="hero-cta mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a href="/dashboard" className="btn-primary group">
              Book Appointment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-ghost group">
              <Play className="w-4 h-4 text-blush-500" />
              Explore Services
            </a>
          </div>

          <div className="hero-meta mt-12 grid grid-cols-3 max-w-md gap-6">
            <Stat n="12K+" l="Happy clients" />
            <Stat n="4.9★" l="Avg. rating" />
            <Stat n="20+" l="Master artists" />
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5 hero-visual relative">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="hero-orbit absolute -inset-8 rounded-[3rem] border border-white/60 hidden sm:block" />
            <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-white/80 via-blush-100/60 to-peach-100/60 blur-xl" />
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white shadow-soft hero-parallax">
              {/* Hair / makeup model placeholder via Unsplash */}
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
                alt="Beauty model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blush-200/40 via-transparent to-transparent" />
            </div>

            {/* Floating chip — rating */}
            <div className="hero-parallax-strong absolute -left-6 sm:-left-10 top-10 glass rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i + 30}`}
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="text-xs font-semibold">4.9 / 5</div>
                <div className="text-[10px] text-ink/60 tracking-wider">12,408 reviews</div>
              </div>
            </div>

            {/* Floating chip — booking */}
            <div className="hero-parallax-strong absolute -right-4 sm:-right-10 bottom-16 glass rounded-2xl px-4 py-3">
              <div className="text-[10px] tracking-[0.25em] uppercase text-ink/50">
                Next slot
              </div>
              <div className="text-sm font-semibold mt-0.5">Today · 4:30 PM</div>
              <div className="mt-2 text-[11px] inline-flex items-center gap-1.5 text-blush-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blush-500 animate-pulseGlow" />
                with Aria
              </div>
            </div>

            {/* Floating chip — service */}
            <div className="hero-parallax-strong absolute -left-2 sm:-left-12 -bottom-4 glass rounded-2xl px-4 py-3 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-200 to-blush-200 grid place-items-center">
                <Sparkles className="w-4 h-4 text-ink" />
              </span>
              <div>
                <div className="text-sm font-semibold">Signature Glow</div>
                <div className="text-[10px] text-ink/55">60 min · $89</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 relative overflow-hidden mask-fade-b">
        <div className="flex gap-12 animate-marquee whitespace-nowrap py-4 text-ink/50">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 items-center">
              {[
                "Bridal Glam",
                "Signature Cuts",
                "Spa Rituals",
                "Hair Coloring",
                "Lash Artistry",
                "Nail Couture",
                "Skin Therapy",
                "Wellness Massage"
              ].map((t) => (
                <span key={t} className="display text-3xl sm:text-5xl italic">
                  {t} <span className="text-blush-300 not-italic">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }) {
  return (
    <div>
      <div className="display text-3xl sm:text-4xl gold-text">{n}</div>
      <div className="text-xs text-ink/55 mt-1 tracking-wider">{l}</div>
    </div>
  );
}

function Decor({ className = "", icon, delay = 0 }) {
  return (
    <span
      className={`float-icon absolute hidden md:grid place-items-center w-12 h-12 rounded-2xl glass ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="w-5 h-5">{icon}</span>
    </span>
  );
}
