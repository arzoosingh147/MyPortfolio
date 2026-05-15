import React from "react";
import ProjectCard from "./ProjectCard";

const dummyProjects = [
  {
    id: "sahayak",
    title: "Sahayak",
    description: "A cozy, low-key healing room for mental wellness. Built to help people track their moods daily, tap into community magic, and access warm support when the clouds gather.",
    github: "https://github.com",
    live: "https://vercel.app",
    image: "sahayak.png"
  },
  {
    id: "miirupan",
    title: "Miirupan",
    description: "A sandbox for creative freelancers to team up, share design prompts, and co-build magical side apps. Built purely because I wanted this sandbox for myself!",
    github: "https://github.com",
    live: "https://netlify.app",
    image: "miirupan.png"
  },
  {
    id: "noenoe",
    title: "NoeNoe",
    description: "Silly name, major task! Sort out your recyclable items here to win shiny streak points and collect custom badges. Gamifying the planet's survival loops.",
    github: "https://github.com",
    live: "https://netlify.app",
    image: "noenoe.png"
  },
  {
    id: "ecofy",
    title: "Ecofy",
    description: "An eco-friendly green tracking app. Fun story: this is the actual first little website I ever launched. It single-handedly proved that my spells could work!",
    github: "https://github.com",
    live: "https://github.io",
    image: "ecofy.png"
  },
  {
    id: "clothcrew",
    title: "ClothCrew",
    description: "A friendly laundry management display. Full disclosure: I was fully forced into structuring this for a college class, but it came out looking incredibly sweet.",
    github: "https://github.com",
    live: "https://netlify.app",
    image: "clothcrew.png"
  },
  {
    id: "focus",
    title: "Focus On Today",
    description: "A minimalist, aesthetic checklist map engineered to prevent you from losing track of daily tasks. Straightforward, responsive, and keeps your loops aligned.",
    github: "https://github.com",
    live: "https://netlify.app",
    image: "fot.png"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F2EB] relative overflow-hidden font-['Fredoka',sans-serif]">
      
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8DFF5]/60 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#FCE1E4]/50 rounded-full blur-[80px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-wide mb-4 text-[#3D2645] filter drop-shadow-[0_2px_0px_rgba(208,188,213,0.3)]">
            Recent <span className="bg-gradient-to-r from-[#B491C8] via-[#FB6B90] to-[#FFB7B2] bg-clip-text text-transparent">Spells & Projects</span> 🎨🪄
          </h2>
          <p className="text-[#5E4B66] text-lg font-medium">Actual proof that I assemble interfaces using pure creative flow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
