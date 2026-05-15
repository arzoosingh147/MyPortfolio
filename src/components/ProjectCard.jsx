import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white border-4 border-[#D0BCD5] rounded-[32px] overflow-hidden flex flex-col h-full shadow-[0_8px_0px_0px_#D0BCD5] hover:shadow-[0_16px_0px_0px_#D0BCD5] hover:-translate-y-1 transition-all duration-300 font-['Fredoka',sans-serif]">
      
      <div className="h-48 bg-[#F5F2EB] border-b-4 border-[#D0BCD5] relative overflow-hidden flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-t from-[#E8DFF5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover rounded-2xl opacity-90 group-hover:opacity-100 group-hover:scale-102 transition-all duration-300"
        />
        
        <span className="absolute top-3 left-3 bg-white border-2 border-dashed border-[#D0BCD5] text-[#6C5B7B] text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-xl uppercase shadow-sm">
          #{project.id}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-2">
        <h3 className="text-2xl font-black tracking-wide text-[#3D2645] group-hover:text-[#FB6B90] transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-sm text-[#5E4B66] font-medium leading-relaxed flex-grow">
          {project.description}
        </p>
      </div>

      <div className="p-6 pt-0 border-t-2 border-dashed border-[#D0BCD5]/40 bg-[#F5F2EB]/30 flex items-center justify-between gap-2">
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#5E4B66] hover:text-[#FB6B90] transition-colors"
          >
            <FaGithub className="text-base text-[#B491C8]" /> Code
          </a>
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#5E4B66] hover:text-[#FB6B90] transition-colors"
          >
            <FaExternalLinkAlt className="text-sm text-[#B491C8]" /> Live
          </a>
        </div>

        <Link 
          to={`/project/${project.id}`} 
          className="inline-flex items-center gap-1.5 bg-white hover:bg-[#FCE1E4] border-2 border-[#D0BCD5] text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-xl text-[#3D2645] transition-all duration-200 shadow-[0_3px_0px_0px_#D0BCD5] active:translate-y-0.5 active:shadow-none"
        >
          Details <FaArrowRight className="text-[10px] text-[#FB6B90] transform group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

    </div>
  );
};

export default ProjectCard;
