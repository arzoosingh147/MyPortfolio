// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-[#E4C896]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 max-w-5xl leading-snug ">
        I believe that with the internet by my side, I can learn, build, and integrate anything.
         I never give up just because I don't know something — in fact, that’s when I dig in deeper.
          Solving problems, no matter how complex, is something I refuse to walk away from.
      </h2>
      <p className="text-white text-xs">This is me</p>
<hr className="bg-[black] border-2 " />
<br/>
      <div className="flex flex-col lg:flex-row gap-60 text-gray-800 text-lg">
        <p className="max-w-xl">
          Hi, I am Arzoo Singh
        </p>
        <p className="max-w-xl">
        My heart lies in design and frontend development. To me, a thoughtful user interface
         isn’t just important — it’s everything. I pour time and creativity into crafting experiences 
         that not only work well but feel right. I love experimenting with unusual layouts and playful
          designs that make people smile. My websites are sometimes weird, always fun, and uniquely me.
        </p>
      </div>
    </section>
  );
};

export default About;
