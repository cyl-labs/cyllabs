"use client";

import { motion } from "framer-motion";
import NavbarBlack from "../NavbarBlack";
import PdfHero from "../pdf/PdfHero";
import PdfHeader from "../pdf/PdfHeader";
import PdfStatistics from "../pdf/PdfStatistics";
import PdfFooter from "../pdf/PdfFooter";
import PdfStack from "../pdf/PdfStack";

export default function PdfClient() {
  return (
    <div className="relative">
      <div className="h-screen flex justify-center bg-cover bg-center relative bg-gradient-to-b from-white to-[#999999]">
        <div className="w-screen flex flex-col items-center relative !pt-0 z-10">
          <div className="flex justify-center items-center">
            <div className="max-w-[1600px] px-16 py-24 max-md:px-6 max-sm:py-16 max-sm:gap-10 w-screen h-full flex flex-col justify-between relative !py-0 z-10">
              <NavbarBlack />
            </div>
          </div>

          <PdfHero />
        </div>
      </div>
      <motion.div className="flex flex-col bg-white relative z-10">
        <PdfHeader />
        <PdfStack />
        <PdfStatistics />
        <PdfFooter />
      </motion.div>
    </div>
  );
}
