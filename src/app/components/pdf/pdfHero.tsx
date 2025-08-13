import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PdfHero() {
  return (
    <section className="h-screen w-screen !py-0 flex px-8 items-center justify-center flex-col md:flex-row lg:flex-row relative overflow-hidden">
      <div className="left-texts flex flex-col md:justify-center lg:justify-center min-h-screen z-10 relative md:-mt-16 md:left-32 lg:-mt-26 lg:left-64 2xl:-mt-36 2xl:left-54">
        <p className="leading-tight text-7xl md:text-[120px] lg:text-[180px] 2xl:text-[220px] anton uppercase accent-text">
          20,000
        </p>
        <p className="text-4xl md:text-[56px] lg:text-[76px] 2xl:text-[96px] text-black anton uppercase">
          impressions
        </p>
        <p className="text-4xl md:text-[32px] lg:text-[40px] 2xl:text-[54px] text-black anton uppercase py-6 md:py-4">
          in one month
        </p>
        <p className="text-2xl md:text-xl lg:text-2xl 2xl:text-3xl text-black uppercase font-semibold tracking-normal">
          Singaporean websites <span className="italic accent-text">fail</span>,
          <br /> beat the market
        </p>
        <Button className="w-fit h-fit accent-bg mt-4 md:mt-6 text-white rounded-full !px-8 !py-4 text-[20px] md:text-[18px] lg:text-[20px] font-semibold cursor-pointer">
          Get it now
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
        </Button>
      </div>
      <div className="right-image flex justify-center items-center md:-mr-16 md:-mb-32 md:-mt-8 lg:-mr-0 lg:-mb-58 lg:-mt-0 2xl:-mr-40 2xl:-mb-36 -mt-110 2xl:-mt-0">
        <Image
          src="/pdfHero.svg"
          alt="PDF Hero"
          width={400}
          height={400}
          priority
          className="md:w-[600px] lg:w-[960px] 2xl:w-[1440px] max-w-none"
        />
      </div>
    </section>
  );
}
