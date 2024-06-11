"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const Projects = () => {
    const [isMovingLeft, setIsMovingLeft] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsMovingLeft((prev) => !prev);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const animationProps = {
        x: isMovingLeft ? 0 : 10,
        transition: { duration: 1, ease: "easeInOut" },
    };
    return (
        <div className=" w-full  space-y-20 md:mt-20 project-font mb-20 " id="work">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <h1 className=" text-5xl w-full mb-10 md:mb-20">Projects</h1>
                <hr className="sm:m-1 m-0 my-10 sm:mb-20" />
                <div className=" mb-8 flex gap-10">
                    <div className=" w-1/3 h-fit sm:w-2/5 flex  items-center gap-1">
                        <span className="  sm:m-5">🟠</span>
                        <h1 className=" text-xs sm:text-4xl font-extrabold">Blog&apos;s Up</h1>
                    </div>
                    <div className=" text-xs sm:text-2xl md:text-3xl w-2/3">
                        <p className=" mb-8">
                            A blog website serves as an online platform where individuals can regularly publish written
                            content in the form of articles, posts, or entries
                        </p>
                        <a href="https://blogsup.shop" target="blank">
                            <button className="  font-bold p-1 text-xs sm:text-lg rounded-md  flex justify-center items-center gap-3">
                                View project{" "}
                                <motion.div animate={animationProps}>
                                    <FaArrowRightLong />
                                </motion.div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div className="mockup-window w-full sm:w-4/5 border border-black rounded-lg bg-base-300 sm:ml-16">
                        <div className="flex justify-center  bg-base-200">
                            <Image width={1100} height={1000} src="/blogsup.png" alt="blogsup" priority />
                        </div>
                    </div>
                    <div className="mockup-phone hidden xl:block  absolute z-30 sm:right-14 sm:top-32 ">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <Image width={1000} height={100} src="/blogsupphone.png" alt="phonemockup" priority />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <hr className="sm:m-1 m-0 my-10 sm:mb-20 sm:mt-40" />
                <div className=" mb-8 flex gap-10">
                    <div className=" w-1/3 h-fit sm:w-2/5 flex  gap-1 ">
                        <span className="  sm:m-5  ">🟠</span>
                        <h1 className=" text-xs sm:text-4xl font-extrabold">Amazone E-Commerce Website Clone</h1>
                    </div>
                    <div className=" text-xs sm:text-3xl w-2/3">
                        <p className=" mb-8">
                            A E-Commerce website serves as an online platform where individuals can search and buy
                            products. Deployed product categorization, making it easy for users to explore products
                            based on their interests.
                        </p>
                        <a href="https://amazon-clone-friendend.vercel.app/" target="blank">
                            <button className="  font-bold p-1 text-xs sm:text-lg rounded-md  flex justify-center items-center gap-3">
                                View project{" "}
                                <motion.div animate={animationProps}>
                                    <FaArrowRightLong />
                                </motion.div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div className="mockup-window w-full sm:w-4/5 border border-black rounded-lg bg-base-300 sm:ml-16">
                        <div className="flex justify-center  bg-base-200">
                            <Image width={1000} height={1000} src="/amazon.png" alt="amazon" priority />
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                <hr className="sm:m-1 m-0 my-10 sm:mb-20" />
                <div className=" mb-8 flex gap-10">
                    <div className=" w-1/3 h-fit sm:w-2/5 flex  gap-1 ">
                        <span className="  sm:m-5  ">🟠</span>
                        <h1 className=" text-xs sm:text-4xl font-extrabold">Pepperfry E-Commerce Website Clone</h1>
                    </div>
                    <div className=" text-xs sm:text-3xl w-2/3">
                        <p className=" mb-8">
                            This project replicates Pepperfry&apos;s key features, allowing users to browse and purchase
                            furniture products seamlessly
                        </p>
                        <a href="https://furnitureshope.netlify.app/" target="blank">
                            <button className="  font-bold p-1 text-xs sm:text-lg rounded-md  flex justify-center items-center gap-3">
                                View project{" "}
                                <motion.div animate={animationProps}>
                                    <FaArrowRightLong />
                                </motion.div>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <div className="mockup-window w-full sm:w-4/5 border border-black rounded-lg bg-base-300 sm:ml-16">
                        <div className="flex justify-center  bg-base-200">
                            <Image width={1000} height={1000} src="/pepperfry.png" alt="pepperfry" priority />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
