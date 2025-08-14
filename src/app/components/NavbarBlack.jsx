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

export default function NavbarBlack() {
  return (
    <div className="w-full flex justify-between items-center py-8 text-[16px] font-semibold">
      <Link className="flex items-end gap-[5px]" href="/">
        <h1 className="text-[32px] font-semibold">cyllabs</h1>
        <div className="w-2 h-2 bg-[#FD5001] rounded-full mb-[5px]"></div>
      </Link>
      <div className="flex gap-16 max-sm:hidden">
        <Link href="/">Home</Link>
        <Link href="/">Pricing</Link>
      </div>
      <div>
        <p className="cursor-pointer font-semibold max-sm:hidden">Contact Us</p>
        <Sheet>
          <SheetTrigger className="sm:hidden">
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
                <Link href="/">Pricing</Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
