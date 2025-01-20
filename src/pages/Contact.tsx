import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.2 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 text-white min-h-screen flex flex-col items-center justify-center py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="text-center mb-12"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigoBlue to-lightBlue mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-200">
          We'd love to hear from you! Please fill out the form below or reach out via the provided contact details.
        </p>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl text-gray-800"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Subject"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              placeholder="Your Message"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-medium py-2 rounded-md hover:bg-teal-600 transition relative"
          >
            Submit
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-lightBlue to-indigoBlue opacity-30 blur-md"></div>
          </button>
        </form>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        className="mt-12 text-center space-y-6"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-xl font-bold">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <PhoneIcon className="w-6 h-6 text-emerald-300" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <EnvelopeIcon className="w-6 h-6 text-emerald-300" />
            <span>support@boltmarket.com</span>
          </div>
        </div>
      </motion.section>

      {/* Social Media Icons */}
      <motion.section
        className="mt-8 flex justify-center space-x-6"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
      >
        <a
          href="https://www.linkedin.com/in/nenad-risti%C4%87-27459958/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition"
        >
          <SiLinkedin className="w-8 h-8 text-gray-400 hover:text-emerald-300" />
        </a>
        <a
          href="https://github.com/nenad0707"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition"
        >
          <SiGithub className="w-8 h-8 text-gray-400 hover:text-emerald-300" />
        </a>
        <a
          href="mailto:risticnenad.vr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="hover:scale-110 transition"
        >
          <SiGmail className="w-8 h-8 text-gray-400 hover:text-emerald-300" />
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Contact;