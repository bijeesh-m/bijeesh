"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [isMovingLeft, setIsMovingLeft] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsMovingLeft((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);



  const animationProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay: 0.1, duration: 0.3 },
  };

  const projects = [
    {
      title: "PartyFun - Event Management Web Application",
      description:
        "It is essentially a platform where users can explore, manage, and interact with event-related content.",
      images: [
        "/partyfun/partyfun (4).png",
        "/partyfun/partyfun (3).png",
        "/partyfun/partyfun (2).png",
      ],
      tags: ["React", "Node.js","Express","TailwindCSS", "MongoDB"],
      link: "https://www.partyfunuae.com",
    },
    {
      title: "OpenSoul - Confession Platform",
      description:
        "A platform to share confessions for students and interact with other confessions, students can join multiple confession groups.",
      images: [
        "/opensoul/Screenshot (1).png",
        "/opensoul/Screenshot (2).png",
        "/opensoul/Screenshot (6).png",
      ],
      tags: ["React", "Node.js","Express","TailwindCSS", "MongoDB"],
      link: "https://opensoul.onrender.com",
    },
    {
      title: "FunChat",
      description:
        "A realtime chating platform to chat with friends anonymously",
      images: ["/funchat/Screenshot (8).png"],
      tags: ["React", "Node.js","Express","TailwindCSS","Socket.io", "MongoDB"],
      link: "https://funchat-tq65.onrender.com",
    },
    {
      title: "ClearGov",
      description: "Cleargov is a smart tender management system designed to simplify and streamline the entire tendering process.",
      images: ["/cleargov/cleargov (1).png", "/cleargov/cleargov (2).png", "/cleargov/cleargov (3).png"],
      tags: ["React", "Node.js","Express","TailwindCSS", "MongoDB"],
      link: "https://cleargov.onrender.com/",
    },
   
    // Add more projects as needed
  ];

  return (
    <div
      className="bg-gradient-to-br font-mono from-white to-rose-100 w-full px-5 md:px-16 lg:px-24  space-y-20 py-20  project-font  "
      id="work"
    >
      <motion.h1 {...animationProps} className=" text-3xl sm:text-5xl text-black w-full ">
        Projects
      </motion.h1>
      {/* <motion.hr {...animationProps} className="sm:m-1 m-0 " /> */}
      <section className="">
        <div className="max-w-6xl h-full mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
