// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="py-20 px-6 md:px-12 lg:px-24 bg-[#E4C896] text-center">
      <h3 className="text-xl font-semibold mb-2">Let’s Connect </h3>
      <div className="space-x-4 text-white">
        <a href="https://github.com/arzoosingh147" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/arzoo-singh-4192b324a/" target="_blank">LinkedIn</a>
        <a href="https://x.com/Arzoosingh147" target="_blank">Twitter</a>
      </div>
      <p className="text-sm text-white mt-2">arzoosingh147@gmail.com</p>
      <p className="text-sm text-gray-500 mt-4">&copy; 2025 Arzoo Singh. And Yes I Love Reaction Doodles </p>
    </footer>
  );
};

export default Footer;
