import React from "react";
import Container from "../components/Container";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

// Updated projects array with tech tags
const projects = [
  {
    title: "DockerAgent",
    description:
      "An automated container management tool that uses specialized agents to monitor, scale, and heal Docker-based microservices autonomously.",
    image: "https://cdn.dribbble.com/userupload/24402225/file/original-4256973cace26f81b3ea48264db5a642.gif",
    link: "https://github.com/RohitBCA456/DockerizeAgent.git",
    liveLink: null,
    tags: ["Docker", "Devops", "Shell Scripting", "API"],
  },
  {
    title: "AI-Memory Engine",
    description:
      "A sophisticated vector database integration layer that provides long-term memory for LLMs using semantic search and RAG patterns.",
    image: "https://rbcborealis.com/wp-content/uploads/2022/10/GremlinCCExplainability_Header_v2.gif",
    link: "https://github.com/RohitBCA456/ai-memory-engine.git",
    liveLink: "https://ai-memory-engine.onrender.com/",
    tags: ["Python", "Pinecone", "LangChain", "Ollama"],
  },
  {
    title: "NotifyHub",
    description:
      "A centralized notification microservice capable of handling push, email, and SMS triggers with retry logic and delivery tracking.",
    image: "https://cdn.dribbble.com/userupload/22316154/file/original-4256048f3c92914805a1b56c91d2d719.gif",
    link: "https://github.com/RohitBCA456/notifyhub.git",
    liveLink: "https://notifyhub-fh7h.onrender.com/",
    tags: ["Node.js", "Redis", "BullMQ", "Twilio"],
  },
  {
    title: "Service Provider Website",
    description:
      "A platform for local service providers to connect with customers, featuring profiles, booking, and review systems.",
    image:
      "https://globaleducation.s3.ap-south-1.amazonaws.com/globaledu/gif/psd-to-html.gif",
    link: "https://github.com/RohitBCA456/service-provider-website.git",
    liveLink: "https://service-provider-roan.vercel.app/",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "E-Commerce Backend",
    description:
      "Scalable RESTful API featuring complex product filtering, Stripe payment integration, and JWT-based RBAC.",
    image: "https://mindyouinfotech.com/img/ecom_ser.gif",
    link: "https://github.com/RohitBCA456/E-commerce.git",
    tags: ["Node.js", "Express", "PostgreSQL", "Stripe"],
  },
 {
    title: "Teacher-Student Appointment System",
    description:
      "A role-based scheduling platform featuring real-time availability tracking, automated booking confirmations, and an integrated administrative dashboard.",
    image: "https://cdn.dribbble.com/userupload/42496357/file/original-0fa59c7c722dcf8c09bed623df9de89f.gif",
    link: "https://github.com/RohitBCA456/student-Teacher-appointment-Booking-system.git",
    liveLink: "https://student-teacher-appointment-bboking.netlify.app/",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB"],
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
        className={`py-14 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
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
            <h2
              className={`text-4xl font-extrabold drop-shadow-sm ${
                isDark ? "text-indigo-400" : "text-indigo-800"
              }`}
            >
              Featured Projects
            </h2>
            <p
              className={`mt-3 text-lg ${
                isDark ? "text-neutral-400" : "text-gray-700"
              }`}
            >
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
                className={`flex flex-col border-0 shadow-xl rounded-3xl overflow-hidden group transition-all duration-300 ${
                  isDark ? "bg-neutral-800" : "bg-white"
                }`}
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isDark ? "text-indigo-300" : "text-indigo-800"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-base mb-4 ${
                        isDark ? "text-neutral-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 text-xs font-semibold rounded-md ${
                          isDark
                            ? "bg-gray-700 text-indigo-300"
                            : "bg-indigo-100 text-indigo-800"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-green-700 transition"
                      >
                        View Site
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.75A2.25 2.25 0 0115.75 4.5h2.25m-5.25 0l4.5 4.5"
                          />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow hover:bg-black transition dark:bg-indigo-600 dark:hover:bg-indigo-700"
                    >
                      View Code
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        ></path>
                      </svg>
                    </a>
                  </div>
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
