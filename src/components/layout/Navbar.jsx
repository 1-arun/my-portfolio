import { Icon } from "../../assets/index";

export default function Navbar({ activeSection, setActiveSection }) {
  const navLinks = [
    { id: "home", label: "Home", icon: Icon.navIcon.Home },
    { id: "about", label: "About", icon: Icon.navIcon.About },
    { id: "skills", label: "Skills", icon: Icon.navIcon.Skills },
    { id: "experience", label: "Experience", icon: Icon.navIcon.Experience },
    { id: "project", label: "Project", icon: Icon.navIcon.Projects },
    { id: "contact", label: "Contact", icon: Icon.navIcon.Contact },
  ];
  return (
    <nav className="flex justify-center items-center h-10 sm:h-11 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl mt-6 sm:mt-8 w-full overflow-x-auto shadow-sm dark:shadow-md">
      <ul className="flex w-full justify-between items-center gap-1 sm:gap-2 md:gap-3 px-2 whitespace-nowrap min-w-max sm:min-w-0">
        {navLinks.map(({ id, label, icon }, index) => {
          const IconComponent = icon;
          const isActive = activeSection === id;
          {
            /* check if active */
          }
          return (
            <li className="text-[#878787]" key={index}>
              <button
                onClick={() => setActiveSection(id)}
                className={`group flex items-center gap-2 rounded-md px-3 py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-100 text-gray-900 dark:bg-black dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
                }`}
              >
                <IconComponent
                  className="transition-transform duration-300 ease-in-out group-hover:rotate-[360deg]"
                  size={16}
                  strokeWidth={2}
                />
                {/* Show label only on small+ screens */}
                <span className="hidden sm:inline">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
