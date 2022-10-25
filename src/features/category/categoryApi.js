import { APIsSlice } from "../APIs/APIsSlice";
const roleHeader = {
  role: "admin",
};
export const categoryAPI = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "/api/category/all-category",
        method: "GET",
      }),
      providesTags: ["category"],
    }),
    addCategory: builder.mutation({
      query: ({ category, status }) => ({
        url: "/api/category/add-category",
        method: "POST",
        headers: roleHeader,
        body: { category, status },
      }),
      invalidatesTags: ["category"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/api/category/delete/${id}`,
        method: "DELETE",
        headers: roleHeader,
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = categoryAPI;
