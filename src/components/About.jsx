import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F2EB] text-[#3D2645] relative overflow-hidden font-['Fredoka',sans-serif]">
      
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#E8DFF5]/60 rounded-full blur-[80px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-4 right-10 w-64 h-64 bg-[#FCE1E4]/70 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3D2645] via-[#5E4B66] to-[#FB6B90] mb-12 max-w-5xl leading-tight tracking-wide filter drop-shadow-[0_2px_0px_rgba(208,188,213,0.3)]">
          Give me standard internet access and an iced matcha, and I can build, break, or ship literally anything. If I don't know it yet, I deep dive until I do. Quitting? Not in my vocabulary! 🧚‍♀️✨
        </h2>

        <div className="flex items-center gap-4 my-8">
          <span className="text-[#3D2645] text-xs font-bold tracking-widest uppercase whitespace-nowrap bg-[#F3F0D7] border-2 border-dashed border-[#D0BCD5] px-4 py-1.5 rounded-2xl shadow-sm transform -rotate-1">
            The Lore / TL;DR 📖
          </span>
          <div className="w-full h-[4px] bg-gradient-to-r from-[#D0BCD5] via-[#FCE1E4] to-transparent opacity-80 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mt-12">
          
          <div className="lg:col-span-4 bg-white border-4 border-[#D0BCD5] p-6 rounded-[32px] shadow-[0_12px_0px_0px_#D0BCD5] transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="text-xs uppercase tracking-wider font-bold text-[#FB6B90] mb-1">✦ Character File ✦</p>
            <h3 className="text-2xl font-black text-[#3D2645] mb-2">Arzoo Singh</h3>
            <p className="text-sm text-[#5E4B66] font-medium leading-relaxed">
              Frontend dev by day, layout experimentalist by night. Permanently hyperfocused on scattering pixel magic that makes people smile. ✨
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg md:text-xl text-[#5E4B66] leading-relaxed font-medium">
              My absolute hyperfixation lies in interactive design and frontend code templates. To me, a basic or boring user interface is a crime—thoughtful UX isn’t just important, <span className="text-[#3D2645] font-black bg-[#FCE1E4] px-2 py-0.5 rounded-lg underline decoration-wavy decoration-[#FB6B90] decoration-2">it’s literally everything.</span>
            </p>
            
            <p className="text-lg md:text-xl text-[#5E4B66] leading-relaxed font-medium">
              I spend way too much time crafting playful interactive screens and digital spaces that just feel <span className="italic text-[#FB6B90] font-bold">cozy and right</span>. My builds are sometimes unconventional, always vibrant, and 100% unapologetically me. 🍧🐾
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
