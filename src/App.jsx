// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceCTA from "./components/ExperienceCTA";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import Experience from './components/Experience';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="px-6 md:px-12 lg:px-24 py-4 bg-[#E4C896]">
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ExperienceCTA />
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
