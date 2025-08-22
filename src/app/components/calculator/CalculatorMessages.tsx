import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CalculatorMessages({
  reach,
  messages,
  price,
  setSection,
  setMessages,
}: {
  reach: string | number;
  messages: string | number;
  price: number;
  setSection: (section: string) => void;
  setMessages: (messages: string | number) => void;
}) {
  const router = useRouter();

  function handleSubmit() {
    if (messages === "") {
      toast.error("Please enter a number into the field.");
      return;
    }

    if (Number(messages) > Number(reach)) {
      toast.error(
        "The number of people that message you cant be more than your views."
      );
      return;
    }

    if (Number(messages) <= Number(reach)) {
      localStorage.setItem("data", JSON.stringify({ reach, messages, price }));
      router.push("/report");
    }
  }

  return (
    <div className="max-w-[100vw] h-full max-h-[500px] flex flex-col flex-grow justify-between px-16 py-8 max-md:px-6 max-md:py-4">
      <div className="flex flex-col gap-8">
        <motion.h1
          className="text-[64px] text-white font-semibold max-[1200px]:text-[48px] max-sm:text-[40px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
          }}
        >
          How Many People Contact You Each Week?
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
          We&apos;ll use this to see how well your audience turns into real
          leads.
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col gap-8"
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
          Average no. of messages per week
        </h2>
        <Input
          className="w-1/2 text-[64px] text-[#FEF1E1] font-semibold placeholder-[#999999] focus:outline-none max-[1200px]:text-[48px] max-sm:text-[40px] max-sm:hidden"
          type="number"
          min="0"
          value={messages}
          placeholder="Enter your no. of weekly messages"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || Number(value) >= 0) {
              setMessages(value);
            }
          }}
        />
        <Input
          className="text-[#FEF1E1] font-semibold placeholder-[#999999] focus:outline-none sm:hidden"
          type="number"
          min="0"
          value={messages}
          placeholder="Enter your no. of weekly messages"
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || Number(value) >= 0) {
              setMessages(value);
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
