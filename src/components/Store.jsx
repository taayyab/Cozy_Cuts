"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Star, ShoppingBag, ChevronLeft, ChevronRight, Heart } from "lucide-react";

const CATEGORIES = ["All", "Skincare", "Haircare", "Makeup", "Fragrances"];

const PRODUCTS = [
  {
    name: "Velvet Rose Serum",
    cat: "Skincare",
    price: 48,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
    tone: "from-blush-100 to-rose-100",
    featured: true
  },
  {
    name: "Silk Shampoo No. 7",
    cat: "Haircare",
    price: 32,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
    tone: "from-peach-100 to-blush-100"
  },
  {
    name: "Petal Lipstick",
    cat: "Makeup",
    price: 26,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
    tone: "from-rose-100 to-blush-200"
  },
  {
    name: "Cashmere Eau de Parfum",
    cat: "Fragrances",
    price: 92,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
    tone: "from-gold-100 to-peach-100",
    featured: true
  },
  {
    name: "Glow Drops",
    cat: "Skincare",
    price: 38,
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80",
    tone: "from-blush-100 to-peach-200"
  },
  {
    name: "Bond Repair Mask",
    cat: "Haircare",
    price: 42,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=700&q=80",
    tone: "from-peach-100 to-gold-100"
  },
  {
    name: "Dewy Cheek Tint",
    cat: "Makeup",
    price: 22,
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1631730486572-226d1f595b68?auto=format&fit=crop&w=700&q=80",
    tone: "from-blush-200 to-rose-100",
    featured: true
  },
  {
    name: "Soft Linen Mist",
    cat: "Fragrances",
    price: 54,
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80",
    tone: "from-rose-100 to-gold-100"
  }
];

export default function Store() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  const featured = PRODUCTS.filter((p) => p.featured);

  const carouselRef = useRef(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % featured.length);
    }, 4500);
    return () => clearInterval(id);
  }, [featured.length]);

  useEffect(() => {
    if (!carouselRef.current) return;
    const step = 100 / featured.length;
    gsap.to(carouselRef.current, {
      xPercent: -slide * step,
      duration: 0.9,
      ease: "expo.out"
    });
  }, [slide, featured.length]);

  return (
    <section id="store" className="section-pad relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-peach-100/60 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] rounded-full bg-blush-100/60 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div data-reveal="up">
            <div className="pill glass text-ink/70 mb-5">
              <ShoppingBag className="w-3.5 h-3.5 text-blush-500" />
              The Beauty Atelier
            </div>
            <h2 className="display text-4xl sm:text-6xl leading-[1.05]">
              Shop the salon, <br />
              <span className="gold-text italic">live the ritual</span>.
            </h2>
          </div>
          <p data-reveal="up" className="md:max-w-sm text-ink/60">
            Hand-picked, clean-beauty essentials. Loved by our artists, made for
            your bathroom shelf.
          </p>
        </div>

        {/* Featured carousel */}
        <div data-reveal="fade" className="relative rounded-[2.5rem] overflow-hidden border border-white shadow-soft mb-12">
          <div className="relative">
            <div ref={carouselRef} className="flex" style={{ width: `${featured.length * 100}%` }}>
              {featured.map((p, idx) => (
                <div key={idx} className="w-full shrink-0" style={{ width: `${100 / featured.length}%` }}>
                  <FeaturedSlide p={p} />
                </div>
              ))}
            </div>

            <button
              onClick={() => setSlide((s) => (s - 1 + featured.length) % featured.length)}
              className="absolute top-1/2 left-4 -translate-y-1/2 w-11 h-11 rounded-full glass grid place-items-center hover:bg-white transition"
              aria-label="Previous featured product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setSlide((s) => (s + 1) % featured.length)}
              className="absolute top-1/2 right-4 -translate-y-1/2 w-11 h-11 rounded-full glass grid place-items-center hover:bg-white transition"
              aria-label="Next featured product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {featured.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setSlide(k)}
                  className={`h-1.5 rounded-full transition-all ${
                    k === slide ? "w-8 bg-blush-500" : "w-2 bg-white/80"
                  }`}
                  aria-label={`Slide ${k + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Filter pills */}
        <div data-reveal="up" className="flex flex-wrap items-center gap-2 mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                cat === c
                  ? "bg-ink text-white border-ink"
                  : "bg-white/70 border-white text-ink/70 hover:bg-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div data-reveal="stagger" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSlide({ p }) {
  return (
    <div className={`bg-gradient-to-br ${p.tone} grid sm:grid-cols-2 items-center gap-6 p-6 sm:p-10`}>
      <div className="order-2 sm:order-1">
        <div className="pill bg-white/70 text-ink/70 mb-4">
          <Star className="w-3.5 h-3.5 text-gold-400" />
          Featured · {p.cat}
        </div>
        <h3 className="display text-3xl sm:text-5xl leading-tight">{p.name}</h3>
        <p className="mt-3 text-ink/65 max-w-md">
          A clean, considered formula loved by our artists — and the secret
          behind that lit-from-within finish you’ve been admiring.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <div className="display text-3xl gold-text">${p.price}</div>
          <button className="btn-primary">Add to bag</button>
        </div>
      </div>
      <div className="order-1 sm:order-2 relative aspect-square rounded-3xl overflow-hidden border border-white">
        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function ProductCard({ p }) {
  const [liked, setLiked] = useState(false);
  return (
    <article
      className="group relative rounded-3xl overflow-hidden bg-white border border-white shadow-soft"
      data-cursor
    >
      <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${p.tone}`}>
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <button
          onClick={() => setLiked((v) => !v)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full glass grid place-items-center transition ${
            liked ? "text-blush-500" : "text-ink"
          }`}
          aria-label="Save to wishlist"
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
        </button>
        <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-[11px]">
          {p.cat}
        </div>
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <button className="w-full py-2.5 rounded-full bg-ink text-white text-sm font-medium shadow-soft">
            Quick add
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug">{p.name}</h3>
          <div className="display text-lg gold-text whitespace-nowrap">${p.price}</div>
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-ink/55">
          <Star className="w-3.5 h-3.5 fill-gold-300 text-gold-400" />
          {p.rating} · 2.1k reviews
        </div>
      </div>
    </article>
  );
}
