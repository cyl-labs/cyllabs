import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center py-8 text-[16px] text-white font-semibold">
      <Link className="flex items-end gap-[5px]" href="/">
        <h1 className="text-[32px] font-semibold">cyllabs</h1>
        <div className="w-2 h-2 bg-[#FD5001] rounded-full mb-[5px]"></div>
      </Link>
      <div className="flex items-center gap-16 max-md:hidden">
        <Link href="/">Home</Link>
        <Link href="/packages">Plans</Link>
        <Link href="/pdf">PDF for winning customers online</Link>
        <Link href="/calculator">See what's losing you sales</Link>
      </div>
      <div>
        <Link
          className="cursor-pointer font-semibold max-md:hidden"
          href="https://wa.me/6587670797?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation"
          target="_blank"
        >
          Contact Us
        </Link>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetTitle>
                <Link className="flex items-end gap-[5px]" href="/">
                  <h1 className="text-[32px] font-semibold">cyllabs</h1>
                  <div className="w-2 h-2 bg-[#FD5001] rounded-full mb-[5px]"></div>
                </Link>
              </SheetTitle>
              <SheetDescription className="leading-[1.2] tracking-normal">
                cut your losses.
              </SheetDescription>
              <div className="flex flex-col py-4 gap-8 text-[20px] font-semibold">
                <Link href="/">Home</Link>
                <Link href="/packages">Plans</Link>
                <Link href="/pdf">PDF for winning customers online</Link>
                <Link href="/calculator">See what's losing you sales</Link>
                <Link
                  href="https://wa.me/6587670797?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation"
                  target="_blank"
                >
                  Contact Us
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
