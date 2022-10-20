import React from "react";
import { useGetAppliedJobListQuery } from "../../../features/applicant/applicantApi";
import Spinner from "../../../utils/Spinner";
import JobListRow from "./JobListRow"

const ApplicantAppliedJob = () => {

  const {
    data: applicant,
    isLoading,
} =useGetAppliedJobListQuery()


  return (
    <div className="overflow-x-auto">
    <div className="min-w-screen min-h-screen flex justify-center bg-gray-100 font-sans overflow-hidden">
      <div className="w-full px-15 lg:px-10">
        <div className="text-2xl font-bold mt-6">Jobs You Have Applied</div>
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Job Title</th>
                <th className="py-3 px-6 text-center">Status</th>
                <th className="py-3 px-6 text-center">Apply Time</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            {
              isLoading ? <Spinner/> :
              applicant?.appliedjobs?.map(applicant=>{

                    return <JobListRow key={applicant._id} applicant={applicant}/>

                })
            }
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ApplicantAppliedJob;
