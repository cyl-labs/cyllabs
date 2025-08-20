"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

interface ContactProps {
  onMessageSent: () => void;
}

export default function Contact({ onMessageSent }: ContactProps) {
  const [singaporeTime, setSingaporeTime] = useState<string>("");
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio("/sound/notification-effect.wav");
    audioRef.current.volume = 0.5;
    // Preload the audio
    audioRef.current.preload = "auto";
  }, []);

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

  const playSuccessSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      // Add more robust error handling and user interaction check
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio played successfully");
          })
          .catch((error) => {
            console.log("Could not play sound:", error);
            // Fallback - try playing on next user interaction
            document.addEventListener(
              "click",
              () => {
                audioRef.current?.play().catch(console.log);
              },
              { once: true }
            );
          });
      }
    }
  };

  const showSuccessMessage = () => {
    setShowSuccessPopup(true);
    playSuccessSound();

    // Auto-hide after 4 seconds
    setTimeout(() => {
      setShowSuccessPopup(false);
    }, 4000);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        }
      );

      console.log("SUCCESS!");
      form.current?.reset();
      onMessageSent();
      showSuccessMessage();
    } catch (error) {
      console.log("FAILED...", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.section
        id="contact"
        ref={sectionRef}
        className="bg-white h-screen max-h-screen box-border contact-section p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 primary-text flex items-center overflow-hidden"
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
                Not Ready to Chat on WhatsApp? Here&apos;s Another Way to Reach
                Us.
              </motion.h1>

              <motion.form
                ref={form}
                onSubmit={sendEmail}
                variants={formStagger}
                className="space-y-3 md:space-y-4 tracking-normal"
              >
                <motion.div
                  className="form-control"
                  variants={formFieldVariant}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="input-field w-full py-2 md:py-2.5 border-b-2 border-opacity-50 outline-none text-sm md:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div
                  className="form-control"
                  variants={formFieldVariant}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email/Number"
                    className="input-field w-full py-2 md:py-2.5 border-b-2 border-opacity-50 outline-none text-sm md:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div
                  className="form-control"
                  variants={formFieldVariant}
                >
                  <textarea
                    id="message"
                    cols={30}
                    rows={3}
                    placeholder="Your Message"
                    name="message"
                    className="input-field w-full py-2 md:py-2.5 border-b-2 border-opacity-50 outline-none text-sm md:text-base resize-none"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  name="submit"
                  value="Send"
                  className={`submit-btn group flex items-center justify-center px-4 md:px-5 py-2 md:py-2.5 bg-white text-black border-[#E8492A] border-2 font-semibold rounded-lg cursor-pointer hover:bg-[#E8492A] hover:text-white transition-all duration-300 mx-auto lg:mx-0 text-sm md:text-base mt-4 md:mt-6 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  variants={formFieldVariant}
                  disabled={isSubmitting}
                >
                  <div className="relative w-4 h-4 md:w-5 md:h-5 mr-2">
                    <Image
                      src="/icons/submit.svg"
                      alt="submit"
                      width={20}
                      height={20}
                      className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <Image
                      src="/icons/submit-white.svg"
                      alt="submit"
                      width={20}
                      height={20}
                      className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                  <span className="px-1 font-medium">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
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
                <div className="flex items-center mb-2 gap-4">
                  <Mail className="w-6 h-6" />
                  <p className="text-sm md:text-base">
                    cyllabsdigital@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z"
                      fill="#25D366"
                    />
                  </svg>
                  <Link
                    href="https://wa.me/6581977376?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation"
                    target="_blank"
                    className="text-sm md:text-base"
                  >
                    +65 8197 7376
                  </Link>
                </div>
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
                    href="https://www.instagram.com/cyl.labs/"
                    target="_blank"
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
                <p className="text-sm md:text-base helvetica-light">
                  Singapore
                </p>
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

      {/* Success Popup - Only render when showSuccessPopup is true */}
      {showSuccessPopup && (
        <motion.div
          className="fixed font-extrabold bottom-12 right-8 bg-green-500 text-white px-8 py-4 rounded shadow-lg"
          style={{
            zIndex: 9999,
            position: "fixed",
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.25, 0, 1],
          }}
        >
          Message sent successfully!
        </motion.div>
      )}
    </>
  );
}
