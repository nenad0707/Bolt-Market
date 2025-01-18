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
      className="bg-gradient-to-r from-indigoBlue to-lightOrange text-white py-8"
    >
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Site Name */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img
              src="/logo.svg"
              alt="Bolt Market Logo"
              className="h-10 w-10 bg-white rounded-full p-2 drop-shadow-lg"
            />
            <span className="text-xl font-bold">Bolt Market</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center space-x-6">
            <li>
              <Link to="/" className="hover:text-orange transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-orange transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/nenad-risti%C4%87-27459958/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <SiLinkedin className="w-6 h-6 text-white hover:text-orange" />
            </a>
            <a
              href="https://github.com/nenad0707"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <SiGithub className="w-6 h-6 text-white hover:text-orange" />
            </a>
            <a
              href="mailto:risticnenad.vr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <SiGmail className="w-6 h-6 text-white hover:text-orange" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-200">
            &copy; {currentYear} Bolt Market. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
