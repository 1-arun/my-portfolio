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
    href: "https://drive.google.com/file/d/1sJDE7nieX7Gka2-15P0eJwXy_6m4nMg5/view?usp=drivesdk",
    icon: Icon.navIcon.Download,
  },
];

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-black dark:text-white text-3xl font-bold mb-4">
        Welcome to My Portfolio{" "}
      </h1>
      <p className="text-xl text-gray-700 dark:text-[#a3a3a3] mb-6  text-center ">
        Crafting digital experience with code and creativity Tech Enthusiast
        turned Software Enginner. I love building things and helping people.
        Very active on X(twitter).{" "}
      </p>
      <div className="flex flex-col justify-center items-center ">
        <div className=" flex gap-8 mb-6 justify-center items-center">
          <p className="p-2 bg-white text-black flex rounded-md hover:bg-slate-300">
            View Projects{" "}
            <span>{<Icon.navIcon.ArrowRight className="ml-2 p-1" />}</span>
          </p>
          <p className="text-white dark:text-white  bg-black p-2 border border-gray-300 dark:border-zinc-900 rounded-md hover:bg-zinc-900">
            Contact Me
          </p>
        </div>
        <ul className="flex  justify-center items-center gap-12 ">
          {MediaIcon.map(({ href, icon }, index) => {
            const IconComponent = icon;
            return (
              <li key={index} className="text-gray-600 dark:text-[#878787]  ">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "items-center gap-2 hover:text-cyan-400 transition"
                  }
                >
                  <IconComponent
                    className=" transition-transform duration-300 ease-in-out group-hover:rotate-[360deg]"
                    sx={{ fontSize: 17 }} // For MUI
                    size={17} // For Lucide
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
