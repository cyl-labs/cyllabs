import { motion } from "framer-motion";
import Counter from "../Counter";

export default function ZeroImpressions({ price }: { price: number }) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex justify-between gap-8 max-[1200px]:flex-col">
        <motion.h2
          className="w-1/2 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]"
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
          We can help you get your first clients through a website.
        </motion.h2>
        <motion.p
          className="w-1/5 text-[20px] text-right leading-[1.2] tracking-normal !opacity-70 max-[1200px]:w-4/5 max-[1200px]:text-left max-md:w-full"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
          viewport={{ once: true }}
        >
          Right now, no one knows you exist. That means no clicks, calls, or
          sales.
        </motion.p>
      </div>
      <motion.p
        className="w-1/2 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]"
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
        We could get you <span className="text-[#FD5001]">600</span> clicks.
      </motion.p>
      <motion.p
        className="w-1/2 text-[48px] text-[#FD5001] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]"
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
        You could be earning $<Counter to={price * 18} /> a month.
      </motion.p>
    </div>
  );
}
