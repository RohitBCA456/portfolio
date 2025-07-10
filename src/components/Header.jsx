import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

export default function Header({ theme, setTheme }) {
  const [state, setState] = useState(false);
  const location = useLocation();

  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Skills", path: "/skills" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    setState(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".menu-btn") && !e.target.closest(".menu-drawer")) {
        setState(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <motion.h1
        className={`${
          theme === "dark" ? "text-white" : "text-gray-900"
        } text-2xl font-bold`}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Rohit Yadav.
      </motion.h1>

      {/* Theme Toggle (Mobile) */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          title="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>

        {/* Hamburger */}
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative z-50">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          pointerEvents: "none",
          filter: "blur(80px)",
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(232,121,249,0.1), rgba(99,102,241,0.15))",
        }}
      />

      <header className="relative z-10">
        <div className="md:hidden mx-2 pb-2">
          <Brand />
        </div>

        <nav className="pb-5 md:text-sm">
          <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
            <div className="hidden md:block">
              <Brand />
            </div>

            <div
              className={`menu-drawer md:flex flex-1 items-center mt-6 md:mt-0 ${
                state ? "block" : "hidden md:block"
              }`}
            >
              <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                {navigation.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className={`${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    } hover:text-blue-600 transition-colors duration-200`}
                    variants={itemVariants}
                  >
                    <Link
                      to={item.path}
                      className="block"
                      onClick={() => setState(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Desktop Theme Toggle & Hire Me */}
              <motion.div
                className="items-center justify-end mt-6 space-y-6 md:flex md:space-x-4 md:space-y-0 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {/* Theme Toggle (Desktop) */}
                <motion.button
                  onClick={toggleTheme}
                  className="hidden md:block p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                  title="Toggle Theme"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-800" />
                  )}
                </motion.button>

                {/* Hire Me Button */}
                <motion.div
                  whileHover={{ scale: 1.07, boxShadow: "0 4px 24px #6366f1" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:bg-gray-900 rounded-full shadow-lg"
                  >
                    Hire Me
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
