import { motion, useScroll, useTransform } from "framer-motion";
import saleImage from "../assets/images/sale.jpg";

const HeroProducts = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], ["0%", "30%"]);

  return (
    <section className="relative h-[500px] overflow-hidden">
      <motion.div
        style={{ y, backgroundImage: `url(${saleImage})` }}
        className="absolute inset-0 w-full h-full bg-cover bg-center object-cover object-center"
      ></motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent"></div>

      <div className="relative flex items-center justify-center h-full text-white text-center px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Explore Our Product Range
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Browse through our collection of top-quality products.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroProducts;
