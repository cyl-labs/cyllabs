import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Wrapper from "../Wrapper";
import { Button } from "@/components/ui/button";

export default function PdfFooter() {
  return (
    <Wrapper>
      <div className="flex gap-16 max-md:flex-col">
        <div className="w-full flex flex-col gap-8">
          <motion.h1
            className="text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            viewport={{ once: true }}
          >
            Stop guessing.{" "}
            <span className="text-[#999999]">
              {" "}
              Start <span className="text-[#FD5001]">winning</span> customers.
            </span>
          </motion.h1>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold"
            >
              <Link href="/expectations-vs-reality.pdf" target="_blank">
                Get the Free Guide
                <svg
                  className="min-w-6 min-h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 7H17M17 7V17M17 7L7 17"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="w-full relative aspect-square"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
          viewport={{ once: true }}
        >
          <Image className="object-cover" src="/phone.jpeg" alt="" fill />
        </motion.div>
      </div>
    </Wrapper>
  );
}
