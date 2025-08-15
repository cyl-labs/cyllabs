"use client";

import { useEffect, useRef } from "react";
import Hero from "./Hero";
import Reality from "./Reality";
import UVPs from "./UVPs";
import Quiz from "./Quiz";
import Contact from "./contact";
import Footer from "../footer";
import Highlights from "../highlights";
import WhatsAppContact from "./WhatsAppContact";

export default function HomePageClient() {
  const handleMessageSent = () => {};
  const mainContentRef = useRef<HTMLDivElement>(null);
  const footerRevealRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contactRef.current || !footerRevealRef.current || !footerRef.current)
        return;

      const contact = contactRef.current;
      const footer = footerRef.current;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const contactTop = contact.offsetTop;
      const contactHeight = contact.offsetHeight;

      const footerStartReveal = contactTop + contactHeight - windowHeight;
      const revealDistance = windowHeight;

      if (scrollY < footerStartReveal) {
        footer.style.transform = `translateY(${windowHeight * 0.25}px)`;
        footer.style.pointerEvents = "none";
      } else if (
        scrollY >= footerStartReveal &&
        scrollY <= footerStartReveal + revealDistance
      ) {
        const revealProgress = (scrollY - footerStartReveal) / revealDistance;
        const footerTranslateY = windowHeight * 0.25 * (1 - revealProgress);
        footer.style.transform = `translateY(${footerTranslateY}px)`;

        if (revealProgress > 0.3) {
          footer.style.pointerEvents = "auto";
        } else {
          footer.style.pointerEvents = "none";
        }
      } else {
        footer.style.transform = `translateY(0px)`;
        footer.style.pointerEvents = "auto";
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="relative secondary-bg">
      <div
        ref={footerRef}
        className="fixed inset-0 z-10 secondary-bg overflow-x-hidden will-change-transform"
        style={{ pointerEvents: "none" }}
      >
        <Footer />
      </div>

      <div ref={mainContentRef} className="relative z-30 bg-black">
        <div className="overflow-hidden">
          <Hero />
          <Reality />
        </div>
        <div className="bg-white">
          <UVPs />
          <Quiz />
        </div>
        <Highlights />
        <div ref={contactRef} className="bg-white will-change-transform">
          <WhatsAppContact />
          <Contact onMessageSent={handleMessageSent} />
        </div>
      </div>

      <div
        ref={footerRevealRef}
        className="relative z-20 h-[calc(100vh+2px)] overflow-x-hidden"
        style={{ pointerEvents: "none" }}
      />
    </main>
  );
}