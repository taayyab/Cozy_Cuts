"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Animates all elements matching selectors inside `scope` on scroll.
 * Usage: useScrollReveal(rootRef);
 */
export function useScrollReveal(scopeRef, deps = []) {
  useEffect(() => {
    if (!scopeRef.current) return;
    const ctx = gsap.context(() => {
      // Fade up
      gsap.utils.toArray("[data-reveal='up']").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Stagger children
      gsap.utils.toArray("[data-reveal='stagger']").forEach((el) => {
        gsap.from(el.children, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Fade
      gsap.utils.toArray("[data-reveal='fade']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%"
          }
        });
      });

      // Scale-in
      gsap.utils.toArray("[data-reveal='scale']").forEach((el) => {
        gsap.from(el, {
          scale: 0.85,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%"
          }
        });
      });

      // Parallax
      gsap.utils.toArray("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        gsap.to(el, {
          y: () => -window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Char split for headings
      gsap.utils.toArray("[data-split]").forEach((el) => {
        const text = el.textContent;
        el.innerHTML = text
          .split("")
          .map((c) =>
            c === " "
              ? '<span class="split-char">&nbsp;</span>'
              : `<span class="split-char">${c}</span>`
          )
          .join("");
        gsap.from(el.querySelectorAll(".split-char"), {
          yPercent: 110,
          opacity: 0,
          rotate: 6,
          duration: 0.9,
          stagger: 0.025,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%"
          }
        });
      });
    }, scopeRef);

    // Refresh once everything is mounted
    const refresh = () => ScrollTrigger.refresh();
    const t = setTimeout(refresh, 300);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
