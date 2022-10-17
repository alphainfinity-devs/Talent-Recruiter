import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

const JobListCard = (job) => {
  const {_id, title, website, img, salary, address, level } = job.job;
  
  const link = `/job/${_id}`

  return (
    <div className="md:flex justify-start items-center shadow-md hover:shadow-lg gap-4 px-5 py-6 hover:border-primary border-secondary border">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex justify-start md:justify-center items-center">
          <img src={img} alt="" className="" />
        </div>
        <div>
          <div>
            <h2 className="font-bold text-xl md:text-2xl">{title}</h2>
            <p className="font-medium text-primary mb-2">{website}</p>

            <div className="flex justify-start items-center mb-2">
              <div className="flex items-start">
                <BsCurrencyDollar className="text-primary mr-2 text-xl" />
              </div>
              <small>{salary}</small>
            </div>
            <div className="flex justify-start">
              <div className="flex items-start">
                <ImLocation2 className="text-primary mr-2 text-xl" />
              </div>
              <small className="mb-2">{address}</small>
            </div>
            <p className="text-primary text-sm font-bold">{level}</p>
          </div>
        </div>
        <div className="flex justify-start md:justify-center items-center">
          <div className="flex md:flex-col gap-3">
            <Link
              to={link}
              className="btn rounded-none bg-primary text-white hover:bg-accent md:btn-md"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListCard;
