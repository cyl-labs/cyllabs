"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

export default function Counter({
  to = 0,
  duration = 1,
  startFactor = 0.7,
  decimalPlace = 0,
}) {
  const startValue = Math.floor(to * startFactor);
  const [display, setDisplay] = useState(startValue);
  const count = useMotionValue(startValue);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplay(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return (
    <motion.span ref={ref}>
      {Number(display.toFixed(decimalPlace)).toLocaleString()}
    </motion.span>
  );
}
