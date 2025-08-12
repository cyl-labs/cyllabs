import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CalculatorPrice({
  reach,
  messages,
  price,
  setPrice,
}: {
  reach: string | number;
  messages: string | number;
  price: string | number;
  setPrice: (price: string | number) => void;
}) {
  const router = useRouter();

  function handleSubmit() {
    if (String(price) !== "" && Number(price) >= 0) {
      localStorage.setItem("data", JSON.stringify({ reach, messages, price }));
      router.push("/report");
    } else {
      toast.error("Please enter a number into the field.");
    }
  }

  return (
    <div className="h-full max-h-[500px] flex flex-col flex-grow justify-between py-8">
      <div className="flex flex-col gap-8">
        <motion.h1
          className="text-[64px] text-white font-semibold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
        >
          How Much Is Each Customer Worth?
        </motion.h1>
        <motion.p
          className="text-[20px] text-[#999999] leading-[1.2] tracking-normal"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
            delay: 0.2,
          }}
        >
          We’ll use this to estimate the revenue your missed leads could be
          bringing in.
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col gap-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
          delay: 0.4,
        }}
      >
        <h2 className="text-[32px] text-[#FEF1E1] font-semibold">
          Average sale value
        </h2>
        <input
          className="text-[64px] text-[#FEF1E1] font-semibold placeholder-[#999999] focus:outline-none"
          type="number"
          min="0"
          value={price}
          placeholder="Enter your average sale value e.g. 250"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || Number(value) >= 0) {
              setPrice(value);
            }
          }}
        />
      </motion.div>
      <motion.div
        className="flex justify-end"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
          delay: 0.6,
        }}
      >
        <Button
          className="w-fit h-fit bg-white rounded-full !px-8 !py-4 text-[20px] font-semibold cursor-pointer"
          onClick={handleSubmit}
        >
          Read the report
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
