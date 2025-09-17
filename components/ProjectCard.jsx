// ProjectCard.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ title, description, images, tags, link }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      className="relative  font-mono text-black bg-white backdrop-blur-xl h-full flex flex-col    shadow-xl group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image Carousel */}
      <div className="h-48 w-full overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`slide-${current}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 h-full w-full object-contain"
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex justify-between items-center px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={prevSlide}
            className="p-2 bg-black/40 text-white hover:bg-black/70 transition"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-black/40 text-white hover:bg-black/70 transition"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {images.map((_, idx) => (
            <motion.div
              key={idx}
              className={`w-2 h-2 rounded-full ${
                idx === current ? "bg-white" : "bg-white/50"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: idx === current ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex flex-col  flex-1 justify-between  ">
        <div className=" space-y-2">
          <motion.h3
            className="text-2xl font-bold text-gray-900 "
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-black  text-sm leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {description}
          </motion.p>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {tags.map((tag, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 border border-blue-400/30"
              >
                #{tag}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Button */}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project <FaArrowRight size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
