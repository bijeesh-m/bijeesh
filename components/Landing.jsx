"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Landing = () => {
    return (
        <div className="hero mt-16 ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <motion.div
                    className="  rounded-full border-8 border-blue-600 "
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <Image
                        width={500}
                        height={500}
                        src="/profile-img.jpg"
                        alt="profile"
                        className=" rounded-full shadow-2xl w-xs md:max-w-sm "
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <div className=" flex flex-col gap-8">
                        <h1 className="text-5xl md:text-8xl font-bold text-orange-500">Hello!</h1>
                        <h1 className=" text-3xl md:text-6xl font-bold ">
                            I<span className="text-blue-500">&apos;</span>m Bijeesh, a Mern Stack Developer
                        </h1>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Landing;
