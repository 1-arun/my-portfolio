import React from "react";
import SectionTitle from "../components/layout/SectionTitle";

const About = () => {
  const skills = [
    "Frontend Development",
    "Team Collaboration",
    "Backend (Learning)",
    "UI/UX",
    "Stakeholder Communication",
  ];

  const stats = [
    { number: "2+", label: "Years professional exp." },
    { number: "Full", label: "Stack in progress" },
    { number: "MVP", label: "Mindset & delivery" },
  ];

  return (
    <section id="about" className="w-full">
      <SectionTitle title="About Me" subtitle="GET TO KNOW ME BETTER" />

      <div className="mt-6">
        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light">
          I am a dedicated recent graduate with{" "}
          <span className="font-semibold text-black dark:text-white">
            2 years of professional frontend experience
          </span>
          , currently expanding into backend development. I collaborate with
          teams and stakeholders to deliver{" "}
          <span className="font-semibold text-black dark:text-white">
            innovative, user-focused solutions
          </span>
          . Passionate about crafting engaging user interfaces — I am actively
          seeking opportunities to leverage my frontend expertise in impactful
          projects.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-0.5 sm:px-3 sm:py-1 border border-gray-400 dark:border-gray-600 rounded-full text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
              {stat.number}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 ">
        <h2 className="text-black dark:text-white text-xl sm:text-2xl font-medium tracking-tight">
          Education
        </h2>
      </div>

      <div className="bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 p-4 sm:p-6 mt-4 rounded-md">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0">
          <div>
            <h3 className="text-base sm:text-lg text-black dark:text-white font-semibold">
              B.Sc. Computer Science
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
              Sanpada College, University of Mumbai · 2024
            </p>
          </div>
          <span className="px-2 py-0.5 sm:px-3 sm:py-1 border border-green-500 text-green-500 rounded-full text-xs whitespace-nowrap font-medium">
            Degree
          </span>
        </div>
      </div>

      <div className="bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 p-4 sm:p-6 mt-4 rounded-md mb-2">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0">
          <div>
            <h3 className="dark:text-white text-black text-base sm:text-lg font-semibold">
              Self-Taught
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
              Frontend Development (done) · Backend Development (ongoing)
            </p>
          </div>
          <span className="px-2 py-0.5 sm:px-3 sm:py-1 border border-gray-600 dark:border-gray-500 text-gray-600 dark:text-gray-400 rounded-full text-xs whitespace-nowrap font-medium">
            Continuous
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
