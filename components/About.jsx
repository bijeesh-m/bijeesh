"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const About = () => {
    return (
        <div className=" md:my-40 text-center px-5 md:px-16 my-20 w-full">
            <motion.div
                id="about"
                className=" space-y-8 project-font w-full"
                initial={{ opacity: 0 , x:-100}}
                whileInView={{ opacity: 1, x:0 }}
                transition={{ duration: .5 }}
            >
                <div id="about">
                    <h1 className=" text-5xl ">About Me</h1>
                </div>
                <div className=" text-center w-full  flex items-center gap-20">
                    <p className=" md:text-2xl leading-loose">
                        Hello! I&apos;m <b className=" text-blue-600">Bijeesh</b>, a passionate and dedicated MERN stack
                        developer with a knack for creating dynamic and responsive web applications. With a strong
                        foundation in MongoDB, Express.js, React, and Node.js, I bring a versatile skill set to the
                        table, enabling me to build efficient and scalable full-stack solutions.
                    </p>
                    
                </div>
                
            </motion.div>
        </div>
    );
};

export default About;
