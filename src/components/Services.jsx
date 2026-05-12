"use client";
import { useRef, useState } from "react";
import { Scissors, Sparkles, Flower2, Palette, Hand, Waves, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    title: "Haircut & Styling",
    desc: "Precision cuts, blowouts, and editorial styling by senior artists.",
    price: "from $65",
    duration: "45–75 min",
    icon: Scissors,
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    tone: "from-blush-200 to-rose-100"
  },
  {
    title: "Bridal Makeup",
    desc: "Camera-ready bridal artistry with airbrush finish and trials.",
    price: "from $220",
    duration: "120 min",
    icon: Sparkles,
    img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=80",
    tone: "from-peach-200 to-blush-100"
  },
  {
    title: "Facial Treatment",
    desc: "Custom facials that hydrate, smooth, and bring the glow back.",
    price: "from $95",
    duration: "60 min",
    icon: Flower2,
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    tone: "from-gold-100 to-peach-100"
  },
  {
    title: "Hair Coloring",
    desc: "Balayage, gloss, and full-color with bond-building treatments.",
    price: "from $140",
    duration: "150 min",
    icon: Palette,
    img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=900&q=80",
    tone: "from-rose-100 to-blush-200"
  },
  {
    title: "Mani · Pedi",
    desc: "Couture nail art with long-wear gels and luxe hand rituals.",
    price: "from $55",
    duration: "60 min",
    icon: Hand,
    img: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80",
    tone: "from-blush-100 to-peach-200"
  },
  {
    title: "Spa & Massage",
    desc: "Aromatherapy massage, body scrubs, and full wellness rituals.",
    price: "from $110",
    duration: "75 min",
    icon: Waves,
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
    tone: "from-peach-100 to-gold-100"
  }
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="absolute -top-32 right-0 w-[34rem] h-[34rem] rounded-full bg-blush-100/60 blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-peach-100/60 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div data-reveal="up">
            <div className="pill glass text-ink/70 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-blush-500" />
              Signature services
            </div>
            <h2 className="display text-4xl sm:text-6xl leading-[1.05] tracking-tight">
              Curated rituals for the <br />
              <span className="blush-text italic">modern muse</span>
            </h2>
          </div>
          <p data-reveal="up" className="md:max-w-sm text-ink/60">
            Six signature experiences — each one tailored by our team of stylists,
            therapists, and color artists. Soft on you, big on results.
          </p>
        </div>

        <div data-reveal="stagger" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, price, duration, icon: Icon, img, tone }) {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${y * -8}deg`);
    el.style.setProperty("--ry", `${x * 10}deg`);
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    setHover(false);
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={() => setHover(true)}
      style={{
        transform: "perspective(1100px) rotateX(var(--rx,0)) rotateY(var(--ry,0))"
      }}
      className="group relative rounded-3xl overflow-hidden bg-white border border-white shadow-soft transition-transform duration-300 will-change-transform"
      data-cursor
    >
      <div className={`relative aspect-[5/4] bg-gradient-to-br ${tone} overflow-hidden`}>
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.35), transparent 70%)"
          }}
        />
        <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl glass grid place-items-center text-ink">
          <Icon className="w-5 h-5" />
        </div>
        <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-[11px] tracking-wide text-ink/70">
          {duration}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="display text-2xl text-white drop-shadow-md">{title}</div>
          <div className="glass rounded-full px-3 py-1 text-xs font-medium text-ink">
            {price}
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm text-ink/60">{desc}</p>
        <div
          className={`grid transition-all duration-500 ${
            hover ? "grid-rows-[1fr] mt-4 opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="text-xs text-ink/60 grid grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blush-400" />
                Consultation included
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blush-400" />
                Premium products
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blush-400" />
                Express add-ons
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blush-400" />
                Aftercare kit
              </li>
            </ul>
          </div>
        </div>

        <a
          href="/dashboard"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-blush-600 transition-colors"
        >
          Book this ritual
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
        </a>
      </div>

      <span className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-blush-200/0 via-white/0 to-gold-200/0 group-hover:from-blush-200/40 group-hover:to-gold-200/40 transition-opacity duration-500" />
    </article>
  );
}
