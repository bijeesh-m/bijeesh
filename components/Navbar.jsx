"use client";

import { motion } from "framer-motion";
import { useContext } from "react";

import { ScrollTargetContext } from "./ScrollComp";

const Navbar = () => {
    const { targetSectionRef } = useContext(ScrollTargetContext);
    console.log(targetSectionRef);

    const handleClick = () => {
        console.log("ksjfljsk");
        if (targetSectionRef.current) {
            console.log("jjh");
            const targetSectionOffset = targetSectionRef.current.offsetTop;

            // Smooth Scrolling (Optional)
            const scrollOptions = {
                behavior: "smooth",
                block: "start", // Scroll to the top of the section
            };

            window.scrollTo(0, targetSectionOffset, scrollOptions); // Scroll to position
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <nav className="navbar bg-transparent sticky p-3 ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl ">Bijeesh</a>
                </div>
                <div className="flex-none ">
                    <ul className="menu menu-horizontal px-1 text-sm md:text-lg">
                        <li>
                            <a onClick={handleClick}>Work</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </motion.div>
    );
};

export default Navbar;
