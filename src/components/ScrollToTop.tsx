import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      className={`fixed bottom-4 right-4 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={scrollToTop}
        className="bg-indigoBlue text-white p-3 rounded-full shadow-lg hover:bg-lightOrange transition-all"
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    </motion.div>
  );
};

export default ScrollToTop;
