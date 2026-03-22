import SectionTitle from "../components/layout/SectionTitle";
import experienceData from "../config/experience.config";

export default function Experiences() {
  return (
    <section className="py-12">
      <SectionTitle
        title="Professional Experience"
        subtitle="My journey in the tech industry"
      />

      <div className="mt-8 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/70 p-5 sm:p-6">
        <div className="relative">
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-gray-300 dark:bg-zinc-700" />

          <div className="space-y-8">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative pl-10 sm:pl-14">
                <div className="absolute left-0 top-1.5 h-10 w-10 rounded-full border border-gray-300 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900 flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.company}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-green-500 dark:text-green-400">
                    {exp.position}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {exp.date}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
