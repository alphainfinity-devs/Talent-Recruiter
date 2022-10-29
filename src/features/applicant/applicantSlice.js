import { createSlice } from "@reduxjs/toolkit";
const applicantSlice = createSlice({
  name: "applicant",
  initialState: { "isApplied" : 0, "isBookmarked":0 },
  reducers: {
    isApplyOrBookmark: (state, action) => {
      state.isApplied = action.payload? action.payload.isApplied : 0;
      state.isBookmarked = action.payload ? action.payload.isBookmarked : 0
    },
  },
});
export const {isApplyOrBookmark} = applicantSlice.actions;
export default applicantSlice.reducer;
