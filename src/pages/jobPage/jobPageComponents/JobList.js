import React from "react";
import { useGetAllJobsQuery } from "../../../features/job/jobApi";
import JobPlaceholder from "../../../utils/JobPlaceholder";
import JobListCard from "./JobListCard";

const JobList = () => {
  const {
    data: jobs,
    isLoading,
    // isSuccess,
    // isError,
    // error
  } = useGetAllJobsQuery("getJobs");

  console.log(jobs);

  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        {isLoading ? (
          <JobPlaceholder />
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {jobs?.Jobs.map((job) => (
              <JobListCard key={job._id} job={job} />
            ))}
          </div>
        )}

        <div className="flex justify-center pt-16">
          <div className="btn-group gap-1">
            <button className="btn-primary active hover:marker:border-secondary btn-md text-white">
              Prev
            </button>
            <button className="btn-primary hover:bg-accent btn-md text-white">
              1
            </button>
            <button className="btn-primary hover:bg-accent btn-md text-white">
              2
            </button>
            <button className="btn-primary hover:bg-accent btn-md text-white">
              3
            </button>
            <button className="btn-primary hover:bg-accent btn-md text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobList;
