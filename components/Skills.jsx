"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <motion.div
      initial={{ x: 100,  }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{duration:.5}}
      className=" px-5 md:px-16"
    >
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
            <Image
              className=" bg-white rounded-full p-2"
              width={100}
              height={100}
              src="/express.svg"
              alt="express"
            />
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
            <Image
              width={100}
              height={100}
              src="/javascript.svg"
              alt="javascript"
            />
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
            <Image
              width={100}
              height={100}
              src="/tailwind.svg"
              alt="taliwind"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
