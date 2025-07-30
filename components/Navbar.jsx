"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
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
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0  left-0 w-full z-50 bg-white/5 backdrop-blur-md shadow-sm"
    >
      <nav style={{textShadow:"1px 1px 1px 5px "}} className="max-w-7xl mx-auto px-4 text-white sm:px-6 md:px-16 h-16 flex items-center justify-between text-sm font-medium ">
        <div className="text-xl font-extrabold ">Bijeesh</div>
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => scrollTo("work")}
              className="hover:text-violet-700 transition-colors"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("about")}
              className="hover:text-violet-700 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("contact")}
              className="hover:text-violet-700 transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
