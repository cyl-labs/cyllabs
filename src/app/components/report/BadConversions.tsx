import { motion } from "framer-motion";

export default function BadConversions({
  currentRevenue,
  possibleRevenue,
}: {
  currentRevenue: number;
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
        >
          People are visiting. They are not buying. A trust-first website{" "}
          <span className="text-[#FD5001]">gives them a clear next step.</span>
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
        >
          You have the audience. Now it&apos;s time to turn them into paying
          customers.
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
        With an average conversion rate of 3%.
      </motion.p>
      <div className="w-1/2 flex flex-col gap-8 text-[48px] font-semibold max-[1200px]:w-4/5 max-md:w-full max-sm:text-[40px]">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
        >
          Current revenue: ${Number(currentRevenue.toFixed(0)).toLocaleString()}
        </motion.p>
        <motion.p
          className="text-[#FD5001]"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
        >
          Possible revenue: $
          {Number(possibleRevenue.toFixed(0)).toLocaleString()}
        </motion.p>
      </div>
      <motion.p
        className="text-[48px] font-semibold max-sm:text-[40px]"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
        }}
      >
        That&apos;s{" "}
        <span className="text-[#FD5001]">
          $
          {Number(
            (possibleRevenue - currentRevenue).toFixed(0)
          ).toLocaleString()}
        </span>{" "}
        dollars left on the table every month.
      </motion.p>
    </div>
  );
}
