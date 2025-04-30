// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

const dummyProjects = [
  {
    id: "sahayak",
    title: "Sahayak",
    description: "Freelancer collab platform to post, find, and team up on projects , It's my favorite website (REACT JS,  FRAMER , TAILWIND CSS)",
    github: "https://github.com/arzoosingh147/Sahayak",
    live: "",
    image: "sahayak.png"
  },
  {
    id: "miirupan",
    title: "Miirupan",
    description: "Freelancer collab platform to post, find, and team up on projects.(Did not definitely think of my own self before making this website (REACT JS,  FRAMER , TAILWIND CSS)",
    github: "https://github.com/arzoosingh147/Miirupan",
    live: "",
    image: "miirupan.png"
  },
  {
    id: "noenoe",
    title: "NoeNoe",
    description: "I know the name is very silly but it is what it is. Upload recyclable items, earn badges and streak points (REACT JS,  FRAMER , TAILWIND CSS)",
    github: "https://github.com/arzoosingh147/NoeNoe",
    live: "",
    image: "noenoe.png"
  },
  {
    id: "ecofy",
    title: "Ecofy",
    description: "Ecofy an innovative waste management website. This is the first every website that i ever made and it made me feel like i can do something (HTML , CSS , JAVASCRIPT)",
    github: "https://github.com/arzoosingh147/projectecofy",
    live: "  https://arzoosingh147.github.io/projectecofy/",
    image: "ecofy.png"
  },
  {
    id: "clothcrew",
    title: "ClothCrew",
    description: "Laundry website I had to make (Forcefully) for my EDP project (HTML , CSS, JAVASCRIPT)",
    github: "https://github.com/arzoosingh147/CLOTH-CREW",
    live: "https://clothcrew.netlify.app/",
    image: "clothcrew.png"
  },
  {
    id: "focus",
    title: "Focus On Today",
    description: "Small To-do list that helps keep track of your work (HTML , CSS, JAVASCRIPT)",
    github: "https://github.com/arzoosingh147/Focus-on-today",
    live: "https://focusontoday147.netlify.app/",
    image: "fot.png"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-[#E4C896]">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {dummyProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
