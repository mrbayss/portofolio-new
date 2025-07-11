"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="py-20 bg-dark-card text-dark-text transition-colors duration-300"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="container mx-auto px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          CONTACT ME
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-center space-x-3"
          >
            <a
              href="https://wa.me/6281315032646"
              className="flex items-center space-x-3"
            >
              <FaPhone className="text-primary" />
              <span>+62 813 1503 2646</span>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-center space-x-3"
          >
            <a
              href="mailto:bayu190903@gmail.com"
              className="flex items-center space-x-3"
            >
              <FaEnvelope className="text-primary" />
              <span>bayu190903@gmail.com</span>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="flex items-center space-x-3"
          >
            <FaMapMarkerAlt className="text-primary" />
            <span>Malang, Indonesia</span>
          </motion.div>
        </div>
        <p className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Muhamad Bayu Yusuf. Build With Next-Js
        </p>
      </motion.div>
    </footer>
  );
};

export default Contact;
