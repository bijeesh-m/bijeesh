"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Add background when scrolled
      setScrolled(currentScrollY > 0);

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
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
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl font-mono mx-auto px-4 text-black sm:px-6 md:px-16 lg:px-24 h-24 flex items-center justify-between text-sm font-medium"
      >
        <div className="text-2xl font-mono font-bold">Bijeesh</div>
        <ul className="flex space-x-6 text-xl">
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
