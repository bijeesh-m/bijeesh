// ProjectCard.jsx
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
    //   animate={{ opacity: 1, y: 0 }}
      whileInView={{opacity:1}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="h-48 w-full overflow-hidden">
        <img
        //   src={image}
          src="/amazon.png"
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-white px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
