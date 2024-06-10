"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const About = () => {
    return (
        <div className=" md:my-40 my-20 w-full">
            <motion.div
                id="about"
                className=" space-y-8 project-font w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div id="about">
                    <h1 className=" text-5xl ">About Me</h1>
                </div>
                <div className=" w-full  flex items-center gap-20">
                    <p className=" md:w-1/2 md:text-2xl leading-loose text-justify">
                        Hello! I&apos;m <b className=" text-blue-600">Bijeesh</b>, a passionate and dedicated MERN stack
                        developer with a knack for creating dynamic and responsive web applications. With a strong
                        foundation in MongoDB, Express.js, React, and Node.js, I bring a versatile skill set to the
                        table, enabling me to build efficient and scalable full-stack solutions.
                    </p>
                    <div className=" rounded-md  hidden md:block">
                        <Image className=" rounded-md" width={400} height={300} src="/html.jpg" alt="coding" />
                    </div>
                </div>
                <div className=" md:py-10 w-full">
                    <h1 className=" text-5xl my-20">Skills</h1>
                    <div className=" grid items-center gap-20 justify-center grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
                        <motion.div
                            className="  w-fit"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image width={100} height={100} src="/node.svg" alt="node" />
                        </motion.div>{" "}
                        <motion.div
                            className="  w-fit"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image width={100} height={100} src="/react.svg" alt="react" />
                        </motion.div>{" "}
                        <motion.div
                            className="  w-fit"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image width={100} height={100} src="/mongodb.svg" alt="mongodb" />
                        </motion.div>{" "}
                        <motion.div
                            className="  w-fit"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image className=" bg-white rounded-full p-2" width={100} height={100} src="/express.svg" alt="express" />
                        </motion.div>{" "}
                        <motion.div
                            className="  w-fit "
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                className=" bg-white rounded-full"
                                width={100}
                                height={100}
                                src="/next-js.svg"
                                alt="nextjs"
                            />
                        </motion.div>
                        <motion.div
                            className="  w-fit "
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image width={100} height={100} src="/javascript.svg" alt="javascript" />
                        </motion.div>
                        <motion.div
                            className="  w-fit "
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image width={100} height={100} src="/html.svg" alt="html" />
                        </motion.div>
                        <motion.div
                            className="  w-fit"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image width={100} height={100} src="/redux.svg" alt="redux" />
                        </motion.div>{" "}
                        <motion.div
                            className="  w-fit"
                            whileHover={{ scale: [null, 1.2, 1.1] }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image width={100} height={100} src="/tailwind.svg" alt="taliwind" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
