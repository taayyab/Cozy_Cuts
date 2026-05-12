/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff5f7",
          100: "#ffe6ec",
          200: "#ffd1dc",
          300: "#ffb4c6",
          400: "#ff8fae",
          500: "#f06292",
          600: "#d94c7a"
        },
        peach: {
          50: "#fff6f1",
          100: "#ffe9dc",
          200: "#ffd2bb",
          300: "#ffb792",
          400: "#ff9c6f"
        },
        rose: {
          50: "#fdf2f4",
          100: "#fbe3e8",
          200: "#f6c2cc",
          300: "#ed94a7",
          400: "#dd6b86"
        },
        gold: {
          100: "#fdf3d8",
          200: "#f6e1a4",
          300: "#e9c574",
          400: "#d4a84a",
          500: "#b8862b"
        },
        cream: "#fffaf6",
        ink: "#2b1d24"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(244, 114, 154, 0.35)",
        glass: "0 8px 32px rgba(255, 180, 198, 0.25)",
        glow: "0 0 40px rgba(255, 143, 174, 0.45)"
      },
      backgroundImage: {
        "blush-gradient":
          "linear-gradient(135deg, #fff5f7 0%, #ffe6ec 30%, #ffd1dc 60%, #ffb4c6 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #f6e1a4 0%, #e9c574 50%, #d4a84a 100%)",
        "rose-radial":
          "radial-gradient(circle at 20% 20%, #ffd1dc 0%, transparent 60%), radial-gradient(circle at 80% 30%, #ffb792 0%, transparent 55%), radial-gradient(circle at 50% 90%, #ffe6ec 0%, transparent 50%)"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(6deg)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(240, 98, 146, 0.45)" },
          "50%": { boxShadow: "0 0 0 18px rgba(240, 98, 146, 0)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        marquee: "marquee 30s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
