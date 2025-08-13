"use client";

import { motion } from "framer-motion";
import Navbar from "../components/NavbarPdf";
import PdfHero from "../components/pdf/pdfHero";
import PdfHeader from "../components/pdf/PdfHeader";
import PdfStatistics from "../components/pdf/PdfStatistics";
import PdfFooter from "../components/pdf/PdfFooter";
import PdfStack from "../components/pdf/PdfStack";

export default function Page() {
  return (
    <div className="relative">
      <div className="h-screen flex justify-center bg-cover bg-center relative bg-gradient-to-b from-white to-[#999999]">
        <div className="w-screen h-full flex flex-col justify-between relative !pt-0 z-10">
          <div className="px-16 max-w-[1600px] max-md:px-6">
            <Navbar />
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
