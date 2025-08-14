import { motion } from "framer-motion";

export default function GoodConversions({
  possibleRevenue,
}: {
  possibleRevenue: number;
}) {
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
          You&apos;re doing well. Let&apos;s make it{" "}
          <span className="text-[#FD5001]">bigger</span>.
        </motion.h2>
        <motion.p
          className="w-1/5 opacity-70  text-[20px] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:items-start max-[1200px]:text-left max-md:w-full"
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
          What works now can work even harder with one more way to convert.
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
        Adding a website could add 3% more sales.
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
        That&apos;s an extra $
        {Number(possibleRevenue.toFixed(0)).toLocaleString()} a month.
      </motion.p>
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
        That&apos;s{" "}
        <span className="text-[#FD5001]">
          ${Number(possibleRevenue.toFixed(0)).toLocaleString()}
        </span>{" "}
        you&apos;re not collecting yet
      </motion.p>
    </div>
  );
}
