import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F2EB] border-t-4 border-dashed border-[#D0BCD5] relative overflow-hidden text-center font-['Fredoka',sans-serif]">
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#E8DFF5]/60 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-36 h-36 bg-[#FCE1E4]/50 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        <div className="space-y-2">
          <h3 className="text-3xl md:text-4xl font-black tracking-wide text-[#3D2645] filter drop-shadow-[0_2px_0px_rgba(208,188,213,0.3)]">
            Let’s Link Up <span className="text-[#FB6B90] inline-block animate-bounce">✨🐾</span>
          </h3>
          <p className="text-[#5E4B66] font-medium text-sm md:text-base max-w-sm mx-auto leading-relaxed">
            Have an experimental idea, a wild design concept, or just want to swap doodle ideas? My mailbox is open!
          </p>
        </div>

        <div className="inline-block">
          <a 
            href="mailto:arzoosingh147@gmail.com"
            className="flex items-center gap-2.5 bg-white border-4 border-[#D0BCD5] px-6 py-3.5 rounded-2xl text-[#3D2645] hover:text-[#FB6B90] transition-all duration-300 font-bold tracking-wide shadow-[0_6px_0px_0px_#D0BCD5] active:translate-y-1 active:shadow-[0_2px_0px_0px_#D0BCD5] text-sm md:text-base"
          >
            <FaEnvelope className="text-[#FB6B90] text-lg" />
            <span>arzoosingh147@gmail.com</span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-4 pt-2">
          <a 
            href="https://github.com/arzoosingh147" 
            target="_blank" 
            rel="noreferrer"
            className="p-4 bg-white border-4 border-[#D0BCD5] text-[#5E4B66] hover:text-[#3D2645] hover:bg-[#E8DFF5]/40 rounded-2xl transition-all duration-200 shadow-[0_4px_0px_0px_#D0BCD5] active:translate-y-0.5 active:shadow-[0_1px_0px_0px_#D0BCD5]"
            title="GitHub Profile"
          >
            <FaGithub className="text-xl" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/arzoo-singh-4192b324a/" 
            target="_blank" 
            rel="noreferrer"
            className="p-4 bg-white border-4 border-[#D0BCD5] text-[#5E4B66] hover:text-[#3D2645] hover:bg-[#FCE1E4]/40 rounded-2xl transition-all duration-200 shadow-[0_4px_0px_0px_#D0BCD5] active:translate-y-0.5 active:shadow-[0_1px_0px_0px_#D0BCD5]"
            title="LinkedIn Network"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          
          <a 
            href="https://x.com/Arzoosingh147" 
            target="_blank" 
            rel="noreferrer"
            className="p-4 bg-white border-4 border-[#D0BCD5] text-[#5E4B66] hover:text-[#3D2645] hover:bg-[#F3F0D7]/60 rounded-2xl transition-all duration-200 shadow-[0_4px_0px_0px_#D0BCD5] active:translate-y-0.5 active:shadow-[0_1px_0px_0px_#D0BCD5]"
            title="Twitter Space"
          >
            <FaTwitter className="text-xl" />
          </a>
        </div>

        <div className="pt-8 border-t-2 border-dashed border-[#D0BCD5]/40 space-y-2">
          <p className="text-xs md:text-sm text-[#6C5B7B] font-medium tracking-wide">
            &copy; {currentYear} Arzoo Singh. Molded with dream code vectors, infinite matcha sips, and lots of sprites. 🧚‍♀️✨
          </p>
          <div className="inline-block bg-[#F3F0D7] border border-[#D0BCD5] text-[#3D2645] text-[11px] font-bold px-3 py-1 rounded-lg shadow-sm rotate-1">
            TMI: I love Journalling and have a secret obsession with Tarot!🔮📓
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
