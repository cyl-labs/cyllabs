import { motion } from "framer-motion";

export default function PdfStatistics() {
  return (
    <div className="flex justify-center items-center overflow-x-hidden">
      <div className="max-w-[1600px] w-full px-16 py-24 max-md:px-6 max-sm:py-16 max-sm:gap-10">
        <div className="flex justify-between gap-16 max-[1200px]:flex-col">
          <div className="w-1/2 max-w-full flex flex-col gap-4 max-[1200px]:w-full">
            <motion.h2
              className="text-[64px] font-semibold max-[1200px]:text-[48px] max-sm:text-[40px]"
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
              No website? You&apos;re sending customers to your{" "}
              <span className="text-[#FD5001]">competitors</span>.
            </motion.h2>
            <motion.p
              className="text-[20px] text-[#999999] leading-[1.2] tracking-normal"
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
              Here&apos;s an example from one of our clients who turned things
              around:
            </motion.p>
          </div>
          <div className="w-2/5 max-w-full flex flex-col items-end gap-8 text-right max-[1200px]:w-full max-[1200px]:items-start max-[1200px]:text-left">
            <div className="flex flex-col items-end gap-8 max-[1200px]:items-start">
              <motion.div
                className="flex flex-col items-end gap-2 max-[1200px]:items-start"
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
                <p className="text-[80px] font-semibold">$12,000+</p>
                <h3 className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                  Sales saved from competitors
                </h3>
              </motion.div>
              <motion.div
                className="flex flex-col items-end gap-2 max-[1200px]:items-start"
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
                <p className="text-[80px] font-semibold">600+</p>
                <h3 className="text-[20px] text-[#999999] leading-[1.2] tracking-normal">
                  Clicks generated
                </h3>
              </motion.div>
            </div>
            <motion.p
              className="text-[20px] text-[#999999] leading-[1.2] tracking-normal mt-4"
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
              One of our clients,{" "}
              <span className="text-[#FD5001]">Family Mookata</span>, saw{" "}
              <span className="text-[#FD5001]">600+ clicks</span> in
              <span className="text-[#FD5001]"> one month</span>, worth
              <span className="text-[#FD5001]"> $12k</span> in sales kept from
              competitors.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
