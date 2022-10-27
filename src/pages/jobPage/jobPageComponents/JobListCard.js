import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
import companyLogo from "../../../assets/images/companyLogo.png";

const JobListCard = (job) => {
  const { _id, title, website, salary, address, level, type } = job.job;

  const link = `/job/${_id}`;

  return (
    <Link to={link}>
      <div className="md:flex justify-start items-center shadow-md duration-700 hover:shadow-lg gap-4 px-5 py-6 hover:border-primary border-secondary border">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
          <div className="flex justify-start md:justify-center items-center">
            <img src={companyLogo} alt="" className="w-28 h-28" />
          </div>

          <h2 className="font-bold text-xl md:text-2xl">{title}</h2>
          <p className="font-medium text-primary mb-2">{website}</p>

          <div className="flex justify-start items-center mb-2">
            <div className="flex items-start">
              <BsCurrencyDollar className="text-primary text-xl" />
            </div>
            <small>{salary}</small>
            <div className="flex items-start">
              <ImLocation2 className="ml-2 text-primary  text-xl" />
            </div>
            <small>{address}</small>
          </div>
          <div className="flex justify-start md:justify-left items-center">
            <div className="bg-pink-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
              {level}
            </div>
            <div className="bg-purple-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
              {type}
            </div>

            {/* <div className="flex md:flex-col gap-3">
                  <Link
                    to={link}
                    className="btn rounded-none bg-primary text-white hover:bg-accent md:btn-md"
                  >
                    Detail
                  </Link>
                </div> */}
          </div>
          {/* <div className="flex justify-start">
              <div className="flex items-start">
                <ImLocation2 className="text-primary mr-2 text-xl" />
              </div>
              <small className="mb-2">{address}</small>
            </div> */}
        </div>
      </div>
    </Link>
  );
};

export default JobListCard;
