"use client";

import { useState } from "react";
import Gradient from "../Gradient";
import Wrapper from "../Wrapper";
import Navbar from "../Navbar";
import CalculatorWelcome from "../calculator/CalculatorWelcome";
import CalculatorReach from "../calculator/CalculatorReach";
import CalculatorMessages from "../calculator/CalculatorMessages";
import CalculatorIndustry from "../calculator/CalculatorIndustry";
import CalculatorPrice from "../calculator/CalculatorPrice";

export default function CalculatorClient() {
  const [section, setSection] = useState("welcome");
  const [reach, setReach] = useState("");
  const [messages, setMessages] = useState("");
  const [industry, setIndustry] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Gradient />
      <Wrapper className="w-full h-screen flex flex-col relative !px-0 !py-0 !gap-0">
        <div className="px-16 max-md:px-6">
          <Navbar />
        </div>
        <div className="flex-1 flex items-center justify-center">
          {section === "welcome" && (
            <CalculatorWelcome setSection={setSection} />
          )}
          {section === "reach" && (
            <CalculatorReach
              reach={reach}
              setSection={setSection}
              setReach={(value) => setReach(String(value))}
            />
          )}
          {section === "messages" && (
            <CalculatorMessages
              reach={reach}
              messages={messages}
              setSection={setSection}
              setMessages={(value) => setMessages(String(value))}
            />
          )}
          {section === "industry" && (
            <CalculatorIndustry
              industry={industry}
              setSection={setSection}
              setIndustry={setIndustry}
            />
          )}
          {section === "price" && (
            <CalculatorPrice
              reach={reach}
              messages={messages}
              price={price}
              setPrice={(value: string | number) => setPrice(String(value))}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
}
