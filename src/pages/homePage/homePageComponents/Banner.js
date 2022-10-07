import React from "react";

const Banner = () => {
  return (
    <section className="pt-16 pb-20">
      <div className="grid md:grid-cols-2 justify-center items-center gap-2 container mx-auto px-5">
        {/*.......Banner info data start........*/}
        <div className="flex justify-center items-center mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 uppercase">
              Find the job
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 uppercase md:mb-5 lg:mb-8">
              And Make You Dream
            </h1>
            <p className="font-samibold text-neutral mb-3 md:mb-5">
              Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
              condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
              porta sit amet. Suspendisse et sapien varius, pellentesque dui
              non.
            </p>

            <div className="flex gap-2 mb-5">
              <button className="px-4 md:px-7 py-3 bg-primary hover:bg-transparent text-white border-primary hover:border-primary hover:text-primary font-bold border-2 hover:border-2">
                Apply Now
              </button>
              <button className="px-4 py-3 bg-white hover:bg-primary text-primary border-primary hover:border-primary hover:text-white font-bold border-2 hover:border-2">
                Post a Job
              </button>
            </div>
          </div>
        </div>
        {/*......Banner info data end.......*/}

        {/*......Banner image start........*/}
        <figure>
          <img
            src="https://preview.uideck.com/items/thehunt/assets/img/intro.png"
            alt="hero banner"
            className="shrink-0"
          />
        </figure>
        {/*.......Banner image end........*/}
      </div>
    </section>
  );
};

export default Banner;
