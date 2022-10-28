import { APIsSlice } from "../APIs/APIsSlice";
const roleHeader = {
  role: "recruiter",
};
export const featureJobsSlice = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeatureJobs: builder.query({
      query: ({ page, limit }) => ({
        url: `/api/feature/jobs?page=${page}&limit=${limit}`,
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
  featureJobsSlice;
