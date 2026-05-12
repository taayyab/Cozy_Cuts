"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Eliza M.",
    role: "Bride · Spring '26",
    quote:
      "The bridal trial felt like a spa day inside a daydream. I cried happy tears at the reveal. Cozy Cuts gave me my softest, most ‘me’ look.",
    img: "https://i.pravatar.cc/200?img=47"
  },
  {
    name: "Priya S.",
    role: "Loyal regular",
    quote:
      "I have been coming here for three years. The color work is unmatched and the playlist is somehow always exactly my mood.",
    img: "https://i.pravatar.cc/200?img=32"
  },
  {
    name: "Tasha L.",
    role: "First-time client",
    quote:
      "I walked in nervous about a big chop, walked out a brand new person. Aria is a literal magician with scissors.",
    img: "https://i.pravatar.cc/200?img=49"
  },
  {
    name: "Hana K.",
    role: "Skincare member",
    quote:
      "My skin has never looked this calm. The facial protocol they built for me made winter feel like spring.",
    img: "https://i.pravatar.cc/200?img=45"
  }
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const stage = useRef(null);

  const next = () => setI((v) => (v + 1) % REVIEWS.length);
  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!stage.current) return;
    gsap.fromTo(
      stage.current.querySelector(".tcard"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, [i]);

  const t = REVIEWS[i];

  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-blush-100/60 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        <div data-reveal="up" className="pill glass text-ink/70 mb-5 mx-auto">
          <Star className="w-3.5 h-3.5 text-gold-400" />
          Loved by clients
        </div>
        <h2 data-reveal="up" className="display text-4xl sm:text-6xl leading-[1.05]">
          Whispered between <br />
          <span className="blush-text italic">best friends</span>.
        </h2>

        <div ref={stage} className="mt-12 relative">
          <article
            key={i}
            className="tcard glass rounded-[2.5rem] p-8 sm:p-12 max-w-3xl mx-auto"
          >
            <Quote className="w-10 h-10 text-blush-300 mx-auto mb-6" />
            <p className="display text-2xl sm:text-3xl leading-snug text-ink/85 italic">
              “{t.quote}”
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow"
              />
              <div className="text-left">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-ink/55 tracking-wider">{t.role}</div>
              </div>
            </div>
          </article>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full glass grid place-items-center hover:bg-white transition"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-8 bg-blush-500" : "w-2 bg-blush-200"
                  }`}
                  aria-label={`Go to review ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full glass grid place-items-center hover:bg-white transition"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
