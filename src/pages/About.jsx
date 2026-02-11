"use client";

import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Container from "../components/Container";
import me from "../assets/me.jpeg";
import { motion } from "framer-motion";
import resume from "../assets/RESUME 2.pdf";
import { Link } from "react-router-dom";

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
      <div
        className={`relative ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="absolute inset-0 blur-xl h-[580px]"></div>

        <div className="relative">
          {/* About Me Section */}
          <section>
            <motion.div
              className="max-w-screen-xl mx-auto px-4 py-28 gap-12 overflow-hidden md:px-8 md:flex"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="flex-none space-y-6 max-w-xl"
                variants={containerVariants}
              >
                <motion.h2
                  className={`text-4xl font-extrabold sm:text-5xl ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                  variants={itemVariants}
                >
                  About Me
                </motion.h2>

                <motion.p
                  className="text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  Hi, I'm{" "}
                  <span className="font-semibold text-indigo-500">
                    Rohit Yadav
                  </span>{" "}
                  — a passionate backend developer who loves building scalable
                  APIs, secure systems, and real-time apps.
                </motion.p>

                <motion.p variants={itemVariants}>
                  I specialize in{" "}
                  <span className="font-medium text-indigo-500">
                    Node.js, Express, MongoDB
                  </span>{" "}
                  and have a solid foundation in microservices, RESTful
                  architecture, and WebSockets.
                </motion.p>

                <motion.p
                  className={`${isDark ? "text-neutral-400" : "text-gray-700"}`}
                  variants={itemVariants}
                >
                  When I’m not coding, I enjoy exploring new tech trends,
                  contributing to open source, and sharing my knowledge to help
                  others grow.
                </motion.p>

                <motion.div
                  className="flex items-center gap-x-4 sm:text-sm"
                  variants={itemVariants}
                >
                  <a
                    href={resume}
                    download
                    className="inline-flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-indigo-600 hover:bg-indigo-700 rounded-full transition duration-200"
                  >
                    Download Resume
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 012 0v8.586l2.293-2.293a1 1 0 111.414 1.414L10 14.414l-4.707-4.707a1 1 0 011.414-1.414L9 10.586V2z" />
                      <path d="M3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                    </svg>
                  </a>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center justify-center gap-x-1 py-2 px-4 font-medium transition duration-200 ${
                      isDark
                        ? "text-white hover:text-indigo-400"
                        : "text-gray-800 hover:text-indigo-700"
                    }`}
                  >
                    Contact Me
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </motion.div>

                {/* Social Media Links Section */}
                <motion.div
                  className="flex gap-x-6 pt-6"
                  variants={itemVariants}
                >
                  <motion.a
                    href="https://github.com/RohitBCA456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isDark
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/rohit-yadav-522032353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isDark
                        ? "text-gray-400 hover:text-blue-400 hover:bg-gray-800"
                        : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/agnx.exe_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-200 ${
                      isDark
                        ? "text-gray-400 hover:text-pink-400 hover:bg-gray-800"
                        : "text-gray-600 hover:text-pink-600 hover:bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </motion.a>
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
                    className={`text-2xl font-bold ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.4,
                    }}
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
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
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
                          repeat: Number.POSITIVE_INFINITY,
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
                    <p
                      className={`mt-1 text-sm text-center ${
                        isDark ? "text-neutral-400" : "text-gray-600"
                      }`}
                    >
                      Completed 11th and 12th in Science stream (2021–2023),
                      focused on Mathematics, Physics, and Computer Science.
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
                      transition={{
                        delay: 0.8,
                        type: "spring",
                        stiffness: 200,
                      }}
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
                          repeat: Number.POSITIVE_INFINITY,
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
                    <p
                      className={`mt-1 text-sm text-center ${
                        isDark ? "text-neutral-400" : "text-gray-600"
                      }`}
                    >
                      Currently pursuing Bachelor of Computer Applications
                      (2023–2026), with a focus on backend development, software
                      design, and data structures.
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
