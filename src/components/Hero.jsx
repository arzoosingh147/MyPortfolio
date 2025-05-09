%// src/components/Hero.jsx
import React from "react";
import meme from "../assets/hero-meme.png"; // your chosen meme

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center px-6 md:px-12 lg:px-24 py-10 mt-20 bg-[#E4C896] ">
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl font-bold mb-6"> Hiiii, I'm <span className="text-7xl text-white text-shadow-lg/30 " > Arzoo </span></h1>
        <p className="mb-4 text-gray-600">I am a Frontend Developer in making(Still in my second year of college) | I like to build things without planning and let my brain go with the flow(Works 95% of the time Source: TRUST ME BRO!!!!!!! )</p>
        <a href="#projects">
          <button className="border-4 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-[#E4C896]">
            See My Work 
          </button>
        </a>
      </div>
      <div className="hidden md:block md:w-1/2 text-right">
        <img src={meme} alt="meme" className="max-w-xs mx-auto rounded-xl" />
      </div>
    </section>
  );
};

export default Hero;
