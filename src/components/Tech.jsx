import { motion } from "framer-motion";

const technologies = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript / TypeScript",
    desc: "Writing clean, asynchronous code across the entire stack for real-time and scalable systems.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React.js",
    desc: "Building highly interactive, responsive user interfaces and modular frontend architectures.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js & Express",
    desc: "Developing performant REST APIs, microservices, and utilizing native testing patterns.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    desc: "Designing flexible, document-oriented schemas and managing collections for data-driven apps.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    title: "Redis",
    desc: "Implementing high-performance caching layers and fast in-memory data structures.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
    title: "RabbitMQ",
    desc: "Structuring reliable event-driven messaging, background workers, and task queues.",
  },
  {
    image: "https://unpkg.com/simple-icons@v13/icons/langchain.svg",
    title: "AI Integration & Vectors",
    desc: "Orchestrating LLM contexts, vector memory layers, and intelligent prompt pipelines.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    title: "Docker",
    desc: "Containerizing applications and configuring isolated networks for consistent deployments.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "Git & Version Control",
    desc: "Managing complex feature branches, collaborative workflows, and clean commit histories.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80 } },
  hover: { scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" },
};

export default function Tech({ theme }) {
  const isDark = theme === "dark";

  return (
    <motion.section
      className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"} py-14`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className={`text-3xl font-semibold sm:text-4xl ${isDark ? "text-white" : "text-gray-800"}`}>
            Technologies I Work With
          </h3>
          <p className={`mt-3 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            From modern frontend frameworks to AI orchestration and scalable databases.
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <ul className="grid gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, idx) => (
              <motion.li
                key={idx}
                className="space-y-3"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div
                  className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center ${
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  } shadow-sm`}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img src={tech.image} alt={tech.title} className="w-8 h-8 object-contain" />
                </motion.div>
                <h4 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                  {tech.title}
                </h4>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>{tech.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}