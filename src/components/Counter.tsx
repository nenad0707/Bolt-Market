import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CounterProps = {
  value: number;
  duration?: number;
};

const Counter = ({ value, duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const totalDuration = duration * 1000;
    const increment = end / (totalDuration / 50);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.ceil(start), end));
      if (start >= end) clearInterval(timer);
    }, 50);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <motion.span>{count.toLocaleString()}</motion.span>;
};

export default Counter;
