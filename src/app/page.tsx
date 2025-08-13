"use client";
import { useEffect, useRef } from "react";
import Hero from "./components/home/Hero";
import Reality from "./components/home/Reality";
import UVPs from "./components/home/UVPs";
import Quiz from "./components/home/Quiz";
import Contact from "./components/home/contact";
import Footer from "./components/footer";
import Highlights from "./components/highlights";

export default function Home() {
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

      // Distance from top of document
      const contactTop = contact.offsetTop;
      const contactHeight = contact.offsetHeight;

      // Start revealing the footer
      const footerStartReveal = contactTop + contactHeight - windowHeight;
      const revealDistance = windowHeight;

      if (scrollY < footerStartReveal) {
        // Before reveal starts - show only bottom quarter of footer
        footer.style.transform = `translateY(${windowHeight * 0.25}px)`;
        footer.style.pointerEvents = "none";
      } else if (
        scrollY >= footerStartReveal &&
        scrollY <= footerStartReveal + revealDistance
      ) {
        // Progress from bottom
        const revealProgress = (scrollY - footerStartReveal) / revealDistance;
        const footerTranslateY = windowHeight * 0.25 * (1 - revealProgress);
        footer.style.transform = `translateY(${footerTranslateY}px)`;

        // Enable footer interaction
        if (revealProgress > 0.3) {
          footer.style.pointerEvents = "auto";
        } else {
          footer.style.pointerEvents = "none";
        }
      } else {
        // Fully revealed
        footer.style.transform = `translateY(0px)`;
        footer.style.pointerEvents = "auto";
      }
    };

    // Initial call
    handleScroll();

    // Add listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="relative secondary-bg">
      {/* Footer */}
      <div
        ref={footerRef}
        className="fixed inset-0 z-10 secondary-bg overflow-x-hidden will-change-transform"
        style={{ pointerEvents: "none" }}
      >
        <Footer />
      </div>

      {/* Main Content */}
      <div ref={mainContentRef} className="relative z-30 bg-black">
        <div className="overflow-hidden">
          <Hero />
          <Reality />
        </div>
        <UVPs />
        <Quiz />
        <Highlights />
        <div ref={contactRef} className="will-change-transform">
          <Contact onMessageSent={handleMessageSent} />
        </div>
      </div>

      {/* Footer Reveal Scroll Space */}
      <div
        ref={footerRevealRef}
        className="relative z-20 h-[calc(100vh+2px)]"
        style={{ pointerEvents: "none" }}
      />
    </main>
  );
}
