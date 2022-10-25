import { APIsSlice } from "../APIs/APIsSlice";
const roleHeader = {
  role: "admin",
};
export const blogPostAPI = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getBlogPosts: builder.query({
      query: ({ chunkLimit=0, limit=0 }) =>
        `/api/blogs/posts?chunkLimit=${chunkLimit ? chunkLimit : 0}&limit=${
          limit ? limit : 0
        }`,
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
    //single blog post get
    getBlogPost: builder.query({
      query: ({ id }) => ({
        url: `/api/blogs/post/${id}`,
        method: "GET",
      }),
    }),
    // update the blog post
    updateBlogPost: builder.mutation({
      query: ({ id, body }) => ({
        url: `/api/blogs/update/${id}`,
        method: "PATCH",
        headers: roleHeader,
        body,
      }),
      invalidatesTags: ["blogPosts"],
    }),
  }),
});

export const {
  useGetBlogPostsQuery,
  useGetBlogPostQuery,
  useAddBlogPostMutation,
  useDeleteBlogPostMutation,
  useUpdateBlogPostMutation,
} = blogPostAPI;
