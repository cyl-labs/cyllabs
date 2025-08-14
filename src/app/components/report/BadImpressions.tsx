import { motion } from "framer-motion";

export default function BadImpressions({
  reach,
  messages,
  price,
}: {
  reach: number;
  messages: number;
  price: number;
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
        >
          We can show your business to 5x more people.
        </motion.h2>
        <motion.p
          className="w-1/5 text-[20px] text-[#999999] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-[1200px]:text-left max-md:w-full"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
        >
          Right now, most people don’t know you exist. That means fewer clicks,
          calls, and sales.
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
      >
        Even if only 3% buy.
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
      >
        That’s a{" "}
        {Number(
          (((reach * 5 * 0.03 * price) / (messages * price)) * 100).toFixed(0)
        ).toLocaleString()}
        % jump in revenue.
      </motion.p>
    </div>
  );
}
