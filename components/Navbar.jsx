"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        }
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [lastScrollY]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({
                top: element.offsetTop + -150,
                behavior: "smooth",
            });
        }
    };

    return (
        // <motion.div
        //     className={show? "block fixed top-0 w-full bg-black border-b border-b-violet-900 shadow-md shadow-violet-950 z-50": "hidden"}
        //     initial={{ opacity: 0 }}
        //     whileInView={{ opacity: 1 }}
        // >
        //     <nav className="navbar bg-transparent sticky p-3  font-mono font-bold ">
        //         <div className="flex-1">
        //             <a className="btn btn-ghost text-2xl">Bijeesh</a>
        //         </div>
        //         <div className="flex-none ">
        //             <ul className="menu menu-horizontal px-1 text-xs sm:text-sm md:text-lg">
        //                 <li>
        //                     <a
        //                         href="#work"
        //                         onClick={(e) => {
        //                             e.preventDefault();
        //                             scrollTo("work");
        //                         }}
        //                     >
        //                         Projects
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#about"
        //                         onClick={(e) => {
        //                             e.preventDefault();
        //                             scrollTo("about");
        //                         }}
        //                     >
        //                         About
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a
        //                         href="#about"
        //                         onClick={(e) => {
        //                             e.preventDefault();
        //                             scrollTo("contact");
        //                         }}
        //                     >
        //                         Contact
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </motion.div>
        <div className=" text-white">
            <nav className=" flex justify-between p-5 text-lg">
                <div>Bijeesh</div>
                <div className=" w-1/3 flex justify-between ">
                    <p>Projects</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
