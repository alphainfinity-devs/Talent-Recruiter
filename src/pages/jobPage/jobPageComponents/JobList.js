import React from "react";
import { useGetAllJobsQuery } from "../../../features/job/jobApi";
import JobListCard from "./JobListCard";

const JobList = () => {

  const {
    data: jobs,
    isLoading,
    isSuccess,
    isError,
    error
} = useGetAllJobsQuery('getJobs')

console.log(jobs);
  const featurejobs = [
    {
      _id: 1,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 2,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 3,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 4,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 5,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 6,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 7,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 8,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 9,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 10,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 11,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
    {
      _id: 12,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      img: "https://templates.envytheme.com/jubi/default/assets/images/hot-jobs/hot-jobs-6.png",
    },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto px-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {jobs.Jobs.map((job) => (
            <JobListCard key={job._id} job={job}></JobListCard>
          ))}
        </div>

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
