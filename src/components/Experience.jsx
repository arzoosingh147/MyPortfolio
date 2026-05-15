import React from "react";
import { FaLinkedinIn, FaCloud } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

import experienceMeme from "../assets/experience-meme.jpg"; 

const hackathons = [
  {
    name: "Hack the League Hackathon",
    image: "hack-the-league.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_hacktheleague-hackathon-jecrcuniversity-activity-7209016958720069632-zH0k",
    description: "My team and I mixed up Ainrzy—a live, event-driven blockchain setup built to keep decentralized AI apps bouncing smoothly. We hid all the messy hardware stuff away, making open-source blocks completely plug-and-play. Juggling decentralized math, live data, and AI felt like pure wizardry! 🪄✨",
  },
  {
    name: "Smart India Hackathon",
    image: "sih.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_sih-hackathon-teamwork-activity-7243969362754203650-5aR5",
    description: "We pieced together Optimuxx—a friendly but super strong guardian shield system to block scary DDoS web storms. We linked AWS shields and cloud helpers together so the app would never trip. With live monitoring dashboards watching over everything, it stops internet monsters instantly while older sites are still waking up. 🛡️🦄",
  },
  {
    name: "Innov8 Hackathon",
    image: "innov8.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_hackathon-innovation-teamwork-activity-7253842317567016962-cEaJ",
    description: "Crafted Lego UI—a cozy workspace where developers snap together layouts using friendly code pieces (literally like digital toys). We even dropped a fun mode where students can earn gold coins for sharing their code blocks. Making frontend development modular, cute, and rewarding? Absolute chief vibe officer moment. 🧩🎨",
  },
  {
    name: "National Healthcare Hackathon",
    image: "healthcare.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_nationalhealthcarehackathon25-healthcareinnovation-activity-7297495993346928641-mvH-",
    description: "Fixed up communication gaps in busy medical spaces by sketching MedEase—a central, friendly digital ledger for keeping hospital info safe. We funneled scattered patient feeds into one tidy, bright dashboard. This helped doctors calculate tricky steps error-free and created a cozy, fast coordination network across clinics. 🏥✨",
  },
  {
    name: "Ace Hack Hackathon",
    image: "acehack.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_acehack4-hackathonexperience-techinnovation-activity-7313262078721433601-y-cQ",
    description: "Designed Shakti—a pocket-sized, blockchain-verified shield device that stops rogue radio signals and snooping bugs in their tracks. It fits inside a clean, cute little setup, offering live network safety reports and fixing tricky connection loops without needing large cloud servers. Complete tech autonomy! 📡🎀",
  },
  {
    name: "The Next Quest...",
    image: null,
    linkedin: "https://www.linkedin.com/in/arzoo-singh-4192b324a/",
    description: "Currently plotting my next adventure to find more hackathons to explore, hack, and deploy. Stay tuned, because the next spell is going to be completely magical! ⭐🧁",
  },
];

const clubs = [
  {
    title: "Co-Lead",
    subtitle: "Google Crowdsource JECRC",
    description: "Started out drawing cute graphics and worked my way up to running the main operations! Guided the inner team circles, managed recruitment pipelines, organized heavy-traffic community meetups, and kept our coding sprints bouncing along perfectly.",
  },
  {
    title: "Management Lead",
    subtitle: "HackerEarth JECRC",
    description: "Jumped from an event volunteer role to leading entire hackathon plans. Handled resource gathering, kept project tracking channels clear, assigned fun team squad tasks, and interviewed upcoming members during recruitment seasons.",
  },
  {
    title: "Core Team Member",
    subtitle: "Juverse",
    description: "Dual-wielding digital design paints and web files. I script clean frontend screens for the official platform while designing hyper-vibrant social posts and Web3 tutorial assets to spread cool tech awareness.",
  },
  {
    title: "Engineering Coordinator",
    subtitle: "JU Alumni Association",
    description: "Building happy link bridges with expert university grads. I organize friendly networking mixers, set up timeline slots for major panels, and direct fun video recaps representing our B.Tech crew.",
  },
  {
    title: "Web Dev Volunteer",
    subtitle: "GDSC JECRC",
    description: "Helped fresh students navigate the wide world of code. Fixed up broken script loops during live frontend classrooms and shared quick layout tips to help everyone get their first webpages floating.",
  },
];

const Experience = () => {
  return (
    <div className="bg-[#F5F2EB] text-[#3D2645] min-h-screen font-['Fredoka',sans-serif] relative overflow-hidden">
      
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E8DFF5]/70 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[#FCE1E4]/80 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-[#F3F0D7]/60 rounded-full blur-[100px] pointer-events-none" />

      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16 text-center relative z-10 max-w-5xl mx-auto">
        <div className="inline-block bg-[#E8DFF5] border-2 border-dashed border-[#D0BCD5] text-[#6C5B7B] text-xs font-bold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6 shadow-sm">
          ✦ Leveling Up My Magical Stats ✦
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-wide mb-6 leading-tight">
          My Experience <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#B491C8] via-[#FB6B90] to-[#FFB7B2] bg-clip-text text-transparent filter drop-shadow-[0_2px_0px_rgba(208,188,213,0.3)]">
            Playground
          </span>
        </h1>
        <p className="text-[#5E4B66] text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          From full-chaos 36-hour hackathon quests to coordinating cozy tech clubs, here is how I keep building my toolkit.
        </p>
        
        <div className="mt-10 relative inline-block group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFB7B2] to-[#E8DFF5] rounded-[32px] blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
          <div className="relative max-w-[260px] max-h-[260px] bg-white border-4 border-[#D0BCD5] p-2 rounded-[32px] shadow-[0_12px_40px_rgba(208,188,213,0.4)] transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 overflow-hidden flex items-center justify-center">
            <img
              src={experienceMeme} 
              alt="Current soft dev mood"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-3 tracking-wide">
          <HiSparkles className="text-[#FB6B90] text-2xl animate-pulse" /> 
          <span>Hackathon Adventures</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hack, idx) => (
            <div 
              key={idx} 
              className="group bg-white border-4 border-[#D0BCD5] rounded-[32px] overflow-hidden flex flex-col justify-between shadow-[0_8px_0px_0px_#D0BCD5] hover:shadow-[0_16px_0px_0px_#D0BCD5] hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                <div className="h-44 bg-[#F5F2EB] border-b-4 border-[#D0BCD5] relative flex items-center justify-center overflow-hidden">
                  {hack.image ? (
                    <img 
                      src={hack.image} 
                      alt={hack.name} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" 
                    />
                  ) : (
                    <span className="text-5xl font-black text-[#D0BCD5]/40 tracking-widest uppercase select-none animate-pulse">✨ WAGMI ✨</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-black tracking-wide text-[#3D2645] group-hover:text-[#FB6B90] transition-colors">
                    {hack.name || "Secret Quest"}
                  </h3>
                  <p className="text-sm text-[#5E4B66] font-medium leading-relaxed">
                    {hack.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a 
                  href={hack.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 bg-[#E8DFF5]/60 hover:bg-[#E8DFF5] border-2 border-[#D0BCD5] text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-2xl text-[#3D2645] transition-all duration-200 w-full justify-center shadow-sm"
                >
                  <FaLinkedinIn className="text-sm text-[#FB6B90]" /> View Journey Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-black mb-12 flex items-center gap-3 tracking-wide">
          <FaCloud className="text-[#B491C8] text-2xl" /> 
          <span>Guilds & Leadership</span>
        </h2>

        <div className="space-y-6 max-w-4xl">
          {clubs.map((club, idx) => (
            <div 
              key={idx} 
              className="group bg-white border-4 border-[#D0BCD5] p-6 rounded-[28px] shadow-[0_6px_0px_0px_#D0BCD5] hover:shadow-[0_12px_0px_0px_#D0BCD5] hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FCE1E4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl font-black tracking-wide text-[#3D2645] group-hover:text-[#FB6B90] transition-colors">
                  {club.title}
                </h3>
                <span className="text-xs font-bold px-3 py-1 bg-[#F3F0D7] border-2 border-dashed border-[#D0BCD5] text-[#6C5B7B] rounded-xl w-max shadow-sm">
                  {club.subtitle}
                </span>
              </div>
              <p className="text-sm md:text-base text-[#5E4B66] font-medium leading-relaxed">
                {club.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Experience;
