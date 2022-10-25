import React from "react";

const ProfileBanner = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="grid lg:grid-cols-2 justify-center items-center px-5 gap-10 container mx-auto">
        {/*............prifile section image start.........*/}
        <div className="flex justify-start items-center sm:mb-5">
          <img
            src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage5/img-profile.png"
            alt="hero banner"
            className="w-full rounded-md"
          />
        </div>
        {/*........profile section image end..........*/}

        {/*...........profile section info data start....... */}
        <div className="flex justify-center items-center">
          <div>
            <p className="text-base md:text-xl lg:text-2xl font-bold text-primary mb-1 md:mb-3">
              Create Profile
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-accent mb-3 md:mb-5">
              Create Your Personal Account Profile
            </h1>
            <p className="text-base text-neutral mb-5">
              Work Profile is a personality assessment that measures an
              individual's work personality through their workplace traits,
              social and emotional traits; as well as the values and aspirations
              that drive them forward.
            </p>
            <button className="btn rounded-none px-4 md:px-7 duration-700 py-3 bg-primary hover:bg-transparent text-white border-primary hover:border-primary hover:text-primary font-bold border-2 hover:border-2">
              Create Profile
            </button>
          </div>
        </div>
        {/*.........profile section info data end..............*/}
      </div>
    </section>
  );
};

export default ProfileBanner;
