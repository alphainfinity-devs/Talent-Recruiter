import React from "react";
import howIcon from "../../../assets/images/how.svg";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAppRegistration, MdYoutubeSearchedFor } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { TbBadge } from "react-icons/tb";

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
      <p className="md:w-1/2 lg:w-1/2 p-1 mx-auto">
        TalentRecruiter is a job hunting platform where users can find the
        desired jobs. In this web application, we provide different kinds of
        jobs from multiple companies. Job seekers can post resumes, portfolios,
        and work-related profiles on many Internet job boards. Employers and
        recruiters can look through such information when searching for
        candidates to hire.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 place-items-center scroll-py-56 my-6">
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <FaUsers className="h-24 w-24 border p-2 rounded-full" />
            <h2 className="card-title">Create an Account</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers find place best.
            </p>
            <div className="card-actions justify-center my-2">
              <button className="btn btn-primary rounded-full">
                <MdOutlineAppRegistration size={22} className="mr-1" /> Sing Up
                Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <FcSearch className="h-24 w-24" />
            <h2 className="card-title">Search Jobs</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers find place best.
            </p>
            <div className="card-actions justify-center my-2">
              <button className="btn btn-primary rounded-full">
                <MdYoutubeSearchedFor size={22} className="mr-1" /> Search Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <HiOutlineBadgeCheck
              color="#1DBF73"
              className="h-24 w-24 border p-2 rounded-full"
            />
            <h2 className="card-title">Apply Job</h2>
            <p>
              Post a job to tell us about your project. We'll quickly match you
              with the right freelancers find place best.
            </p>
            <div className="card-actions justify-center my-2">
              <button className="btn btn-primary rounded-full">
                <TbBadge size={22} className="mr-1" /> Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWork;
