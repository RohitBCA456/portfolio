import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Container from "../components/Container";
import me from "../assets/me.jpeg";
import { motion } from "framer-motion";
import resume from "../assets/RESUME 2.pdf"

export default function About() {
  const { theme } = useOutletContext();
  const isDark = theme === "dark";

  const [state, setState] = useState(false);
  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, type: "spring", bounce: 0.4 },
    },
  };

  return (
    <Container>
      <div className={`relative ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div
          className="absolute inset-0 blur-xl h-[580px]"
        ></div>

        <div className="relative">
          {/* About Me Section */}
          <section>
            <motion.div
              className="max-w-screen-xl mx-auto px-4 py-28 gap-12 overflow-hidden md:px-8 md:flex"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="flex-none space-y-6 max-w-xl" variants={containerVariants}>
                <motion.h2
                  className={`text-4xl font-extrabold sm:text-5xl ${isDark ? "text-white" : "text-gray-800"}`}
                  variants={itemVariants}
                >
                  About Me
                </motion.h2>

                <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
                  Hi, I'm{" "}
                  <span className="font-semibold text-indigo-500">Rohit Yadav</span> — a passionate backend developer who loves building scalable APIs, secure systems, and real-time apps.
                </motion.p>

                <motion.p variants={itemVariants}>
                  I specialize in{" "}
                  <span className="font-medium text-indigo-500">Node.js, Express, MongoDB</span>{" "}
                  and have a solid foundation in microservices, RESTful architecture, and WebSockets.
                </motion.p>

                <motion.p className={`${isDark ? "text-neutral-400" : "text-gray-700"}`} variants={itemVariants}>
                  When I’m not coding, I enjoy exploring new tech trends, contributing to open source, and sharing my knowledge to help others grow.
                </motion.p>

                <motion.div className="flex items-center gap-x-4 sm:text-sm" variants={itemVariants}>
                  <a
                    href={resume}
                    download
                    className="inline-flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-indigo-600 hover:bg-indigo-700 rounded-full transition duration-200"
                  >
                    Download Resume
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 012 0v8.586l2.293-2.293a1 1 0 111.414 1.414L10 14.414l-4.707-4.707a1 1 0 011.414-1.414L9 10.586V2z" />
                      <path d="M3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-x-1 py-2 px-4 font-medium transition duration-200 ${
                      isDark ? "text-white hover:text-indigo-400" : "text-gray-800 hover:text-indigo-700"
                    }`}
                  >
                    Contact Me
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                className="flex-1 hidden md:flex justify-end items-center mr-15"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.img
                  src={me}
                  alt="Rohit Yadav"
                  className="rounded-full w-90 h-90 md:w-90 aspect-square object-cover shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            </motion.div>
          </section>

          {/* Education Section */}
          <section className="py-14">
            <motion.div
              className="flex justify-center px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="max-w-2xl w-full">
                <motion.div
                  className="text-center mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.h1
                    className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-800"}`}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    Educational Qualifications
                  </motion.h1>
                </motion.div>

                {/* Timeline Item 1 */}
                <motion.div
                  className="flex gap-x-3 justify-center"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <div
                    className={`relative after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] ${
                      isDark ? "after:bg-neutral-700" : "after:bg-gray-200"
                    }`}
                  >
                    <motion.div
                      className="relative z-10 size-7 flex justify-center items-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      <motion.div
                        className="size-2 rounded-full bg-indigo-500"
                        animate={{
                          boxShadow: [
                            "0 0 0px #6366f1",
                            "0 0 8px #6366f1",
                            "0 0 0px #6366f1",
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
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <h3 className="flex gap-x-1.5 justify-center font-semibold">
                      Higher Secondary @ OUR ABC ACADEMY
                    </h3>
                    <p className={`mt-1 text-sm text-center ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                      Completed 11th and 12th in Science stream (2021–2023), focused on Mathematics, Physics, and Computer Science.
                    </p>
                  </motion.div>
                </motion.div>

                {/* Timeline Item 2 */}
                <motion.div
                  className="flex gap-x-3 justify-center"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                >
                  <div
                    className={`relative after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] ${
                      isDark ? "after:bg-neutral-700" : "after:bg-gray-200"
                    }`}
                  >
                    <motion.div
                      className="relative z-10 size-7 flex justify-center items-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    >
                      <motion.div
                        className="size-2 rounded-full bg-indigo-500"
                        animate={{
                          boxShadow: [
                            "0 0 0px #6366f1",
                            "0 0 8px #6366f1",
                            "0 0 0px #6366f1",
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
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    <h3 className="flex gap-x-1.5 justify-center font-semibold">
                      BCA @ Dibrugarh University
                    </h3>
                    <p className={`mt-1 text-sm text-center ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                      Currently pursuing Bachelor of Computer Applications (2023–2026), with a focus on backend development, software design, and data structures.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </Container>
  );
}
