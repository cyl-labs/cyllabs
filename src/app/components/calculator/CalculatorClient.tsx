"use client";

import { useState } from "react";
import Gradient from "../Gradient";
import Wrapper from "../Wrapper";
import Navbar from "../Navbar";
import CalculatorReach from "../calculator/CalculatorReach";
import CalculatorMessages from "../calculator/CalculatorMessages";
import CalculatorPrice from "../calculator/CalculatorPrice";

export default function CalculatorClient() {
  const [section, setSection] = useState("price");
  const [reach, setReach] = useState(1000);
  const [messages, setMessages] = useState("");
  const [price, setPrice] = useState(10);
  const sections = ["price", "reach", "messages"];
  const progress = ((sections.indexOf(section) + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Gradient />
      <Wrapper className="w-full h-screen flex flex-col relative !px-0 !py-0 !gap-0">
        <div className="px-16 max-md:px-6">
          <Navbar />
        </div>
        <div className="flex-1 flex items-center justify-center">
          {section === "reach" && (
            <CalculatorReach
              reach={reach}
              setSection={setSection}
              setReach={(value) => setReach(value)}
            />
          )}
          {section === "messages" && (
            <CalculatorMessages
              reach={reach}
              messages={messages}
              price={price}
              setMessages={(value) => setMessages(String(value))}
            />
          )}
          {section === "price" && (
            <CalculatorPrice
              setPrice={(price: number) => setPrice(price)}
              setSection={setSection}
            />
          )}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-white">
          <div
            className="h-full bg-blue-500 duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </Wrapper>
    </div>
  );
}
