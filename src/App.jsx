import ParticleBackground from "./components/particle/ParticleBackground";
import Hero from "./sections/Hero";
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from "./components/common/ThemeContext";
import Home from "./sections/Home";
import { useState } from "react";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";







export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <ThemeProvider>
      <div className="relativ min-h-screen flex flex-col items-center gap-20 md:gap-24">
        {/* Particle background behind everything */}
        <div className=" inset-0  fixed top-0 left-0 w-full h-full -z-10">
          <ParticleBackground />
        </div>

        {/* Theme toggle */}
        <div className="fixed top-4 right-4 z-10">
          {/* ThemeToggle component here */}
        </div>

        {/* Main content layout */}
        <div className="w-full p-[10px] md:p-0  max-w-4xl mx-aut flex flex-col items-center mt-24">
          {/* Title and name section */}
          <Hero />

          {/* Navbar */}
          <div className="w-full">
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
          {/* Content area under navbar (can be routing or sections) */}
          <div className="w-full ">
          
            <main className="mt-6 mb-4  backdrop-blur-sm border border-gray-300 dark:bg-zinc-950 dark:border-zinc-900 rounded-lg p-6">
              {activeSection === "home" && (<Home />)}
              {activeSection === "about" && (<About /> )}
              {activeSection === "skills" && (<Skills />)}
              {activeSection === "experience" && ( <Experiences />)}
              {activeSection === "project" && (
                <div>Projects Section - Create Project.jsx</div>
              )}
              {activeSection === "contact" && (
                <div>Contact Section - Create Contact.jsx</div>
              )}
            </main>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
