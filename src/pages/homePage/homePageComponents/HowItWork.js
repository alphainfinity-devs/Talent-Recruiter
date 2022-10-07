import React from "react";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAppRegistration, MdYoutubeSearchedFor } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { TbBadge } from "react-icons/tb";

const HowItWork = () => {
  return (
    <section>
      <div className="py-10 container mx-auto p-4">
        <div className="text-center">
          <h1 className="text-3xl mb-3 font-bold text-primary">How It Works</h1>
          <p>
            TalentRecruiter is a job hunting platform where users can find the
            desired jobs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center scroll-py-56 my-6">
          <div className="card text-neutral-content">
            <div className="card-body items-center text-center">
              <FaUsers className="h-24 w-24 border p-2 rounded-full" />
              <h2 className="card-title">Create an Account</h2>
              <p>
                Post a job to tell us about your project. We'll quickly match
                you with the right freelancers find place best.
              </p>
              <div className="card-actions justify-center my-2">
                <button className="flex px-4 md:px-7 py-3 bg-primary hover:bg-transparent text-white border-primary hover:border-primary hover:text-primary font-bold border-2 hover:border-2">
                  <MdOutlineAppRegistration size={22} className="mr-1" /> Sing
                  Up Now
                </button>
              </div>
            </div>
          </div>

          <div className="card text-neutral-content">
            <div className="card-body items-center text-center">
              <FcSearch className="h-24 w-24" />
              <h2 className="card-title">Search Jobs</h2>
              <p>
                Post a job to tell us about your project. We'll quickly match
                you with the right freelancers find place best.
              </p>
              <div className="card-actions justify-center my-2">
                <button className="flex px-4 md:px-7 py-3 bg-primary hover:bg-transparent text-white border-primary hover:border-primary hover:text-primary font-bold border-2 hover:border-2">
                  <MdYoutubeSearchedFor size={22} className="mr-1" /> Search Now
                </button>
              </div>
            </div>
          </div>

          <div className="card text-neutral-content">
            <div className="card-body items-center text-center">
              <HiOutlineBadgeCheck
                color="#1DBF73"
                className="h-24 w-24 border p-2 rounded-full"
              />
              <h2 className="card-title">Apply Job</h2>
              <p className="text-natural">
                Post a job to tell us about your project. We'll quickly match
                you with the right freelancers find place best.
              </p>
              <div className="card-actions justify-center my-2">
                <button className="flex px-4 md:px-7 py-3 bg-primary hover:bg-transparent text-white border-primary hover:border-primary hover:text-primary font-bold border-2 hover:border-2">
                  <TbBadge size={22} className="mr-1" /> Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
