import { APIsSlice } from "../APIs/APIsSlice";

export const JobsApi = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: "/api/jobs",
        method: "GET",
      }),
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/api/jobs/job/${id}`,
        method: "GET",
      }),
    }),
    updateJobByAdmin: builder.mutation({
      query: ({ id, status }) => ({
        url: `/api/jobs/update-job/${id}`,
        method: "PATCH",
        body: { status },
      }),
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useUpdateJobByAdminMutation,
} = JobsApi;
