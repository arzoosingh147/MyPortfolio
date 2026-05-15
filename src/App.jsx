import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"; 
import ExperienceCTA from "./components/ExperienceCTA";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import Experience from './components/Experience';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F5F2EB] selection:bg-[#FCE1E4] selection:text-[#3D2645] transition-colors duration-300 antialiased">
        
        <Navbar />
        
        <main className="w-full">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact /> 
                <ExperienceCTA />
                <Footer />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
