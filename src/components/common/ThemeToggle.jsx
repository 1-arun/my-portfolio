import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Monitor, Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const options = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" },
  ];

  const currentIcon = {
    light: <Sun size={18} strokeWidth={2} />,
    dark: <Moon size={18} strokeWidth={2} />,
    system: <Monitor size={18} strokeWidth={2} />,
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center h-10 w-10 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-zinc-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors"
        aria-label="Toggle theme menu"
      >
        {currentIcon[theme]}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 sm:w-40 bg-white dark:bg-black border border-gray-300 dark:border-zinc-800 shadow-xl rounded-xl z-50 p-1 sm:p-2">
          <ul className="space-y-1">
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  onClick={() => {
                    setTheme(opt.value);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 ${
                    theme === opt.value ? "bg-gray-100 dark:bg-zinc-900" : ""
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
