import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import resume from "../assets/RESUME 2.pdf"

export default () => {

  const { theme } = useOutletContext();

  return (
    <section className="py-28" style={{ backgroundColor: theme === "dark" ? "#111827" : "#fff" }}>
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <motion.div
          className="max-w-xl space-y-3 md:mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h3
            className={`${theme === "dark" ? "text-indigo-400" : "text-indigo-600"} font-semibold`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Welcome to My Portfolio
          </motion.h3>
          <motion.p
            className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-3xl font-semibold sm:text-4xl`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Crafting Scalable Backends & Real-Time Experiences
          </motion.p>
          <motion.p
            className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I'm a backend developer passionate about solving real-world problems
            through clean APIs, microservices, and real-time systems. This
            portfolio showcases my technical journey and the projects I've built
            along the way.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.a
            href={resume}
            download
            whileHover={{ scale: 1.07, boxShadow: "0px 4px 24px rgba(99,102,241,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-x-2 py-2 px-4 font-semibold rounded-full transition duration-200
              ${theme === "dark"
                ? "text-white border border-gray-300 hover:bg-gray-800"
                : "text-gray-800 border border-gray-800 hover:bg-gray-100"
              }`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a1 1 0 012 0v8.586l2.293-2.293a1 1 0 111.414 1.414L10 14.414l-4.707-4.707a1 1 0 011.414-1.414L9 10.586V2z" />
              <path d="M3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
