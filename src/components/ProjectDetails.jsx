// src/components/ProjectDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const dummyProjects = {
  sahayak: {
    title: "Sahayak",
    image: "/src/assets/projects/sahayak.png",
    description: "Sahayak is a safe and supportive space designed to help individuals struggling with mental health issues. It focuses on community-driven healing, daily mood tracking, and access to professional resources.",
    features: [
      "Forum with editable, anonymous posts and emoji reactions",
     "Mood Tracker with calendar view and weekly mood report",
       "Tagged posts (Anxiety, Motivation, ADHD, etc.)",
      "Professional Help Finder with filters (location, language, cost)",
      "Comment system and community engagement tools"
    ]
  },
  miirupan: {
    title: "Miirupan",
    image: "/src/assets/projects/miirupan.png",
    description: "Miirupan is a creative platform for developers, designers, and writers to collaborate, pitch projects, and build together. Inspired by the SuperHello design, it blends community interaction with practical functionality.",
    features: [
     " Post and discover freelance projects",

      "Community forum with comment and edit/delete support",
      
      "Auth system with user dashboard and editable profiles",
      
      "View and manage your own project and community posts",
      
      "Modal-based project details and localStorage integration",
    ]
  },
  "noenoe": {
    title: "Noenoe",
    image: "/src/assets/projects/noenoe.png",
    description: "NoeNoe is a minimal, frontend-only React project focused on promoting recycling through a fun and modern user interface. It blends purposeful design with gamified elements to motivate users to recycle more.",
    features: [
     "Upload section for recyclable items",

"Dashboard with progress bars and badges",

"Interactive UI built with React and Framer Motion",

"Visual streaks and user reward system",
    ]
  },
  "ecofy": {
    title: "Ecofy",
    image: "/src/assets/projects/ecofy.png",
    description: "Gamified app where users upload recyclable items and earn badges or rewards, promoting sustainability in a fun way.",
    features: [
      "Upload item with photo",
      "Track badge progress",
      "Leaderboard + rewards",
      "Map integration"
    ]
  },
  "clothcrew": {
    title: "ClothCrew",
    image: "/src/assets/projects/clothcrew.png",
    description: "Laundry website for those who think that it is a serious chore and are lazy and can't do it by themselves so we as cloth crew take your clothes and wash them for a cretain monthly pricing",
    features: [
      "Select our plan then enjoy our services "
    ]
  },
  "focus": {
    title: "Focus On Today",
    image: "/src/assets/projects/fot.png",
    description: "To do list :)",
    features: [
      "Keeps track of your important stuff you need to do"
    ]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = dummyProjects[id];

  if (!project) return <p className="text-center py-20">Project not found </p>;

  return (
    <div className="py-20 px-6">
      <Link to="/" className="text-white hover:underline mb-4 inline-block">&larr; Back to home</Link>
      <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
      <img src={project.image} alt={project.title} className="rounded-md mb-6" />
      <p className="mb-4">{project.description}</p>
      <h4 className="text-xl font-semibold mb-2">Features:</h4>
      <ul className="list-disc ml-6 text-gray-700">
        {project.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
    </div>
  );
};

export default ProjectDetails;
