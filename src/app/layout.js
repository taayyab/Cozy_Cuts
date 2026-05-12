import "./globals.css";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Loader from "@/components/Loader";
import CursorGlow from "@/components/CursorGlow";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

export const metadata = {
  title: "Cozy Cuts — Luxury Beauty & Self-Care",
  description:
    "Cozy Cuts is a premium beauty salon experience. Book treatments, shop curated beauty products, and indulge in modern self-care."
};

export const viewport = {
  themeColor: "#fff5f7"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <Loader />
        <CursorGlow />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
