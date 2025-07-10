import React from "react";
import Container from "../components/Container";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

const projects = [
  {
    title: "Real-Time Chat App",
    description:
      "A socket-based chat application with user authentication, real-time messaging, message status tracking, and room management.",
    image:
      "https://i.pinimg.com/originals/e3/1b/75/e31b752875679b64fce009922f9f0dda.gif",
    link: "https://github.com/RohitBCA456/chat-Application.git",
  },
  {
    title: "Clinic Management System",
    description:
      "Full-stack Node.js app to manage appointments, patient data, billing, and prescriptions with print/download support.",
    image:
      "https://cdn.dribbble.com/userupload/21746974/file/original-e3f63cef30c817b4090095315d32bc3a.gif",
    link: "https://github.com/RohitBCA456/clinic-management-system.git",
  },
  {
    title: "Teacher-Student Appointment Booking",
    description:
      "Role-based system for booking and managing student-teacher appointments with real-time chat and admin dashboard.",
    image:
      "https://cdn.dribbble.com/userupload/42496357/file/original-0fa59c7c722dcf8c09bed623df9de89f.gif",
    link: "https://github.com/RohitBCA456/student-Teacher-appointment-Booking-system.git",
  },
  {
    title: "Blood Donation App",
    description:
      "A platform for donors and seekers to connect. Frontend deployed on Netlify and backend on Vercel. Built without React.",
    image:
      "https://media.tenor.com/AagDHSXzOb0AAAAM/affordable-healthcare-statue-of-liberty.gif",
    link: "https://github.com/RohitBCA456/Blood-Donation",
  },
  {
    title: "E-Commerce Website",
    description:
      "Node.js backend with product management, user authentication, and shopping cart. Bootstrap-based frontend UI.",
    image:
      "https://assets-v2.lottiefiles.com/a/1d3a85ac-1184-11ee-9ec5-63dd7c736df9/fokktW0wa7.gif",
    link: "https://github.com/RohitBCA456/E-commerce",
  },
  {
    title: "Voting App",
    description:
      "Simple and secure voting system where users can vote once per poll. Backend-focused project with proper validations.",
    image: "https://cdn-icons-gif.flaticon.com/12764/12764460.gif",
    link: "https://github.com/RohitBCA456/voting-app",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Projects() {
  const { theme } = useOutletContext();
  const isDark = theme === "dark";

  return (
    <Container>
      <motion.section
        className={`py-14 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className={`text-4xl font-extrabold drop-shadow-sm ${isDark ? "text-indigo-400" : "text-indigo-800"}`}>
              Featured Projects
            </h2>
            <p className={`mt-3 text-lg ${isDark ? "text-neutral-400" : "text-gray-700"}`}>
              Some of the best work I've built recently using full-stack
              technologies and real-time integrations.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2"
            variants={containerVariants}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className={`relative border-0 shadow-xl rounded-3xl overflow-hidden group transition-all duration-300 ${
                  isDark ? "bg-neutral-800" : "bg-white"
                }`}
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-80"></div>
                  <div className="absolute top-4 right-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-full shadow hover:bg-indigo-700 transition"
                    >
                      GitHub
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      isDark ? "text-indigo-300" : "text-indigo-800"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-base ${isDark ? "text-neutral-300" : "text-gray-600"}`}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </Container>
  );
}

export default Projects;
