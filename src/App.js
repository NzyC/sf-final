import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Image from "./assets/1687884708073.jpg";

function App() {
  return (
    <Router>
      <div
        className="bg-[#d3d3d3] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#023020]/80"
      >
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>

        {/* Projects */}
        <section id="projects" className="snap-start">
          <Projects />
        </section>

        {/* Contact Me */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>

        <a href="#hero">
          <footer className="sticky bottom-10 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <img
                src={Image}
                alt=""
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
          </footer>
        </a>
      </div>
    </Router>
  );
}

export default App;
