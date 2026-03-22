import siteConfig from "../config/site.config";
import OnlineStatus from "../components/common/OnlineStatus";

const Hero = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <p className="text-4xl sm:text-5xl md:text-6xl font-medium text-black dark:text-white tracking-tight leading-none text-center">
        {siteConfig.name}
      </p>

      <div className="flex  items-center justify-center flex-wrap">
        <p className="text-base sm:text-lg md:text-xl font-normal text-gray-700 dark:text-gray-300 tracking-tight">
          {siteConfig.title}
        </p>
        <OnlineStatus isOnline={siteConfig.online} />
      </div>
    </div>
  );
};

export default Hero;
