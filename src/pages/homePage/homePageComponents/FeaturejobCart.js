import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

const FeaturejobCart = (job) => {
  const { title, website, icon, salery, location, type } = job.job;

  return (
    <div className="flex justify-start items-center bg-base-100 shadow hover:shadow-lg gap-4 px-5 py-6 cursor-pointer hover:border-primary border-white border hover:-translate-y-2 duration-700">
      <div className="bg-[tomato] p-4 py-7 text-white text-3xl">{icon}</div>
      <div className="">
        <h2 className="font-bold text-xl md:text-2xl">{title}</h2>
        <p className="font-medium text-primary mb-2">{website}</p>

        <div className="flex justify-start items-center mb-2">
          <BsCurrencyDollar className="text-primary mr-2" />
          <small>{salery}</small>
        </div>
        <div className="flex justify-start items-center">
          <ImLocation2 className="text-primary mr-2 text-xl" />
          <small className="mb-2">{location}</small>
        </div>
        <div className="flex gap-3 items-center">
          <button className="btn rounded-none  duration-700 px-4 md:px-6 py-2 bg-primary hover:bg-accent text-white font-bold">
            Apply
          </button>
          <p className="text-secondary text-sm font-bold">{type}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturejobCart;
