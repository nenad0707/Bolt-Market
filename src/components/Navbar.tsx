import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Import the Logo component
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-lightGray text-indigoBlue px-4 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <Logo />
        <span className="hidden md:block text-xl font-bold text-orange">
          Bolt Market
        </span>
      </div>

      <ul className="hidden md:flex space-x-6">
        <li>
          <Link
            to="/"
            className="hover:text-orange transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className="hover:text-orange transition duration-300 ease-in-out"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-orange transition duration-300 ease-in-out"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-orange transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center">
        <Link to="/cart" className="hover:text-orange transition duration-300">
          <ShoppingCartIcon className="h-6 w-6 text-indigoBlue" />
        </Link>
      </div>

      <div className="md:hidden">
        {!isOpen ? (
          <Bars3Icon
            className="h-6 w-6 text-indigoBlue cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        ) : (
          <XMarkIcon
            className="h-6 w-6 text-indigoBlue cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-lightGray text-indigoBlue flex flex-col items-center justify-center space-y-6 shadow-lg">
          <button
            className="absolute top-4 right-4 text-indigoBlue"
            onClick={() => setIsOpen(false)}
          >
            <XMarkIcon className="h-8 w-8" />
          </button>
          <Link
            to="/"
            className="text-xl hover:text-orange transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-xl hover:text-orange transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-xl hover:text-orange transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xl hover:text-orange transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
