import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import companyLogo from "../../../assets/images/companyLogo.png";
import { Link } from "react-router-dom";

const FeatureJobCart = ({ job: { job } }) => {
  const { title, company_link, salary, address, level, type, _id } = job || {};

  const link = `/job/${_id}`;
  return (
    <Link to={link}>
      <div className="flex flex-col sm:flex-row justify-start items-center bg-base-100 shadow hover:shadow-lg gap-4 px-5 py-6 cursor-pointer hover:border-primary border-white border hover:-translate-y-1 duration-700">
        <div className="bg-secondary p-4 py-8 text-white text-3xl h-32 w-32">
          <img src={companyLogo} alt="compnay logo" />
        </div>
        <div className="">
          <h2 className="font-bold text-xl">{title}</h2>
          <p className="font-medium text-primary mb-2">{company_link}</p>

          <div className="flex justify-start items-center mb-2">
            <BsCurrencyDollar className="text-primary mr-2" />
            <small>{salary}</small>
          </div>
          <div className="flex justify-start items-center">
            <ImLocation2 className="text-primary mr-2 text-xl" />
            <small className="mb-2">{address}</small>
          </div>
          <div className="flex gap-3 items-center mt-1">
            <div className="bg-pink-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">
              {level}
            </div>
            <div className="bg-purple-100 text-white-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">
              {type}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureJobCart;
