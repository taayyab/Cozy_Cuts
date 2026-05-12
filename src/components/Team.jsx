"use client";
import { Instagram, Star } from "lucide-react";

const TEAM = [
  {
    name: "Aria Bellamy",
    role: "Creative Director · Color",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    tag: "Balayage"
  },
  {
    name: "Sienna Park",
    role: "Senior Stylist · Cuts",
    img: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=600&q=80",
    tag: "Editorial"
  },
  {
    name: "Maya Hart",
    role: "Bridal Makeup Artist",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80",
    tag: "Bridal"
  },
  {
    name: "Noor Khan",
    role: "Skin Therapist",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    tag: "Skincare"
  }
];

export default function Team() {
  return (
    <section id="team" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream to-blush-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div data-reveal="up">
            <div className="pill glass text-ink/70 mb-5">
              <Star className="w-3.5 h-3.5 text-gold-400" />
              Meet the artists
            </div>
            <h2 className="display text-4xl sm:text-6xl leading-[1.05]">
              The hands behind <br />
              your <span className="gold-text italic">favourite mirror</span>.
            </h2>
          </div>
          <p data-reveal="up" className="md:max-w-sm text-ink/60">
            A small, devoted team — each with their own signature. Find the one
            whose work speaks your language.
          </p>
        </div>

        <div data-reveal="stagger" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group relative rounded-[2rem] overflow-hidden bg-white border border-white shadow-soft"
              data-cursor
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[11px]">
                  {m.tag}
                </div>
                <button className="absolute top-4 right-4 w-9 h-9 rounded-full glass grid place-items-center hover:bg-white transition">
                  <Instagram className="w-4 h-4" />
                </button>
                <div className="absolute inset-x-4 bottom-4">
                  <div className="display text-2xl text-white">{m.name}</div>
                  <div className="text-[11px] tracking-wider text-white/80">{m.role}</div>
                </div>
              </div>

              <div className="absolute inset-x-0 -bottom-full group-hover:bottom-0 transition-all duration-500 p-4 bg-white">
                <div className="flex gap-1 text-gold-400 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-ink/60">
                  Bookings open this week — slots filling fast.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
