
import siteConfig from '../config/site.config';
import OnlineStatus from '../components/common/OnlineStatus';

const Hero = () => {
  return (
        
        <div className=" flex justify-center items-center flex-col">
          <p className="text-6xl md:text-6xl font-medium  text-white tracking-tight">
            {siteConfig.name}
          </p>
          
          <div className="flex  items-center justify-center flex-wrap">
            <p className="text-2xl font-normal text-gray-400 ">
              {siteConfig.title}
            </p>
            <OnlineStatus isOnline={siteConfig.online} />
          </div>
        </div>
  );
};

export default Hero;
