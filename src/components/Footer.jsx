"use client";
import { Sparkles, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-cream to-blush-50">
      <div className="absolute inset-0 bg-rose-radial opacity-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-blush-400 to-peach-300 grid place-items-center text-white shadow-soft">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="display text-2xl">
                Cozy <span className="gold-text italic">Cuts</span>
              </span>
            </div>
            <p className="mt-4 text-ink/60 max-w-sm">
              Quiet luxury, soft hands, and a playlist that knows you. Beauty &
              self-care, the way it should feel.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Twitter, Facebook].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass grid place-items-center hover:bg-white transition"
                  aria-label="Social"
                >
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FCol
            t="Salon"
            items={["Services", "Team", "Membership", "Gift cards", "Careers"]}
          />
          <FCol
            t="Shop"
            items={["Skincare", "Haircare", "Makeup", "Fragrance", "Bundles"]}
          />
          <FCol
            t="Support"
            items={["Contact", "Booking policy", "FAQ", "Press kit", "Sustainability"]}
          />
        </div>

        <div className="mt-14 border-t border-blush-200/60 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-ink/55">
          <div>© {new Date().getFullYear()} Cozy Cuts Studio. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
        </div>

        <div className="mt-10 select-none overflow-hidden">
          <div className="display text-[18vw] leading-none gold-text italic opacity-30 text-center whitespace-nowrap">
            cozy · cuts
          </div>
        </div>
      </div>
    </footer>
  );
}

function FCol({ t, items }) {
  return (
    <div>
      <div className="text-xs tracking-[0.3em] uppercase text-ink/50 mb-3">{t}</div>
      <ul className="space-y-2 text-sm text-ink/75">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-blush-600 transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
