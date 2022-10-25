import React from "react";
import blogBanner from "../../../assets/images/blogBanner.webp";

const ProfileBanner = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="grid lg:grid-cols-2 justify-center items-center px-5 gap-10 container mx-auto">
        {/*...........blog banner info data start....... */}
        <div className="flex justify-center items-center">
          <div>
            <p className="text-base md:text-xl lg:text-2xl font-bold text-primary mb-1 md:mb-3">
              Most Popular Blogs
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-accent mb-3 md:mb-5">
              Our expert job research team wrote the blog. Those will help you
              to get your desired job.
            </h1>
            <p className="text-base text-neutral mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              tempore porro reiciendis? Qui obcaecati assumenda earum
              reprehenderit facere.
            </p>
          </div>
        </div>
        {/*.........blog banner info data end..............*/}

        {/*............blog banner image start.........*/}
        <div className="flex justify-start items-center sm:mb-5 ">
          <img
            src={blogBanner}
            alt="hero banner"
            className="w-full rounded-md h-[300px]"
          />
        </div>
        {/*........blog banner image end..........*/}
      </div>
    </section>
  );
};

export default ProfileBanner;
