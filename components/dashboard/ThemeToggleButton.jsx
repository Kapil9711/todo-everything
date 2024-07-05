"use client";
import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      className={`btn  ${theme === "light" ? "bg-gray-400" : "bg-gray-600"} rounded-full`}
      onClick={toggleTheme}
    >
      <CiLight />
    </button>
  );
}

export default ThemeToggle;
