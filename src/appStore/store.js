import { configureStore } from "@reduxjs/toolkit";
import { APIsSlice } from "../features/APIs/APIsSlice";
import { applicantApi } from "../features/applicant/applicantApi";
import applicantSlice from "../features/applicant/applicantSlice";
import blogPostSlice from "../features/blogPost/blogPostSlice";
import { JobsApi } from "../features/job/jobApi";
import { recruiterApi } from "../features/requiter/recruiterApi";
import userAuthSlice from "../features/userAuth/userAuthSlice";

export const store = configureStore({
  reducer: {
    [APIsSlice.reducerPath]: APIsSlice.reducer,
    blogPost: blogPostSlice,
    auth: userAuthSlice,
    jobs:JobsApi,
    applicant:recruiterApi,
    recruiter:recruiterApi,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(APIsSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});
