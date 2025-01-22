import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const totalItems = (cart || []).reduce((acc, item) => acc + item.quantity, 0);

  // Variants for stagger animation of links
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i : number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, 
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="bg-gradient-to-r from-indigoBlue via-indigo-700 to-lightOrange text-white px-4 py-3 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-white rounded-full p-2 drop-shadow-lg hover:shadow-2xl transition-all">
          <img src="/logo.svg" alt="Bolt Market Logo" className="h-8 w-8" />
        </div>
        <span className="hidden md:block text-xl font-bold">Bolt Market</span>
      </div>

      {/* Desktop navigation */}
      <ul className="hidden md:flex space-x-6">
      <ul className="hidden md:flex space-x-6">
        {["Home", "Products", "About", "Contact"].map((text) => (
          <li key={text}>
            <Link
              to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
              className="text-lg hover:text-lightOrange hover:underline transition-all duration-300"
            >
              {text}
            </Link>
          </li>
        ))}
</ul>

      </ul>

      {/* Cart icon */}
      <div className="flex items-center">
        <Link
          to="/cart"
          className="relative hover:bg-lightOrange hover:shadow-lg text-white p-3 rounded-full transition-all duration-300"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-50 hover:opacity-100 transition-all"></div>
          {totalItems > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </div>
          )}
        </Link>
      </div>

      {/* Hamburger menu for mobile view */}
      <div className="md:hidden">
        {!isOpen ? (
          <Bars3Icon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <XMarkIcon
            className="h-6 w-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-indigoBlue to-lightOrange text-white flex flex-col items-center justify-center space-y-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={closeMenu}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            {/* Links with stagger animations */}
            {["Home", "Products", "About", "Contact"].map((text, index) => (
              <motion.div
                key={text}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-xl hover:text-lightOrange active:text-orange transition-all"
              >
                <Link
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
