import "./App.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <Router>
      
      <div
        className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#98F5E1]/80"
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

        <Link to="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <img
                src="https://scontent.fsyd4-1.fna.fbcdn.net/v/t39.30808-6/356237274_933867371008020_8800993247702453360_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4nnMxDTWdqMAX9hKphL&_nc_ht=scontent.fsyd4-1.fna&oh=00_AfApFxCpTPpBuP08XmoIFXx7zLWrpdw7u__BpzjVg3C4Xw&oe=649E3ACE"
                alt=""
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
          </footer>
        </Link>
      </div>
    </Router>
  );
}

export default App;
