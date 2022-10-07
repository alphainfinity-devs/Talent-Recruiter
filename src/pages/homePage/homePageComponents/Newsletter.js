import React from "react";
// bg-indigo-500
const Newsletter = () => {
  return (
    <section className="bg-primary p-10 max-w-4xl mx-auto py-16 px-5">
      <div className="flex justify-center">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe For Newsletter
            </h2>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter you Email"
              className="p-4 outline-none w-[80%]"
            />
            <button className="bg-secondary font-bold px-2 md:px-10 text-white border-2 border-white hover:bg-primary ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
