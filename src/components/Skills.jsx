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
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiFirebase, SiVite, SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import { TbBrandVscode, TbSql } from "react-icons/tb";

const techSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Hooks", icon: <FaReact className="text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-700" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "Firebase", icon: <SiFirebase className="text-amber-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-600" /> },
  { name: "SQL", icon: <TbSql className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "VSCode", icon: <TbBrandVscode className="text-blue-500" /> },
];

const softSkills = [
  "Main Character Energy ✨",
  "Chaos Management 🌪️",
  "Yapping / Public Speaking 🗣️",
  "Vibe Checking / Empathy 🔮",
  "Brainstorming Meta 🧠",
  "Speed Cooking Code 🍳",
  "Assembling Teams 🤝",
  "Clutch Problem Solving 🧩",
  "Pixel Perfectionism 🎨",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F2EB] text-[#3D2645] relative overflow-hidden font-['Fredoka',sans-serif]">
      
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#FCE1E4]/60 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#E8DFF5]/70 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-wide mb-4 filter drop-shadow-[0_2px_0px_rgba(208,188,213,0.3)]">
            My <span className="bg-gradient-to-r from-[#B491C8] via-[#FB6B90] to-[#FFB7B2] bg-clip-text text-transparent">Power Ups</span> ⚡🧁
          </h2>
          <p className="text-[#5E4B66] text-lg font-medium">The digital spells I assemble daily and the cozy traits keeping loops balanced.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7">
            <h3 className="text-xl font-black uppercase tracking-wide text-[#FB6B90] mb-6 flex items-center gap-2">
              ✦ Digital Spells
            </h3>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {techSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, borderColor: "#FB6B90" }}
                  className="flex items-center gap-3 bg-white border-4 border-[#D0BCD5] rounded-2xl px-4 py-2.5 cursor-default transition-colors duration-200 shadow-[0_4px_0px_0px_#D0BCD5] hover:shadow-[0_6px_0px_0px_#D0BCD5]"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-sm md:text-base font-bold text-[#3D2645]">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xl font-black uppercase tracking-wide text-[#FB6B90] mb-6 flex items-center gap-2">
              ✦ Cozy Traits
            </h3>
            
            <motion.div 
              className="flex flex-wrap gap-3 bg-white border-4 border-dashed border-[#D0BCD5]/70 p-6 rounded-[32px] shadow-sm"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {softSkills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.06, rotate: idx % 2 === 0 ? 1 : -1 }}
                  className="font-black text-xs md:text-sm bg-gradient-to-r from-[#E8DFF5] to-[#D0BCD5]/40 text-[#3D2645] px-4 py-2.5 rounded-2xl border-2 border-[#D0BCD5] shadow-[0_3px_0px_0px_#D0BCD5] cursor-default select-none tracking-wide"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
