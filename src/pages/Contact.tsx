import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-lightGray to-white min-h-screen flex flex-col items-center py-16 px-6"
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
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600">
          Have a question? We're here to help. Reach out via the form or contact details below.
        </p>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="bg-white rounded-xl shadow-lg p-8 w-full max-w-3xl text-gray-800"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold text-indigoBlue mb-6 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigoBlue focus:border-indigoBlue"
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
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigoBlue focus:border-indigoBlue"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-indigoBlue focus:border-indigoBlue"
              placeholder="Your Message"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigoBlue to-lightBlue text-white font-medium py-2 rounded-md hover:scale-105 transition-transform shadow-lg"
          >
            Submit
          </button>
        </form>
      </motion.section>

      {/* Contact Information */}
      <motion.section
        className="mt-12 text-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h3 className="text-xl font-bold mb-6 text-indigoBlue">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex flex-col items-center">
            <PhoneIcon className="w-10 h-10 text-indigoBlue mb-2 hover:scale-110 transition-transform" />
            <span className="text-gray-700">+1 (123) 456-7890</span>
          </div>
          <div className="flex flex-col items-center">
            <EnvelopeIcon className="w-10 h-10 text-indigoBlue mb-2 hover:scale-110 transition-transform" />
            <span className="text-gray-700">support@boltmarket.com</span>
          </div>
        </div>
      </motion.section>

      {/* Social Media Icons */}
      <motion.section
        className="mt-12 flex justify-center space-x-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <a
          href="https://www.linkedin.com/in/nenad-risti%C4%87-27459958/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigoBlue p-4 rounded-full text-white hover:scale-110 transition-transform shadow-md"
        >
          <SiLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/nenad0707"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigoBlue p-4 rounded-full text-white hover:scale-110 transition-transform shadow-md"
        >
          <SiGithub className="w-6 h-6" />
        </a>
        <a
          href="mailto:risticnenad.vr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigoBlue p-4 rounded-full text-white hover:scale-110 transition-transform shadow-md"
        >
          <SiGmail className="w-6 h-6" />
        </a>
      </motion.section>
    </motion.div>
  );
};

export default Contact;