import React from "react";

const projects = [
  {
    title: "Real-Time Chat App",
    description:
      "A socket-based chat application with user authentication, real-time messaging, and message status tracking.",
    image:
      "https://i.pinimg.com/originals/e3/1b/75/e31b752875679b64fce009922f9f0dda.gif",
    link: "https://github.com/RohitBCA456/chat-Application.git",
  },
  {
    title: "Clinic Management System",
    description:
      "Full-stack system to manage appointments, patients, billing, and prescription generation using Node.js and MongoDB.",
    image:
      "https://cdn.dribbble.com/userupload/21746974/file/original-e3f63cef30c817b4090095315d32bc3a.gif",
    link: "https://github.com/RohitBCA456/clinic-management-system.git",
  },
  {
    title: "Teacher-Student Appointment Booking",
    description:
      "A role-based app where students can search teachers and book appointments. Teachers can confirm/reject appointments and chat with students in real-time.",
    image:
      "https://cdn.dribbble.com/userupload/42496357/file/original-0fa59c7c722dcf8c09bed623df9de89f.gif",
    link: "https://github.com/RohitBCA456/student-Teacher-appointment-Booking-system.git",
  },
];

export default function Cards({ theme }) {
  return (
    <section
      className={`py-14 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-extrabold drop-shadow-sm ${
              theme === "dark" ? "text-indigo-400" : "text-indigo-800"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`mt-3 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Some of the best work I've built recently using full-stack
            technologies and real-time integrations.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`relative border-0 shadow-xl rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300 group ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
            >
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
              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    theme === "dark" ? "text-indigo-300" : "text-indigo-800"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-base ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
