import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function CalculatorPrice({
  setPrice,
  setSection,
}: {
  setPrice: (price: number) => void;
  setSection: (section: string) => void;
}) {
  function handleSubmit() {
    setSection("reach");
  }

  const options = [
    { value: 10, label: "$10 – 🍔 coffee/fast food (small purchase)" },
    { value: 20, label: "$20 – 📦 small retail item (book, skincare)" },
    { value: 50, label: "$50 – 👕 clothing / casual meal for 2" },
    { value: 100, label: "$100 – 💇‍♂️ salon session / premium dinner" },
    { value: 200, label: "$200+ – 🛍 luxury item / electronics" },
  ];

  return (
    <div className="max-w-[100vw] h-full max-h-[500px] flex flex-col flex-grow justify-between px-16 py-8 max-md:px-6 max-md:py-4">
      <div className="flex flex-col gap-8">
        <motion.h1
          className="text-[64px] text-white font-semibold max-[1200px]:text-[48px] max-sm:text-[40px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30, restDelta: 0.001 }}
        >
          How Much Does 1 Customer Usually Spend With You?
        </motion.h1>
        <motion.p
          className="text-[20px] text-[#999999] leading-[1.2] tracking-normal"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30, restDelta: 0.001, delay: 0.2 }}
        >
          The examples are just to show the price range.
        </motion.p>
      </div>

      <motion.div
        className="flex flex-col gap-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 30, restDelta: 0.001, delay: 0.4 }}
      >
        <RadioGroup
          defaultValue={String(options[0].value)}
          onValueChange={(v) => setPrice(Number(v))}
          className="flex flex-col gap-2 text-[#FEF1E1]"
        >
          {options.map((opt) => (
            <div key={opt.value} className="flex items-center space-x-2">
              <RadioGroupItem id={`price-${opt.value}`} value={String(opt.value)} />
              <Label className="text-base leading-[1.2] tracking-normal" htmlFor={`price-${opt.value}`}>{opt.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </motion.div>

      <motion.div
        className="flex justify-end"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 30, restDelta: 0.001, delay: 0.6 }}
      >
        <Button
          className="w-fit cursor-pointer h-fit bg-white rounded-full !px-8 !py-4 text-[20px] font-semibold"
          onClick={handleSubmit}
        >
          Next
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
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </motion.div>
    </div>
  );
}
