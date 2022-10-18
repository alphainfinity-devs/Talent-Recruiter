import { APIsSlice } from "../APIs/APIsSlice";

export const requiterApi = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({

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
  }),
});

export const { usePostJobMutation } = requiterApi;
