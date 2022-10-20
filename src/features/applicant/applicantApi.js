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
    deleteJob: builder.mutation({
      query: (id) => {
        return {
          url: `/api/applicant/delete-job/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useGetAppliedJobListQuery , useGetBookMarkJobListQuery,  useDeleteJobMutation } = applicantApi;
