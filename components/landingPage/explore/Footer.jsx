import React from "react";

const Footer = () => {
  return (
    <footer className=" py-4 min-h-44 w-full border border-white">
      <h2 className="text-4xl sm:text-5xl text-center text-orange-500">
        Footer
      </h2>
      <div className="mt-4 mx-auto    max-w-44">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Dashboard</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
