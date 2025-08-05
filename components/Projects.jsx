"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [isMovingLeft, setIsMovingLeft] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsMovingLeft((prev) => !prev);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const animationPropsArrow = {
    x: isMovingLeft ? 0 : 10,
    transition: { duration: 1, ease: "easeInOut" },
  };

  const animationProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay: 0.1, duration: 0.3 },
  };

  const projects = [
    {
      title: "OpenSoul - Confession Platform",
      description:
        "A platform to share confessions for students and interact with other confessions, students can join multiple confession groups.",
      images: [
        "/opensoul/Screenshot (1).png",
        "/opensoul/Screenshot (2).png",
        "/opensoul/Screenshot (6).png",
      ],
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://opensoul.onrender.com",
    },
    {
      title: "FunChat",
      description:
        "A platform to chat with friends",
      images: ["/funchat/Screenshot (8).png","/amazon.png", "/blogsup.png"],
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://yourprojectlink.com",
    },
    // Add more projects as needed
  ];

  return (
    <div
      className=" w-full px-5 md:px-16  space-y-20 mt-20 md:mt-20 project-font mb-20 "
      id="work"
    >
      <motion.h1 {...animationProps} className=" text-5xl w-full ">
        Projects
      </motion.h1>
      {/* <motion.hr {...animationProps} className="sm:m-1 m-0 " /> */}
      <section className="   min-h-screen">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
      {/* <div className="">
                <div className=" mb-8 flex gap-10">
                    <motion.div {...animationProps} className=" w-1/3 h-fit sm:w-2/5 flex  items-center gap-1">
                        <span className="  sm:m-5">🟠</span>
                        <h1 className=" text-xs sm:text-4xl font-extrabold">Blog&apos;s Up</h1>
                    </motion.div>
                    <motion.div {...animationProps} className=" text-xs sm:text-2xl md:text-3xl w-2/3">
                        <p className=" mb-8">
                            A blog website serves as an online platform where individuals can regularly publish written
                            content in the form of articles, posts, or entries
                        </p>
                        <a href="https://blogsup.shop" target="blank">
                            <button className="  font-bold p-1 text-xs sm:text-lg rounded-md  flex justify-center items-center gap-3">
                                View project{" "}
                                <motion.div animate={animationPropsArrow}>
                                    <FaArrowRightLong />
                                </motion.div>
                            </button>
                        </a>
                    </motion.div>
                </div>
                <motion.div {...animationProps} className="relative">
                    <div className="mockup-window w-full sm:w-3/5 border border-black rounded-lg bg-base-300 sm:ml-16">
                        <div className="flex justify-center  bg-base-200">
                            <Image width={1100} height={1000} src="/blogsup.png" alt="blogsup" priority />
                        </div>
                    </div>
                    <div className="absolute top-20 mx-auto hidden xl:block right-60  border-gray-800 dark:border-gray-900 bg-re-900 border-[10px] rounded-[1.8rem] h-[400px] w-[210px] shadow-xl">
                        <div className="w-[100px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                        <div className="h-[36px] w-[2.5px] bg-gray-800 absolute -start-[12px] top-[90px] rounded-s-lg"></div>
                        <div className="h-[36px] w-[2.5px] bg-gray-800 absolute -start-[12px] top-[130px] rounded-s-lg"></div>
                        <div className="h-[40px] w-[2.5px] bg-gray-800 absolute -end-[12px] top-[112px] rounded-e-lg"></div>
                        <div className="rounded-[1.13rem] overflow-hidden w-full h-full bg-white dark:bg-gray-900">
                            <Image
                                className=" bg-cover w-full h-full"
                                width={1000}
                                height={1000}
                                src="/blogsupphone.png"
                                alt="phonemockup"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.hr {...animationProps} className="sm:m-1 m-0 my-10 sm:mb-20" />
            <div className="">
                <div className=" mb-8 flex gap-10">
                    <motion.div {...animationProps} className=" w-1/3 h-fit sm:w-2/5 flex  items-center gap-1">
                        <span className="  sm:m-5">🟠</span>
                        <h1 className=" text-xs sm:text-4xl font-extrabold">Amazone E-Commerce Website Clone</h1>
                    </motion.div>
                    <motion.div {...animationProps} className=" text-xs sm:text-2xl md:text-3xl w-2/3 flex flex-col">
                        <p className=" mb-8">
                            A E-Commerce website serves as an online platform where individuals can search and buy
                            products. Deployed product categorization, making it easy for users to explore products
                            based on their interests.
                        </p>
                        <a href="https://amazon-clone-friendend.vercel.app/" target="blank">
                            <button className="  font-bold p-1 text-xs sm:text-lg rounded-md  flex justify-center items-center gap-3">
                                View project{" "}
                                <motion.div animate={animationPropsArrow}>
                                    <FaArrowRightLong />
                                </motion.div>
                            </button>
                        </a>
                    </motion.div>
                </div>
                <motion.div {...animationProps} className="relative flex flex-col justify-center w-full h-full">
                    <div className="mockup-window w-full sm:w-3/5 border border-black rounded-lg bg-base-300 sm:ml-16">
                        <div className="flex justify-center  bg-base-200">
                            <Image width={1100} height={1000} src="/amazon.png" alt="amazon" priority />
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.hr {...animationProps} className="sm:m-1 m-0 my-10 sm:mb-20" />
            <div className="">
                <div className=" mb-8 flex gap-10">
                    <motion.div {...animationProps} className=" w-1/3 h-fit sm:w-2/5 flex  items-center gap-1">
                        <span className="  sm:m-5">🟠</span>
                        <h1 className=" text-xs sm:text-4xl font-extrabold">Pepperfry E-Commerce Website Clone</h1>
                    </motion.div>
                    <motion.div {...animationProps} className=" text-xs sm:text-2xl md:text-3xl w-2/3 flex flex-col">
                        <p className=" mb-8">
                            This project replicates Pepperfry&apos;s key features, allowing users to browse and purchase
                            furniture products seamlessly
                        </p>
                        <a href="https://furnitureshope.netlify.app/" target="blank">
                            <button className="  font-bold p-1 text-xs sm:text-lg rounded-md  flex justify-center items-center gap-3">
                                View project{" "}
                                <motion.div animate={animationPropsArrow}>
                                    <FaArrowRightLong />
                                </motion.div>
                            </button>
                        </a>
                    </motion.div>
                </div>
                <motion.div {...animationProps} className="relative flex flex-col justify-center w-full h-full">
                    <div className="mockup-window w-full sm:w-3/5 border border-black rounded-lg bg-base-300 sm:ml-16">
                        <div className="flex justify-center  bg-base-200">
                            <Image width={1100} height={1000} src="/pepperfry.png" alt="peppefry" priority />
                        </div>
                    </div>
                </motion.div>
            </div> */}
    </div>
  );
};

export default Projects;
