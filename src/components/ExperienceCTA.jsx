// src/components/ExperienceCTA.jsx
import React from "react";

const ExperienceCTA = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#E4C896] text-center">
      <h2 className="text-2xl font-bold mb-4">Want to know what I learned from clubs and hackathons? 
        (Unfortunately I like to write a lot so proceed only if you have sufficient time) </h2>
      <a href="/experience">
        <button className="border-4 border-white font-bold text-white px-6 py-3 rounded-full ">
          Hear My Experience 
        </button>
      </a>
    </section>
  );
};

export default ExperienceCTA;
