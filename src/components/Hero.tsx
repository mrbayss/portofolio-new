"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300 pt-20"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h2 className="text-lg text-primary font-bold">HELLO, GUYSS</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold my-2 text-gray-900 dark:text-white">
            I AM <span className="text-indigo-500">MUHAMAD BAYU YUSUF</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            PROGRAMMER
          </p>
          <p className="max-w-md text-gray-600 dark:text-gray-400 leading-relaxed">
            I am Student S1 Matematika Faculty Mathematics and Sains State
            University of Malang. I am specialize in backend developer with
            Golang, Javascript, PHP, and I am learn Fiber Framework and
            Springboot.
          </p>
          <div className="flex space-x-4 mt-8 justify-center md:justify-start w-full">
            <a
              href="https://www.facebook.com/bayu.yusuf.963"
              className="text-2xl text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/bayu.yusuf_/"
              className="text-2xl text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/mrbayss"
              className="text-2xl text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/muhamad-yusuf-a8613b214/"
              className="text-2xl text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/3 w-2/3 flex justify-center"
        >
          <Image
            src={"/profile.jpg"}
            height={200}
            width={200}
            alt={"profile"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
