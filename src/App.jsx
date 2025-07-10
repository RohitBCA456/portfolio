import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Header theme={theme} setTheme={setTheme} />
        <main className="flex-grow">
          <Outlet context={{ theme, setTheme }} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
