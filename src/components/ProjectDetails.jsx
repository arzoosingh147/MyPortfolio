import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi"; 

const dummyProjects = {
  sahayak: {
    title: "Sahayak",
    image: "/sahayak.png",
    tagline: "Cozy Mental Health Corner 🧠✨",
    description: "A secure, soft space optimized for community-guided healing and mental well-being tracking. Built specifically to let individuals share their struggles without anxiety and find real friendly help when the daily vibes get heavy.",
    features: [
      "Dynamic feed featuring completely anonymous posts, inline updates, and rapid emoji counters",
      "Interactive Mood Tracker complete with a historical calendar viewport and structured weekly trends",
      "Categorized community filters targeting critical tags like Anxiety, Motivation, and ADHD",
      "Geo-aware Medical Expert Directory filtering directly by real-world location, language, and explicit price tiers",
      "Deeply engaging comment structures and social accountability toolsets"
    ]
  },
  miirupan: {
    title: "Miirupan",
    image: "/miirupan.png",
    tagline: "The Builder Sandbox Guild 🤝🎨",
    description: "A fast-paced collaborative sandbox engineered for developers, UI artists, and technical copywriters to cross-pollinate, broadcast concepts, and form tactical execution squads.",
    features: [
      "Seamless gig indexing architecture to display, discover, and join open active builds",
      "Community forum layers packed with instant CRUD comment states and thread control",
      "Secure cookieless user profile dashboards supporting live metadata and custom avatar editing",
      "Unified internal tracking module giving developers complete command over their historical project posts",
      "High-fidelity project card modals fully anchored to client-side localStorage engines"
    ]
  },
  noenoe: {
    title: "Noenoe",
    image: "/noenoe.png",
    tagline: "Eco-Gamification Meta Quest ♻️🏆",
    description: "A lightweight, hyper-modern React framework project that gamifies consumer recycling loops. Turns boring ecological chores into a competitive score-based playground.",
    features: [
      "Image-ready item dispatch module optimized for logging and tracking everyday recyclables",
      "Sleek user matrix complete with progress feedback gauges and unlocked badge collections",
      "High-end fluid transition trees powered natively through React and Framer Motion layouts",
      "Competitive streak algorithms calculating multi-day active user milestones to reinforce daily habits"
    ]
  },
  ecofy: {
    title: "Ecofy",
    image: "/ecofy.png",
    tagline: "The First Magic Spell 🌱⚡",
    description: "The absolute first deployment of my software engineering path. A gamified recycling tracker designed to push environmental responsibility directly onto competitive digital scoreboards.",
    features: [
      "Camera-linked image upload pipeline tracking individual waste items",
      "Visual achievement progress milestones reflecting real-time token accumulation",
      "Global leaderboard matrices displaying elite community rank and tier systems",
      "Interactive coordinate map overlays plotting immediate waste management centers"
    ]
  },
  clothcrew: {
    title: "ClothCrew",
    image: "/clothcrew.png",
    tagline: "The Ultimate Anti-Chore Strategy 🧺🧸",
    description: "A joke concept that turned into a functional web solution. Built exclusively for those who find laundry to be an existential threat to their free time and want on-demand service under a predictable pricing structure.",
    features: [
      "Frictionless premium subscription selection system—pick your tier and never fold a t-shirt manually again"
    ]
  },
  focus: {
    title: "Focus On Today",
    image: "/fot.png",
    tagline: "Minimalist Productivity Ritual 🎯🐾",
    description: "A straightforward, no-nonsense daily objective log engineered to suppress short-term memory leaks and keep your highest-priority scripts tracking smoothly.",
    features: [
      "Rigid task indexer that saves you from forgetting the critical items you planned to ship before midnight"
    ]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = dummyProjects[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F5F2EB] text-[#3D2645] flex flex-col items-center justify-center space-y-4 font-['Fredoka',sans-serif]">
        <p className="text-xl font-black text-[#FB6B90]">Error 404: Spell Lost in the Forest 🌲🔮</p>
        <Link to="/" className="text-sm font-bold bg-white px-5 py-2.5 rounded-2xl border-4 border-[#D0BCD5] shadow-[0_4px_0px_0px_#D0BCD5] active:translate-y-0.5 active:shadow-none transition-all">
          Escape Back to Base
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#3D2645] py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden font-['Fredoka',sans-serif]">
      
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8DFF5]/70 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FCE1E4]/60 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        
        <Link 
          to="/" 
          className="group inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wide text-[#5E4B66] hover:text-[#FB6B90] transition-colors duration-200"
        >
          <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" /> 
          Back to Terminal Base
        </Link>

        <div className="space-y-2">
          <div className="text-xs md:text-sm font-bold text-[#FB6B90] uppercase tracking-wide flex items-center gap-1.5 bg-white border-2 border-dashed border-[#D0BCD5] w-max px-3 py-1 rounded-xl shadow-sm transform -rotate-1">
            <FaStar className="text-[#B491C8] text-[10px]" /> Project Archive Lore
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#3D2645] via-[#5E4B66] to-[#FB6B90] filter drop-shadow-[0_2px_0px_rgba(208,188,213,0.3)]">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl font-bold text-[#6C5B7B] italic pt-1">
            {project.tagline}
          </p>
        </div>

        <div className="relative bg-white border-4 border-[#D0BCD5] p-3 rounded-[40px] shadow-[0_15px_0px_0px_#D0BCD5] transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full max-h-[450px] object-cover rounded-[28px]" 
          />
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-black uppercase tracking-wide text-[#FB6B90] flex items-center gap-1.5">
            ✦ Overview
          </h3>
          <p className="text-lg text-[#5E4B66] font-medium leading-relaxed bg-white/40 border-2 border-dashed border-[#D0BCD5]/60 p-6 rounded-[24px]">
            {project.description}
          </p>
        </div>

        <div className="space-y-6 pt-6 border-t-2 border-dashed border-[#D0BCD5]/40">
          <h4 className="text-xl font-black uppercase tracking-wide text-[#FB6B90] flex items-center gap-1.5">
            ✦ Magical Specs & Systems
          </h4>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.features.map((feature, i) => (
              <li 
                key={i} 
                className="flex items-start gap-3 bg-white border-4 border-[#D0BCD5] p-5 rounded-[24px] shadow-[0_5px_0px_0px_#D0BCD5] hover:shadow-[0_8px_0px_0px_#D0BCD5] hover:-translate-y-0.5 transition-all duration-200"
              >
                <HiSparkles className="text-[#B491C8] text-sm mt-1 flex-shrink-0 animate-pulse" />
                <span className="text-sm md:text-base text-[#5E4B66] font-bold leading-normal">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
