import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-indigoBlue via-indigo-700 to-lightOrange text-white px-4 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <div className="bg-white rounded-full p-2 drop-shadow-lg">
          <img src="/logo.svg" alt="Bolt Market Logo" className="h-8 w-8" />
        </div>
        <span className="hidden md:block text-xl font-bold">Bolt Market</span>
      </div>

      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/" className="hover:text-lightOrange transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="hover:text-lightOrange transition-colors"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-lightOrange transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-lightOrange transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center">
        <Link to="/cart" className="hover:text-lightOrange transition-colors">
          <ShoppingCartIcon className="h-6 w-6" />
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
        <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-indigoBlue to-lightOrange text-white flex flex-col items-center justify-center space-y-6 z-10">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <Link
            to="/"
            className="text-xl hover:text-lightOrange"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-xl hover:text-lightOrange"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-xl hover:text-lightOrange"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xl hover:text-lightOrange"
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
