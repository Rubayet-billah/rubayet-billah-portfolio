/* eslint-disable react/no-unescaped-entities */
import Typewriter from "typewriter-effect";
import BannerSwipper from "./BannerSwipper";

const Banner = () => {
  return (
    <section className="grid lg:grid-cols-2 xl:gap-x-48 place-items-center lg:mt-8 md:min-h-[60vh] uppercase">
      <div className="mb-5 leading-8 lg:mb-0 lg:leading-6">
        <h1 className="text-2xl lg:text-4xl xl:text-6xl lg:mb-4">
          Hi, I'm{" "}
          <span className="font-extrabold animate-text bg-gradient-to-r from-teal-500 via-white to-[#00deff] bg-clip-text text-transparent ">
            Rubayet
          </span>
        </h1>
        <h2 className="lg:text-2xl xl:text-4xl lg:mb-4">
          A software developer and good at
        </h2>
        <h1 className="font-bold text-3xl lg:text-5xl xl:text-7xl animate-text bg-gradient-to-r from-teal-500 via-white to-[#00deff] bg-clip-text text-transparent">
          <Typewriter
            options={{
              skipAddStyles: true,
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                "React",
                "Javascript",
                "HTML",
                "CSS",
                "Node",
                "MongoDb",
              ],
            }}
          />
        </h1>
      </div>
      <div>
        <BannerSwipper />
      </div>
    </section>
  );
};

export default Banner;
