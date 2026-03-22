export default function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-green-500"></div>
        <p className="text-green-500 text-xs sm:text-sm font-medium tracking-wide uppercase">
          {subtitle}
        </p>
      </div>
      <h1 className="text-black dark:text-white text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
        {title}
      </h1>
    </div>
  );
}
