import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section className="bg-gradient-to-r from-indigoBlue to-lightOrange text-white h-[500px] flex items-center justify-center">
      <motion.div style={{ y: yText }} className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to Bolt Market
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl mb-6"
        >
          Your one-stop shop for modern products!
        </motion.p>

        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          href="/products"
          className="inline-block bg-white text-indigoBlue font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-lightGray transition"
        >
          Shop Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
