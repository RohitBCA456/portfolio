import React from "react";

// Updated data with live links and tech tags
const projects = [
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
    tags: ["Node.js", "Redis", "RabbitMQ", "Twilio"],
  },
  {
    title: "E-Commerce Backend",
    description:
      "Scalable RESTful API featuring complex product filtering, Stripe payment integration, and JWT-based RBAC.",
    image: "https://mindyouinfotech.com/img/ecom_ser.gif",
    link: "https://github.com/RohitBCA456/E-commerce.git",
    tags: ["Node.js", "Express", "Microservice", "Stripe"],
  },
];

export default function Cards({ theme }) {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-14 ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-extrabold drop-shadow-sm ${
              isDark ? "text-indigo-400" : "text-indigo-800"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`mt-3 text-lg ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Some of the best work I've built recently using full-stack
            technologies and real-time integrations.
          </p>
        </div>

        {/* The card grid layout */}
        <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
          {projects.map((project, idx) => (
            // Each card is now a flex column to ensure consistent height
            <div
              key={idx}
              className={`flex flex-col border-0 shadow-xl rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 group ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
            >
              {/* Image Container */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              {/* Content Container: grows to fill available space */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title and Description: this part grows, pushing buttons down */}
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
                      isDark ? "text-gray-300" : "text-gray-600"
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

                {/* Action Buttons: Pushed to the bottom */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-3">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-green-700 transition"
                    >
                      View Site
                      {/* --- ICON ADDED HERE --- */}
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
                     {/* --- ICON ADDED HERE --- */}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}