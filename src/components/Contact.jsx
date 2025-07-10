import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact({ theme }) {
  const isDark = theme === "dark";

  return (
    <section className={`py-28 relative ${isDark ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <motion.div
          className="max-w-xl md:mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className={`text-3xl font-bold sm:text-4xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Get in Touch With Me
          </motion.p>
          <motion.p
            className={`mt-3 ${isDark ? "text-neutral-400" : "text-gray-600"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Have a project in mind, a question, or just want to connect? I’d love to hear from you. Fill out the contact form or reach out through my social platforms.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: "0px 8px 24px rgba(80,80,200,0.15)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/contact"
              className="inline-block py-2 px-5 font-medium text-white bg-gradient-to-r from-gray-800 via-indigo-700 to-gray-900 hover:from-indigo-700 hover:to-gray-800 active:bg-gray-900 rounded-full transition shadow-lg"
            >
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
