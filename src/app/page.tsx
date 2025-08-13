"use client";

import Hero from "./components/home/Hero";
import Reality from "./components/home/Reality";
import UVPs from "./components/home/UVPs";
import Quiz from "./components/home/Quiz";
import Contact from "./components/home/contact";
import Footer from "./components/footer";
import Highlights from "./components/highlights";

export default function Home() {
  const handleMessageSent = () => {};

  return (
    <main className="relative">
      <div className="relative z-30">
        <div className="overflow-hidden">
          <Hero />
          <Reality />
        </div>
        <UVPs />
        <Quiz />
        <Highlights />
        <Contact onMessageSent={handleMessageSent} />
        <Footer />
      </div>
    </main>
  );
}
