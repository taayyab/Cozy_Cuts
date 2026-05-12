"use client";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const DOW = ["S", "M", "T", "W", "T", "F", "S"];

export default function Calendar({ selected, onSelect }) {
  const today = new Date();
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });

  const days = useMemo(() => {
    const first = new Date(view.y, view.m, 1);
    const start = first.getDay();
    const last = new Date(view.y, view.m + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < start; i++) cells.push(null);
    for (let d = 1; d <= last; d++) cells.push(new Date(view.y, view.m, d));
    return cells;
  }, [view]);

  const sameDay = (a, b) =>
    a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const stepMonth = (n) => {
    const d = new Date(view.y, view.m + n, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };

  return (
    <div className="glass rounded-3xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-ink/50">
            Pick a date
          </div>
          <div className="display text-2xl mt-0.5">
            {MONTHS[view.m]} {view.y}
          </div>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => stepMonth(-1)}
            className="w-9 h-9 rounded-full bg-white/70 hover:bg-white grid place-items-center"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => stepMonth(1)}
            className="w-9 h-9 rounded-full bg-white/70 hover:bg-white grid place-items-center"
            aria-label="Next month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-[10px] tracking-widest text-ink/45 mb-2">
        {DOW.map((d, i) => (
          <div key={i} className="text-center">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => {
          if (!d) return <div key={i} />;
          const isPast =
            d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const isToday = sameDay(d, today);
          const isSel = sameDay(d, selected);
          return (
            <button
              key={i}
              disabled={isPast}
              onClick={() => onSelect(d)}
              className={`aspect-square rounded-xl text-sm transition-all relative ${
                isPast
                  ? "text-ink/20 cursor-not-allowed"
                  : isSel
                  ? "bg-ink text-white shadow-soft scale-[1.05]"
                  : isToday
                  ? "bg-blush-100 text-ink font-semibold"
                  : "hover:bg-white text-ink/80"
              }`}
            >
              {d.getDate()}
              {isToday && !isSel && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blush-500" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
