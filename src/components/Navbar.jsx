import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX, HiSparkles } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); 
    
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 px-4 sm:px-6 md:px-12 lg:px-24 py-4 transition-all duration-300 font-['Fredoka',sans-serif] ${
      scrolled 
        ? "backdrop-blur-md bg-[#F5F2EB]/80 border-b-4 border-[#D0BCD5] shadow-[0_8px_20px_rgba(208,188,213,0.3)]" 
        : "bg-transparent"
    }`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto relative z-50">
        
        <button 
          onClick={(e) => handleNavClick(e, "home")} 
          className="group flex items-center gap-1 font-black text-2xl tracking-wide text-[#7e518d] bg-transparent border-none cursor-pointer outline-none"
        >
          <span>ARZOO</span>
          <span className="text-[#FB6B90] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-120 inline-block">✨</span>
        </button>

        <div className="hidden lg:flex items-center gap-1 bg-white/60 border-2 border-[#D0BCD5] p-1 rounded-full shadow-sm">
          {["home", "about", "skills", "projects"].map((tab) => (
            <button 
              key={tab}
              onClick={(e) => handleNavClick(e, tab)}
              className="px-4 py-1.5 text-sm font-bold text-[#5E4B66] rounded-full hover:bg-[#E8DFF5] hover:text-[#3D2645] transition-all duration-200 cursor-pointer outline-none capitalize"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center bg-[#F3F0D7] border-2 border-[#D0BCD5] px-3 py-1.5 rounded-2xl shadow-sm transform -rotate-1 select-none">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB6B90] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB6B90]"></span>
            </span>
            <span className="text-xs font-bold tracking-wide text-[#3D2645]">Mixing Magic ☕🪄</span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 bg-white border-4 border-[#D0BCD5] rounded-xl text-[#3D2645] hover:text-[#FB6B90] shadow-[0_3px_0px_0px_#D0BCD5] active:translate-y-0.5 active:shadow-none transition-all outline-none cursor-pointer text-xl"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div className={`absolute top-0 left-0 w-full bg-[#F5F2EB] border-b-4 border-[#D0BCD5] shadow-xl pt-24 pb-8 px-6 transition-all duration-300 ease-in-out lg:hidden ${
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}>
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          {["home", "about", "skills", "projects"].map((tab) => (
            <button
              key={tab}
              onClick={(e) => handleNavClick(e, tab)}
              className="w-full flex items-center justify-between px-6 py-3 bg-white border-4 border-[#D0BCD5] rounded-2xl font-black text-[#3D2645] hover:bg-[#E8DFF5]/40 shadow-[0_4px_0px_0px_#D0BCD5] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer outline-none capitalize text-base"
            >
              <span>{tab}</span>
              <HiSparkles className="text-[#FB6B90] text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
          
          <div className="sm:hidden flex items-center justify-center gap-2 bg-[#F3F0D7] border-2 border-dashed border-[#D0BCD5] p-3 rounded-2xl mt-2">
            <span className="h-2 w-2 rounded-full bg-[#FB6B90] animate-pulse"></span>
            <span className="text-xs font-bold text-[#3D2645]">Mixing Magic ☕🪄</span>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
