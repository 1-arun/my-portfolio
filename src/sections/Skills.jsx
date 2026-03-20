import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Framer",
  "Next.js",
  "Tailwind",
  "Bootstrap",
  "Git",
  "Github",
  "Figma",
  "Material-UI",
  "Github Actions",
  "Vercel",
  "Linux",
];

export default function () {
  return (
    <section id="Skills" className="text-gray-700 dark:text-[#878787]  w-full">
      <div className="">
        <h2 className="text-black dark:text-white text-2xl leading-none tracking-tight font-normal ">
          Skills
        </h2>
        <div>
          <ul className="flex flex-wrap gap-2 mt-2 w-full">
            {skills.map((item, index) => (
              <li
                key={index}
                className="text-black dark:text-black bg-white rounded-md px-4"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
