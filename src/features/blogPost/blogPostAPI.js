import { APIsSlice } from "../APIs/APIsSlice";
const roleHeader = {
  role: "admin",
};
export const blogPostAPI = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getBlogPosts: builder.query({
      query: ({ chunkLimit, limit }) =>
        `/api/blogs/posts?chunkLimit=${chunkLimit}&limit=${limit}`,
      providesTags: ["blogPosts"],
    }),
    addBlogPost: builder.mutation({
      query: (body) => ({
        url: `/api/blogs/add-blog`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["blogPosts"],
    }),
    deleteBlogPost: builder.mutation({
      query: (id) => ({
        url: `/api/blogs/delete/${id}`,
        method: "DELETE",
        headers: roleHeader,
      }),
      invalidatesTags: ["blogPosts"],
    }),
  }),
});

export const {
  useGetBlogPostsQuery,
  useAddBlogPostMutation,
  useDeleteBlogPostMutation,
} = blogPostAPI;
