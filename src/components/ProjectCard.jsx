// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="border-4 border-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img src={project.image} alt={project.title} className="rounded-md mb-4" />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-600 text-sm mt-1 mb-3">{project.description}</p>
      <div className="flex justify-between items-center text-sm">
        <a href={project.github} target="_blank" className="text-white hover:underline">GitHub</a>
        <a href={project.live} target="_blank" className="text-white hover:underline">Site</a>
        <Link to={`/project/${project.id}`} className="text-white hover:underline">Details</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
