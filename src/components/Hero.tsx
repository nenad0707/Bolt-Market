import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-r from-indigoBlue to-lightOrange text-white h-[500px] flex items-center justify-center relative">
      <motion.div
        style={{ y: yText }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center px-4 flex flex-col items-center justify-center gap-4"
      >
        {/* Title */}
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-6xl font-bold mb-2"
        >
          Welcome to Bolt Market
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={childVariants} className="text-lg md:text-2xl mb-4">
          Your one-stop shop for modern products!
        </motion.p>

        {/* CTA */}
        <motion.a
          variants={childVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          href="/products"
          className="bg-gradient-to-r from-lightOrange to-indigoBlue text-white font-medium px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition flex items-center justify-center"
        >
          Shop Now
          <ArrowRightIcon className="w-5 h-5 ml-1" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
