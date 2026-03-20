import { Icon } from "../../assets/index";


export default function Navbar({activeSection, setActiveSection}) {
  const navLinks = [
    { id: "home", label: "Home", icon: Icon.navIcon.Home },      
    { id: "about", label: "About", icon: Icon.navIcon.About },
    { id: "skills", label: "Skills", icon: Icon.navIcon.Skills },
    { id: "experience", label: "Experience", icon: Icon.navIcon.Experience },
    { id: "project", label: "Project", icon: Icon.navIcon.Projects },
    { id: "contact", label: "Contact", icon: Icon.navIcon.Contact },
  ];
  return (
    <nav className="flex justify-center items-center h-10 bg-white  dark:bg-zinc-900 rounded-xl mt-8 ">
      <ul className="flex justify-center  items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20 ">
        {navLinks.map(({ id, label, icon }, index) => {
          const IconComponent = icon;
          const isActive = activeSection === id; {/* check if active */}
          return (
            <li className="text-[#878787]" key={index}>
              <button
                onClick={() => setActiveSection(id)} 
                className={`group flex items-center gap-2 transition ${
                  isActive
                    ? "text-cyan-400 " // Active state color
                    : "text-[#878787] hover:text-cyan-400" // Default and hover
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
