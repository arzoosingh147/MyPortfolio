// src/components/ExperienceCTA.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ExperienceCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F2EB] text-[#3D2645] text-center relative overflow-hidden font-['Fredoka',sans-serif]">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E8DFF5]/70 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-48 h-48 bg-[#FCE1E4]/60 rounded-full blur-[60px] pointer-events-none animate-pulse" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 bg-[#F3F0D7] border-2 border-dashed border-[#D0BCD5] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase text-[#6C5B7B] shadow-sm transform -rotate-1">
          ⚠️ Warning: High Yapping Potential ✦
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-wide leading-tight filter drop-shadow-[0_2px_0px_rgba(208,188,213,0.3)]">
          Curious about what I actually learned surviving clubs and hackathons? 
        </h2>
        
        <p className="text-[#5E4B66] text-sm md:text-base font-medium max-w-xl mx-auto leading-relaxed">
          I tend to write complete essays when I am passionate about things. Proceed only if you have a solid attention span and some spare magical time! 💀🧸📖
        </p>

        <div className="pt-6">
          <a 
            href="/experience" 
            className="group relative inline-flex items-center justify-center p-1 overflow-hidden font-bold rounded-full bg-gradient-to-r from-[#B491C8] to-[#FFB7B2] shadow-[0_8px_0px_0px_#D0BCD5] active:translate-y-1 active:shadow-[0_4px_0px_0px_#D0BCD5] transition-all duration-150"
          >
            <span className="relative px-8 py-4 transition-colors ease-in duration-75 bg-[#F5F2EB] rounded-full text-[#3D2645] group-hover:bg-transparent group-hover:text-white text-base md:text-lg tracking-wide flex items-center gap-3">
              Hear My Experience Lore 
              <FaArrowRight className="text-sm text-[#FB6B90] group-hover:text-white group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ExperienceCTA;
