import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-800 text-gray-300 py-10"
    >
      <div className="container mx-auto px-6">
        {/* Divider Line */}
        <div className="border-t border-gray-700 mb-6"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Logo and Site Name */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-x-3">
            <img
              src="/logo.svg"
              alt="Bolt Market Logo"
              className="h-12 w-12 bg-white rounded-full p-2 drop-shadow-lg mb-2"
            />
            <span className="text-2xl font-bold text-white">Bolt Market</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex justify-center items-center space-x-6">
            <li>
              <Link to="/" className="hover:text-lightOrange transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-lightOrange transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-lightOrange transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-lightOrange transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-end items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/nenad-risti%C4%87-27459958/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition"
            >
              <SiLinkedin className="w-6 h-6 text-gray-400 hover:text-lightOrange" />
            </a>
            <a
              href="https://github.com/nenad0707"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:scale-110 transition"
            >
              <SiGithub className="w-6 h-6 text-gray-400 hover:text-lightOrange" />
            </a>
            <a
              href="mailto:risticnenad.vr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="hover:scale-110 transition"
            >
              <SiGmail className="w-6 h-6 text-gray-400 hover:text-lightOrange" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400">
          &copy; {currentYear} Bolt Market. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
