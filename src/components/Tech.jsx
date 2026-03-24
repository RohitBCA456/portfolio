import { motion } from "framer-motion";

const technologies = [
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
    desc: "I use React to build dynamic and responsive UIs with reusable components.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    desc: "Building scalable backend applications using JavaScript on the server side.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    title: "MySQL",
    desc: "Designing and managing relational databases with complex queries and optimizations.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    desc: "I prefer MongoDB for storing structured and unstructured data in scalable apps.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    title: "Redis",
    desc: "Utilizing Redis for high-performance caching and real-time data processing.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Python",
    desc: "I use Python for scripting, automation, and AI-driven development.",
  },
  {
    // Base64 encoded LangChain logo (The🦜icon)
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzEzM0QzMyIgZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0xIDUuNWMwLS4yOC4yMi0uNS41LS41czIuNSAwIDIuNSAyLjUtLjY3IDIuNS0xLjUgMi41TTEyIDE4Yy0zLjMxIDAtNi0yLjY5LTYtNnMyLjY5LTYgNi02IDYgMi42OSA2IDYtMi42OSA2LTYgNnoiLz48L3N2Zz4=",
    title: "LangChain",
    desc: "Developing LLM-powered applications and sophisticated AI workflows.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    title: "Docker",
    desc: "Containerizing apps using Docker ensures consistency and easy deployments.",
  },
  {
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "Git",
    desc: "Version control with Git helps me manage code efficiently across projects.",
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