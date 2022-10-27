import { APIsSlice } from "../APIs/APIsSlice";

export const recruiterApi = APIsSlice.injectEndpoints({
  tagTypes: ["Recruiter"],
  endpoints: (builder) => ({

    getOwnJobList: builder.query({
      query: () => {
        return {
          url: `/api/recruiter/get-job-via-recruiter`,
          method: "GET",
        };
      },
      tagTypes: ["Recruiter"],
    }),
    getApplicantList: builder.query({
      query: (id) => {
        return {
          url: `/api/recruiter/get-applicant-via-job/${id}`,
          method: "GET",
        };
      },  
      tagTypes: ["Recruiter"],
    }),
    postJob: builder.mutation({
      query: (body) => {
        return {
          url: `/api/recruiter/post-job`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Recruiter"]
    }),
    deleteJob: builder.mutation({
      query: (id) => {
        return {
          url: `/api/recruiter/delete-job/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Recruiter"]
    }),
  }),
});

export const { usePostJobMutation , useGetOwnJobListQuery, useGetApplicantListQuery,  useDeleteJobMutation, } = recruiterApi;
