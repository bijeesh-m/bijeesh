"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between each icon
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <div className="px-5 py-20 md:px-16 md:pb-20 bg-gradient-to-br from-rose-100 to-white text-black font-mono font-bold min-h-screen lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className=" md:py-10 w-full">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="sm:text-5xl text-3xl mb-10 sm:mb-20 "
          >
           Technical Skills & Tools
          </motion.h1>

          {/* Container with staggered children */}
          <motion.div
            className="grid items-center gap-20 justify-center grid-cols-3 sm:grid-cols-4 md:grid-cols-5"
            variants={containerVariants}
          >
            {/* Each skill icon */}
            {[
              { src: "/node.svg", alt: "node" },
              { src: "/react.svg", alt: "react" },
              { src: "/mongodb.svg", alt: "mongodb" },
              {
                src: "/express.svg",
                alt: "express",
                extra: "bg-white rounded-full p-2",
              },
              {
                src: "/next-js.svg",
                alt: "nextjs",
                extra: "bg-white rounded-full",
              },
              { src: "/javascript.svg", alt: "javascript" },
              { src: "/html.svg", alt: "html" },
              { src: "/css.svg", alt: "css" },
              { src: "/redux.svg", alt: "redux" },
              { src: "/tailwind.svg", alt: "tailwind" },
              { src: "/jquery.svg", alt: "jquery" },
              { src: "/docker.svg", alt: "docker" },
              { src: "/postgresql.svg", alt: "postgresql" },
              { src: "/figma.svg", alt: "figma" },
              { src: "/postman.svg", alt: "postman" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                className="w-fit"
                variants={itemVariants}
                whileHover={{ scale: [null, 1.2, 1.1] }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  width={70}
                  height={70}
                  src={skill.src}
                  alt={skill.alt}
                  className={skill.extra || ""}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
