import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PdfStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const card1X = useTransform(scrollYProgress, [0, 0.33], [0, 1000]);
  const card2X = useTransform(scrollYProgress, [0.33, 0.66], [0, 1000]);
  const card2Rotate = useTransform(scrollYProgress, [0.33, 0.66], [10, 0]);
  const card3X = useTransform(scrollYProgress, [0.66, 1], [0, 1000]);
  const card3Rotate = useTransform(scrollYProgress, [0.66, 1], [-10, 0]);

  return (
    <div
      className="min-h-screen flex justify-center max-sm:min-h-[300vh] sm:hidden"
      ref={containerRef}
    >
      <div className="max-w-[1600px] px-16 py-24 overflow-hidden max-md:px-6 max-sm:py-16 max-sm:gap-10 relative max-sm:h-fit max-sm:sticky max-sm:top-0">
        <div className="h-fit flex flex-col sticky gap-24 top-0">
          <div className="flex justify-center">
            <div className="w-[90%] relative aspect-square">
              <motion.div
                className="w-full h-full absolute z-40"
                style={{
                  x: card1X,
                }}
              >
                <div className="flex flex-col justify-start aspect-square max-md:h-[340px] max-md:bg-[position:0%_70%] max-md:aspect-auto">
                  <Image
                    className="object-cover"
                    src="/money.png"
                    alt=""
                    fill
                  />
                  <h3 className="absolute top-0 text-[24px] font-semibold p-10 max-[1200px]:p-8 max-md:p-6">
                    Spot the silent sales leaks draining your business every
                    month
                  </h3>
                </div>
              </motion.div>
              <motion.div
                className="w-full h-full absolute z-30"
                style={{
                  x: card2X,
                  rotate: card2Rotate,
                }}
              >
                <div className="flex flex-col justify-start aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:bg-center max-md:aspect-auto">
                  <Image
                    className="object-cover"
                    src="/competitors.png"
                    alt=""
                    fill
                  />
                  <h3 className="absolute left-0 top-0 text-[24px] font-semibold p-10 max-[1200px]:p-8 max-md:p-6">
                    Why cheap or DIY sites make customers click away instantly
                  </h3>
                </div>
              </motion.div>
              <motion.div
                className="w-full h-full absolute z-20"
                style={{
                  x: card3X,
                  rotate: card3Rotate,
                }}
              >
                <div className="flex flex-col justify-start blur-lg aspect-square p-10 max-[1200px]:p-8 max-md:p-6 max-md:h-[340px] max-md:aspect-auto">
                  <Image
                    className="object-cover"
                    src="/clock.png"
                    alt=""
                    fill
                  />
                  <h3 className="absolute left-0 top-0 text-[24px] font-semibold p-10 max-[1200px]:p-8 max-md:p-6">
                    The fastest way to get a trust-building site live without
                    wasting time or money
                  </h3>
                </div>
              </motion.div>
              <motion.div className="w-full h-full flex flex-col items-center absolute gap-8 z-0">
                <div
                  className="w-2/3 bg-contain bg-center bg-no-repeat relative aspect-square p-10 max-[1200px]:p-8 max-md:p-6"
                  style={{ backgroundImage: "url('/arrow.png')" }}
                ></div>
                <div className="flex flex-col justify-end gap-4 relative z-10">
                  <h2 className="text-[32px] text-center font-semibold">
                    Keep <span className="text-[#FD5001]">scrolling</span>.
                  </h2>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col gap-8 max-sm:gap-5">
            <p className="w-full text-[48px] font-semibold max-sm:text-[40px]">
              Unlock this and{" "}
              <span className="text-[#FD5001]">8 other causes</span> in the
              guide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
