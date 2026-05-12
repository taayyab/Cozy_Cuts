"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const root = useRef(null);
  const bar = useRef(null);
  const num = useRef(null);
  const word = useRef(null);
  const curtainL = useRef(null);
  const curtainR = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => setHidden(true)
      });

      gsap.set([curtainL.current, curtainR.current], { yPercent: 0 });

      tl.from(word.current, {
        yPercent: 110,
        duration: 0.9,
        skewY: 6
      })
        .to(
          counter,
          {
            value: 100,
            duration: 2.2,
            ease: "power2.inOut",
            onUpdate: () => {
              if (num.current) num.current.textContent = String(Math.round(counter.value)).padStart(3, "0");
              if (bar.current) bar.current.style.transform = `scaleX(${counter.value / 100})`;
            }
          },
          "-=0.4"
        )
        .to(word.current, { yPercent: -110, duration: 0.7, ease: "power3.in" }, "+=0.15")
        .to(num.current, { yPercent: -110, duration: 0.7, ease: "power3.in" }, "<")
        .to(curtainL.current, { yPercent: -100, duration: 1.1, ease: "expo.inOut" }, "-=0.2")
        .to(curtainR.current, { yPercent: 100, duration: 1.1, ease: "expo.inOut" }, "<")
        .to(root.current, { autoAlpha: 0, duration: 0.4 }, "-=0.3");
    }, root);

    return () => ctx.revert();
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] pointer-events-none"
      aria-hidden="true"
    >
      <div
        ref={curtainL}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blush-100 via-blush-50 to-cream"
      />
      <div
        ref={curtainR}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-peach-100 via-blush-50 to-cream"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-ink">
        <div className="overflow-hidden py-3 leading-none">
          <div ref={word} className="display text-5xl sm:text-7xl leading-[1.2] pb-2">
            <span className="blush-text">Cozy</span>{" "}
            <span className="gold-text italic">Cuts</span>
          </div>
        </div>
        <div className="w-56 sm:w-72 flex flex-col gap-3 items-center">
          <div className="overflow-hidden">
            <div ref={num} className="text-xs tracking-[0.4em] font-mono text-ink/70">
              000
            </div>
          </div>
          <div className="h-px w-full bg-ink/10 overflow-hidden rounded-full">
            <div
              ref={bar}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-blush-400 via-rose-300 to-gold-300"
            />
          </div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-ink/40">
            Crafting your glow
          </div>
        </div>
      </div>
    </div>
  );
}
