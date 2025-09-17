"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="hero w-screen font-mono  bg-gradient-to-br from-white to-rose-200 h-screen px-5 md:px-48">
      <div className="relative flex items-center justify-center sm:justify-start gap-8 sm:gap-0  h-full flex-col lg:flex-row-reverse">
        <motion.div
          className="w-1/2 relative md:h-full flex items-center md:items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Small screens */}
          <Image
            width={200}
            height={200}
            src="/Bijeesh (3).png"
            alt="profile"
            className="w-xs md:hidden"
          />

          {/* Medium screens */}
          <Image
            width={350}
            height={350}
            src="/Bijeesh (3).png"
            alt="profile"
            className="w-xs md:max-w-sm hidden md:block xl:hidden"
          />

          {/* Large screens (stick to bottom without losing quality) */}
          <div className="relative  w-[31vw]   hidden xl:block">
            <Image
              src="/Bijeesh (3).png"
              alt="profile"
              width={900}
              height={800}
              className=""
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center  flex-col gap-1   sm:gap-5">
            <h1 className="text-4xl md:text-7xl font-bold text-orange-500">
              Hello!
            </h1>
            <h1 className="text-2xl text-center text-black sm:text-5xl font-bold">
              I<span className="text-blue-500">&apos;</span>m Bijeesh, a Mern
              Stack Developer
            </h1>
          </div>

          <div className="mt-7 flex justify-center items-center sm:items-start gap-6">
            <a
              href="/Bijeesh M.pdf"
              download
              className="bg-black py-2 px-3 text-white rounded-sm flex w-fit items-center gap-2"
            >
              <p>Download CV</p> <FaDownload />
            </a>
            <a href="https://www.linkedin.com/in/bijeeshm" target="blank">
              <FaLinkedin color="black" size={30} />
            </a>
            <a href="https://github.com/bijeesh-m" target="blank">
              <FaGithub color="black" size={30} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
