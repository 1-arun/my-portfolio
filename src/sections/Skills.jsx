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

export default function Skills() {
  return (
    <section id="Skills" className="w-full py-12">
      <div className="rounded-xl border border-gray-200 bg-white/60 p-4 sm:p-5 md:p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/70">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100">
          Skills
        </h2>

        <ul className="mt-4 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {skills.map((item) => (
            <li
              key={item}
              className="skill-item rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
