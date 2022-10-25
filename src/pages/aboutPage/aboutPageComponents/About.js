import React from "react";

const About = () => {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-5">
        <div className="flex justify-start items-center sm:mb-5 ">
          <img
            src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/about/img-about2.png"
            alt="hero banner"
            className="w-full rounded-md h-[330px]"
          />
        </div>
        {/*........blog banner image end..........*/}

        <div className="flex justify-center items-center">
          <div>
            <p className="text-base md:text-xl lg:text-2xl font-bold text-primary mb-1 md:mb-3">
              About Our Company
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-accent mb-3 md:mb-5">
              Our expert job research team will help you to find a wonderful
              job. We create unique experiences.
            </h1>
            <p className="pb-4 text-accent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
