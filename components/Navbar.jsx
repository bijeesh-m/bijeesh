"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if (window.scrollY >= 50) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHeader);
        return () => window.removeEventListener("scroll", scrollHeader);
    }, []);

    const scrollToWork = () => {
        const element = document.getElementById("work");

        if (element) {
            window.scrollTo({
                top: element.offsetTop + -150,
                behavior: "smooth",
            });
        } else {
            console.warn('Element with ID "work" not found.');
        }
    };

    return (
        <motion.div
            className={header ? "fixed top-0 w-full bg-gray-900 bg-opacity-90 z-50" : ""}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <nav className="navbar bg-transparent sticky p-3 ">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl ">Bijeesh</a>
                </div>
                <div className="flex-none ">
                    <ul className="menu menu-horizontal px-1 text-sm md:text-lg">
                        <li>
                            <a
                                href="#work"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToWork();
                                }}
                            >
                                Work
                            </a>
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
