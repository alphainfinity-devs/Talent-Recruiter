import React, { useState } from "react";
import FeatureJobCart from "./FeaturejobCart";
import { useGetFeatureJobsQuery } from "../../../features/featureJobsSlice/featureJobsSlice";
import JobPlaceholder from "../../../utils/JobPlaceholder";

const FeatureJobs = () => {
  const [page, setPage] = useState(1);
  const { isLoading, data, error } = useGetFeatureJobsQuery(
    {
      page,
      limit: 6,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  console.log(page);
  // decide what to show based on the state of the request
  let content;
  if (isLoading) {
    content = <JobPlaceholder />;
  } else if (error) {
    content = (
      <div className="text-xl text-red-500 text-center">{error?.message}</div>
    );
  } else if (data?.result?.length === 0) {
    content = (
      <div className="text-xl text-yellow-300 text-center">
        No feature jobs found
      </div>
    );
  } else if (data?.result?.length > 0) {
    content = (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {data.result.map((job) => (
          <FeatureJobCart key={job._id} job={job} />
        ))}
      </div>
    );
  }
  // console.log(data);
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
        {data?.total > 6 && (
          <div className="flex justify-center pt-16">
            <div className="btn-group gap-1">
              <button
                disabled={page === 1}
                onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : 1))}
                className={`${
                  page === 1 && "cursor-not-allowed"
                } btn-primary border hover:marker:border-secondary btn-md text-white`}
              >
                Prev
              </button>
              <button
                disabled={data?.totalPage === page}
                className={`${
                  data?.totalPage === page && "cursor-not-allowed"
                } btn-primary border btn-md text-white`}
                onClick={() =>
                  setPage((prev) =>
                    prev <= 1
                      ? data?.totalPage === prev
                        ? data?.totalPage
                        : prev + 1
                      : 1
                  )
                }
              >
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
