"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import GoodConversions from "../report/GoodConversions";
import BadConversions from "../report/BadConversions";
import BadImpressions from "../report/BadImpressions";
import { Button } from "@/components/ui/button";

export default function ReportClient() {
  const [data, setData] = useState({
    reach: 0,
    messages: 0,
    price: 0,
  });
  const [conversionRate, setConversionRate] = useState(0);
  const [currentRevenue, setCurrentRevenue] = useState(0);
  const [possibleRevenue, setPossibleRevenue] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem("data");

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      setData({
        reach: parsedData.reach || 0,
        messages: parsedData.messages * 4 || 0,
        price: parsedData.price || 0,
      });

      if (parsedData.reach > 0 && parsedData.messages >= 0) {
        setConversionRate((parsedData.messages * 4 / parsedData.reach) * 100);
      } else {
        setConversionRate(0);
      }

      setCurrentRevenue(parsedData.price * parsedData.messages * 4);
      setPossibleRevenue(parsedData.price * (parsedData.reach * 0.03));
    }
  }, []);

  return (
    <div className="relative">
      <div className="h-screen flex justify-center bg-cover bg-center relative">
        <Image className="object-cover" src="/funnel-report.png" alt="" fill />
        <Wrapper className="w-screen h-full flex flex-col justify-between relative !pt-0 z-10">
          <Navbar />
          <div className="flex flex-col items-end gap-8 text-white text-right">
            <motion.h1
              className="w-2/3 text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                restDelta: 0.001,
              }}
            >
              Your funnel report. Here&apos;s the breakdown.
            </motion.h1>
            <motion.p
              className="w-1/3 opacity-70 text-[20px] text-right leading-[1.2] tracking-normal max-[1200px]:w-4/5 max-md:w-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 30,
                restDelta: 0.001,
                delay: 0.2,
              }}
            >
              Find out why you&apos;re leaving money behind.
            </motion.p>
          </div>
        </Wrapper>
      </div>
      <motion.div
        className="bg-cover relative z-10"
        style={{ backgroundImage: "url('/gradient-3.png')" }}
      >
        <Wrapper className="w-screen flex flex-col !gap-48 max-[1200px]:flex-col">
          <div className="flex justify-between gap-16 max-[1200px]:flex-col">
            <div className="w-1/4 flex flex-col gap-8 max-[1200px]:w-1/2 max-md:w-full">
              <motion.h2
                className="text-[64px] font-semibold max-[1200px]:text-[48px] max-sm:text-[40px]"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                viewport={{ once: true }}
              >
                How You&apos;re Performing
              </motion.h2>
              <motion.p
                className="opacity-70 text-[20px] leading-[1.2] tracking-normal"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                viewport={{ once: true }}
              >
                Your key website metrics, updated from real data.
              </motion.p>
            </div>
            <div className="w-3/5 flex flex-col gap-16 max-[1200px]:w-3/4">
              <div className="flex justify-between flex-wrap gap-16">
                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-[80px] font-semibold">
                    {Number(data.reach).toFixed(0).toLocaleString()}
                  </p>
                  <h3 className="opacity-70 text-[20px] leading-[1.2] tracking-normal">
                    Impressions
                  </h3>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-[80px] font-semibold">
                    {Number(data.messages / 4)
                      .toFixed(0)
                      .toLocaleString()}
                  </p>
                  <h3 className="opacity-70 text-[20px] leading-[1.2] tracking-normal">
                    Weekly messages
                  </h3>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 30,
                    restDelta: 0.001,
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-[80px] font-semibold">
                    ${Number(data.price).toFixed(0).toLocaleString()}
                  </p>
                  <h3 className="opacity-70 text-[20pfx] leading-[1.2] tracking-normal">
                    Average cost
                  </h3>
                </motion.div>
              </div>
              <motion.p
                className="text-[48px] font-semibold max-sm:text-[40px]"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                viewport={{ once: true }}
              >
                Your conversion rate is{" "}
                <span className="text-[#FD5001]">
                  {conversionRate.toFixed(2)}%
                </span>
                .
              </motion.p>
            </div>
          </div>
          {data.reach <= 400 ? (
            <BadImpressions
              reach={data.reach}
              messages={data.messages}
              price={data.price}
            />
          ) : conversionRate >= 3 ? (
            <GoodConversions possibleRevenue={possibleRevenue} />
          ) : (
            <BadConversions
              currentRevenue={currentRevenue}
              possibleRevenue={possibleRevenue}
            />
          )}
          <div className="flex justify-between max-md:flex-col max-md:gap-16">
            <div className="w-3/5 flex flex-col gap-8 max-md:w-full">
              <motion.h1
                className="text-[64px] font-semibold max-[1200px]:w-4/5 max-[1200px]:text-[48px] max-md:w-full max-sm:text-[40px]"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                viewport={{ once: true }}
              >
                Stop the leak. Keep the cash.
              </motion.h1>
              <motion.p
                className="opacity-70 text-[20px] leading-[1.2] tracking-normal !opacity-70"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                viewport={{ once: true }}
              >
                You&apos;re leaving{" "}
                <span className="text-[#FD5001] !opacity-100">money</span> on
                the table every month. Let&apos;s lock it in before next
                month&apos;s gone.
              </motion.p>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  className="w-fit h-fit bg-[#FD5001] rounded-full !px-8 !py-4 text-[20px] text-white font-semibold"
                >
                  <Link
                    href="https://wa.me/6587670797?text=Hi%2C%20I%20would%20like%20to%20claim%20my%20free%20consultation"
                    target="_blank"
                  >
                    2 slots left
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
                  </Link>
                </Button>
              </motion.div>
            </div>
            {data.reach <= 400 ? (
              <motion.div
                className="flex flex-col items-end gap-2 text-right max-md:items-start"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                viewport={{ once: true }}
              >
                <p className="text-[80px] text-[#FD5001] font-semibold">
                  {Number(
                    (
                      ((data.reach * 5 * 0.03 * data.price) /
                        (data.messages * data.price)) *
                      100
                    ).toFixed(0)
                  ).toLocaleString()}
                  %
                </p>
                <h3 className="text-[20px] opacity-70 leading-[1.2] tracking-normal">
                  Boost in revenue saved
                </h3>
              </motion.div>
            ) : (
              <motion.div
                className="flex flex-col items-end gap-2 text-right max-md:items-start max-md:text-left"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  restDelta: 0.001,
                }}
                viewport={{ once: true }}
              >
                <p className="text-[80px] text-[#FD5001] font-semibold">
                  ${Number(possibleRevenue.toFixed(0)).toLocaleString()}
                </p>
                <h3 className="text-[20px] opacity-70 leading-[1.2] tracking-normal">
                  Sales saved from competitors <br />
                  every month
                </h3>
              </motion.div>
            )}
          </div>
        </Wrapper>
      </motion.div>
    </div>
  );
}
