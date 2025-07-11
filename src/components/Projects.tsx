"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "System Information School",
    description:
      "Backend system information for schools, built with Golang use Gofiber and GORM.",
    link: "https://github.com/mrbayss/Si-eRTe",
  },
  {
    title: "Web Portofolio",
    description: "Personal portfolio website to showcase skills and projects.",
    link: "#",
  },
];

const ProjectCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-center justify-between gap-4 md:gap-0"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-auto md:flex-1">
        <div className="w-20 h-20 bg-primary/20 rounded-md mb-4 md:mb-0 md:mr-6 flex-shrink-0 flex items-center justify-center"></div>
        <div className="text-center md:text-left w-full md:w-auto md:items-start md:justify-start flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white md:text-left">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 md:text-left">
            {description}
          </p>
        </div>
      </div>
      <a
        href={link}
        className="bg-gray-200 hover:bg-primary-light text-black font-semibold px-4 py-2 rounded-md transition-all text-sm whitespace-nowrap mt-4 md:mt-0"
      >
        View More
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="project"
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
          <span className="text-primary">My</span> Projects
        </motion.h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
