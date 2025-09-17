"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative font-mono min-h-screen flex items-center bg-gradient-to-br from-white to-rose-100 w-full py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex-shrink-0"
        >
          {/* Background tilted card */}
          <div className="absolute w-60 h-60 md:w-72 md:h-72 bg-gradient-to-br from-blue-200 to-pink-200 rounded-2xl shadow-xl rotate-[20deg]"></div>

          {/* Foreground image card */}
          <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-0">
            <Image
              src="/Bijeesh (4).png"
              alt="Bijeesh profile"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center lg:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl">
            Hello! I&apos;m{" "}
            <span className="font-bold text-blue-600">Bijeesh</span>, a
            passionate{" "}
            <span className="text-orange-500 font-semibold">
              MERN Stack Developer
            </span>{" "}
            who loves building dynamic, responsive, and scalable web
            applications. With expertise in{" "}
            <span className="font-medium">
              MongoDB, Express.js, React, and Node.js
            </span>
            , I enjoy transforming ideas into seamless digital experiences. My
            goal is to craft intuitive, performant solutions that bring real
            value to users.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
