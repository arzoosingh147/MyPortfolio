// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="border-4 border-white rounded-lg shadow-md p-4 hover:shadow-xl transition flex flex-col h-full">
      <img src={project.image} alt={project.title} className="rounded-md mb-4" />

      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-600 text-sm mt-1 mb-3">{project.description}</p>

      {/* Spacer to push the links to the bottom */}
      <div className="flex-grow"></div>

      <div className="flex justify-between items-center text-sm mt-4">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:underline"
        >
          GitHub
        </a>
        <a 
          href={project.live} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:underline"
        >
          Site
        </a>
        <Link 
          to={`/project/${project.id}`} 
          className="text-white hover:underline"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
