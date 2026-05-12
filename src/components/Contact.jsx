"use client";
import { Mail, MapPin, Phone, Clock, Instagram, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
        <div data-reveal="up" className="relative rounded-[2.5rem] overflow-hidden p-8 sm:p-12 bg-gradient-to-br from-blush-200 via-blush-100 to-peach-100">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/40 blur-3xl" />
          <div className="pill bg-white/60 text-ink/70 mb-6">
            <Send className="w-3.5 h-3.5 text-blush-500" />
            Say hi
          </div>
          <h2 className="display text-4xl sm:text-5xl leading-[1.05]">
            Let’s plan your <span className="italic gold-text">glow up</span>.
          </h2>
          <p className="mt-4 text-ink/65 max-w-md">
            Tell us a little about what you’re after and we’ll match you with the
            right artist within 24 hours.
          </p>

          <ul className="mt-10 space-y-4">
            <Info icon={<MapPin />} title="Visit us" body="42 Magnolia Ln, Brooklyn NY" />
            <Info icon={<Phone />} title="Call the front desk" body="+1 (555) 014-2200" />
            <Info icon={<Mail />} title="Drop a note" body="hello@cozycuts.studio" />
            <Info icon={<Clock />} title="Hours" body="Tue–Sun · 9am – 8pm" />
          </ul>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-blush-600 transition"
          >
            <Instagram className="w-4 h-4" />
            @cozy.cuts.studio
          </a>
        </div>

        <form
          data-reveal="up"
          onSubmit={(e) => e.preventDefault()}
          className="relative rounded-[2.5rem] glass p-8 sm:p-10 grid gap-4"
        >
          <h3 className="display text-3xl">Tell us about you</h3>

          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="First name" placeholder="Aria" />
            <Field label="Last name" placeholder="Bellamy" />
          </div>
          <Field label="Email" type="email" placeholder="you@studio.com" />
          <Field label="Phone (optional)" placeholder="+1 555 …" />

          <div>
            <label className="text-xs tracking-wider uppercase text-ink/55 mb-1.5 inline-block">
              Service of interest
            </label>
            <select className="w-full rounded-2xl bg-white/80 border border-white px-4 py-3 outline-none focus:ring-2 focus:ring-blush-300">
              {[
                "Haircut & Styling",
                "Bridal Makeup",
                "Facial Treatment",
                "Hair Coloring",
                "Mani · Pedi",
                "Spa & Massage"
              ].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs tracking-wider uppercase text-ink/55 mb-1.5 inline-block">
              Anything special?
            </label>
            <textarea
              rows={4}
              placeholder="Tell us your vision…"
              className="w-full rounded-2xl bg-white/80 border border-white px-4 py-3 outline-none focus:ring-2 focus:ring-blush-300 resize-none"
            />
          </div>

          <button type="submit" className="btn-primary justify-center mt-2">
            Send my note
            <Send className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-ink/50 text-center">
            We reply within 24 hours · No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}

function Info({ icon, title, body }) {
  return (
    <li className="flex items-start gap-4">
      <span className="w-10 h-10 rounded-2xl bg-white/70 grid place-items-center text-ink">
        <span className="w-4 h-4 inline-flex">{icon}</span>
      </span>
      <div>
        <div className="text-xs tracking-[0.2em] uppercase text-ink/55">{title}</div>
        <div className="font-medium mt-0.5">{body}</div>
      </div>
    </li>
  );
}

function Field({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="text-xs tracking-wider uppercase text-ink/55 mb-1.5 inline-block">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-white/80 border border-white px-4 py-3 outline-none focus:ring-2 focus:ring-blush-300"
      />
    </div>
  );
}
