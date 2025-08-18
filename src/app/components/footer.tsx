"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // State for popup and form submission
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio("/sound/notification-effect.wav");
    audioRef.current.volume = 0.5;
    // Preload the audio
    audioRef.current.preload = "auto";
  }, []);

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

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current || isSubmitting || !isAgreed) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_EMAIL_ID as string,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        }
      );

      console.log("Email subscription SUCCESS!");
      setEmail("");
      setIsAgreed(false);
      formRef.current?.reset();
      showSuccessMessage();
    } catch (error) {
      console.log("Email subscription FAILED...", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
        delay: 0.2,
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
        delay: 0.3,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const staggerChildren: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const footerItemVariants: Variants = {
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

  const buttonHover: Variants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.25, 0, 1],
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  const logoTextVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const footerSections = [
    {
      title: "Home",
      items: ["Win customers online", "Fix sales losses"],
      links: ["/pdf", "/calculator"],
    },
    {
      title: "Packages",
      items: ["Packages"],
      links: ["/packages"],
    },
  ];

  return (
    <>
      <motion.section
        ref={ref}
        className="secondary-text overflow-y-hidden secondary-bg h-screen w-screen tracking-normal overflow-x-hidden flex flex-col justify-between py-6 pt-18 sm:py-12 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-12 lg:px-[60px] pb-4 sm:pb-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          position: "relative",
          zIndex: 40,
        }}
      >
        {/* Footer section */}
        <motion.div
          className="pb-0 flex flex-col lg:flex-row mx-auto gap-6 lg:gap-24 xl:gap-32"
          variants={fadeInUp}
        >
          {/* Left section */}
          <motion.div
            className="footer-left flex flex-col max-w-full lg:max-w-md xl:min-w-2xl"
            variants={fadeInLeft}
          >
            <motion.h4
              className="inter-bold text-xl sm:text-2xl lg:text-[36px] pb-3"
              variants={fadeInUp}
            >
              Stay in the Loop
            </motion.h4>
            {/* Email signup form */}
            <motion.form
              ref={formRef}
              onSubmit={handleEmailSubmit}
              className="text-[13px] inter-semibold flex flex-col sm:flex-row items-stretch sm:items-center gap-7 lg:gap-[40px]"
              variants={fadeInUp}
            >
              <motion.input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#474747] placeholder-gray-400 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#E8492A] min-w-0 sm:min-w-[250px]"
                variants={fadeInUp}
                whileFocus={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                required
                disabled={isSubmitting}
              />
              <motion.button
                type="submit"
                className={`w-full sm:w-auto sm:min-w-[160px] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-[0_-20px_40px_-12px_rgba(232,73,42,0.5),20px_0_40px_-12px_rgba(232,73,42,0.5),-20px_0_40px_-12px_rgba(232,73,42,0.5),0_20px_40px_-12px_rgba(232,73,42,0.5)] text-sm border hover:cursor-pointer border-[#E8492A] ${
                  isSubmitting || !isAgreed
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                }`}
                variants={buttonHover}
                whileHover={!isSubmitting && isAgreed ? "hover" : {}}
                whileTap={!isSubmitting && isAgreed ? "tap" : {}}
                disabled={isSubmitting || !isAgreed}
              >
                {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
              </motion.button>
            </motion.form>
            <motion.div
              className="flex flex-row gap-2 pt-5 lg:pt-2 xl:pt-3"
              variants={fadeInUp}
            >
              <motion.div
                className="flex items-start mt-0.5"
                variants={fadeInUp}
              >
                <motion.input
                  type="checkbox"
                  id="email-agreement"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="appearance-none w-4 h-4 bg-transparent border-2 border-[#E8492A] rounded-sm hover:cursor-pointer checked:border-[#E8492A] checked:bg-[#E8492A] relative checked:after:content-['✓'] checked:after:absolute checked:after:top-[-2px] checked:after:left-[1px] checked:after:text-white checked:after:text-xs checked:after:font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                />
              </motion.div>
              <motion.label
                htmlFor="email-agreement"
                className="text-sm cursor-pointer leading-relaxed"
                variants={fadeInUp}
                whileHover={{ opacity: 0.8 }}
              >
                I agree to receive emails from CYL Labs.
              </motion.label>
            </motion.div>
          </motion.div>
          {/* Right section */}
          <motion.div
            className="footer-right flex flex-col lg:flex-row gap-6 lg:gap-16 xl:gap-20"
            variants={fadeInRight}
          >
            {/* Desktop navigation */}
            <motion.div
              className="footer-pages hidden lg:flex flex-row gap-16 xl:gap-8"
              variants={staggerChildren}
            >
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  className="footer-page flex flex-col gap-4"
                  variants={fadeInUp}
                >
                  <motion.h4
                    className="inter-semibold text-lg"
                    variants={footerItemVariants}
                  >
                    {section.title}
                  </motion.h4>
                  <motion.div
                    className="footer-items inter-semibold text-xs flex flex-col gap-4"
                    variants={staggerChildren}
                  >
                    {section.items.map((item, index) => (
                      <motion.div
                        key={index}
                        className="relative cursor-pointer group"
                        variants={footerItemVariants}
                        whileHover={{
                          x: 5,
                          color: "#E8492A",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Link href={section.links[index]}>{item}</Link>
                        <motion.div
                          className="absolute bottom-0 left-0 h-[1px] bg-[#E8492A] origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            {/* Mobile accordion */}
            <motion.div className="lg:hidden w-full" variants={fadeInUp}>
              <Accordion type="multiple" className="w-full">
                {footerSections.map((section, sectionIndex) => (
                  <AccordionItem
                    key={sectionIndex}
                    value={`item-${sectionIndex}`}
                    className="border-b border-gray-600"
                  >
                    <AccordionTrigger className="text-left inter-semibold text-base hover:text-[#E8492A] transition-colors duration-200 py-3">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <motion.div
                        className="flex flex-col gap-2 pb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {section.items.map((item, index) => (
                          <motion.div
                            key={index}
                            className="relative cursor-pointer group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.15,
                              delay: index * 0.05,
                              ease: "easeOut",
                            }}
                          >
                            <Link
                              className="inter-semibold text-sm hover:text-[#E8492A] transition-colors duration-150 py-1"
                              href={section.links[index]}
                            >
                              {item}
                            </Link>
                            <motion.div
                              className="absolute bottom-0 left-0 h-[1px] bg-[#E8492A] origin-left"
                              initial={{ scaleX: 0 }}
                              whileHover={{ scaleX: 1 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.4, 0, 0.2, 1],
                              }}
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
            {/* Socials section */}
            <motion.div
              className="footer-socials flex flex-col gap-4"
              variants={fadeInUp}
            >
              <motion.h4
                className="inter-semibold text-lg"
                variants={footerItemVariants}
              >
                Socials
              </motion.h4>
              <motion.a
                href="https://www.instagram.com/cyl.labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="social inter-semibold text-xs flex flex-row gap-2 items-center cursor-pointer group relative"
                variants={footerItemVariants}
                whileHover={{
                  x: 5,
                  color: "#E8492A",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  whileHover={{
                    transition: { duration: 0.2 },
                  }}
                >
                  <Instagram size={16} />
                </motion.div>
                <p>Instagram</p>
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-[#E8492A] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61578162347776"
                target="_blank"
                rel="noopener noreferrer"
                className="social inter-semibold text-xs flex flex-row gap-2 items-center cursor-pointer group relative"
                variants={footerItemVariants}
                whileHover={{
                  x: 5,
                  color: "#E8492A",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  whileHover={{
                    transition: { duration: 0.2 },
                  }}
                >
                  <Facebook size={16} />
                </motion.div>
                <p>Facebook</p>
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-[#E8492A] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              </motion.a>
              <motion.a
                href="https://wa.me/6581977376?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="social inter-semibold text-xs flex flex-row gap-2 items-center cursor-pointer group relative"
                variants={footerItemVariants}
                whileHover={{
                  x: 5,
                  color: "#E8492A",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  whileHover={{
                    transition: { duration: 0.2 },
                  }}
                >
                  <svg
                    className="w-4 h-4"
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
                </motion.div>
                <p>WhatsApp</p>
                <motion.div
                  className="absolute bottom-0 left-0 h-[1px] bg-[#E8492A] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Big animated name */}
        <div className="relative py-20 lg:py-24 lg:pb-36 xl:py-42 2xl:py-54 text-[60px] sm:text-[80px] md:text-[120px] lg:text-[200px] xl:text-[280px] 2xl:text-[360px] 3xl:text-[440px] leading-[1.19] text-center inter-semibold flex justify-center">
          <motion.h1
            className="text-white lg:top-[40%] xl:top-[50%] absolute transform translate-y-[-55%]"
            variants={logoTextVariants}
          >
            cyllabs.
          </motion.h1>
          <motion.h1
            className="accent-text animate-[animate_7s_ease-in-out_infinite] absolute transform translate-y-[-55%] "
            variants={logoTextVariants}
          >
            cyllabs.
          </motion.h1>
        </div>
      </motion.section>

      {/* Success Popup - Only render when showSuccessPopup is true */}
      {showSuccessPopup && (
        <motion.div
          className="font-extrabold fixed bottom-12 right-8 bg-green-500 text-white px-8 py-4 rounded shadow-lg"
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
          Successfully subscribed to newsletter!
        </motion.div>
      )}

      {/* Animation style */}
      <style>{`
        @keyframes animate {
        0%, 100% {
          clip-path: polygon(
            0% 60%, 10% 55%, 20% 58%, 30% 62%, 40% 60%,
            50% 58%, 60% 55%, 70% 57%, 80% 60%, 90% 62%, 100% 60%,
            100% 100%, 0% 100%
          );
        }
        25% {
          clip-path: polygon(
            0% 58%, 10% 60%, 20% 62%, 30% 60%, 40% 57%,
            50% 55%, 60% 58%, 70% 62%, 80% 60%, 90% 57%, 100% 55%,
            100% 100%, 0% 100%
          );
        }
        50% {
          clip-path: polygon(
            0% 55%, 10% 57%, 20% 60%, 30% 62%, 40% 60%,
            50% 58%, 60% 55%, 70% 52%, 80% 55%, 90% 58%, 100% 60%,
            100% 100%, 0% 100%
          );
        }
        75% {
          clip-path: polygon(
            0% 57%, 10% 60%, 20% 62%, 30% 60%, 40% 58%,
            50% 55%, 60% 57%, 70% 60%, 80% 62%, 90% 60%, 100% 58%,
            100% 100%, 0% 100%
          );
        }
      }
      `}</style>
    </>
  );
}
