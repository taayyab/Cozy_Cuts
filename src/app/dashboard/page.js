"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import {
  Search,
  Bell,
  Scissors,
  Sparkles,
  Flower2,
  Palette,
  Hand,
  Waves,
  Clock,
  CalendarDays,
  MapPin,
  Star,
  ChevronRight,
  Plus,
  Gift,
  Home
} from "lucide-react";
import Sidebar from "@/components/dashboard/Sidebar";
import Calendar from "@/components/dashboard/Calendar";
import BookingConfirmation from "@/components/dashboard/BookingConfirmation";

const SERVICES = [
  { id: "cut", title: "Haircut & Styling", icon: Scissors, duration: "60 min", price: 65 },
  { id: "bridal", title: "Bridal Makeup", icon: Sparkles, duration: "120 min", price: 220 },
  { id: "facial", title: "Facial Treatment", icon: Flower2, duration: "60 min", price: 95 },
  { id: "color", title: "Hair Coloring", icon: Palette, duration: "150 min", price: 140 },
  { id: "nail", title: "Mani · Pedi", icon: Hand, duration: "60 min", price: 55 },
  { id: "spa", title: "Spa & Massage", icon: Waves, duration: "75 min", price: 110 }
];

const STAFF = [
  { id: "aria", name: "Aria Bellamy", role: "Color Director", img: "https://i.pravatar.cc/120?img=47", rating: 4.9 },
  { id: "sienna", name: "Sienna Park", role: "Senior Stylist", img: "https://i.pravatar.cc/120?img=32", rating: 4.8 },
  { id: "maya", name: "Maya Hart", role: "Bridal Artist", img: "https://i.pravatar.cc/120?img=49", rating: 4.9 },
  { id: "noor", name: "Noor Khan", role: "Skin Therapist", img: "https://i.pravatar.cc/120?img=45", rating: 4.7 }
];

const SLOTS = ["09:00", "10:30", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"];

const UPCOMING = [
  { d: "Tue · May 14", t: "11:30 AM", s: "Balayage Color", p: "with Aria", tone: "from-blush-100 to-peach-100" },
  { d: "Sat · May 18", t: "3:00 PM", s: "Bridal Trial", p: "with Maya", tone: "from-gold-100 to-blush-100" }
];

const HISTORY = [
  { d: "Apr 28", s: "Signature Facial", p: "Noor", price: 95 },
  { d: "Apr 02", s: "Gloss + Trim", p: "Sienna", price: 110 },
  { d: "Mar 14", s: "Spa Massage", p: "Lia", price: 130 },
  { d: "Feb 28", s: "Mani · Pedi", p: "Yuki", price: 60 }
];

export default function Dashboard() {
  const root = useRef(null);
  const [service, setService] = useState(SERVICES[0]);
  const [staff, setStaff] = useState(STAFF[0]);
  const [date, setDate] = useState(new Date(Date.now() + 86400 * 1000));
  const [time, setTime] = useState("11:30");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".dash-fade", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: "power3.out",
        delay: 3.4
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="min-h-screen bg-blush-gradient">
      <div className="flex max-w-[1500px] mx-auto">
        <Sidebar />

        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 min-w-0">
          {/* Topbar */}
          <header className="dash-fade flex items-center gap-3 mb-6">
            <Link
              href="/"
              className="lg:hidden w-10 h-10 rounded-full glass grid place-items-center"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>

            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40" />
              <input
                placeholder="Search treatments, artists, products…"
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/70 border border-white outline-none focus:bg-white focus:ring-2 focus:ring-blush-200"
              />
            </div>

            <button className="w-11 h-11 rounded-full glass grid place-items-center relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-blush-500" />
            </button>
            <div className="hidden sm:flex items-center gap-3 glass rounded-full pl-1 pr-4 py-1">
              <img
                src="https://i.pravatar.cc/80?img=12"
                alt=""
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="text-xs leading-tight">
                <div className="font-semibold">Olivia Reign</div>
                <div className="text-ink/55">Bloom · VIP</div>
              </div>
            </div>
          </header>

          {/* Hero strip */}
          <section className="dash-fade relative rounded-[2rem] overflow-hidden p-6 sm:p-8 mb-6 bg-gradient-to-br from-blush-200 via-blush-100 to-peach-100">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/40 blur-3xl" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="pill bg-white/60 text-ink/70 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-blush-500" /> Good morning, Olivia
                </div>
                <h1 className="display text-3xl sm:text-4xl leading-tight">
                  Your next ritual is <br className="hidden sm:block" />
                  <span className="italic gold-text">two days away</span>.
                </h1>
              </div>
              <div className="flex gap-3">
                <button className="btn-ghost">
                  <Gift className="w-4 h-4 text-blush-500" /> Gift card
                </button>
                <button className="btn-primary">
                  <Plus className="w-4 h-4" /> New booking
                </button>
              </div>
            </div>
          </section>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* LEFT: Booking flow */}
            <div className="lg:col-span-2 space-y-6">
              {/* Service select */}
              <section className="dash-fade glass rounded-3xl p-5">
                <SectionHead n="01" t="Choose a service" />
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
                  {SERVICES.map((s) => {
                    const sel = service.id === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => setService(s)}
                        className={`text-left rounded-2xl p-4 border transition-all ${
                          sel
                            ? "bg-ink text-white border-ink shadow-soft"
                            : "bg-white/70 border-white hover:bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <span
                            className={`w-9 h-9 rounded-xl grid place-items-center ${
                              sel ? "bg-white/15" : "bg-blush-100"
                            }`}
                          >
                            <s.icon className={`w-4 h-4 ${sel ? "text-white" : "text-blush-600"}`} />
                          </span>
                          <span
                            className={`text-xs ${sel ? "text-white/80" : "text-ink/55"}`}
                          >
                            ${s.price}
                          </span>
                        </div>
                        <div className="mt-3 font-semibold leading-tight">{s.title}</div>
                        <div
                          className={`text-xs mt-1 flex items-center gap-1 ${
                            sel ? "text-white/70" : "text-ink/55"
                          }`}
                        >
                          <Clock className="w-3 h-3" /> {s.duration}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Staff select */}
              <section className="dash-fade glass rounded-3xl p-5">
                <SectionHead n="02" t="Pick your artist" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  {STAFF.map((m) => {
                    const sel = staff.id === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setStaff(m)}
                        className={`relative rounded-2xl overflow-hidden border transition-all ${
                          sel
                            ? "border-ink shadow-soft scale-[1.02]"
                            : "border-white hover:border-blush-200"
                        }`}
                      >
                        <div className="aspect-[3/4] relative">
                          <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent" />
                          <div className="absolute top-2 right-2 glass rounded-full px-2 py-0.5 text-[10px] flex items-center gap-1">
                            <Star className="w-3 h-3 fill-gold-300 text-gold-400" />
                            {m.rating}
                          </div>
                          <div className="absolute bottom-2 inset-x-2 text-left">
                            <div className="text-white text-sm font-semibold">{m.name}</div>
                            <div className="text-white/80 text-[10px] tracking-wider">{m.role}</div>
                          </div>
                          {sel && (
                            <span className="absolute top-2 left-2 w-2.5 h-2.5 rounded-full bg-blush-400 ring-2 ring-white animate-pulseGlow" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Date + slots */}
              <section className="grid sm:grid-cols-2 gap-6">
                <div className="dash-fade">
                  <Calendar selected={date} onSelect={setDate} />
                </div>
                <div className="dash-fade glass rounded-3xl p-5">
                  <SectionHead n="03" t="Available slots" />
                  <div className="text-xs text-ink/55 mt-1 mb-4">
                    {date.toLocaleDateString(undefined, {
                      weekday: "long",
                      month: "long",
                      day: "numeric"
                    })}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {SLOTS.map((s) => {
                      const sel = s === time;
                      return (
                        <button
                          key={s}
                          onClick={() => setTime(s)}
                          className={`py-2.5 rounded-xl text-sm border transition-all ${
                            sel
                              ? "bg-ink text-white border-ink shadow-soft"
                              : "bg-white/70 border-white hover:bg-white"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setOpen(true)}
                    className="btn-primary mt-6 w-full justify-center"
                  >
                    Confirm booking — ${service.price}
                  </button>
                </div>
              </section>

              {/* History */}
              <section className="dash-fade glass rounded-3xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <SectionHead n="" t="Appointment history" />
                  <button className="text-xs text-blush-600 inline-flex items-center gap-1">
                    View all <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                <ul className="divide-y divide-blush-100/60">
                  {HISTORY.map((h, i) => (
                    <li key={i} className="py-3 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blush-100 to-peach-100 grid place-items-center text-ink">
                        <Scissors className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{h.s}</div>
                        <div className="text-xs text-ink/55">{h.d} · {h.p}</div>
                      </div>
                      <div className="text-sm font-medium">${h.price}</div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* RIGHT: Profile + summary + upcoming */}
            <div className="space-y-6">
              {/* Profile */}
              <section className="dash-fade relative rounded-3xl overflow-hidden p-5 bg-gradient-to-br from-white to-blush-50 border border-white shadow-soft">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blush-100 blur-2xl" />
                <div className="relative flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/120?img=12"
                    alt=""
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow"
                  />
                  <div className="min-w-0">
                    <div className="font-semibold leading-tight truncate">Olivia Reign</div>
                    <div className="text-xs text-ink/55">olivia@cozy.studio</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-5 text-center">
                  <Mini n="32" l="Visits" />
                  <Mini n="$4.2k" l="Spent" />
                  <Mini n="VIP" l="Tier" />
                </div>
                <div className="mt-5 text-xs text-ink/55 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> 42 Magnolia Ln, Brooklyn
                </div>
              </section>

              {/* Summary */}
              <section className="dash-fade glass rounded-3xl p-5">
                <div className="text-[10px] tracking-[0.3em] uppercase text-ink/50">
                  Booking summary
                </div>
                <div className="mt-3 space-y-2.5">
                  <SumRow k="Service" v={service.title} />
                  <SumRow k="Artist" v={staff.name} />
                  <SumRow
                    k="Date"
                    v={date.toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                  />
                  <SumRow k="Time" v={time} />
                  <SumRow k="Duration" v={service.duration} />
                </div>
                <div className="mt-4 pt-4 border-t border-blush-100/60 flex items-center justify-between">
                  <div className="text-xs tracking-wider uppercase text-ink/55">Total</div>
                  <div className="display text-2xl gold-text">${service.price}</div>
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="btn-primary mt-4 w-full justify-center"
                >
                  Confirm booking
                </button>
              </section>

              {/* Upcoming */}
              <section className="dash-fade glass rounded-3xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-ink/50">
                    Upcoming
                  </div>
                  <button className="text-xs text-blush-600">See calendar</button>
                </div>
                <ul className="space-y-3">
                  {UPCOMING.map((u, i) => (
                    <li
                      key={i}
                      className={`relative rounded-2xl p-4 bg-gradient-to-br ${u.tone}`}
                    >
                      <div className="text-[10px] tracking-[0.3em] uppercase text-ink/50">
                        {u.d}
                      </div>
                      <div className="display text-lg mt-0.5">{u.s}</div>
                      <div className="text-xs text-ink/60 mt-0.5">{u.t} · {u.p}</div>
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/70 hover:bg-white grid place-items-center">
                        <CalendarDays className="w-3.5 h-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>

      <BookingConfirmation
        open={open}
        onClose={() => setOpen(false)}
        summary={{
          service: service.title,
          staff: staff.name,
          date,
          time
        }}
      />
    </div>
  );
}

function SectionHead({ n, t }) {
  return (
    <div className="flex items-center gap-3">
      {n && (
        <span className="font-mono text-[10px] tracking-wider px-2 py-1 rounded-full bg-blush-100 text-blush-600">
          {n}
        </span>
      )}
      <h2 className="display text-xl sm:text-2xl">{t}</h2>
    </div>
  );
}

function Mini({ n, l }) {
  return (
    <div className="rounded-2xl bg-white/70 py-3">
      <div className="display text-lg gold-text">{n}</div>
      <div className="text-[10px] tracking-wider uppercase text-ink/55 mt-0.5">{l}</div>
    </div>
  );
}

function SumRow({ k, v }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-ink/55">{k}</span>
      <span className="font-medium text-right truncate max-w-[60%]">{v}</span>
    </div>
  );
}
