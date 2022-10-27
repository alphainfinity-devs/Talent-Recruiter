import React from "react";
import { useGetApplicantListQuery } from "../../../features/requiter/recruiterApi";
import Spinner from "../../../utils/Spinner";
import { useParams } from "react-router-dom";
import ApplicantListRow from "./ApplicantListRow";

const ApplicantList = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetApplicantListQuery(id);
  // const applicant = data?.job;
console.log(data);
  return (
    <div className="overflow-x-auto">
    <div className="min-w-screen min-h-screen flex justify-center bg-gray-100 font-sans overflow-hidden">
      <div className="w-full px-15 lg:px-10">
        <div className="text-2xl font-bold mt-6">Your Jobs</div>
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Applicant Name</th>
                <th className="py-3 px-6 text-center">Email</th>
                <th className="py-3 px-6 text-center">Post Date</th>
                <th className="py-3 px-6 text-center">Applicant</th>
                <th className="py-3 px-6 text-center">View Profile</th>
              </tr>
            </thead>
            {
              isLoading ? <Spinner/> :
                data?.ApplicantByJob?.map(applicant=>{

                    return <ApplicantListRow key={applicant._id} applicant={applicant}/>

                })
            }
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ApplicantList;
