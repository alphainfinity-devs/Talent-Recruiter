import React, { useEffect} from "react";
import PageTitleBanner from "../../../globalComponents/PageTitleBanner";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { BiNotepad } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";
import { useGetJobByIdQuery } from "../../../features/job/jobApi";
import Spinner from "../../../utils/Spinner";
import {useApplyJobMutation,useBookMarkJobMutation,useGetAppliedOrBookMarkedQuery
} from "../../../features/applicant/applicantApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const JobDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetJobByIdQuery(id);
  const job = data?.job;
  const { user } = useSelector((state) => state.auth);
  const [applyJob, {isSuccess: isApplySuccess, isError: isApplyError }] =useApplyJobMutation();
  const [bookMarkJob,{isSuccess: isBookmarkSuccess, isError: isBookmarkError}]=useBookMarkJobMutation();
  const { data:isFound } = useGetAppliedOrBookMarkedQuery(id);

  const navigate = useNavigate();
  const handleApplyJob = (id) => {
    if (user?.role === `${process.env.REACT_APP_ROLE_APPLICANT}`) {
      applyJob(id);
    } else {
      navigate("/login");
    }
  };
  const handlebookMarkJob = (id) => {
    if (user?.role === `${process.env.REACT_APP_ROLE_APPLICANT}`) {
      bookMarkJob(id);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {  

    if(isApplySuccess) {
      toast.success("Success", {
        toastId: "apply-success1",
      });
    } else if (isBookmarkSuccess) {
      toast.success("Success", {
        toastId: "bookmark-success1",
      });
    }else if (isBookmarkError ||isApplyError) {
      toast.error("Something went wrong ! Please try again", {
        toastId: "bookmark-success1",
      });
    }
  },[isBookmarkSuccess,isApplySuccess,isBookmarkError,isApplyError]);
console.log('isFound',isFound);
  return (
    <section>
      <div className="flex flex-col md:flex-col lg:flex-row gap-8 container mx-auto px-5 py-16">
        <div className="w-[100%] lg:w-[70%]">
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <PageTitleBanner title={job?.title} />
              <div className="shadow-lg p-4 mb-4 border">
                <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 gap-3">
                  {/* .......compani Logo...... */}
                  {/* <div className="flex justify-center md:justify-start items-center bg-secondary rounded">
                    <img
                      src="https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png"
                      className="w-24 p-1"
                      alt=""
                    />
                  </div> */}

                  {/* .......Basic job information........ */}
                  <div className="grid justify-items-center lg:justify-items-start">
                    <p className="text-lg font-bold ">{job?.title}</p>
                    <p className="text-sm">{job?.company_link}</p>
                    <p className="font-bold">Vacancy: {job?.vacancy}</p>
                    <p className="text-base font-bold">
                      Deadline: {job?.dead_line}
                    </p>
                  </div>

                  {/* .........apply button and deadline....... */}
          
                    <> 
                      <div className="flex justify-center  md:justify-end gap-1">

                        { 
                        //   isApplySuccess ? 
                        //     <button
                        //         className="btn rounded-none text-white bg-primary hover:bg-accent" >
                        //         Applied
                        //     </button>
                        //  :
                         (isFound?.isApplied>0 && user?.name) || isApplySuccess ?
                          <button
                              className="btn rounded-none text-white bg-primary hover:bg-accent">
                              Applied
                          </button>
                          :
                          <button
                            onClick={() => handleApplyJob(job._id)}
                            className="btn rounded-none text-white bg-primary hover:bg-accent">
                            Apply Now
                          </button>
                        }
                        {
          
                        // isBookmarkSuccess ? 
                        // <button
                        //   className="btn rounded-none text-white bg-warning hover:bg-accent">
                        //     Saved
                        // </button>  :
                        (isFound?.isBookmarked > 0  && user?.name) || isBookmarkSuccess ?
                        <button
                          className="btn rounded-none text-white bg-warning hover:bg-accent">
                            Saved
                        </button>  

                          : 
                          <button
                          onClick={() => handlebookMarkJob(job._id)}
                          className="btn rounded-none text-white bg-warning hover:bg-accent">
                          Save Now
                          </button>       
                        }
                      </div>
                    </>
                </div>
              </div>

              <div className="p-4 shadow-lg border">
                {/* .........job description.............*/}
                <p className="text-2xl font-semibold text-accent">
                  Job Description
                </p>
                <p className="py-4">{job?.description}</p>

                {/*...........Education & Experience............*/}
                <p className="text-2xl font-semibold text-accent py-4">
                  Education & Experience
                </p>
                <ul className="steps steps-vertical">
                  <li className="step step-primary " data-content="✓">
                    M.B.S / M.B.A under National University with CA course
                    complete.
                  </li>
                  <li className="step  step-primary" data-content="✓">
                    3 or more years of professional design experience
                  </li>
                  <li className="step  step-primary" data-content="✓">
                    Excellent communication skills, most notably a demonstrated
                    ability to solicit and address creative.
                  </li>
                  <li className="step  step-primary" data-content="✓">
                    3Masters of library science any Green University.
                  </li>
                  <li className="step  step-primary" data-content="✓">
                    BA/BS degree in a technical field or equivalent practical
                    experience.
                  </li>
                  <li className="step  step-primary" data-content="✓">
                    Ability to work independently and to carry out assignments
                    to completion within parameters of instructions .
                  </li>
                </ul>

                {/*.......... Responsibilities........... */}

                <p className="text-2xl font-semibold py-4">Responsibilities</p>
                <ul className="steps steps-vertical">
                  <li className="step step-primary " data-content="✓">
                    Explore and design dynamic and compelling consumer
                    experiences.
                  </li>
                  <li className="step  step-primary" data-content="✓">
                    Have sound knowledge of commercial activities.
                  </li>
                  <li className="step  step-primary" data-content="✓">
                    Build next-generation web applications with a focus on the
                    client side.
                  </li>
                  <li className="step  step-primary" data-content="✓">
                    The applicants should have experience in the following areas
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="shadow-lg w-[100%] lg:w-[30%] border">
          <div>
            <h2 className="text-accent text-2xl p-3 bg-secondary font-bold">
              Job Overview
            </h2>

            <div className="flex flex-row justify-start items-center gap-5 px-4 py-2">
              <div className="text-1xl text-primary">
                <FaMoneyCheckAlt />
              </div>
              <div className="grid justify-items-center lg:justify-items-start">
                <p className="text-lg font-bold">
                  Salary :{" "}
                  <span className="text-sm font-light">{job?.salary}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-5 px-4 py-2">
              <div className="text-1xl text-primary">
                <FaMapMarkerAlt />
              </div>
              <div className="grid justify-items-center lg:justify-items-start">
                <p className="text-lg font-bold">
                  Location :{" "}
                  <span className="text-sm font-light">{job?.address}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-5 px-4 py-2">
              <div className="ptext-4xl text-primary">
                <MdWorkOutline />
              </div>
              <div className="grid justify-items-center lg:justify-items-start">
                <p className="text-lg font-bold">
                  Job Type :{" "}
                  <span className="text-sm font-light">{job?.type} </span>
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-5 px-4 py-2">
              <div className="ptext-4xl text-primary">
                <MdCastForEducation />
              </div>
              <div className="grid justify-items-center lg:justify-items-start">
                <p className="text-lg font-bold">
                  Qualification :{" "}
                  <span className="text-sm font-light">Mba</span>
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-5 px-4 py-2">
              <div className="ptext-4xl text-primary">
                <BiNotepad />
              </div>
              <div className="grid justify-items-center lg:justify-items-start">
                <p className="text-lg font-bold">
                  Experience :{" "}
                  <span className="text-sm font-light">{job?.experience}</span>
                </p>
              </div>
            </div>

            <h2 className="text-accent text-2xl p-3 bg-secondary font-bold">
              Quick Contacts
            </h2>
            <form className=" w-full p-5">
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <div className="mb-3">
                <button className="btn text-white bg-primary hover:bg-accent rounded-none">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
