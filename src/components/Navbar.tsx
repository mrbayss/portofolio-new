"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const navLinks = ["Home", "Project", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm z-50 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          MUHAMAD <span className="text-indigo-500">BAYU</span> YUSUF
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.div key={link} whileHover={{ y: -5 }}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:bg-indigo-500 text-black dark:text-gray-300 font-semibold px-4 py-2 rounded-md transition-all"
              >
                {link}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-2xl dark:text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-card flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="py-2 text-black dark:text-white hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
