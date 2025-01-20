import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCartIcon, ShieldCheckIcon, TruckIcon } from "@heroicons/react/24/outline";
import { FaRocket, FaUsers } from "react-icons/fa";

 
 const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

const About = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-lightGray min-h-screen"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section */}
      <motion.section
        className="text-center py-16 px-6"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigoBlue to-orange">
          About Bolt Market
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Bolt Market is a modern e-commerce platform designed to simplify online shopping and provide an outstanding user experience.
        </p>
      </motion.section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow hover:scale-105 transition"
            variants={fadeIn}
          >
            <FaRocket className="w-12 h-12 text-indigoBlue mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To provide a seamless, fast, and intuitive shopping experience for everyone.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow hover:scale-105 transition"
            variants={fadeIn}
          >
            <FaUsers className="w-12 h-12 text-indigoBlue mb-4" />
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              To become the most user-friendly e-commerce platform with a focus on quality and trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-indigoBlue mb-8">
          Why Choose Us?
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center bg-white p-6 rounded-lg shadow hover:scale-110 transition"
            variants={fadeIn}
          >
            <ShoppingCartIcon className="w-12 h-12 text-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Easy Shopping</h3>
            <p className="text-gray-600">
              Navigate easily and find products quickly.
            </p>
          </motion.div>
          <motion.div
            className="text-center bg-white p-6 rounded-lg shadow hover:scale-110 transition"
            variants={fadeIn}
          >
            <ShieldCheckIcon className="w-12 h-12 text-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Secure Payments</h3>
            <p className="text-gray-600">
              Your transactions and data are protected.
            </p>
          </motion.div>
          <motion.div
            className="text-center bg-white p-6 rounded-lg shadow hover:scale-110 transition"
            variants={fadeIn}
          >
            <TruckIcon className="w-12 h-12 text-orange mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600">
              Enjoy quick and reliable delivery services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <motion.section
        className="py-16 bg-indigoBlue text-white text-center"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to explore our products?
        </h2>
        <p className="text-lg mb-6">Discover amazing deals and offers today!</p>
        <button onClick={() => navigate("/products")} className="bg-orange text-white px-6 py-3 rounded relative hover:bg-lightOrange transition">
          <span className="absolute inset-0 rounded-full bg-orange opacity-50 blur-lg"></span>
          <span className="relative">View Products</span>
        </button>
      </motion.section>
    </motion.div>
  );
};




export default About;
