"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CalendarDays, Clock, Scissors, User, CheckCircle2, X } from "lucide-react";

export default function BookingConfirmation({ open, onClose, summary }) {
  const ref = useRef(null);
  const card = useRef(null);

  useEffect(() => {
    if (!open) return;
    gsap.fromTo(
      ref.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.25 }
    );
    gsap.fromTo(
      card.current,
      { y: 40, scale: 0.94, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 0.6, ease: "expo.out" }
    );
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[80] grid place-items-center px-4 bg-ink/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={card}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md glass rounded-[2rem] p-7 overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 hover:bg-white grid place-items-center"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blush-300 to-peach-200 grid place-items-center text-white mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>

        <h3 className="display text-3xl text-center mt-4">
          You’re <span className="blush-text italic">booked</span>!
        </h3>
        <p className="text-center text-sm text-ink/60 mt-1.5">
          We just sent a confirmation to your inbox.
        </p>

        <div className="mt-6 grid gap-2.5 text-sm">
          <Row icon={<Scissors className="w-4 h-4" />} k="Service" v={summary.service} />
          <Row icon={<User className="w-4 h-4" />} k="Stylist" v={summary.staff} />
          <Row
            icon={<CalendarDays className="w-4 h-4" />}
            k="Date"
            v={summary.date?.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric"
            }) || "—"}
          />
          <Row icon={<Clock className="w-4 h-4" />} k="Time" v={summary.time} />
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="btn-ghost flex-1 justify-center">
            Add to calendar
          </button>
          <button onClick={onClose} className="btn-primary flex-1 justify-center">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

function Row({ icon, k, v }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3">
      <div className="flex items-center gap-2 text-ink/55">
        {icon}
        <span className="text-xs tracking-wider uppercase">{k}</span>
      </div>
      <div className="font-medium">{v}</div>
    </div>
  );
}
