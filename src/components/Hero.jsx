import React from "react";
import meme from "../assets/hero-meme.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-24 bg-[#F5F2EB] text-[#3D2645] overflow-hidden relative font-['Fredoka',sans-serif]">
      
      <div className="absolute top-12 left-10 w-72 h-72 bg-[#E8DFF5] rounded-full blur-[80px] opacity-70 pointer-events-none animate-pulse" />
      <div className="absolute bottom-16 right-10 w-96 h-96 bg-[#FCE1E4] rounded-full blur-[100px] opacity-80 pointer-events-none animate-bounce duration-[6000ms]" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#F3F0D7] rounded-full blur-[60px] opacity-60 pointer-events-none" />

      <div className="w-full md:w-2/3 z-10 flex flex-col justify-center text-left space-y-6 mt-12 md:mt-0 pr-0 md:pr-8">
        
        <div className="inline-flex items-center gap-2 bg-[#D0BCD5]/30 border-2 border-dashed border-[#D0BCD5] px-4 py-1.5 rounded-full w-max text-xs font-bold tracking-wide uppercase text-[#6C5B7B]">
          ✨ floating through the digital matrix ✨
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-wide leading-tight drop-shadow-sm">
          Hiiii, I'm <br />
          <span className="bg-gradient-to-r from-[#B491C8] via-[#FB6B90] to-[#FFB7B2] bg-clip-text text-transparent filter drop-shadow-[0_4px_0px_rgba(208,188,213,0.4)]">
            Arzoo
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#5E4B66] max-w-xl font-medium leading-relaxed">
          A <span className="text-[#FB6B90] bg-[#E8DFF5] px-2 rounded-lg underline decoration-wavy decoration-[#FB6B90] decoration-2">Frontend Developer</span> who runs on iced coffee, starry nights, and absolute chaos. I let my inner sprites code and honestly? It works 95% of the time. Source: <span className="italic font-bold bg-[#F3F0D7] px-2.5 py-1 rounded-full border border-[#D0BCD5] text-[#3D2645]">TRUST ME BRO! 🧸🪄</span>
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#projects" className="group relative inline-flex items-center justify-center p-1 overflow-hidden font-bold rounded-3xl bg-gradient-to-r from-[#B491C8] to-[#FFB7B2] shadow-[0_8px_0px_0px_#D0BCD5] active:translate-y-1 active:shadow-[0_4px_0px_0px_#D0BCD5] transition-all duration-150">
            <span className="relative px-8 py-3.5 transition-colors ease-in duration-75 bg-[#F5F2EB] rounded-[20px] text-[#3D2645] group-hover:bg-transparent group-hover:text-white text-base md:text-lg tracking-wide">
              🎨 Wander My Builds
            </span>
          </a>
          
          <a href="#contact" className="px-8 py-4 border-4 border-double border-[#D0BCD5] bg-[#E8DFF5]/20 hover:bg-[#E8DFF5]/60 text-[#5E4B66] hover:text-[#3D2645] rounded-3xl font-bold transition-all duration-300 text-base md:text-lg shadow-[0_4px_0px_0px_#D0BCD5] active:translate-y-0.5 active:shadow-none">
            Let's Yap 🐾
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/3 z-10 flex justify-center items-center mt-16 md:mt-0 relative">
        <div className="absolute inset-0 max-w-[280px] max-h-[280px] mx-auto bg-gradient-to-tr from-[#FFB7B2] to-[#E8DFF5] rounded-[32px] rotate-6 scale-95 opacity-60 blur-sm group-hover:rotate-12 transition-transform duration-500" />
        
        <div className="relative w-full max-w-[280px] max-h-[280px] bg-white border-4 border-[#D0BCD5] p-3 rounded-[32px] shadow-[0_10px_30px_rgba(208,188,213,0.4)] transform -rotate-3 hover:rotate-0 hover:scale-[1.02] transition-all duration-300 ease-out flex items-center justify-center overflow-visible">
          <img 
            src={meme} 
            alt="Current soft mood" 
            className="w-full h-full max-h-[250px] object-cover rounded-[24px] filter brightness-100 contrast-95" 
          />
          <div className="absolute -bottom-4 -right-2 bg-[#F3F0D7] border-2 border-[#D0BCD5] text-[#3D2645] font-bold px-3 py-1 rounded-xl text-xs shadow-sm rotate-6 whitespace-nowrap select-none">
            Nonchalantly Chalant 🧚‍♀️🪄
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
