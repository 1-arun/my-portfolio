import React from "react";

const About = () => {
  return (
    <section id="about" className="text-[#878787]  w-full">
      <div>
        <h2 className="text-2xl font-semibold leading-none tracking-tight text-white">About Me</h2>
        <p className="mt-2 text-sm text-muted-foreground">Get to know me better</p>
        <p className=" text-muted-foreground opacity-1 transform-none">
          I am a dedicated recent graduate with a year of experience in{" "}
          <span className="space-y-4 text-black  dark:text-white underline">fromtend development,</span> currently in
          the learning phase of both{" "}
          <span className="text-black  dark:text-white underline">backend development.</span>I have
          successfully <span className="text-black  dark:text-white underline">led project </span> from
          concept to MVP, managing teams and collaborating with stakeholders to
          deliver <span className="text-black  dark:text-white underline">innovative solutions.</span>{" "}
          Passionate about creating engaging user interfaces. I am actively
          seeking oppurtunities to leverage my frontend development expertise
          and project leadership experience in impactful projects.
        </p>
      </div>
      <div className="mt-6 ">
        <h2 className="text-white text-2xl font-bold">Education</h2>
      </div>
      <div className=" bg-black border-lg border-gray-300 p-6 mt-4 dark:border-zinc-900 border rounded-md">
        <h3 className="text-lg text-black dark:text-white font-semibold">Bachelor of Science (B.Sc.)</h3>
        <p className="text-white text-muted-foreground">Computer Science</p>
        <p className="text-sm text-muted-foreground">Univesity of Mumbai</p>
      </div>
      <div className="dark:bg-black border-lg border-gray-300 p-6 mt-4 dark:border-zinc-900 border rounded-md mb-2">
        <h3 className="dark:text-white text-black text-lg font-semibold">Self-taught</h3>
        <p text-muted-foreground>Frontend Developer</p>
      </div>
    </section>
  );
};

export default About;
