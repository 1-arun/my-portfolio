import ParticleBackground from "./components/particle/ParticleBackground";
import Hero from "./sections/Hero";
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from "./components/common/ThemeContext";
import ThemeToggle from "./components/common/ThemeToggle";
import Home from "./sections/Home";
import { useState } from "react";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experiences from "./sections/Experiences";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
        {/* Particle background behind everything */}
        <div className=" inset-0  fixed top-0 left-0 w-full h-full -z-10">
          <ParticleBackground />
        </div>

        {/* Theme toggle */}
        <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-10">
          <ThemeToggle />
        </div>

        {/* Main content layout */}
        <div className="w-full px-3 sm:px-4 md:p-0 max-w-4xl mx-auto flex flex-col items-center mt-16 sm:mt-20 md:mt-24">
          {/* Title and name section */}
          <Hero />

          {/* Navbar */}
          <div className="w-full px-2 sm:px-0">
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
          {/* Content area under navbar (can be routing or sections) */}
          <div className="w-full px-2 sm:px-0 ">
            <main className="mt-4 sm:mt-6 mb-4 backdrop-blur-sm border border-gray-300 dark:bg-zinc-950 dark:border-zinc-900 rounded-lg p-4 sm:p-6">
              {activeSection === "home" && <Home />}
              {activeSection === "about" && <About />}
              {activeSection === "skills" && <Skills />}
              {activeSection === "experience" && <Experiences />}
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
