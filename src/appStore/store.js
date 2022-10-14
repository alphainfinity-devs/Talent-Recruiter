import { configureStore } from "@reduxjs/toolkit";
import { APIsSlice } from "../features/APIs/APIsSlice";
import blogPostSlice from "../features/blogPost/blogPostSlice";
import userAuthSlice from "../features/userAuth/userAuthSlice";

export const store = configureStore({
  reducer: {
    [APIsSlice.reducerPath]: APIsSlice.reducer,
    blogPost: blogPostSlice,
    auth: userAuthSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APIsSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
