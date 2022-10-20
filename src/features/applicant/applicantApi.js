import { APIsSlice } from "../APIs/APIsSlice";

export const applicantApi = APIsSlice.injectEndpoints({

  tagTypes: ["applicant"],
  endpoints: (builder) => ({

    getAppliedJobList: builder.query({
      query: () => {
        return {
          url: `/api/applicant/applied-job`,
          method: "GET",
        };
      },
      providesTags: ["applicant"]
    }),
    getBookMarkJobList: builder.query({
      query: () => {
        return {
          url: `/api/applicant/bookmark-job`,
          method: "GET",
        };
      },
      providesTags: ["applicant"]
    }),
    applyJob: builder.mutation({
      query: (id) => {
        return {
          url: `/api/applicant/apply-job/${id}`,
          method: "POST",
        };
      },
    }),
    bookMarkJob: builder.mutation({
      query: (id) => {
        return {
          url: `/api/applicant/bookmark-job/${id}`,
          method: "POST",
        };
      },
    }),
    deleteSaveJob: builder.mutation({
      query: (id) => {
        return {
          url: `/api/applicant/delete-bookmark/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useGetAppliedJobListQuery , useGetBookMarkJobListQuery,  useDeleteSaveJobMutation, useApplyJobMutation, useBookMarkJobMutation } = applicantApi;
