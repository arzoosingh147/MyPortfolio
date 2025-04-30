import React from "react";

const hackathons = [
  {
    name: "Hack the League Hackathon",
    image: "/src/assets/hack-the-league.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_hacktheleague-hackathon-jecrcuniversity-activity-7209016958720069632-zH0k?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD2fyZUBTCPoL3PnZtYH6iHdy0XxpX3Dpl4",
    description: "At Hack the League, my team and I built Ainrzy — a real-time, event-driven blockchain platform focused on empowering AI-based decentralized applications. Ainrzy transforms static open-source code into dynamic, live services, offering a scalable infrastructure that supports innovation in the AI and Web3 space.One of the key innovations was how the platform separated the roles of developers and resource providers, allowing open-source projects to run seamlessly without depending on specific hardware or cloud setups. This abstraction created a powerful ecosystem where ideas could thrive, regardless of the underlying infrastructure.The hackathon was a phenomenal experience that pushed our limits, especially in combining blockchain, real-time systems, and AI — and reinforced my passion for building futuristic, impactful tech.",
  },
  {
    name: "Smart India Hackathon",
    image: "/src/assets/sih.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_sih-hackathon-teamwork-activity-7243969362754203650-5aR5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD2fyZUBTCPoL3PnZtYH6iHdy0XxpX3Dpl4",
    description: "At the Smart India Hackathon, my team and I built Optimuxx, a proactive, real-time DDoS protection platform designed to maintain seamless service during cyberattacks. We combined AWS Shield, Cloudflare, and WAFs to create a layered defense system with no single point of failure. Using global load balancers and CDNs, we ensured efficient traffic distribution, while real-time monitoring through Datadog and CloudWatch enabled instant threat detection. Optimuxx also featured auto-scaling infrastructure, allowing servers to adjust dynamically during attacks — a major edge over traditional, reactive solutions.",
  },
  {
    name: "Innov8 Hackathon",
    image: "/src/assets/innov8.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_hackathon-innovation-teamwork-activity-7253842317567016962-cEaJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD2fyZUBTCPoL3PnZtYH6iHdy0XxpX3Dpl4",
    description: "At the Innov8 Hackathon, my team and I created Lego UI, a platform designed to simplify UI and game development while helping students earn through code. We built a library of pre-built, reusable code blocks — like digital Lego pieces — that developers can mix and match in their projects, saving time and effort. To support student developers financially, we introduced a monetization model where contributors can earn by uploading their code. The platform also includes one-time code previews, a rating system, and a support feature for inquiries, making it both user-friendly and community-driven..",
  },
  {
    name: "National Healthcare Hackathon",
    image: "/src/assets/healthcare.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_nationalhealthcarehackathon25-healthcareinnovation-activity-7297495993346928641-mvH-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD2fyZUBTCPoL3PnZtYH6iHdy0XxpX3Dpl4",
    description: "At the National Healthcare Hackathon, we tackled the challenge of minimizing errors in drug dosage and medical procedures by building MedEase — an integrated hospital data management platform. Our solution centralized all patient-related information to enable real-time access for healthcare professionals, ensuring better communication, accurate dosage administration, and reduced chances of procedural errors. MedEase aimed to create a more efficient and error-free hospital environment through streamlined, tech-driven coordination.",
  },
  {
    name: "Ace Hack Hackathon",
    image: "/src/assets/acehack.jpeg",
    linkedin: "https://www.linkedin.com/posts/arzoo-singh-4192b324a_acehack4-hackathonexperience-techinnovation-activity-7313262078721433601-y-cQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2fyZUBTCPoL3PnZtYH6iHdy0XxpX3Dpl4",
    description: "At the Ace Hack Hackathon, my team and I developed Shakti, a portable, blockchain-powered cybersecurity system designed to combat WiFi jamming, unauthorized access, and real-time cyber threats. Unlike traditional centralized solutions, Shakti offers a decentralized and autonomous defense mechanism with live network monitoring, threat detection, and automatic attack mitigation — all packaged in a compact, easy-to-deploy setup. It’s a unique step toward making advanced cybersecurity accessible and mobile.",
  },
  {
    linkedin: "https://www.linkedin.com/in/arzoo-singh-4192b324a/",
    description: "Stay Tuned ~ Will go to more ;)",
  },
];

const clubs = [
  {
    title: "Co-Lead - Google Crowdsource JECRC",
    description: "I began my journey with Google Crowdsource as a Graphic Designer, where I created engaging designs for our events and social media. With time, dedication, and a deep interest in community building, I was promoted to Co-Lead of the club. In this role, I managed the core team, organized multiple impactful events, interviewed new members, and ensured smooth operations across the team. My experience here greatly strengthened my leadership, creative, and management skills.",
  },
  {
    title: "Management Lead - HackerEarth JECRC",
    description: "I joined HackerEarth JECRC as a Management Volunteer, where I contributed to organizing events and managing team coordination. Later, I was promoted to Management Lead, where I took on the responsibility of planning and executing event strategies, assigning tasks, and conducting interviews for new team members. Leading the team helped me grow into a more organized and confident leader.",
  },
  {
    title: "Core Team Member - Juverse",
    description: "At JUverse, I actively contribute in two areas — Design and Tech. As a designer, I create visually appealing social media posts, story content, and collaborate on fun and informative reels to promote Web3 awareness. I also contribute as part of the Technical Team, where we are currently developing JUverse’s official website, bringing both design and functionality together in a Web3-focused platform.",
  },
  {
    title: "Department of Engineering Coordinator - JU Alumni Association",
    description: "As the B.Tech Department Coordinator, I work closely with the Alumni Association to maintain connections with former students, plan alumni events, and help with content creation including event reels and social media posts. This role combines my interest in event coordination, storytelling, and relationship-building, all while representing my department with pride.",
  },
  {
    title: "Web Dev Volunteer - GDSC JECRC",
    description: "As a Web Development Volunteer with Google Developer Student Clubs (GDSC), I contributed to organizing hands-on workshops focused on frontend development. I supported students during these sessions, shared best practices, and helped newcomers get comfortable with building on the web. It was a great opportunity to give back to the tech community and empower other learners.",
  },
];

const Experience = () => {
  return (
    <div className="bg-[#E4C896] text-gray-900 font-monkey">
      {/* Hero Section */}
      <section className="bg-[#E4C896] px-6 md:px-12 lg:px-24 py-16 mt-24 text-center">
        <h1 className="text-5xl font-bold mb-4">My Experience Playground</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-800">
          From battling bugs in hackathons to brainstorming around club meetings,
          here's how I’ve been levelling up
        </p>
        <img
          src="/src/assets/experience-meme.png"
          alt="funny experience meme"
          className="mx-auto mt-8 w-[300px] rounded-xl hover:scale-105 transition-transform"
        />
      </section>

      {/* Hackathons Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">Hackathons I’ve been to</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hackathons.map((hack, index) => (
            <div key={index} className="border-4 border-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
              <img src={hack.image} alt={hack.name} className="w-full h-48 object-cover rounded-md border-4 border-white mb-4" />
              <h3 className="text-xl text-white font-bold mb-2">{hack.name}</h3>
              <p className="text-gray-700 mb-4">{hack.description}</p>
              <a href={hack.linkedin} target="_blank" rel="noopener noreferrer" className="text-white underline">
                View LinkedIn Post
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Clubs Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 mx-auto max-w-3xl bg-[#E4C896]">
        <h2 className="text-4xl font-bold mb-10 text-center">Club Leadership & Learnings</h2>
        <div className="space-y-8">
          {clubs.map((club, index) => (
            <div key={index} className="border-4 border-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-2 text-white ">{club.title}</h3>
              <p className="text-gray-700">{club.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
