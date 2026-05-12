"use client";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Store from "@/components/Store";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Home() {
  const root = useRef(null);
  useScrollReveal(root);

  return (
    <main ref={root} className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Store />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
