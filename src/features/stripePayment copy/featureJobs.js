import { APIsSlice } from "../APIs/APIsSlice";
const roleHeader = {
  role: "recruiter",
};
export const featureJobs = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeatureJobs: builder.query({
      query: () => ({
        url: `/api/feature/jobs`,
        method: "GET",
      }),
    }),
    createFeatureJobs: builder.mutation({
      query: ({ job_id, payment_through }) => ({
        url: `/api/feature/jobs`,
        method: "POST",
        headers: roleHeader,
        body: { job: job_id, payment_through },
      }),
    }),
  }),
});

export const { useGetFeatureJobsQuery, useCreateFeatureJobsMutation } =
  featureJobs;
