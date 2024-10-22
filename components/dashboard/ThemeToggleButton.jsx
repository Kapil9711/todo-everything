"use client";
import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "winter" ? "black" : "winter"));
  };

  return (
    <button
      className={`btn  ${theme === "winter" ? "bg-slate-300 hover:bg-slate-400" : "bg-gray-500 hover:bg-slate-400"} rounded-full`}
      onClick={toggleTheme}
    >
      <CiLight />
    </button>
  );
}

export default ThemeToggle;
