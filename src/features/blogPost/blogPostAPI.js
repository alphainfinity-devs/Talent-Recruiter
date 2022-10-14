import { APIsSlice } from "../APIs/APIsSlice";

export const blogPostAPI = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    // endpoints here
    getBlogPosts: builder.query({
      query: () => `/api/blogs/posts`,
      /*     async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, updateCachedData, cacheEntryRemoved },
      ) {
        try {
          await cacheDataLoaded;
        } catch (error) {
          console.log(error);
        }
      } 
      ,
      */
    }),
    addBlogPost: builder.mutation({
      query: (body) => {
        // console.log(body);
        return {
          url: `/api/blogs/add-blog`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useGetBlogPostsQuery, useAddBlogPostMutation } = blogPostAPI;
