"use client";
import { useState, useEffect, useRef } from "react";
import { Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, useInView, Variants } from "framer-motion";

interface ContactProps {
  onMessageSent: () => void;
}

export default function Contact({ onMessageSent }: ContactProps) {
  const [singaporeTime, setSingaporeTime] = useState<string>("");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const formStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  };

  const formFieldVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const rightSideStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  const rightSideItem: Variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  useEffect(() => {
    const fetchSingaporeTime = async () => {
      try {
        const response = await fetch(
          "https://timeapi.io/api/time/current/zone?timeZone=Singapore"
        );
        const data = await response.json();
        const formattedTime = `${String(data.date)} ${String(
          data.hour
        ).padStart(2, "0")}:${String(data.minute).padStart(2, "0")}:${String(
          data.seconds
        ).padStart(2, "0")}`;
        setSingaporeTime(formattedTime);
      } catch (error) {
        console.error("Error fetching Singapore time:", error);
        setSingaporeTime("");
      }
    };

    fetchSingaporeTime();
    const interval = setInterval(fetchSingaporeTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY as string,
        }
      )
      .then(() => {
        console.log("SUCCESS!");
        form.current?.reset();
        onMessageSent();
      });
  };

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="h-screen max-h-screen box-border contact-section py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 2xl:py-20 primary-text flex items-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="flex flex-col lg:flex-row w-full lg:gap-44  items-start lg:items-center max-w-7xl mx-auto h-full justify-center">
        <motion.div
          className="info-left w-full lg:w-auto lg:min-w-0 xl:min-w-[500px] 2xl:min-w-[600px] flex flex-col justify-center h-full py-0"
          variants={fadeInLeft}
        >
          <div className="contact-form-container">
            <motion.h1
              className="contact-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 lg:mb-8 leading-tight tracking-tight"
              variants={fadeInUp}
            >
              Want to stand out?
              <br />
              Let&apos;s make your dream a reality.
            </motion.h1>

            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={formStagger}
              className="space-y-3 md:space-y-4 tracking-normal"
            >
              <motion.div className="form-control" variants={formFieldVariant}>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name"
                  className="input-field w-full py-2 md:py-2.5 border-b-2 border-opacity-50 outline-none text-sm md:text-base"
                  required
                />
              </motion.div>

              <motion.div className="form-control" variants={formFieldVariant}>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="Your Email/Number"
                  className="input-field w-full py-2 md:py-2.5 border-b-2 border-opacity-50 outline-none text-sm md:text-base"
                  required
                />
              </motion.div>

              <motion.div className="form-control" variants={formFieldVariant}>
                <textarea
                  id="message"
                  cols={30}
                  rows={3}
                  placeholder="Your Message"
                  name="message"
                  className="input-field w-full py-2 md:py-2.5 border-b-2 border-opacity-50 outline-none text-sm md:text-base resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                name="submit"
                value="Send"
                className="submit-btn group flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 bg-white text-black border-[#E8492A] border-2 font-semibold rounded-lg cursor-pointer hover:bg-[#E8492A] hover:text-white transition-all duration-300 mx-auto lg:mx-0 text-sm md:text-base mt-4 md:mt-6"
                variants={formFieldVariant}
              >
                <div className="relative w-4 h-4 md:w-5 md:h-5 mr-2">
                  <img
                    src="/icons/submit.svg"
                    alt="submit"
                    className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src="/icons/submit-white.svg"
                    alt="submit"
                    className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <span className="px-1 font-medium">Send Message</span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        <motion.div
          className="info-right leading-5 md:leading-6 lg:leading-7 flex flex-col justify-center w-full lg:w-auto px-0 lg:px-4 h-full text-[#383838] tracking-normal font-medium"
          variants={fadeInRight}
        >
          <motion.div
            className="contact-info space-y-4 md:space-y-6 lg:space-y-8"
            variants={rightSideStagger}
          >
            <motion.div variants={rightSideItem}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight mb-1 md:mb-2">
                Contact Details
              </h3>
              <p className="text-sm md:text-base cursor-pointer">
                cyllabsdigital@gmail.com
              </p>
              <p className="text-sm md:text-base cursor-pointer">
                +65 9711 2702
              </p>
            </motion.div>

            <motion.div variants={rightSideItem}>
              <h3 className="text-lg sm:text-xl md:text-2xl cursor-pointer lg:text-3xl font-extrabold tracking-tight mb-1 md:mb-2">
                Online Socials
              </h3>
              <div className="space flex flex-row items-center text-center gap-1">
                <Instagram
                  size={18}
                  strokeWidth={2}
                  className="md:w-5 md:h-5"
                />
                <a
                  href="https://github.com/Koyonari"
                  className="text-sm md:text-base helvetica-light link-hover text-center py-0.5 px-1"
                >
                  cyl.labs
                </a>
              </div>
            </motion.div>

            <motion.div variants={rightSideItem}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight mb-1 md:mb-2">
                Location
              </h3>
              <p className="text-sm md:text-base helvetica-light">Singapore</p>
              {singaporeTime && (
                <p className="text-sm md:text-base helvetica-light">
                  Local time:
                  <span className="ml-2 font-mono text-xs md:text-sm">
                    {singaporeTime}
                  </span>
                </p>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
