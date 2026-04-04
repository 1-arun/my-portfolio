import { Icon } from "../assets/index";

const MediaIcon = [
  { href: "https://github.com/1-arun", icon: Icon.navIcon.Github },
  {
    href: "https://www.linkedin.com/in/codeswitharun/",
    icon: Icon.navIcon.LinkedIn,
  },
  { href: "mailto:codeswitharun@gmail.com", icon: Icon.navIcon.Email },
  { href: "https://x.com/1Arun_", icon: Icon.socialIcons.Twitter },
  {
    href: "/resume/Arun_Frontend_Resume.pdf",
    icon: Icon.navIcon.Download,
    download: true,
  },
];

const Home = ({ setActiveSection }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-black dark:text-white text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-5 text-center tracking-tight leading-tight">
        Welcome to My Portfolio{" "}
      </h1>
      <p className="text-sm sm:text-base md:text-lg font-normal text-gray-700 dark:text-[#a3a3a3] mb-7 text-center px-2 sm:px-0 leading-relaxed">
        Crafting digital experience with code and creativity Tech Enthusiast
        turned Software Enginner. I love building things and helping people.
        Very active on X(twitter).{" "}
      </p>
      <div className="flex flex-col justify-center items-center w-full px-2 sm:px-0">
        <div className="mb-6 flex w-full max-w-sm flex-row items-center justify-between gap-3 sm:max-w-none sm:justify-center sm:gap-6 md:gap-8">
          <button
            type="button"
            onClick={() => setActiveSection("project")}
            className="flex items-center rounded-md bg-white p-2 text-sm text-black transition-colors hover:bg-gray-100 sm:text-base"
          >
            View Projects{" "}
            <span>{<Icon.navIcon.ArrowRight className="ml-2 p-1" />}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("contact")}
            className="rounded-md border border-gray-300 bg-black p-2 text-sm text-white hover:bg-zinc-900 dark:border-zinc-900 dark:text-white sm:text-base"
          >
            Contact Me
          </button>
        </div>
        <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 ">
          {MediaIcon.map(({ href, icon, download }, index) => {
            const IconComponent = icon;
            return (
              <li key={index} className="text-gray-600 dark:text-[#878787]">
                <a
                  href={href}
                  {...(download
                    ? { download: true }
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group inline-flex items-center justify-center rounded-md p-2 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-zinc-800/60"
                >
                  <IconComponent
                    className="transition-transform duration-300 ease-out group-hover:rotate-12"
                    sx={{ fontSize: 17 }}
                    size={17}
                    strokeWidth={1.8}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
