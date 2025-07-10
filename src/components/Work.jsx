import { motion } from "framer-motion";

export default function Work({ theme }) {
  const isDark = theme === "dark";

  return (
    <motion.section
      className={`flex justify-center px-4 py-14 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-2xl w-full">
        <motion.div
          className="ps-2 my-2 first:mt-0 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="mb-4">
            <motion.h1
              className="text-2xl font-bold"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Work Experience
            </motion.h1>
          </div>
          <motion.h3
            className={`text-xs font-medium uppercase ${
              isDark ? "text-neutral-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            May – July, 2025
          </motion.h3>
        </motion.div>

        <motion.div
          className="flex gap-x-3 justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div
            className={`relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] ${
              isDark ? "after:bg-neutral-700" : "after:bg-gray-200"
            }`}
          >
            <motion.div
              className="relative z-10 size-7 flex justify-center items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="size-2 rounded-full bg-blue-500"
                animate={{
                  boxShadow: [
                    "0 0 0px #3b82f6",
                    "0 0 8px #3b82f6",
                    "0 0 0px #3b82f6",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          <motion.div
            className="grow pt-0.5 pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="flex gap-x-1.5 justify-center font-semibold text-green-400">
              Full Stack Web Developer Intern @ Unified Mentor
            </h3>
            <motion.p
              className={`mt-1 text-sm text-center ${
                isDark ? "text-neutral-400" : "text-gray-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              Worked on real-world projects involving both frontend and backend
              development. Built features using React.js, Node.js, and MongoDB.
              Collaborated with the team to deliver user-centric web solutions.
            </motion.p>
            <div className="flex justify-center">
              <motion.button
                type="button"
                className={`mt-2 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent ${
                  isDark
                    ? "text-neutral-400 hover:bg-neutral-700"
                    : "text-gray-500 hover:bg-blue-50"
                } transition`}
                whileHover={{ scale: 1.07, boxShadow: "0 2px 8px #3b82f633" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span
                  className={`flex shrink-0 justify-center items-center size-4 border text-[10px] font-semibold uppercase rounded-full ${
                    isDark
                      ? "bg-neutral-800 border-neutral-700 text-neutral-400"
                      : "bg-white border-gray-200 text-gray-600"
                  }`}
                >
                  U
                </span>
                Unified Mentor
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
