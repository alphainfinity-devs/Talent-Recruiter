import { APIsSlice } from "../APIs/APIsSlice";

export const requiterApi = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({

    getCategory: builder.query({
      query: () => {
        return {
          url: "/api/category/all-category",
          method: "GET",
        };
      },
    })
  }),
});

export const { usePostJobMutation , usegetOwnJobListQuery,  useDeleteJobMutation, useGetCategoryQuery  } = requiterApi;
