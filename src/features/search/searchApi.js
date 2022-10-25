import { APIsSlice } from "../APIs/APIsSlice";

export const searchApi = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    doSearch: builder.query({
      query: ({ keyword, location, category }) => ({
        url: `/api/search/result?keyword=${keyword}&location=${location}&category=${category}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useDoSearchQuery } = searchApi;
