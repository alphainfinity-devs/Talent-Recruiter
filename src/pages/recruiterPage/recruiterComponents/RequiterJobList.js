import React from "react";
import { useGetOwnJobListQuery } from "../../../features/requiter/recruiterApi";
import TablePlaceholder from "../../../utils/TablePlaceholder";
import JobListRow from "./JobListRow";

const RequiterJobList = () => {
  const { data: jobs, isLoading, error } = useGetOwnJobListQuery();
  console.log("recruiter post job", jobs);
  console.log("what err",error)
  // decide what to render
  let content;
  if (isLoading && !error) {
    content = <TablePlaceholder />;
  } else if (error && !isLoading) {
    content = (
      <tr className="text-xl text-red-500 text-center">
        <td>There was an error occurred {error?.data?.errorMessage}</td>
      </tr>
    );
  } else if (!isLoading && !error && jobs?.JobByRecruiter?.length === 0) {
    content = (
      <tr>
        <td className="flex items-center justify-center text-xl text-red-400 space-y-3">
          No job found
        </td>
      </tr>
    );
  } else if (jobs?.JobByRecruiter && !isLoading && !error) {
    content = jobs.JobByRecruiter.map((job) => (
      <JobListRow key={job._id} job={job} />
    ));
  }
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen flex justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full px-15 lg:px-10">
          <div className="text-2xl font-bold mt-6">Your Jobs</div>
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Job Title</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Post Date</th>
                  <th className="py-3 px-6 text-center">Applicant</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {content}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiterJobList;
