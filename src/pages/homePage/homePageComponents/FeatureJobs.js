import React from "react";
import FeatureJobCart from "./FeatureJobCart";
import { useGetFeatureJobsQuery } from "../../../features/featureJobsSlice/featureJobsSlice";

const FeatureJobs = () => {
  const { isLoading, data, error } = useGetFeatureJobsQuery({
    page: 1,
    limit: 3,
  });
  // decide what to show based on the state of the request
  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>{error?.message}</div>;
  } else if (data?.result?.length === 0) {
    content = <div>No feature jobs found</div>;
  } else if (data?.result?.length > 0) {
    content = (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.result.map((job) => (
          <FeatureJobCart key={job._id} job={job} />
        ))}
      </div>
    );
  }
  console.log(data);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
            Feature Jobs
          </h2>
          <p className="text-natural py-1 text-sm font-bold">
            Hand-picked jobs featured depending on popularity and benefits
          </p>
        </div>
        {content}
        {data?.total > 3 && (
          <div className="flex justify-center pt-16">
            <div className="btn-group gap-1">
              <button className="btn-primary border hover:marker:border-secondary btn-md text-white">
                Prev
              </button>
              <button className="btn-primary border btn-md text-white">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureJobs;
