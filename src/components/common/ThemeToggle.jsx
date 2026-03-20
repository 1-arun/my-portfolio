import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { Icon } from "../../assets/index"; // adjust path if needed

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const Sun = Icon.navIcon.SunIcon;
  const Moon = Icon.navIcon.MoonIcon;

  const options = [
    {
      label: "Light",
      value: "light",
      icon: <Sun className="w-4 h-4 text-yellow-500" />,
    },
    {
      label: "Dark",
      value: "dark",
      icon: <Moon className="w-4 h-4 text-white" />,
    },
    {
      label: "System",
      value: "system",
      icon: <span className="text-gray-500">🖥️</span>,
    },
  ];

  const currentIcon = {
    light: (
      <Sun className="w-5 h-5 text-yellow-500" size={20} strokeWidth={1.5} />
    ),
    dark: <Moon className="w-5 h-5 text-white" size={20} strokeWidth={1.5} />,
    system: <span className="text-gray-500">🖥️</span>,
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        {currentIcon[theme]}
        <span className="text-sm capitalize font-medium">Theme</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 shadow-xl rounded-xl z-50 p-2">
          <ul className="space-y-1">
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  onClick={() => {
                    setTheme(opt.value);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    theme === opt.value ? "bg-gray-100 dark:bg-gray-700" : ""
                  }`}
                >
                  {opt.icon}
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
