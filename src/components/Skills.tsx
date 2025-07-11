"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiPhp, SiPostman } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} />, color: "text-sky-400" },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={40} />,
    color: "text-yellow-400",
  },
  { name: "HTML 5", icon: <FaHtml5 size={40} />, color: "text-orange-500" },
  { name: "CSS 3", icon: <FaCss3Alt size={40} />, color: "text-blue-500" },
  { name: "Golang", icon: <FaGolang size={40} />, color: "text-cyan-400" },
  { name: "Postman", icon: <SiPostman size={40} />, color: "text-orange-600" },
  { name: "Java", icon: <FaJava size={40} />, color: "text-gray-300" },
  { name: "PHP", icon: <SiPhp size={40} />, color: "text-blue-300" },
];

const Skills = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          SKILLS
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg flex flex-col items-center justify-center space-y-3 hover:-translate-y-2 transition-transform"
            >
              <span className={skill.color}>{skill.icon}</span>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
