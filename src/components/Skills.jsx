// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiFirebase, SiVite } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const techSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-black" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-600" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "VSCode", icon: <TbBrandVscode className="text-blue-600" /> },
];

const softSkills = [
  "Creativity",
  "Teamwork",
  "Communication",
  "Empathy",
  "Adaptability",
  "Leadership",
  "Problem Solving",
  "Time Management",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 bg-[#E4C896]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Skills</h2>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-6">
            {techSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-3 border-4 border-white rounded-xl shadow-md px-4 py-2 transition-transform cursor-default"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-lg font-medium text-white">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className=" font-bold text-white px-4 py-2 rounded-full shadow-sm border-4 border-white hover:bg-[#E4C896] transition-all text-sm cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
