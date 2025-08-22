import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function CalculatorReach({
  reach,
  setSection,
  setReach,
}: {
  reach: string | number;
  setSection: (section: string) => void;
  setReach: (reach: number) => void;
}) {
  function handleSubmit() {
    if (String(reach) !== "") {
      setSection("messages");
    } else {
      toast.error("Please select your follower range.");
    }
  }

  const options = [
    { value: 1000, label: "<500 followers" },
    { value: 5000, label: "500–2k" },
    { value: 20000, label: "2k–10k" },
    { value: 60000, label: "10k–50k" },
    { value: 150000, label: "50k+" },
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
          How many followers do you have?
        </motion.h1>
        <motion.p
          className="text-[20px] text-[#999999] leading-[1.2] tracking-normal"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 30, restDelta: 0.001, delay: 0.2 }}
        >
          Give us your best guess. We&apos;ll turn it into the number of sales you could be getting.
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
          onValueChange={(v) => setReach(Number(v))}
          className="flex flex-col gap-2 text-[#FEF1E1]"
        >
          {options.map((opt) => (
            <div key={opt.value} className="flex items-center space-x-2">
              <RadioGroupItem id={`reach-${opt.value}`} value={String(opt.value)} />
              <Label className="text-base leading-[1.2] tracking-normal" htmlFor={`reach-${opt.value}`}>{opt.label}</Label>
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
          Almost there
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
