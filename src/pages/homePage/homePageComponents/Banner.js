import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import SearchComponent from "./SearchComponent";

const Banner = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);
  return (
    <section id="banner" className="bg-[#d0ffce] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 container mx-auto px-5">
        {/*.......Banner info data start........*/}
        <div className="col-span-1 md:col-span-2">
          <div className="mb-7 md:mb-5">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-accent mb-3">
              Find Your Desire Job &
            </h1>
            {/* .....typing animation...... */}
            <TypeAnimation
              sequence={["Make a Better Life.", 1000, ""]}
              speed={75} // Must be in range between 1 and 99!
              wrapper="h2"
              repeat={Infinity}
              className="text-3xl sm:text-5xl md:text-6xl font-bold text-[green] mb-3 md:mb-5 lg:mb-8"
            />
            <p className="font-bold text-accent text-base md:text-xl">
              Search Over 1000 Jobs Today!
            </p>
          </div>
          <div>
            <SearchComponent />
          </div>
          <div className="flex flex-wrap justify-start gap-2 mt-5">
            <p className="text-sm md:text-xl font-bold">
              Trending Jobs Keywords:
            </p>
            <p className="bg-primary p-1 text-white cursor-pointer rounded-lg text-sm ">
              Web Designer
            </p>
            <p className="bg-primary p-1 text-white cursor-pointer rounded-lg text-sm ">
              Web Development
            </p>
            <p className="bg-primary p-1 text-white cursor-pointer rounded-lg text-sm ">
              Android Developer
            </p>
            <p className="bg-primary p-1 text-white cursor-pointer rounded-lg text-sm ">
              IOS Developer
            </p>
          </div>
        </div>
        {/*......Banner info data end.......*/}

        {/*......Banner image start........*/}
        <figure className="col-span-2 md:col-span-1 w-full">
          <img
            src="https://templates.envytheme.com/jubi/default/assets/images/faq-img.png"
            alt="banner"
            className="shrink-0"
          />
        </figure>
        {/*.......Banner image end........*/}
      </div>
    </section>
  );
};

export default Banner;
