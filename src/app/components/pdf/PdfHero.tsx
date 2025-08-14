import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PdfHero() {
  return (
    <section className="px-auto items-center sm:gap-4 xl:gap-20 md:justify-center h-full flex flex-col md:flex-row">

        <div className="flex flex-col text-left">
          <p className="leading-tight text-6xl md:text-7xl lg:text-8xl xl:text-[120px] 2xl:text-[140px] anton uppercase accent-text">
            20,000
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-black anton uppercase leading-none tracking-tight">
            impressions
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-black anton uppercase py-2 md:py-4 leading-none tracking-tight">
            in one month
          </p>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl leading-tight text-black uppercase font-semibold tracking-normal mt-2 md:mt-4">
            Singaporean websites <span className="italic accent-text">fail</span>,
            <br /> beat the market
          </p>
          <Button className="w-fit h-fit accent-bg mt-4 md:mt-6 text-white rounded-full !px-8 !py-3 md:!py-4 text-lg md:text-xl font-semibold cursor-pointer">
            Get it now
            <svg
              className="min-w-5 min-h-5 md:min-w-6 md:min-h-6"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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

      {/* Right image */}
      <div className="min-w-xs md:min-w-sm lg:min-w-xl xl:min-w-2xl flex">
        <div className="relative w-full aspect-square">
          <Image
            src="/pdfHero.svg"
            alt="PDF Hero"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
          />
        </div>
      </div>
    </section>
  )
}
