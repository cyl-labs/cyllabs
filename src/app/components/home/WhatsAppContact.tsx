"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function WhatsAppContact() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1600px] px-16 pt-64 max-md:px-6 max-sm:pt-32 max-sm:gap-10 flex flex-col items-center gap-8 max-md:pb-32">
        <motion.h1 className="w-3/5 text-[64px] text-center font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Spots are <span className="text-[#FD5001]">filling fast</span>. Let&apos;s talk <span className="text-[#FD5001]">now</span>.
          </motion.span>
        </motion.h1>
        <motion.p className="w-1/2 text-[20px] text-[#999999] text-center leading-[1.2] tracking-normal max-md:w-full">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Only a few openings left this month. Message us on WhatsApp now to
            secure your project slot before it&apos;s gone.
          </motion.span>
        </motion.p>
        <Button
          asChild
          className="w-fit h-fit max-sm:self-center bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold overflow-hidden relative group"
        >
          <Link
            href="https://wa.me/6587670797?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation"
            target="_blank"
          >
            <motion.div className="flex items-center gap-2 max-sm:justify-center">
              <span>Reserve your spot</span>
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
      </div>
    </div>
  );
}
