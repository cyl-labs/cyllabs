import { motion } from "framer-motion";

export default function PdfHeader() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1600px] px-16 py-24 max-md:px-6 max-sm:py-16 max-sm:gap-10">
        <div className="flex flex-col justify-between gap-16 max-[1200px]:flex-col max-sm:gap-0">
          <div className="flex flex-col gap-8 max-[1200px]:w-1/2 max-md:w-full">
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
              Free guide: how we stopped{" "}
              <span className="text-[#FD5001]">$12K</span> from leaving in{" "}
              <span className="text-[#FD5001]">30 days</span>
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
              Here&apos;s just a small part of what&apos;s inside. The full
              guide shows every number, mistake, and fix we used so your
              customers stop choosing someone else.
            </motion.p>
          </div>
          <div className="grid grid-cols-3 gap-2 max-[1200px]:grid-cols-2 max-md:grid-cols-1 max-sm:hidden">
            <div
              className="flex flex-col justify-start bg-cover bg-center aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:bg-[position:0%_70%] max-md:aspect-auto"
              style={{ backgroundImage: "url('/money.png')" }}
            >
              <h3 className="text-[24px] font-semibold">
                Spot the silent sales leaks draining your business every month
              </h3>
            </div>
            <div
              className="flex flex-col justify-start bg-cover bg-top aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:bg-center max-md:aspect-auto"
              style={{ backgroundImage: "url('/competitors.png')" }}
            >
              <h3 className="text-[24px] font-semibold">
                Why cheap or DIY sites make customers click away instantly
              </h3>
            </div>
            <div
              className="flex flex-col justify-start bg-cover bg-top blur-lg aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:aspect-auto"
              style={{ backgroundImage: "url('/clock.png')" }}
            >
              <h3 className="text-[24px] font-semibold">
                The fastest way to get a trust-building site live without
                wasting time or money
              </h3>
            </div>
            <div className="col-span-2 pt-16 max-[1200px]:col-span-full max-[1200px]:px-0">
              <p className="w-3/4 text-[48px] font-semibold max-md:w-full max-sm:text-[40px]">
                The <span className="text-[#FD5001]">3rd</span> one will shock
                you, keep scrolling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
