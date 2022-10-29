import { APIsSlice } from "../APIs/APIsSlice";
import { isApplyOrBookmark } from "./applicantSlice";

export const applicantApi = APIsSlice.injectEndpoints({

  tagTypes: ["Applicant"],
  endpoints: (builder) => ({

    getAppliedJobList: builder.query({
      query: () => {
        return {
          url: `/api/applicant/applied-job`,
          method: "GET",
        };
      },
      providesTags: ["Applicant"]
    }),
    getBookMarkJobList: builder.query({
      query: () => {
        return {
          url: `/api/applicant/bookmark-job`,
          method: "GET",
        };
      },
      providesTags: ["Applicant"]
    }),
    applyJob: builder.mutation({
      query: (id) => {
        return {
          url: `/api/applicant/apply-job/${id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Applicant"]
    }),
    bookMarkJob: builder.mutation({
      query: (id) => {
        return {
          url: `/api/applicant/bookmark-job/${id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Applicant"]
    }),
    deleteSaveJob: builder.mutation({
      query: (id) => {
        return {
          url: `/api/applicant/delete-bookmark/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Applicant"]
    }),
    getAppliedOrBookMarked: builder.query({
      query: (id) => {
        return {
          url: `/api/applicant/applied-or-bookmarked/${id}`,
          method: "GET",
        };
      },
      async onQueryStarted(body, { dispatch, getState, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(isApplyOrBookmark(result.data));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["Applicant"]
    }),
  }),
});

export const { useGetAppliedJobListQuery , useGetBookMarkJobListQuery,  useDeleteSaveJobMutation, useApplyJobMutation, useBookMarkJobMutation, useGetAppliedOrBookMarkedQuery } = applicantApi;
