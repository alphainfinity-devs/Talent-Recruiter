import { APIsSlice } from "../APIs/APIsSlice";

export const requiterApi = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({

    getOwnJobList: builder.query({
      query: () => {
        return {
          url: `/api/requiter/get-job-via-requiter`,
          method: "GET",
        };
      },
    }),
    postJob: builder.mutation({
      query: (body) => {
        // console.log(body);
        return {
          url: `/api/requiter/post-job`,
          method: "POST",
          body,
        };
      },
    }),
    deleteJob: builder.mutation({
      query: (id) => {
        return {
          url: `/api/requiter/delete-job/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { usePostJobMutation , useGetOwnJobListQuery,  useDeleteJobMutation, } = requiterApi;
