import React from "react";
import howIcon from "../../../assets/images/how.svg";
import {FaUsers} from "react-icons/fa";

const HowItWork = () => {
  return (
    <>
      <h1 className="text-3xl mt-16 mb-5 font-bold flex justify-center items-center">
        <img
          src={howIcon}
          alt=""
          className="h-24 w-24 border p-2 rounded-full mr-2"
        />
        How It Works?
      </h1>
      <p className="w-1/2 mx-auto">
        TalentRecruiter is a job hunting platform where users can find the
        desired jobs. In this web application, we provide different kinds of
        jobs from multiple companies. Job seekers can post resumes, portfolios,
        and work-related profiles on many Internet job boards. Employers and
        recruiters can look through such information when searching for
        candidates to hire.
      </p>
      <div className="flex justify-between">
        <div>
          <div className="card w-96 bg-neutral text-neutral-content">
                      <div className="card-body items-center text-center">
                          <FaUsers/>
              <h2 className="card-title">Create an Account</h2>
              <p>We are using cookies for no reason.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>
        </div>
        <div>Create an Account</div>
        <div>Create an Account</div>
      </div>
    </>
  );
};

export default HowItWork;
