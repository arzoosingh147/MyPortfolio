// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-[#8D8368]/70 shadow-md fixed top-0 w-full z-50 px-6 md:px-12 lg:px-24 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Arzoo Singh</h1>
        <div className="space-x-6 text-sm md:text-white">
          <a href="/" className="hover:text-black">Home</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#skills" className="hover:text-black">Skills</a>
          <a href="#projects" className="hover:text-black">Projects</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
