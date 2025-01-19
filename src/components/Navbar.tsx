import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const totalItems = (cart || []).reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-indigoBlue via-indigo-700 to-lightOrange text-white px-4 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <div className="bg-white rounded-full p-2 drop-shadow-lg hover:shadow-2xl transition-all">
          <img src="/logo.svg" alt="Bolt Market Logo" className="h-8 w-8" />
        </div>
        <span className="hidden md:block text-xl font-bold">Bolt Market</span>
      </div>

      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/" className="hover:text-lightOrange transition-all">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="hover:text-lightOrange transition-all"
          >
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-lightOrange transition-all">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-lightOrange transition-all">
            Contact
          </Link>
        </li>
      </ul>

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

      {isOpen && (
        <div className="fixed  top-0 left-0 w-full h-screen bg-gradient-to-r from-indigoBlue to-lightOrange text-white flex flex-col items-center justify-center space-y-6 z-50">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <Link
            to="/"
            className="text-xl hover:text-lightOrange active:text-orange transition-all"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-xl hover:text-lightOrange active:text-orange transition-all"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-xl hover:text-lightOrange active:text-orange transition-all"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xl hover:text-lightOrange active:text-orange transition-all"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
