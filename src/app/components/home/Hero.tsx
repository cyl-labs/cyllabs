"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="h-screen bg-white flex justify-center bg-cover bg-center relative">
      <Image className="object-cover" src="/abstract-desk.png" alt="" fill />
      <div className="w-[200%] h-[20%] bg-black absolute blur-2xl left-[-50%] top-[-10%]"></div>

      <Wrapper className="w-screen h-full flex flex-col justify-between relative !pt-0 z-10">
        <Navbar />
        <div className="flex flex-col items-end text-white gap-8">
          <motion.div
            className="flex justify-end items-end gap-8 max-[1200px]:gap-[22px] max-md:gap-4 max-sm:gap-[10px]"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
          >
            <h1 className="w-3/4 text-[64px] text-right font-semibold max-[1200px]:text-[48px] max-md:w-full">
              Launch a <span className="text-[#FD5001]">premium</span> website
              in as little as <span className="text-[#FD5001]">14 days</span>.
            </h1>
          </motion.div>
          <motion.div
            className="flex justify-end items-center flex-wrap gap-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
              delay: 0.2,
            }}
          >
            <p className="text-[28px] opacity-70">cut your losses.</p>
            <Button
              asChild
              className="w-fit h-fit max-sm:self-center bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold overflow-hidden relative group"
            >
              <Link
                href="https://wa.me/6581977376?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation"
                target="_blank"
              >
                <motion.div className="flex items-center gap-2 max-sm:justify-center">
                  <span>Contact us</span>
                  <motion.svg
                    className="min-w-6 min-h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <motion.path
                      d="M7 7H17M17 7V17M17 7L7 17"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.div>
              </Link>
            </Button>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
}
