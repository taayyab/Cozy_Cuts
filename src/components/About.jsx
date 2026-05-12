"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Leaf, ShieldCheck, HeartHandshake } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const COUNTERS = [
  { n: 12000, suffix: "+", label: "Clients pampered" },
  { n: 24, suffix: "", label: "Master artists" },
  { n: 98, suffix: "%", label: "Return rate" },
  { n: 15, suffix: "yrs", label: "Of craft" }
];

export default function About() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".count-num").forEach((el) => {
        const target = parseFloat(el.dataset.to);
        const suffix = el.dataset.suffix || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent =
              Math.round(obj.v).toLocaleString() + (suffix ? suffix : "");
          }
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image stack */}
        <div className="relative">
          <div
            data-reveal="scale"
            className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-soft border border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80"
              alt="Salon interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blush-200/50 via-transparent to-transparent" />
          </div>
          <div
            data-reveal="up"
            className="absolute -right-4 -bottom-4 sm:-right-10 sm:-bottom-10 w-44 sm:w-56 aspect-square rounded-[2rem] overflow-hidden border-4 border-cream shadow-soft"
          >
            <img
              src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=600&q=80"
              alt="Stylist at work"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            data-reveal="up"
            className="absolute -left-4 top-10 glass rounded-2xl px-4 py-3 max-w-[200px] hidden sm:block"
          >
            <div className="text-[10px] tracking-[0.3em] uppercase text-ink/50">
              Est. 2011
            </div>
            <div className="display text-xl mt-1">Quiet Luxury</div>
            <div className="text-[11px] text-ink/55 mt-0.5">
              A sanctuary in the heart of the city.
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <div data-reveal="up" className="pill glass text-ink/70 mb-5">
            <Leaf className="w-3.5 h-3.5 text-blush-500" />
            About Cozy Cuts
          </div>
          <h2
            data-split
            className="display text-4xl sm:text-6xl leading-[1.05] tracking-tight"
          >
            A salon that feels like a deep breath.
          </h2>
          <p data-reveal="up" className="mt-5 text-ink/65 max-w-lg">
            We blend old-school craft with modern technique. From the soft light
            to the hand-picked products, every detail is here to make you feel
            seen, soft, and unmistakably you.
          </p>

          <ul data-reveal="stagger" className="mt-7 grid sm:grid-cols-2 gap-3">
            {[
              { icon: ShieldCheck, t: "Cruelty-free, clean ingredients" },
              { icon: HeartHandshake, t: "Inclusive, judgement-free space" },
              { icon: Leaf, t: "Eco-conscious salon practices" },
              { icon: CheckCircle2, t: "Master artists, every chair" }
            ].map((f) => (
              <li
                key={f.t}
                className="flex items-center gap-3 glass rounded-2xl px-4 py-3"
              >
                <f.icon className="w-4 h-4 text-blush-500" />
                <span className="text-sm">{f.t}</span>
              </li>
            ))}
          </ul>

          <div data-reveal="stagger" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {COUNTERS.map((c) => (
              <div key={c.label} className="glass rounded-3xl p-4 text-center">
                <div
                  className="count-num display text-3xl sm:text-4xl gold-text"
                  data-to={c.n}
                  data-suffix={c.suffix}
                >
                  0
                </div>
                <div className="text-[11px] tracking-wider text-ink/55 mt-1">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
