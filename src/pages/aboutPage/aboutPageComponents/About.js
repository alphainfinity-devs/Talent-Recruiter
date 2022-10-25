import React from "react";

const About = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-5">
        <div className="flex items-center justify-center">
          <img
            src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/about/img-about2.png"
            alt="hero banner"
            className="shrink-0 w-full md:h-[70%]"
          />
        </div>

        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary text-center md:text-start">
              About
            </h2>
            <h3 className="text-3xl py-3 text-accent text-center md:text-start">
              We create unique experiences
            </h3>
            <p className="pb-4 text-accent">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less. The point of using Lorem Ipsum is that it has a
              more-or-less.
            </p>
            <button className="btn rounded-none bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary hover:border-primary">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
