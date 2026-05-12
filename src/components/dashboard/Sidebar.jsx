"use client";
import Link from "next/link";
import {
  Sparkles,
  Home,
  CalendarDays,
  Scissors,
  Users,
  ShoppingBag,
  Heart,
  Settings,
  LifeBuoy,
  LogOut
} from "lucide-react";

const NAV = [
  { icon: Home, label: "Overview", active: true },
  { icon: CalendarDays, label: "Appointments" },
  { icon: Scissors, label: "Services" },
  { icon: Users, label: "Stylists" },
  { icon: ShoppingBag, label: "Shop" },
  { icon: Heart, label: "Saved" }
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 shrink-0 sticky top-4 self-start h-[calc(100vh-2rem)] glass rounded-3xl m-4 p-5">
      <Link href="/" className="flex items-center gap-2">
        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-blush-400 to-peach-300 grid place-items-center text-white shadow-soft">
          <Sparkles className="w-4 h-4" />
        </span>
        <span className="display text-xl">
          Cozy <span className="gold-text italic">Cuts</span>
        </span>
      </Link>

      <nav className="mt-8 flex-1">
        <div className="text-[10px] tracking-[0.3em] uppercase text-ink/40 mb-2 px-2">
          Menu
        </div>
        <ul className="space-y-1">
          {NAV.map((n) => (
            <li key={n.label}>
              <button
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm transition-all ${
                  n.active
                    ? "bg-ink text-white shadow-soft"
                    : "text-ink/70 hover:bg-white/70"
                }`}
              >
                <n.icon className="w-4 h-4" />
                {n.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="text-[10px] tracking-[0.3em] uppercase text-ink/40 mt-8 mb-2 px-2">
          Account
        </div>
        <ul className="space-y-1">
          {[
            { icon: Settings, label: "Settings" },
            { icon: LifeBuoy, label: "Help" },
            { icon: LogOut, label: "Sign out" }
          ].map((n) => (
            <li key={n.label}>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm text-ink/70 hover:bg-white/70 transition">
                <n.icon className="w-4 h-4" />
                {n.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto rounded-2xl p-4 bg-gradient-to-br from-blush-200 to-peach-100 text-ink relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/40 blur-2xl" />
        <div className="text-xs tracking-wider uppercase opacity-70">VIP perks</div>
        <div className="display text-xl mt-1 leading-tight">Bloom membership</div>
        <p className="text-xs mt-1 text-ink/65">
          Free monthly facial + 15% off all services.
        </p>
        <button className="mt-3 w-full py-2 rounded-full bg-ink text-white text-xs">
          Upgrade
        </button>
      </div>
    </aside>
  );
}
